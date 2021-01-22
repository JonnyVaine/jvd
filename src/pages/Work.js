import React from "react";
import PropTypes from 'prop-types';
import Page from '../shared/Page';
import ContentBlock from "../shared/ContentBlock";


export default function Work(props) {
  const {title, content} = props;
  return (
    <Page {...props} >
      <ContentBlock>
        {content.rendered}
      </ContentBlock>
    </Page>
  )
}