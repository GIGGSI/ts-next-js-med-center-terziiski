import React from "react";
import Image from "next/image";

import "./SummarySection.css";

const SummarySection = ({
  imageUrl,
  title,
  reversed,
  subTitle,
  imgAlt,
}: {
  imageUrl: string;
  title?: string;
  reversed?: boolean;
  subTitle: string;
  imgAlt: string;
}) => {
  return (
    <div className="summary-wrapper">
      <div
        className={
          reversed
            ? "container-reversed summary-container"
            : "summary-container"
        }
      >
        <div className="summary-image-container">
          <Image
            src={imageUrl}
            alt={imgAlt}
            loading="lazy"
            height={600}
            width={600}
            style={{
              maxWidth: "90%",
              height: "auto",
            }}
          />
        </div>
        <div
          className={
            reversed ? "summary-content reversed-content" : "summary-content"
          }
        >
          <p className="summary-title">{title}</p>
          <p className="summary-subtitle">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
