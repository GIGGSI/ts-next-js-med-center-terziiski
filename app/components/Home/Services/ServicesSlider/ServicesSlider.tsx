"use client";
import React, { useState, useEffect } from "react";

import servicesData from '../ServicesData.json'

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ServicesSlider.css";

const ServicesSlider = () => {
  return (
    <div className="services-slider-wrapper">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="services-swiper"
      >
        {servicesData.map((item) => (
          <SwiperSlide key={item.id} className="swiper-container">
            <div className="swiper-image-container">
              <Image
                src={item.iconPath}
                alt={item.title}
                className="swiper-container-image"
                width={100}
                height={100}
              />
            </div>
            <p className="swiper-container-title">{item.title}</p>
            <p className="swiper-container-content">{item.content}</p>
            <div className="button-container">
              <button
                title="Научи повче"
                className="purple-button"
                onClick={() => console.log("click from service")}
              >
                Научи повече
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
