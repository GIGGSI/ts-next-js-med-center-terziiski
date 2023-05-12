import React from "react";
import Link from "next/link";

import { servicesPagesUrls } from "../../Navbar/NavbarConstants";

const FooterServices = () => {
  return (
    <div>
      <p className="footer-title">Услуги</p>
      {servicesPagesUrls.map((item: pageUrls) => (
        <Link
          key={"footer-services" + item.id}
          href={`/services/${item.pageUrl}`}
        >
          <p className="footer-single-item">{item.pageName}</p>
        </Link>
      ))}
    </div>
  );
};

export default FooterServices;
