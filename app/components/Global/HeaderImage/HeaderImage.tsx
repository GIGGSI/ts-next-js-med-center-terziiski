import React from "react";
import Image from "next/image";

import "./HeaderImage.css";
const HeaderImage = ({
  imageUrl,
  imgAlt,
}: {
  imageUrl: string;
  imgAlt: string;
}) => {
  return (
    <div className="header-image-wrapper">
      <Image
        src={imageUrl}
        alt={imgAlt}
        className="lazy lazy--loaded"
        // blurDataURL={`width='500' height='500' fill=${imageUrl}`}

        blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Crect width='500' height='500' fill=${imageUrl}`}
        placeholder="blur"
        data-controller="lazyload-image"
        // priority
        loading="lazy"
        width={1400}
        height={800}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="obstetrics-circle-wrapper">
        <div className="obstetrics-circle" />
      </div>
    </div>
  );
};

export default HeaderImage;
