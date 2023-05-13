"use client";
import React, { useState, useEffect } from "react";

import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import "./OurTeamSlider.css";
import Image from "next/image";

const OurTeamSlider = () => {
  const [index, setIndex] = useState(0);
  const [doctorsData, setDoctorsData] = useState<ourTeamData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/team");
      const data = await response.json();

      setDoctorsData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lastIndex = doctorsData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, doctorsData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="our-team-slider-wrappe">
      <section className="section-reviews">
        <div className="section-center-reviews">
          {doctorsData.map((person, personIndex) => {
            const { id, image, content, career, doctor } = person;
            //more staff coming up
            let position = "nextSlide";

            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === doctorsData.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={`article-reviews ${position}`}>
                <div className="slider-content">
                  <h2 className="name">{doctor}</h2>
                  <h3 className="title-position">{career}</h3>
                  <div className="slider-content-container">
                    {content.map((item) => (
                      <p key={item.id}>{item.text}</p>
                    ))}
                  </div>
                </div>
                <div className="person-img-container">
                  <Image
                    src={image}
                    alt={doctor}
                    className="person-img"
                    width={300}
                    height={300}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  {/* <Image
                                        image={getImage(doctorImageSlider.gatsbyImageData)}
                                        alt={title}
                                        className="person-img"
                                    /> */}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <CgArrowLongLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <CgArrowLongRight />
      </button>
    </div>
  );
};

export default OurTeamSlider;
