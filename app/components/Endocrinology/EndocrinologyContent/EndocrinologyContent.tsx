import React from "react";

import SingleContentContainer from "../../Global/SingleContentContainer/SingleContentContainer";

import { endocrinologyData } from "../EndocrinologyConstant";

import "./EndocrinologyContent.css";

const EndocrinologyContent = () => {
  return (
    <div className="endocrinology-content-wrapper">
      {endocrinologyData.map((item: singleServiceData) => (
        <SingleContentContainer
          key={"endocrinology-content" + item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default EndocrinologyContent;
