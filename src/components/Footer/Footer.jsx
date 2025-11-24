import { getFooter } from "../../lib/BackendContents";
import { formatUrl, urls } from "../../lib/urls";
import styles from "./Footer.module.scss";
import Link from "next/link";

function getSectionLinks(section) {
  const entries = Object.entries(section);
  const links = entries
    .filter((entry) => /^link\d$/.test(entry[0]) && entry[1]?.text)
    .map((link) => link[1]);
  return links;
}

const ListLinks = ({ links }) => (
  <ul>
    {links.map((item, i) => {
      return (
        <li key={i}>
          <Link href={formatUrl(item.link)}>{item.text}</Link>
        </li>
      );
    })}
  </ul>
);

const Footer = async () => {
  const footer = await getFooter();

  const serviceLinks = getSectionLinks(footer.service_section);
  const aboutLinks = getSectionLinks(footer.about_section);

  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.container}>
        <div className={styles.boxcomInfo}>
          <Link href={urls.homepage}>
            <img
              src="/Logos_Boxcom/logo-color-subtitle-white.png"
              alt="Boxcom Logo"
              className="w-[170px] mb-[1rem]"
            />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: footer.pitch }} />

          <div className={styles.socialIcons}>
            {footer.link_instagram && (
              <Link href={footer.link_instagram} target="_blank">
                <img
                  src="/images/social_networks/instagram.svg"
                  alt="BoxCom Instagram"
                />
              </Link>
            )}
            {footer.link_tiktok && (
              <Link href={footer.link_tiktok} target="_blank">
                <img
                  src="/images/social_networks/tiktok.svg"
                  alt="BoxCom TikTok"
                />
              </Link>
            )}
            {footer.link_youtube && (
              <Link href={footer.link_youtube} target="_blank">
                <img
                  src="/images/social_networks/youtube.svg"
                  alt="BoxCom YouTube"
                />
              </Link>
            )}
            {footer.whatsapp && (
              <Link href={footer.whatsapp} target="_blank">
                <img
                  src="/images/social_networks/whatsapp.svg"
                  alt="BoxCom WhatsApp"
                />
              </Link>
            )}
            {footer.link_facebook && (
              <Link href={footer.link_facebook} target="_blank">
                <img
                  src="/images/social_networks/facebook.svg"
                  alt="BoxCom Facebook"
                />
              </Link>
            )}
            {footer.link_linkedin && (
              <Link href={footer.link_linkedin} target="_blank">
                <img
                  src="/images/social_networks/linkedin.svg"
                  alt="BoxCom LinkedIn"
                />
              </Link>
            )}
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h4>{footer.service_section.title}</h4>
            <ListLinks links={serviceLinks} />
          </div>
          <div>
            <h4>{footer.about_section.title}</h4>
            <ListLinks links={aboutLinks} />

            <ul>
              <li className="mt-5">
                <Link
                  href={formatUrl(footer.btn_contact.link)}
                  className={styles.contactButton}
                >
                  {footer.btn_contact.text}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
