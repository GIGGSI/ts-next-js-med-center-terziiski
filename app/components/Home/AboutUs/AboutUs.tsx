"use client";
import React from "react";
import Image from "next/image";

import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-image-container">
        <div className="circle" />

        <Image
          src="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/71943631_2447926985291047_1718042147384459264_n.webp?alt=media&token=8d8aa1f8-f827-4339-a89e-c2c987b18302"
          alt="Медицински Център Терзийски екип, д-р Яна Терзийска, д-р Бойко Терзийски."
          loading="lazy"
          width={750}
          height={200}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="about-us-content">
        <p className="section-title">Кой сме ние</p>
        <p className="about-us-paragraph">
          Грижата а здравето е фундамент, върху които човек изгражда основни
          възприятия и ценности. От правилното отношение, къоето проявяваме към
          себе си, стигаме и до правилното отражение, което показваме пред
          света. Неразривна връзва между вътрешнотп здраве и външната красота
          следват логическия път на науката и медицината.
        </p>
        <p className="about-us-paragraph">
          Медицински Център "Терзийки" обединява в себе си дългогодишния опит на
          експерти в различни здравни области, за да осигури най-добрата грижа
          на своите пациенти. Защото вярваме, че здравето е основата, върху
          която може да се разгърне пълния потенциал на всеки човек.
        </p>
        <p className="about-us-paragraph">
          Центърът разполага с най-модерната апаратура и технология, а нашите
          лекари надграждат квалификацията си в името на всичко, от което се
          нужданете.
        </p>
        <button className="purple-button" onClick={() => console.log("click")}>Научете повече</button>
      </div>
    </div>
  );
};

export default AboutUs;
