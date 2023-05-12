import React from "react";

import { obstetricsReviewData } from "../ObstetricsConstant";

import "./ObstetricsReview.css";
const ObstetricsReview = () => {
  return (
    <div className="dietetics-review-wrapper">
      <div className="dietetics-container">
        <div className="dietetics-review-circles">
          <div className="dietetics-review" />
          <div className="dietetics-review-2" />
        </div>
        <div className="dietetics-review-content">
          <p className="obstetrics-review-title">
            Фетална морфология - между 18 и 22 седмица
          </p>

          {obstetricsReviewData.map((item) => (
            <p
              className="obstetrics-review-description"
              key={"obstetrics-review-description" + item.id}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
      <div className="height" />
    </div>
  );
};

export default ObstetricsReview;
