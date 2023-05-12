import React from "react";
import Image from "next/image";

import { dieteticsContent } from "../DieteticsConstants";

import "./DieteticsContent.css";

const DieteticsContent = () => {
  return (
    <div className="dietetics-content-wrapper">
      <div className="dietetic-container">
        <div className="dietetics-content">
          <p className="dietetics-content-title">
            В кои случаи необходимо да направя консултация с диетолог?
          </p>
          <p className="dietetics-content-subTitle">
            Консултацията с диетолог е препоръчителна при пациенти със:
          </p>
          <ul>
            {dieteticsContent.map((item: textWidthId) => (
              <li
                className="dietetics-content-info"
                key={"dietetics-content-info" + item.id}
              >
                {item.text}
              </li>
            ))}
          </ul>
          <p className="info">
            Целта на прегледа е да се направи оценка на здравословното състояние
            на пациента и да се изготви режим на хранене, който да отговаря на
            неговите нужди. Например режим за отслабване, спортен режим, режим
            за възстановяване след операция или прекарано заболяване.
          </p>
        </div>
        <div className="dietetics-image-container">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/dietetics%2Fdietetics.jpg?alt=media&token=500e4f41-5134-4329-984f-58bda77e1388"
            alt="Изработване на план за отслабване."
            // placeholder="blurred"
            loading="lazy"
            height={350}
            width={1000}
            style={{
              maxWidth: "90%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DieteticsContent;
