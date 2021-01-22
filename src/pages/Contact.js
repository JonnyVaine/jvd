import React from "react";
import PropTypes from 'prop-types';

import Page from '../shared/Page';
import ContentBlock from "../shared/ContentBlock";


export default function Contact(props) {
  const {content} = props;
  return (
    <Page {...props} >
      <ContentBlock>
        {content.rendered}
      </ContentBlock>
    </Page>
  )
}