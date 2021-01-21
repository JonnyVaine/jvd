import React from 'react';

export default function Meta({
  title, children
}) {
  return (
    <div className="page">
      <h1>{title}</h1>
      <div className="content">
        <div className="content--inner">
          {children}
        </div>
      </div>
    </div>
  )
}