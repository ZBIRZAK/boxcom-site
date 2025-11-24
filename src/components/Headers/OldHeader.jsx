"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./Header.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { formatUrl, urls } from "../../lib/urls";
import ButtonMobileMenu from "./ButtonMobileMenu";
import { clsx } from "clsx";

gsap.registerPlugin(ScrollTrigger);

const OldHeader = ({ data, dark = false }) => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(path);

  const bgRef = useRef();
  const mobileMenuRef = useRef(null);
  const menuLinksRef = useRef([]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const links = Object.values(data.nav_menu);
  links.forEach((link) => {
    link.link = formatUrl(link.link);
  });

  useEffect(() => {
    gsap.set(bgRef.current, {
      opacity: 0,
      // filter: "blur(15px)",
      backgroundColor: "#0000000000",
    });

    gsap.to(bgRef.current, {
      // backgroundColor: "#000000bb",
      // filter: "blur(0px)",
      opacity: 1,
      duration: 3,
    });

    if (dark) {
      gsap.to(bgRef.current, {
        backgroundColor: "#000000bb",
        duration: 3,
        scrollTrigger: {
          trigger: ".screen02",
          start: "top 80%",
          scrub: true,
        },
      });
    }
  }, [path]);

  return;

  return (
    <header
      className={clsx(
        "main-header",
        isScrolled && "scrolled",
        dark && "bg-[#000000bb]"
      )}
      style={{
        backgroundColor: dark ? "#000000bb" : "transparent",
        // filter: "blur(10px)",
      }}
      ref={bgRef}
    >
      <div className="header-container z-10">
        <Link
          href={urls.homepage}
          onClick={() => {
            setIsMenuOpen(false);
            setActiveLink(urls.homepage);
          }}
        >
          <img
            src="/Logos_Boxcom/logo-new-white.png"
            className="h-[50px] transition-[filter] duration-300 ease-in-out"
            alt="Logo BoxCom"
          />
        </Link>

        <div className="controls-container">
          <nav className="desktop-nav">
            {links.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className={clsx(
                  "nav-link",
                  activeLink === item.link && "active"
                )}
                onClick={() => setActiveLink(item.link)}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* <ButtonTheme /> */}

          <ButtonMobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
      </div>

      <div
        className={clsx("-z-10 mobile-menu", isMenuOpen && "open")}
        ref={mobileMenuRef}
        id="mobile-menu-nav"
      >
        <nav>
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`mobile-nav-link ${
                activeLink === item.link ? "active" : ""
              }`}
              ref={(el) => (menuLinksRef.current[i] = el)}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveLink(item.link);
              }}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-current={activeLink === item.link ? "page" : undefined}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default OldHeader;
