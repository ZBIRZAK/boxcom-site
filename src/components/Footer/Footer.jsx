import { getFooter } from "../../lib/BackendContents";
import { formatUrl, localizeUrl, urls } from "../../lib/urls";
import styles from "./Footer.module.scss";
import Link from "next/link";

const footerTranslations = {
  fr: {
    serviceSectionTitle: "Nos Services",
    aboutSectionTitle: "À Propos",
    privacyPolicy: "Politique de Confidentialité",
    visitUs: "Venez Nous Voir",
    contactButton: "Contactez-nous",
    pitch:
      "Boxcom, agence digitale, accompagne ses clients dans la fidelisation et l'acquisition de nouveaux clients. Avec plus d'une decennie d'experience precieuse.",
    linkText: {
      home: "Accueil",
      "digital marketing": "Marketing Digital",
      "creative content": "Contenu Créatif",
      "web development": "Développement Web",
      "lead generation": "Génération de Leads",
      "about us": "À Propos de Nous",
      about: "À Propos",
      blog: "Blog",
      contact: "Contactez-nous",
      "contact us": "Contactez-nous",
      "privacy policy": "Politique de Confidentialité",
    },
  },
};

function translateFooterText(text = "", locale = "en") {
  if (locale !== "fr") return text;

  const normalized = text.trim().toLowerCase();
  return footerTranslations.fr.linkText[normalized] || text;
}

function translateFooterItem(item, locale = "en") {
  if (locale !== "fr") return item.text;

  const resolvedHref = formatUrl(item.link, locale);
  const routeLabels = {
    [localizeUrl(urls.homepage, "fr")]: "Accueil",
    [localizeUrl(urls.digitalMarketing, "fr")]: "Marketing Digital",
    [localizeUrl(urls.creativeContent, "fr")]: "Contenu Créatif",
    [localizeUrl(urls.webDevelopment, "fr")]: "Développement Web",
    [localizeUrl(urls.leadGeneration, "fr")]: "Génération de Leads",
    [localizeUrl(urls.about, "fr")]: "À Propos de Nous",
    [localizeUrl(urls.contact, "fr")]: "Contactez-nous",
    [localizeUrl(urls.privacyPolicy, "fr")]: "Politique de Confidentialité",
    [localizeUrl(urls.blog, "fr")]: "Blog",
  };

  return routeLabels[resolvedHref] || translateFooterText(item.text, locale);
}

function getSectionLinks(section) {
  const entries = Object.entries(section);
  const links = entries
    .filter((entry) => /^link\d$/.test(entry[0]) && entry[1]?.text)
    .map((link) => link[1]);
  // Filter out "Our Projects" links
  //return links;
  return links.filter((link) => {
    const normalizedText = link.text.toLowerCase().trim();
    return normalizedText !== "our projects" && normalizedText !== "pr";
  });
}

function cleanFooterPitch(pitch = "") {
  return pitch
    .replace(
      /,\s*we collaborate with prominent organizations in Morocco and globally,\s*providing exceptional PR,\s*Digital,\s*and Video services\.?/gi,
      ""
    )
    .replace(/\band\s+PR\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+,/g, ",")
    .trim();
}

function getLocalizedFooterPitch(pitch = "", locale = "en") {
  const cleanedPitch = cleanFooterPitch(pitch);

  if (locale !== "fr") return cleanedPitch;

  const englishPitchPrefix =
    "Boxcom, a digital agency, is committed to empowering clients in retaining and acquiring new customers. With over a decade of invaluable experience";

  if (!cleanedPitch) return footerTranslations.fr.pitch;

  if (cleanedPitch.startsWith(englishPitchPrefix)) {
    return footerTranslations.fr.pitch;
  }

  return cleanedPitch;
}

function formatFooterPitchMarkup(pitch = "") {
  const trimmedPitch = pitch.trim();

  if (!trimmedPitch) return "";

  const hasHtmlTag = /<[^>]+>/.test(trimmedPitch);
  return hasHtmlTag ? trimmedPitch : `<p>${trimmedPitch}</p>`;
}

function getFooterServiceLinks(links = [], locale = "en") {
  const withoutLeadGeneration = links.filter((item) => {
    const resolvedHref = formatUrl(item.link, locale);
    return (
      resolvedHref !== localizeUrl(urls.leadGeneration, "fr") &&
      resolvedHref !== localizeUrl(urls.leadGeneration, "en")
    );
  });

  return [
    ...withoutLeadGeneration,
    {
      text: "Boxcom Africa",
      link: "https://boxcom-africa.com/",
    },
  ];
}

const ListLinks = ({ links, locale }) => (
  <ul>
    {links.map((item, i) => {
      const href = formatUrl(item.link, locale);
      const isExternal = /^https?:\/\//i.test(href);

      return (
        <li key={i}>
          <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {translateFooterItem(item, locale)}
          </Link>
        </li>
      );
    })}
  </ul>
);

