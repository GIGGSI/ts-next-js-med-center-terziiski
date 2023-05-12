import React from "react";

import "./SectionsHeader.css";

const SectionsHeader = ({
  title,
  content,
  subTitle,
}: {
  title: string;
  content: string;
  subTitle: string;
}) => {
  return (
    <div className="section-header-wrapper">
      <p className="section-header-title"> {title}</p>
      <h1 className="section-header-subTitle">{subTitle}</h1>
      <p className="section-header-content">{content}</p>
    </div>
  );
};

export default SectionsHeader;
