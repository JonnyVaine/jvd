import React from "react";
import PropTypes from 'prop-types';

import Wrapper from "../shared/Wrapper";

export default function Contact({
  title, content
}) {
  return (
    <Wrapper title={title.rendered}>
      {content.rendered}
    </Wrapper>
  )
}