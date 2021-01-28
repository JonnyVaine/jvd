import React from "react";
import Slider from "react-slick";
import ContentBlock from "../../shared/ContentBlock";

import './BannerImage.scss';

export default function BannerImage(props) {
  const {images, title} = props;

  const baseClass = "hero";
  const hasTitle = title !== undefined || title !== "";

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={baseClass} >
      <Slider {...settings} className={`${baseClass}__container`}>
        {images.map((image, i) => {
          const imageUrl = image.url !== undefined ? image.url : image.source_url !== undefined ? image.source_url : '';

          return (
            <div key={i} className={`${baseClass}__slide`}>
              <img src={imageUrl} loading="lazy" />
            </div>
          )
        })}
      </Slider>

      {hasTitle && ( 
        <div className={`${baseClass}__title`}>
          <ContentBlock tagName="h2">{title}</ContentBlock>
        </div>
      )}
    </div>
  );
}