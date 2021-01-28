import React from "react";
import PropTypes from 'prop-types';

import Page from '../shared/Page';
import ContentBlock from "../shared/ContentBlock";


export default function Contact(props) {
  const {content, _embedded, title} = props;

  const _onSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0];
    const email = e.target[0];


    const formData  = new FormData();

    formData.append(name.name, name.value);
    formData.append(email.name, email.value);


    fetch("http://www.jonnyvaine.co.uk/wp-json/contact-form-7/v1/contact-forms/154/feedback", {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      }
    );

  }
  return (
    <Page {...props} bannerImages={_embedded["wp:featuredmedia"]} bannerTitle={title.rendered}>
      <ContentBlock>
        {content.rendered}
      </ContentBlock>

      <form onSubmit={_onSubmit}>
        <input name="your-name" />
        <input name="your-email" />
        <button>Send</button>
      </form>
    </Page>
  )
}