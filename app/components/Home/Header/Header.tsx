import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./Header.css";

const services = [
  {
    id: 1,
    pageUrl: "/obstetrics",
    title: "Акушерство",
  },
  {
    id: 2,
    pageUrl: "/gynecology",
    title: "гинекология",
  },
  {
    id: 3,
    pageUrl: "/osteoporosis",
    title: "остеопороза",
  },
  {
    id: 4,
    pageUrl: "/aesthetics",
    title: "естетика",
  },
];
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <p className="header-title">Вашето здраве е наш приоритет</p>
        <div className="header-sevices">
          {services.map((item) => (
            <Link
              key={item.id}
              href={`/services/${item.pageUrl}`}
              className="single-service"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="header-image">
        <div className="header-image-container">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/homepage-1.webp?alt=media&token=0508cf1e-aee5-44f3-abde-fa43cdc558ad"
            alt="Медицински Център Терзийски, красива бременна жена."
            loading="lazy"
            width={400}
            height={300}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
