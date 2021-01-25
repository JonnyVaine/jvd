import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import ReactHtmlParser from 'react-html-parser';

export default function ContentBlock({
  children, className, tagName
}) {
  const Tag = tagName;
  const domain = 'www.jonnyvaine.co.uk';

  function transform(node) {
    // do not render any <span> tags
    if (node.type === 'tag' && node.name === 'a') {
      if(node.attribs.href.indexOf(domain) > 0) {
        const href = node.attribs.href.split(domain)[1].split('/')[1];
        const classes = node.attribs.class ? node.attribs.class : '';
        const label = node.children[0].data;

        return <Link key={label} to={`/${href}`} className={classes}>{label}</Link>
      } 
    }
  }

  return (
    <Tag className={className} >
      { ReactHtmlParser(children, {transform}) }
    </Tag>
  )
}

ContentBlock.defaultProps = {
  tagName: 'div'
}