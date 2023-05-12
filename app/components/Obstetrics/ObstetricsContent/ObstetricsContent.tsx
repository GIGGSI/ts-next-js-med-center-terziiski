import React from "react";
import Image from "next/image";
import { obstetricsContentData } from "../ObstetricsConstant";

import "./ObstetricsContent.css";

const ObstetricsContent = () => {
  return (
    <div className="obstetrics-wrapper">
      <div className="obstetrics-container">
        <div className="obstetrics-content-container">
          <p className="obstetrics-title">
            БИОХИМИЧЕН СКРИНИНГ В ПЪРВИ ТРИМЕСТЪР - между 11 и 13 седмица.
          </p>
          <div>
            {obstetricsContentData.map((item: textWidthId) => (
              <p
                key={"obstetricsContentData" + item.id}
                className="obstetrics-description"
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>
        <div className="obstetrics-image-container">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/obstetrics%2FPregnant%20woman%20undergoing%20ultrasound%20.jpg?alt=media&token=9d333932-4c99-498e-8295-79d6cb5fd334"
            alt="Изработване на план за отслабване."
            loading="lazy"
            height={350}
            width={700}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ObstetricsContent;
