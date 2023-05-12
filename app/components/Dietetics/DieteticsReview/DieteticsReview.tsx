import React from "react";

import { dieteticsReviewData } from "../DieteticsConstants";

import "./DieteticsReview.css";

const DieteticsReview = () => {
  return (
    <div className="dietetics-review-wrapper">
      <div className="dietetics-container">
        <div className="dietetics-review-circles">
          <div className="dietetics-review" />
          <div className="dietetics-review-2" />
        </div>
        <div className="dietetics-review-content">
          <p className="dietetics-review-title">
            По време на прегледа се използва японски професионален телесен
            анализатор Tanita BC-545N, който дава надежни и точни резултати
            относно всички необходими параметри за първоначална диагностика на
            Вашето състояние:
          </p>
          <ul>
            {dieteticsReviewData.map((item: textWidthId) => (
              <li className="" key={"dietetics-review" + item.id}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="height" />
    </div>
  );
};

export default DieteticsReview;
