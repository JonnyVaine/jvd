import React from 'react';

export default function Wrapper({
  title, children, hideTitle
}) {
  return (
    <div className="wrapper container">
      {!hideTitle && <h1>{title}</h1>}
      <div className="content">
        <div className="content--inner">
          {children}
        </div>
      </div>
    </div>
  )
}