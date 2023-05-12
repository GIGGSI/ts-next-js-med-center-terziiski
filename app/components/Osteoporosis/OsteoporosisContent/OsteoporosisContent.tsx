import React from "react";

import SingleContentContainer from "../../Global/SingleContentContainer/SingleContentContainer";
import { osteoporosisData } from "../OsteoporosisConstant";

import "./OsteoporosisContent.css";

const OsteoporosisContent = () => {
  return (
    <div className="osteoporosis-content-wrapper">
      <div className="osteoporosis-container">
        {osteoporosisData.map((item: singleServiceData) => (
          <SingleContentContainer
            {...item}
            key={"osteoporosis-content" + item.id}
          />
        ))}
      </div>
      <div className="height" />
    </div>
  );
};

export default OsteoporosisContent;
