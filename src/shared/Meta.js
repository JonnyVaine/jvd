import React from "react";
import { Helmet } from "react-helmet";

export default function Meta(props) {
  const { yoast_title, yoast_meta } = props;
  return (
    <Helmet>
      <title>{yoast_title}</title>
      {yoast_meta.map((meta_value, i) => {
        return (
          <meta
            key={i}
            name={meta_value.name || meta_value.property}
            content={meta_value.content}
          />
        );
      })}
    </Helmet>
  )
}