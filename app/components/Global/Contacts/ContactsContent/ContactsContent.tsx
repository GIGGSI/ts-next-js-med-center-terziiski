import React from "react";

import { drTerziiska, drTerziiski } from "./ContactsContentConstants";

import "./ContactsContent.css";
import ScheduleWrapper from "./ScheduleWrapper";

const ContactsContent = () => {
  return (
    <div className="contacts-content-wrapper">
      <ScheduleWrapper title="д-р Яна Терзийска" data={drTerziiska} />
      <ScheduleWrapper title="д-р Бойко Терзийски" data={drTerziiski} />
    </div>
  );
};

export default ContactsContent;
