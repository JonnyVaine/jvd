import React, {useEffect} from 'react';

import Meta from "./Meta";
import Wrapper from "./Wrapper";
import BannerImage from "../modules/BannerImage";

export default function Page(props) {
  const {children, title, bannerImages, bannerTitle, acf, hasBannerImage} = props;
  const showBanner = acf.has_banner !== '' && bannerImages.length > 0;

  console.log(props);

  useEffect(() => {
    hasBannerImage(showBanner);
  });

  return (
    <div className="page">
      <Meta {...props} />

      {showBanner && (
        <BannerImage images={bannerImages} title={bannerTitle} />
      )}

      <Wrapper title={title.rendered} hideTitle={showBanner}>
        {children}
      </Wrapper>
    </div>
  )
}

Page.defaultProps = {
  hideTitle: false,
  bannerImages: [],
  bannerTitle: ''
}