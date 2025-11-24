"use client";

import clsx from "clsx";
import Link from "next/link";
import { formatUrl, urls } from "../../lib/urls";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Logo = ({ onClick }) => (
  <Link
    className="flex-1/2 md:flex-3/12 flex items-center px-2 md:justify-center z-[9999]"
    href={urls.homepage}
    onClick={onClick}
  >
    <img
      src="/Logos_Boxcom/logo-new-white.png"
      className="h-[50px] transition-[filter] duration-300 ease-in-out drop-shadow-md/50"
      alt="Logo BoxCom"
    />
  </Link>
);

const MenuHamburger = ({ isOpen, onClick }) => (
  <button
    className="mobile-menu-toggle cursor-pointer drop-shadow-md/50"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <div className="burger-icon w-6 h-[18px] relative cursor-pointer [&_span]:absolute [&_span]:block [&_span]:w-full [&_span]:h-[2px] [&_span]:bg-white [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out [&_span]:origin-center">
      <span
        className={clsx(
          isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
        )}
      ></span>
      <span
        className={clsx(isOpen ? "opacity-0" : "top-1/2 -translate-y-1/2")}
      ></span>
      <span
        className={clsx(
          isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
        )}
      ></span>
    </div>
  </button>
);

const NavDesktop = ({ links, activeLink, onClickLink }) => (
  <nav className="hidden flex-9/12 md:flex gap-2 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-10 items-center-safe justify-center-safe">
    {links.map((item, i) => {
      const isLast = i === links.length - 1;
      const isActive = activeLink === item.link;

      return (
        <Link
          key={i}
          href={item.link}
          className={clsx(
            "relative !no-underline",
            !isLast &&
              "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full",
            isActive && "text-[#ff0077]",
            isLast && "bg-white rounded-full py-3 px-5",
            isLast && !isActive && "text-black"
          )}
          onClick={() => onClickLink(item.link)}
        >
          {item.text}
        </Link>
      );
    })}
  </nav>
);

const NavMobile = ({ links, activeLink, onClickLink, isOpen }) => (
  <nav className="flex flex-col gap-10">
    {links.map((item, i) => (
      <Link
        key={i}
        href={item.link}
        className={clsx(activeLink === item.link ? "text-[#ff0077]" : "")}
        onClick={() => {
          onClickLink(item.link);
        }}
        tabIndex={isOpen ? 0 : -1}
        aria-current={activeLink === item.link ? "page" : undefined}
      >
        {item.text}
      </Link>
    ))}
  </nav>
);

const Header = ({ data, dark = false, transitionToDark = false }) => {
  const path = usePathname();
  const [activeLink, setActiveLink] = useState(path);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bgRef = useRef();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const links = Object.values(data.nav_menu);
  links.forEach((link) => {
    link.link = formatUrl(link.link);
  });

  useEffect(() => {
    // gsap.set(bgRef.current, {
    //   opacity: 0,
    //   // filter: "blur(15px)",
    //   backgroundColor: "#0000000000",
    // });

    // gsap.to(bgRef.current, {
    //   // backgroundColor: "#000000bb",
    //   // filter: "blur(0px)",
    //   opacity: 1,
    //   duration: 3,
    // });

    if (transitionToDark) {
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

  return (
    <header
      ref={bgRef}
      className={clsx(
        "fixed top-0 left-0 right-0 h-[70px] w-full flex justify-between z-1000",
        dark && "bg-[#000000bb]"
      )}
    >
      <Logo
        onClick={() => {
          setIsMenuOpen(false);
          setActiveLink(urls.homepage);
        }}
      />

      <NavDesktop
        links={links}
        activeLink={activeLink}
        onClickLink={setActiveLink}
      />

      <nav className="md:hidden flex-1/2 flex justify-end items-center px-2 z-[9999]">
        <MenuHamburger isOpen={isMenuOpen} onClick={toggleMenu} />
      </nav>

      <div
        className={clsx(
          "fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center invisible opacity-0 transition-opacity duration-300 ease-in-out",
          isMenuOpen && "visible opacity-100"
        )}
      >
        <NavMobile
          links={links}
          activeLink={activeLink}
          isOpen={isMenuOpen}
          onClickLink={(link) => {
            setIsMenuOpen(false);
            setActiveLink(link);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
