import React from 'react';

export default function Col(props) {
  const {children, additionalClasses, lg, md, sm} = props;
  let classes = 'col ';

  if(additionalClasses) {
    classes += additionalClasses;
  }

  if(lg) {
    classes += `col-${lg} `;
  }

  if(md) {
    classes += `m-col-${md} `;
  }

  if(sm) {
    classes += `s-col-${sm} `;
  }

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Col.defaultProps = {
}