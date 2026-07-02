import Button2 from "../../Buttons/Button2";
import styles from "./OurServices.module.scss";
import ScrollButton from "../../ScrollButton/ScrollButton";
import Link from "next/link";
import { formatUrl, localizeUrl, urls } from "../../../lib/urls";
import { ExternalLink } from "lucide-react";

const serviceHelperCopy = {
  en: {
    intro: "Looking for more context before choosing a service? Visit our",
    about: "About page",
    middle: "to learn how Boxcom works, or explore the",
    blog: "Blog",
    outro:
      "for insights on digital marketing, creative content, lead generation, and web development.",
  },
  fr: {
    intro:
      "Vous souhaitez mieux comprendre notre approche avant de choisir un service ? Consultez notre",
    about: "page A Propos",
    middle: "pour decouvrir comment Boxcom travaille, ou explorez le",
    blog: "Blog",
    outro:
      "pour des insights sur le marketing digital, le contenu creatif, la generation de leads et le developpement web.",
  },
};

const africaCardCopy = {
  en: {
    eyebrow: "You have a PR project?",
    cta: "Visit Boxcom Africa",
    caption: "PR & reputation, connected to the Boxcom ecosystem",
  },
  fr: {
    eyebrow: "Vous avez un projet RP ?",
    cta: "Visitez Boxcom Africa",
    caption: "RP & reputation, connectees a l'ecosysteme Boxcom",
  },
};

function ensureImgAltAttributes(html = "") {
  return html.replace(/<img(?![^>]*\balt=)/gi, '<img alt=""');
}

function normalizeSentenceSpacing(html = "") {
  return html.replace(/([.!?])(?=[A-ZÀ-ÿ])/g, "$1 ");
}

function formatServiceDescription(html = "") {
  const normalized = normalizeSentenceSpacing(html || "");

  if (!normalized.trim()) {
    return "";
  }

  if (/<(p|ul|ol|li|br)\b/i.test(normalized)) {
    return normalized;
  }

  const paragraphs = normalized
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  if (paragraphs.length <= 1) {
    return normalized.replace(/\n/g, "<br />");
  }

  return paragraphs
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

function isExternalUrl(url = "") {
  return /^https?:\/\//i.test(url);
}

function isBoxcomAfricaService(contents = {}) {
  const haystack = `${contents.title || ""} ${contents.subtitle || ""} ${contents.link || ""}`
    .toLowerCase();

  return (
    haystack.includes("boxcom africa") ||
    haystack.includes("boxcom-africa") ||
    haystack.includes("relations presse") ||
    haystack.includes("reputation")
  );
}

function parseExternalCta(label = "") {
  const normalized = (label || "").trim();
  const spanMatch = normalized.match(/^(.*?)<span>(.*?)<\/span>$/i);

  if (!spanMatch) {
    return {
      eyebrow: "",
      main: normalized,
    };
  }

  return {
    eyebrow: spanMatch[1].trim(),
    main: spanMatch[2].trim(),
  };
}

const ExternalServiceCard = ({ contents, locale }) => {
  const href = formatUrl(contents.link, locale);
  const cta = parseExternalCta(contents.button);
  const copy = africaCardCopy[locale] || africaCardCopy.en;
  const eyebrow = cta.eyebrow || copy.eyebrow;
  const mainCta = cta.main || copy.cta;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.box} ${styles.boxAfrica}`}
    >
      <div className={styles.africaVisual}>
        <img
          src="/images/about_us/yin-yang.webp"
          alt=""
          aria-hidden="true"
          className={styles.africaVisualBg}
        />
        <div className={styles.africaVisualOverlay} />
        <div className={styles.africaGlowLine} />
        <div className={styles.africaLogoRow}>
          <div className={styles.africaLogoChip}>
            <img
              src="/Logos_Boxcom/logo-new-white-353.webp"
              alt="Boxcom"
              className={styles.africaLogoPrimary}
            />
          </div>
          <div className={styles.africaDivider} />
          <div className={`${styles.africaLogoChip} ${styles.africaLogoChipAlt}`}>
            <img
              src="/Logos_Boxcom/logo-boxcom-africa.webp"
              alt="Boxcom Africa"
              className={styles.africaLogoSecondary}
            />
          </div>
        </div>
      </div>

      <h3 className={`${styles.boxTitle} ${styles.boxAfricaTitle} title2 !text-[#ff0062]`}>
        {contents.title}
      </h3>
      <p className={`${styles.boxSubtitle} subtitle2`}>{contents.subtitle}</p>
      <div
        className={`${styles.boxDescription} text`}
        dangerouslySetInnerHTML={{
          __html: formatServiceDescription(contents.description),
        }}
      />
      <div className={styles.boxButtonRow}>
        <div className={styles.externalCtaWrap}>
          <p className={styles.externalCtaEyebrow}>{eyebrow}</p>
          <span className={styles.externalCta}>
            <span className={styles.externalCtaMain}>{mainCta}</span>
            <ExternalLink size={18} strokeWidth={2.3} />
          </span>
        </div>
      </div>
    </a>
  );
};

