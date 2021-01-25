import React from 'react';
import PropTypes from 'prop-types';
import {convertLink} from '../util/util';

import ReactHtmlParser from 'react-html-parser';

export default function ContentBlock({
  children, className, tagName
}) {
  const Tag = tagName;
  const domain = 'www.jonnyvaine.co.uk';

  // console.log(convertLink(children));

  function transform(node) {
    // do not render any <span> tags
    if (node.type === 'tag' && node.name === 'a') {
      if(node.attribs.href.indexOf(domain) > 0) {
        console.log('node', node);
        const href = node.attribs.href.split(domain)[1];
        console.log(href);
      } 
    }
  }

  console.log( ReactHtmlParser(children, {transform}));

  return (
    <Tag className={className} >
  
      {/* { ReactHtmlParser(children, [transform]) } */}
    </Tag>
  )
}

ContentBlock.defaultProps = {
  tagName: 'div'
}