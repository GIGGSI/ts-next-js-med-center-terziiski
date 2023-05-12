import React from "react";
import Link from "next/link";

import { footerAboutUsData } from "../FooterConstants";

export const FooterAboutUs = () => {
  return (
    <div>
      <p className="footer-title">За Нас</p>
      {footerAboutUsData.map((item: footerAboutUsData) => (
        <Link key={item.id} href="/">
          <p className="footer-single-item">{item.service}</p>
        </Link>
      ))}
    </div>
  );
};
