import React from "react";
import PropTypes from 'prop-types';

import Page from '../shared/Page';
import ContentBlock from "../shared/ContentBlock";

export default function Home(props) {
  const {content, acf} = props;
  return (
    <Page {...props} >
      <ContentBlock>
        {content.rendered}
      </ContentBlock>

      <ContentBlock>
        {acf.second_column}
      </ContentBlock>
    </Page>
  )
}