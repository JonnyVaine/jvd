import React from "react";
import PropTypes from 'prop-types';

import Page from '../shared/Page';
import ContentBlock from "../shared/ContentBlock";


export default function Contact(props) {
  const {content, _embedded, title} = props;
  return (
    <Page {...props} bannerImages={_embedded["wp:featuredmedia"]} bannerTitle={title.rendered}>
      <ContentBlock>
        {content.rendered}
      </ContentBlock>
    </Page>
  )
}