import React, { useEffect, useState } from "react";

export default function FeatureImage(props) {
  const { id, size } = props;

  const [imageProps, setImageProps] = useState([]),
        [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    fetch(`https://www.jonnyvaine.co.uk/wp-json/wp/v2/media/${id}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setImageProps(result);
      setImageLoaded(true);
    });
  }, [imageLoaded]);

  const imgSrc = imageLoaded ? imageProps.media_details.sizes[size].source_url : '';

  return (
    <img src={imgSrc} />
  )
}