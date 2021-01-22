import React from 'react';

import Meta from "./Meta";
import Wrapper from "./Wrapper";

export default function Page(props) {
  const {children, title, hideTitle} = props;
  return (
    <div className="page">
      <Meta {...props} />

      <Wrapper title={title.rendered} hideTitle={hideTitle}>
        {children}
      </Wrapper>
    </div>
  )
}

Page.defaultProps = {
  hideTitle: false
}