import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import "./SocialMedia.css";

const socialMediaData: socialMediaData[] = [
  {
    id: 1,
    icon: <FaFacebook />,
    url: "https://www.facebook.com/medicalcenterTerziyski",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/medical_center_terziyski/",
  },
];

const SocialMedia = () => {
  return (
    <div className="social-media-wrapper">
      <p className="footer-title">Блог</p>
      <p className="footer-title">Последвайте ни</p>
      <div className="social-media-container">
        {socialMediaData.map((item: socialMediaData) => (
          <a href={item.url} key={item.id} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
