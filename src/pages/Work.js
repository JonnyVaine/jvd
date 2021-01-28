import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import Page from '../shared/Page';
import ContentBlock from "../shared/ContentBlock";
import Row from "../modules/Row";
import Col from "../modules/Col";
import FeatureImage from "../modules/FeatureImage";


export default function Work(props) {
  const {title, content, _embedded} = props;
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

  return (
    <Page {...props}  bannerImages={_embedded["wp:featuredmedia"]} bannerTitle={title.rendered}>
      <ContentBlock>
        {content.rendered}
      </ContentBlock>

      <Row>
        {postsLoaded && posts.map((post, i) => {
          if(post.categories[0] === 3) {
            return (
            <Col lg="4" sm="12" key={i}>
              <div className="work__item">
                <div className="work__item__img"><FeatureImage id={post.featured_media} size="medium-thumb" /></div>
                <h3>{post.title.rendered}</h3>
              </div>
            </Col>
          )}
          
          } )}
      </Row>

    </Page>
  )
}