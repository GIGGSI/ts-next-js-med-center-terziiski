"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { servicesPagesUrls } from "./NavbarConstants";

import { MdNavigateNext } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const lastScrollTop = useRef<number>(0);
  const clickOutsideRef = useRef<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  let location: string = usePathname();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChange = () => {
    const { pageYOffset } = window;
    setHeight(pageYOffset);
    if (pageYOffset > lastScrollTop.current) {
      // downward scroll
      setIsNavbarVisible(false);
      setOpen(false);
    } else if (pageYOffset < lastScrollTop.current) {
      // upward scroll
      setIsNavbarVisible(true);
      setOpen(false);
    } // else was horizontal scroll
    lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange, { passive: true });
    return () => window.removeEventListener("scroll", handleChange);
  }, []);

  const handleClickOutside = (event: any) => {
    if (clickOutsideRef && !clickOutsideRef?.current?.contains(event?.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    let anchorTarget = document.getElementById(id);
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("contacts")?.scrollTo({
        left: 0,
        top: anchorTarget.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`${
        isNavbarVisible
          ? location !== "/"
            ? `visible navbar-with-color`
            : "visible"
          : ""
      } 
            ${height > 10 && "navbar-with-color"}`}
    >
      <div className="navbar-wrapper">
        <div className="logo-container">
          <Link href={location !== "/" ? "/" : ""}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/med-center-terziiski.appspot.com/o/logo-terziiski.png?alt=media&token=1f4b73db-d21c-419c-8092-aabbdc557d65"
              width={125}
              height={10}
              alt="Лого Медицински Център Терзийски."
              priority
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              onClick={() => location === "/" && window.scrollTo(0, 0)}
            />
          </Link>
        </div>
        <div className="nav-items" ref={clickOutsideRef}>
          <button onClick={handleOpen}>
            Услуги{" "}
            <MdNavigateNext
              className={`${
                open ? `rotate-icon navbar-icons` : "navbar-icons"
              }`}
            />
            {open ? (
              <ul className="menu">
                {servicesPagesUrls.map((item: pageUrls) => (
                  <Link
                    href={`/services/${item.pageUrl}`}
                    className="menu-item"
                    key={"navbar" + item.id}
                  >
                    {item.pageName}
                  </Link>
                ))}
              </ul>
            ) : null}
          </button>
          <Link href="/team">Екип</Link>
          <button onClick={() => scrollToSection("contacts")}>
            <span>Контакти</span>
          </button>
          <button>
            <span>Запази Час</span>
          </button>
          <button>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
