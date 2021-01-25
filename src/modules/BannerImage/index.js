import React from "react";
import Slider from "react-slick";
import ContentBlock from "../../shared/ContentBlock";

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
        {images.map(image => {
          return (
            <div className={`${baseClass}__slide`}>
              <img src={image.url} />
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