import React from 'react';

import Meta from "./Meta";
import Wrapper from "./Wrapper";


export default function Page(props) {
  const {children, title} = props
  return (
    <div className="page">
      <Meta {...props} />

      <Wrapper title={title.rendered}>
        {children}
      </Wrapper>
    </div>
  )
}