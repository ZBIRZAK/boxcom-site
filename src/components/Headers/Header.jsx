"use client";

import clsx from "clsx";
import Link from "next/link";
import { formatUrl, localizeUrl, urls } from "../../lib/urls";
import { isLanguageSwitchEnabled } from "../../lib/helpers";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { getLocaleFromPathname, normalizeLocale } from "../../lib/locale";

const Logo = ({ onClick, href, light = false, scrolled = false }) => (
  <Link
    className="flex-1/2 md:flex-3/12 flex items-center px-2 md:justify-center z-[9999] container-mobile-90"
    href={href}
    onClick={onClick}
  >
    <img
      src="/Logos_Boxcom/logo-new-white-177.webp"
      srcSet="/Logos_Boxcom/logo-new-white-177.webp 177w, /Logos_Boxcom/logo-new-white-353.webp 353w"
      sizes="(max-width: 767px) 140px, 177px"
      width={177}
      height={50}
      className={clsx(
        "h-auto w-[140px] md:w-[177px] max-w-full shrink-0 object-contain transition-[filter] duration-300 ease-in-out",
        light ? "" : "drop-shadow-md/50"
      )}
      style={
        light && !scrolled ? { filter: "brightness(0) saturate(100%)" } : undefined
      }
      alt="Logo BoxCom"
    />
  </Link>
);

const MenuHamburger = ({ isOpen, onClick, light = false, scrolled = false }) => (
  <button
    className="mobile-menu-toggle cursor-pointer drop-shadow-md/50"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <div
      className={clsx(
        "burger-icon w-6 h-[18px] relative cursor-pointer [&_span]:absolute [&_span]:block [&_span]:w-full [&_span]:h-[2px] [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out [&_span]:origin-center",
        light && !scrolled ? "[&_span]:bg-black" : "[&_span]:bg-white"
      )}
    >
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

const NavDesktop = ({
  links,
  activeLink,
  onClickLink,
  light = false,
  scrolled = false,
}) => (
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
            !light && !isLast && "text-white",
            light && !isLast && !scrolled && "text-[#666666]",
            light && !isLast && scrolled && "text-[#f0f0f0]",
            !isLast &&
              "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full",
            light &&
              !isLast &&
              !scrolled &&
              "after:bg-[#1b1b1b]",
            light &&
              !isLast &&
              scrolled &&
              "after:bg-[#ffffff]",
            !light && isActive && "text-[#ff0077]",
            light && isActive && !isLast && !scrolled && "text-[#1b1b1b] font-semibold",
            light && isActive && !isLast && scrolled && "text-[#ff0077] font-semibold",
            !light && isLast && "bg-white rounded-full py-3 px-5",
            !light && isLast && !isActive && "text-black",
            light && isLast && "bg-[#ff0062] rounded-full py-3 px-5 text-white font-semibold"
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
        className={clsx(
          "text-white",
          activeLink === item.link ? "text-[#ff0077]" : ""
        )}
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

const LanguageSwitch = ({ locale, light = false, scrolled = false }) => {
  const isFrench = locale === "fr";
  const inactiveClass = light
    ? scrolled
      ? "text-white/70"
      : "text-[#666666]"
    : "text-white/70";

  return (
    <div className="hidden md:flex items-center gap-2 pr-4 text-sm font-semibold uppercase z-[9999]">
      <Link
        href={localizeUrl(urls.homepage, "en")}
        className={clsx(!isFrench ? "text-[#ff0077]" : inactiveClass)}
      >
        EN
      </Link>
      <span className={clsx(light && !scrolled ? "text-[#666666]" : "text-white/50")}>
        /
      </span>
      <Link
        href={localizeUrl(urls.homepage, "fr")}
        className={clsx(isFrench ? "text-[#ff0077]" : inactiveClass)}
      >
        FR
      </Link>
    </div>
  );
};

const Header = ({
  data,
  dark = false,
  transitionToDark = false,
  light = false,
  locale,
}) => {
  const path = usePathname();
  const currentLocale = normalizeLocale(locale || getLocaleFromPathname(path));
  const showLanguageSwitch = isLanguageSwitchEnabled();
  const [activeLink, setActiveLink] = useState(path);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const bgRef = useRef();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const localizedProjectsUrl = localizeUrl(urls.projects, currentLocale);

  const links = Object.values(data.nav_menu).filter((link) => {
    const text = link.text?.toLowerCase().trim();
    const url = formatUrl(link.link || "", currentLocale).toLowerCase();

    if (text === "blog") return false;
    if (text === "our projects") return false;
    if (
      url === localizedProjectsUrl ||
      url.startsWith(`${localizedProjectsUrl}/`)
    ) {
      return false;
    }

    return true;
  });
  links.forEach((link) => {
    link.link = formatUrl(link.link, currentLocale);
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveLink(path);
  }, [path]);

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
        "fixed top-0 left-0 right-0 h-[70px] w-full flex justify-between z-1000 container-mobile-90 transition-colors duration-300",
        dark && "bg-[#000000bb]",
        light && !isScrolled && "text-[#1b1b1b]",
        light && isScrolled && "bg-[#111111e6] text-white"
      )}
    >
      <Logo
        href={localizeUrl(urls.homepage, currentLocale)}
        light={light}
        scrolled={isScrolled}
        onClick={() => {
          setIsMenuOpen(false);
          setActiveLink(localizeUrl(urls.homepage, currentLocale));
        }}
      />

      <NavDesktop
        links={links}
        activeLink={activeLink}
        onClickLink={setActiveLink}
        light={light}
        scrolled={isScrolled}
      />

      <nav className="md:hidden ml-auto flex justify-end items-center pr-3 z-[9999]">
        <MenuHamburger
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          light={light}
          scrolled={isScrolled}
        />
      </nav>

      {showLanguageSwitch && (
        <LanguageSwitch
          locale={currentLocale}
          light={light}
          scrolled={isScrolled}
        />
      )}

      <div
        className={clsx(
          "fixed inset-0 w-full h-dvh flex items-center justify-center invisible opacity-0 transition-opacity duration-300 ease-in-out",
          light ? "bg-[#ececec] text-[#1b1b1b]" : "bg-black text-white",
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
