import React from 'react';

export default function Row(props) {
  const {children, className} = props;
  return (
    <div className={`row ${className}`}>
      {children}
    </div>
  )
}

Row.defaultProps = {
  className: ''
}