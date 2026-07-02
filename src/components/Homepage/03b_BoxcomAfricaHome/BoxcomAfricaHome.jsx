import ScrollButton from "../../Buttons/ScrollButton";
import { ExternalLink } from "lucide-react";
import styles from "./BoxcomAfricaHome.module.scss";

const blockCopy = {
  en: {
    title: "TWO ENTITIES. ONE ECOSYSTEM.",
    intro:
      "As Boxcom grew, so did its vision. What started in Casablanca crossed borders.",
    boxcomLabel: "Boxcom is the Architect",
    boxcomBody:
      "Digital strategy, content, web, performance. We build the structure, the brand, the ecosystem.",
    africaLabel: "Boxcom Africa is the Amplifier",
    africaBody:
      "Press relations, reputation, influence, pan-African reach. We carry the voice of brands shaping Africa's future.",
    closing:
      "Different scopes. One intention: making your message unforgettable.",
    eyebrow: "Got a PR project?",
    cta: "Visit Boxcom Africa",
  },
  fr: {
    title: "DEUX ENTITES. UN MEME ECOSYSTEME.",
    intro:
      "A mesure que Boxcom grandissait, sa vision s'est elargie. Ce qui avait commence a Casablanca a franchi les frontieres.",
    boxcomLabel: "Boxcom",
    boxcomBody:
      "Boxcom est l'architecte : strategie digitale, contenu, web, performance. Nous construisons la structure, la marque et l'ecosysteme.",
    africaLabel: "Boxcom Africa",
    africaBody:
      "Boxcom Africa est l'amplificateur : relations presse, reputation, influence, rayonnement panafricain. Nous portons la voix des marques qui font avancer l'Afrique.",
    closing:
      "Deux perimetres differents. Une meme intention : rendre votre message inoubliable.",
    eyebrow: "Vous avez un projet RP ?",
    cta: "Visitez Boxcom Africa",
  },
};

const BoxcomAfricaHome = ({ locale = "en" }) => {
  const copy = blockCopy[locale] || blockCopy.en;

  return (
    <section id="page01_screen03b" className={`${styles.section} section-light`}>
      <div className={styles.shell}>
        <div className={styles.headerBlock}>
          <h2 className={`${styles.kicker} hero-title2`}>{copy.title}</h2>
          <p className={styles.intro}>{copy.intro}</p>
        </div>

        <div className={styles.stage}>
          <article className={`${styles.sideCard} ${styles.sideCardPrimary}`}>
            <div className={styles.logoContainer}>
              <img
                src="/Logos_Boxcom/logo-new-white-353.webp"
                alt="Boxcom"
                className={styles.sideLogo}
              />
            </div>
            <p className={styles.entityLabel}>{copy.boxcomLabel}</p>
            <p className={styles.entityBody}>{copy.boxcomBody}</p>
          </article>

          <div className={styles.centerColumn}>
            <div className={styles.visualFrame}>
              <img
                src="/images/about_us/yin-yang.webp"
                alt=""
                aria-hidden="true"
                className={styles.visualBg}
              />
              <div className={styles.visualOverlay} />
              <img
                src="/images/about_us/girl2.webp"
                alt=""
                aria-hidden="true"
                className={styles.visualGirl}
              />
              <img
                src="/images/texts/subscribe-without-text.svg"
                alt=""
                aria-hidden="true"
                className={`${styles.doodle} ${styles.doodleSubscribe}`}
              />
              <img
                src="/images/objects/magnifier.svg"
                alt=""
                aria-hidden="true"
                className={`${styles.doodle} ${styles.doodleMagnifier}`}
              />
              <img
                src="/images/objects/speaker.svg"
                alt=""
                aria-hidden="true"
                className={`${styles.doodle} ${styles.doodleSpeaker}`}
              />
              <img
                src="/images/objects/crown.svg"
                alt=""
                aria-hidden="true"
                className={`${styles.doodle} ${styles.doodleCrown}`}
              />
              <div className={styles.horizonLine} />
            </div>
          </div>

          <article className={`${styles.sideCard} ${styles.sideCardSecondary}`}>
            <div className={`${styles.logoContainer} ${styles.logoContainerAlt}`}>
              <img
                src="/Logos_Boxcom/logo-boxcom-africa.webp"
                alt="Boxcom Africa"
                className={`${styles.sideLogo} ${styles.sideLogoAlt}`}
              />
            </div>
            <p className={styles.entityLabel}>{copy.africaLabel}</p>
            <p className={styles.entityBody}>{copy.africaBody}</p>
          </article>

          <div className={styles.closingWrap}>
            <span className={styles.closingAccent} aria-hidden="true" />
            <p className={styles.closing}>{copy.closing}</p>
          </div>
        </div>

        <div className={styles.ctaBand}>
          <div className={styles.ctaCopy}>
            <p className={styles.ctaEyebrow}>{copy.eyebrow}</p>
          </div>
          <a
            href="https://boxcom-africa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span>{copy.cta}</span>
            <ExternalLink size={18} strokeWidth={2.3} />
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <ScrollButton to="page01_screen04" />
      </div>
    </section>
  );
};

export default BoxcomAfricaHome;
