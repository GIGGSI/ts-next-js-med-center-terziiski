import React from "react";
import Header from "./Header/Header";
import OurTeamSlider from "./OurTeamSlider/OurTeamSlider";

import "./OurTeam.css";
const OurTeam = () => {
  return (
    <div className="our-team-wrapper">
      <Header />
      <OurTeamSlider />
    </div>
  );
};

export default OurTeam;
