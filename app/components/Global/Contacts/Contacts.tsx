import React from "react";
import ContactsContent from "./ContactsContent/ContactsContent";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="contacts-circle-wrapper">
        <div className="contacs-circle" />
      </div>

      <div className="contacs-wrapper">
        <p className="section-title">Контакти</p>
        <ContactsContent />
        <div className="contacts-map-wrapper"></div>
      </div>
    </div>
  );
};

export default Contacts;
