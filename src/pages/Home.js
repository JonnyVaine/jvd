import React from "react";
import PropTypes from 'prop-types';

import Page from '../shared/Page';
import ContentBlock from "../shared/ContentBlock";
import BannerImage from "../modules/BannerImage";

import Row from '../modules/Row';
import Col from '../modules/Col';

export default function Home(props) {
  const {content, acf} = props;
  return (
    <Page {...props} hideTitle={true}>

      <BannerImage images={acf.images} title={`Design <span></span> Create <span></span> Inspire`} />

      <Row>
        <Col lg="5" md="12">
          <ContentBlock tagName="h1">
            Jonny Vaine Designs
          </ContentBlock>
          <ContentBlock>
            {content.rendered}
          </ContentBlock>
        </Col>

        <Col lg="7" md="12">
          <ContentBlock>
            {acf.second_column}
          </ContentBlock>
        </Col>
      </Row>
    </Page>
  )
}