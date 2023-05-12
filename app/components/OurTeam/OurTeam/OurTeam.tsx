import React from "react";

import { ourTeamData } from "../OurTeamConstant";

import "./OurTeam.css";
import SingleDoctor from "./SingleDoctor/SingleDoctor";

const OurTeam = () => {
  return (
    <div className="our-team-component-wrapper">
      {ourTeamData.map((item: ourTeamData) => (
        <SingleDoctor title={""} key={"single-doctor" + item.id} {...item} />
      ))}
    </div>
  );
};

export default OurTeam;
