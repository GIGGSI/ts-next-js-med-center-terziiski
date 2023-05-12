import React from "react";

import "./Footer.css";
import LogoLine from "./LogoLine/LogoLine";
import { FooterAboutUs } from "./FooterAboutUs/FooterAboutUs";
import WorkTime from "./WorkTime/WorkTime";
import FooterServices from "./FooterServices/FooterServices";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <LogoLine />
      <div className="footer-container">
        <WorkTime />
        <FooterServices />
        <FooterAboutUs />
        <SocialMedia />
      </div>
      <p className="all-rigth-reserverd">
        @{new Date().getFullYear()} МЦ "Терзииски" - Всички права запазени!
      </p>
    </div>
  );
};

export default Footer;
