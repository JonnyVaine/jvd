import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines';
import { Helmet } from "react-helmet";

import Nav from './modules/Nav';
import Footer from './modules/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import Loading from "./modules/Loading";

export default function App (props) {

  const [navItems, setNavItems] = useState([]),
        [navLoaded, setNavLoaded] = useState(false),
        [pageData, setPageData] = useState([]),
        [isLoaded, setIsLoaded] = useState(false),
        [showLoader, setShowLoader] = useState(true),
        [invertColours, setInvertColours] = useState(false);

  useEffect(() => {
    fetch('https://www.jonnyvaine.co.uk/wp-json/wp-api-menus/v2/menus/2')
    .then(res => res.json())
    .then((result) => {
      console.log("Set Nav Items");
      setNavItems(result.items);
      setNavLoaded(true);
    });
  }, [navLoaded]);

  const [posts, setPosts] = useState([]),
        [postsLoaded, setPostsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://www.jonnyvaine.co.uk/wp-json/wp/v2/posts?_embed")
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setPosts(result);
      setPostsLoaded(true);
    })
  }, [postsLoaded]);
    
  useEffect(() => {
    fetch('https://www.jonnyvaine.co.uk/wp-json/wp/v2/pages?_embed')
    .then(res => res.json())
    .then(
      (result) => {
        let pages = result.slice(2);
        pages.map((page, i) => {
          if(page.slug === 'home') {
            pages.push(pages.splice(i, 1)[0]);
          }
        });

        console.log("Set Pages");        
        setPageData(pages);
        setIsLoaded(true);

        setTimeout( () => {
          console.log("Set show loader");
          setShowLoader(false);
        }, 500);
      }
    );
  }, [isLoaded]);

  const componentsMap = {
    'home': Home, 
    'about': About, 
    'contact': Contact, 
    'work': Work
  };

  const hasBannerImage = (response) => {
    setInvertColours(response);
  }

  return (
    <Router>
      <Helmet>
        {isLoaded && (
          pageData.map((page, i) => {
            const {acf, _embedded} = page;
            let images = [];
            if(acf.images !== undefined && acf.images.length > 0 ) {
              images = acf.images;
            } else if (_embedded["wp:featuredmedia"] !== undefined && _embedded["wp:featuredmedia"].length > 0) {
              images = _embedded["wp:featuredmedia"];
            } else {
              images = [];
            }

            if(images.length > 0) {
              return images.map((image, i) => {
                const imageUrl = image.url !== undefined ? image.url : image.source_url !== undefined ? image.source_url : '';
                return (<link rel="preload" href={imageUrl} as="image" priority="high" key={i} /> );
              });
            }
          })
        )}
      </Helmet>
      <div className="app">
        <Nav links={navItems} invertColours={invertColours} />

        {isLoaded && (
          <Route render={({ location }) => {
            const { pathname, key } = location;
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    {pageData.map((page, i) => {
                      const ComponentName = componentsMap[page.slug];
                      const pageSlug = page.slug === 'home' ? '/' : `/${page.slug}`;

                      return(<Route
                        key={i}
                        path={pageSlug}
                        render={props => (
                          <ComponentName {...page} hasBannerImage={hasBannerImage} />
                        )}
                      />)
                    })}
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        )}

        {showLoader && ( 
          <Loading isVisible={!isLoaded} />
        )}

      </div>

      <Footer />
    </Router>
  );
}