const Service = ({ contents, locale }) => {
  if (isBoxcomAfricaService(contents)) {
    return <ExternalServiceCard contents={contents} locale={locale} />;
  }

  return (
    <Link href={formatUrl(contents.link, locale)} className={styles.box}>
      <h3 className={`${styles.boxTitle} title2 !text-[#ff0062]`}>
        {contents.title}
      </h3>
      <p className={`${styles.boxSubtitle} subtitle2`}>{contents.subtitle}</p>
      <div
        className={`${styles.boxDescription} text`}
        dangerouslySetInnerHTML={{
          __html: formatServiceDescription(contents.description),
        }}
      />
      <div className={styles.boxButtonRow}>
        <Button2 variant="ghost" end="arrow" size="lg">
          {contents.button}
        </Button2>
      </div>
    </Link>
  );
};

const OurServices = ({ data, locale }) => {
  const values = Array.from({ length: 4 }, (_, i) => i + 1);
  const copy = serviceHelperCopy[locale] || serviceHelperCopy.en;
  // console.log({data});
  return (
    <section
      id="page01_screen06"
      className={`${styles.screen6} section-dark z-30`}
    >
      <div className="w-full max-w-[1180px]">
        <h2
          className={`hero-title2 text-center mb-3 md:mt-5 [&_span]:relative [&_span]:inline-block [&_img]:absolute [&_img]:top-[0%] [&_img]:left-[50%] [&_img]:transform [&_img]:translate-x-[-50%] [&_img]:w-[200px] [&_img]:block`}
          dangerouslySetInnerHTML={{
            __html: ensureImgAltAttributes(data.title),
          }}
        ></h2>
        <div className={styles.grid}>
          {values.map((i) => {
            const content = data.services["service_" + i];
            return <Service key={i} contents={content} locale={locale} />;
          })}
        </div>
        <p className="mx-auto mt-8 max-w-[760px] text-center text-balance text-white/85 text-base leading-7">
          {copy.intro}{" "}
          <Link
            href={localizeUrl(urls.about, locale)}
            className="underline underline-offset-4"
          >
            {copy.about}
          </Link>{" "}
          {copy.middle}{" "}
          <Link
            href={localizeUrl(urls.blog, locale)}
            className="underline underline-offset-4"
          >
            {copy.blog}
          </Link>{" "}
          {copy.outro}
        </p>
      </div>
      <div className="hidden md:block">
        <ScrollButton
          containerStyles={styles.scrollButtonContainer}
          to="page01_screen07"
          delay={0}
        />
      </div>

      {/* Ripped paper effect at the bottom of this section */}
      {/* <div className="absolute z-99999 w-full top-[-2%] left-0 right-0 pointer-events-none overflow-hidden">
        <img
          src="/images/objects/torn-papers/torn-paper-10.svg"
          alt="Torn sheet"
          className="w-full"
        />
      </div> */}
    </section>
  );
};

export default OurServices;
