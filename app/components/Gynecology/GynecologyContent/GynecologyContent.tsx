import React from "react";

import { gynecologyData } from "../GynecologyConstant";
import SingleContentContainer from "../../Global/SingleContentContainer/SingleContentContainer";

import "./GynecologyContent.css";

const GynecologyContent = () => {
  return (
    <div className="gynecology-content-wrapper">
      <div className="gynecology-container">
        {gynecologyData.map((item: singleServiceData) => (
          <SingleContentContainer
            {...item}
            key={"gynecology-content" + item.id}
          />
        ))}
      </div>
      <div className="height" />
    </div>
  );
};

export default GynecologyContent;
