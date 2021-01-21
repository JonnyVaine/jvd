import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines';

import Nav from './modules/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import Loading from "./modules/Loading";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      navItems: [],
      pages: [],
      isLoaded: false,
      showLoader: true
    };
  }

  componentDidMount () {
    const self = this;

    fetch('https://www.jonnyvaine.co.uk/wp-json/wp-api-menus/v2/menus/2')
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      self.setState({
        navItems: result.items
      });
    });


    fetch('https://www.jonnyvaine.co.uk/wp-json/wp/v2/pages')
    .then(res => res.json())
    .then(
      (result) => {
        let pages = result.slice(2);
        pages.map((page, i) => {
          if(page.slug === 'home') {
            pages.push(pages.splice(i, 1)[0]);
          }
        });

        console.log(pages);

        self.setState({
          pages: pages,
          isLoaded: true
        });

        setTimeout( () => {
          self.setState({
            showLoader: false
          });
        }, 500);
      }
    )

  }

  render() {
    const {navItems, pages, isLoaded, showLoader} = this.state;

    const componentsMap = {
      'home': Home, 
      'about': About, 
      'contact': Contact, 
      'work': Work
    };

    return (
      <Router>
        <div className="app">
          <Nav links={navItems} />

          {isLoaded && (
            <Route render={({ location }) => {
              const { pathname, key } = location;
              console.log(pathname);
              console.log(location);
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
                      {pages.map((page, i) => {
                        const ComponentName = componentsMap[page.slug];
                        const pageSlug = page.slug === 'home' ? '/' : `/${page.slug}`;

                        return(<Route
                          key={i}
                          path={pageSlug}
                          render={props => (
                            <ComponentName {...page}  />
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
      </Router>
    );
  }
}

export default App;