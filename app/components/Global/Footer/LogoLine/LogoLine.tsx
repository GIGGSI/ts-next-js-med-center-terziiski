"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import "./LogoLine.css";
const LogoLine = () => {
  let pathname: string = usePathname();

  return (
    <div className="logo-line-wrapper">
      <div className="logo-line-image-container">
        <Link href={pathname !== "/" ? "/" : ""}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/logo-terziiski.png?alt=media&token=1f4b73db-d21c-419c-8092-aabbdc557d65"
            width={200}
            height={100}
            alt="Лого Медицински Център Терзийски."
            priority
            style={{
              maxWidth: "30%",
              height: "auto",
            }}
            onClick={() => pathname === "/" && window.scrollTo(0, 0)}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoLine;
