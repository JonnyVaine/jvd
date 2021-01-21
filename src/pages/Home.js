import React from "react";
import PropTypes from 'prop-types';
import Wrapper from "../shared/Wrapper";
import ContentBlock from "../shared/ContentBlock";

export default function Home({
  title, content, acf
}) {
  return (
    <Wrapper title={title.rendered}>
      <ContentBlock>
        {content.rendered}
      </ContentBlock>

      <ContentBlock>
        {acf.second_column}
      </ContentBlock>
    </Wrapper>
  )
}