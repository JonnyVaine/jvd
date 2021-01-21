import React from 'react';
import PropTypes from 'prop-types';


export default function ContentBlock({
  children, className, tagName
}) {
  const Tag = tagName;
  return (
    <Tag className={className} dangerouslySetInnerHTML={{__html: children}} />
  )
}

ContentBlock.defaultProps = {
  tagName: 'div'
}