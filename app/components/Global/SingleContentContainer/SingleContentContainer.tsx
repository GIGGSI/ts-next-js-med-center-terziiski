import React from "react";

import Image from "next/image";

import "./SingleContentContainer.css";

const SingleContentContainer = ({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content: string;
  imageUrl: string;
}) => {
  return (
    <div className="single-content-container">
      <div className="single-content-image-container">
        <Image
          src={imageUrl}
          alt={title}
          loading="lazy"
          width={800}
          height={500}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="single-content-wrapper">
        <p className="content-wrapper-title">{title}</p>
        <p className="content-wrapper-description">{content}</p>
      </div>
    </div>
  );
};

export default SingleContentContainer;