const Footer = async ({ locale = "en" }) => {
  const footer = await getFooter(locale);
  const cleanPitch = getLocalizedFooterPitch(footer.pitch, locale);
  const footerPitchMarkup = formatFooterPitchMarkup(cleanPitch);
  const address =
    locale === "fr"
      ? "3 Rue El Jihani, Quartier Racine, Casablanca, Maroc 20250"
      : "3 Rue El Jihani, Quartier Racine, Casablanca, Morocco 20250";
  const phoneNumber = "+212 5 22 21 99 33";
  const phoneHref = "tel:+212522219933";
  const mapHref =
    "https://www.google.com/maps/place/BOXCOM/@33.5873901,-7.6363122,17z/data=!3m1!4b1!4m6!3m5!1s0xda62d0ad638a2c1:0x5d32fe2f0cd9a876!8m2!3d33.5873901!4d-7.6363122!16s%2Fg%2F11j0jj051l?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";
  const mapEmbedSrc =
    "https://www.google.com/maps?ll=33.5873901,-7.6363122&q=BOXCOM&z=17&output=embed";

  const serviceLinks = getFooterServiceLinks(
    getSectionLinks(footer.service_section),
    locale
  );
  const aboutLinks = getSectionLinks(footer.about_section);
  const t = footerTranslations[locale] || {};
  const serviceSectionTitle =
    locale === "fr"
      ? t.serviceSectionTitle
      : footer.service_section.title;
  const aboutSectionTitle =
    locale === "fr"
      ? t.aboutSectionTitle
      : footer.about_section.title;
  const privacyPolicyLabel =
    locale === "fr" ? t.privacyPolicy : "Privacy Policy";
  const visitUsLabel = locale === "fr" ? t.visitUs : "Visit Us";
  const contactButtonLabel =
    locale === "fr"
      ? t.contactButton
      : footer.btn_contact.text;

  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.boxcomInfo}>
          <Link href={localizeUrl(urls.homepage, locale)}>
            <img
              src="/Logos_Boxcom/logo-color-subtitle-white.webp"
              alt="Boxcom Logo"
              loading="lazy"
              decoding="async"
              className={styles.brandLogo}
            />
          </Link>
          <div
            className={styles.pitch}
            dangerouslySetInnerHTML={{ __html: footerPitchMarkup }}
          />

          <div className={styles.socialIcons}>
            {footer.link_instagram && (
              <Link href={footer.link_instagram} target="_blank">
                <img
                  src="/images/social_networks/instagram.svg"
                  alt="BoxCom Instagram"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            )}
            {footer.link_tiktok && (
              <Link href={footer.link_tiktok} target="_blank">
                <img
                  src="/images/social_networks/tiktok.svg"
                  alt="BoxCom TikTok"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            )}
            {footer.link_youtube && (
              <Link href={footer.link_youtube} target="_blank">
                <img
                  src="/images/social_networks/youtube.svg"
                  alt="BoxCom YouTube"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            )}
            {footer.whatsapp && (
              <Link href={footer.whatsapp} target="_blank">
                <img
                  src="/images/social_networks/whatsapp.svg"
                  alt="BoxCom WhatsApp"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            )}
            {footer.link_facebook && (
              <Link href={footer.link_facebook} target="_blank">
                <img
                  src="/images/social_networks/facebook.svg"
                  alt="BoxCom Facebook"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            )}
            {footer.link_linkedin && (
              <Link href={footer.link_linkedin} target="_blank">
                <img
                  src="/images/social_networks/linkedin.svg"
                  alt="BoxCom LinkedIn"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            )}
          </div>
        </div>

        <div className={styles.sectionCol}>
          <h3>{serviceSectionTitle}</h3>
          <ListLinks links={serviceLinks} locale={locale} />
        </div>
        <div className={styles.sectionCol}>
          <h3>{aboutSectionTitle}</h3>
          <ListLinks links={aboutLinks} locale={locale} />

          <ul>
            <li>
              <Link href={localizeUrl(urls.privacyPolicy, locale)}>
                {privacyPolicyLabel}
              </Link>
            </li>
            <li className="mt-5">
              <Link
                href={formatUrl(footer.btn_contact.link, locale)}
                className={styles.contactButton}
              >
                {contactButtonLabel}
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.sectionCol} ${styles.addressBlock}`}>
          <h3>{visitUsLabel}</h3>
          <address className={styles.addressText}>{address}</address>
          <a href={phoneHref} className={styles.phoneText}>
            {phoneNumber}
          </a>
          <div className={styles.mapCard}>
            <iframe
              title="Boxcom office map"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            />
          </div>
          {/* <Link href={mapHref} target="_blank" className={styles.mapLink}>
            Open in Google Maps
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
