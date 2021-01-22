import React from 'react';
import PropTypes from 'prop-types';
import {convertLink} from '../util/util';

export default function ContentBlock({
  children, className, tagName
}) {
  const Tag = tagName;

  console.log(convertLink(children));

  return (
    <Tag className={className} dangerouslySetInnerHTML={{__html: children}} />
  )
}

ContentBlock.defaultProps = {
  tagName: 'div'
}