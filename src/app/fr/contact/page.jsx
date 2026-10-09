import Faq from "../../../components/FAQ/Faq";
import Header from "../../../components/Headers/Header";
import { getContact, getHeader } from "../../../lib/BackendContents";
import { getHost } from "../../../lib/helpers";
import { localizeUrl, urls } from "../../../lib/urls";
import ContactForm from "../../contact/ContactForm";

const pressRelationsLink =
  '<a href="https://www.boxcomafrica.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#ff0062] transition-colors hover:text-black">relations presse</a>';

function linkPressRelations(html = "") {
  return html.replace(/relations presse/i, pressRelationsLink);
}

export async function generateMetadata() {
  const host = getHost();
  const title = "Contactez-nous | Agence Digitale a Casablanca | Boxcom";
  const description =
    "Contactez Boxcom a Casablanca pour vos besoins en marketing digital, contenu creatif, generation de leads et developpement web au Maroc.";

  return {
    title,
    description,
    keywords: [
      "contact boxcom",
      "agence digitale casablanca contact",
      "contact marketing digital maroc",
      "contact developpement web maroc",
      "contact generation de leads maroc",
    ],
    alternates: {
      canonical: `${host}${localizeUrl(urls.contact, "fr")}`,
      languages: {
        en: `${host}${localizeUrl(urls.contact, "en")}`,
        fr: `${host}${localizeUrl(urls.contact, "fr")}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${host}${localizeUrl(urls.contact, "fr")}`,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function ContactFrPage() {
  const header = await getHeader("fr");
  const contact = await getContact("fr");
  const intro = linkPressRelations(contact.intro || "");

  return (
    <>
      <Header data={header} dark={true} locale="fr" />

      <div className="mx-auto w-full max-w-5xl pt-[80px] space-y-5 mb-10">
        <h1 className="text-5xl">{contact.title}</h1>
        {intro ? (
          <div className="text" dangerouslySetInnerHTML={{ __html: intro }} />
        ) : null}
        <Faq locale="fr" />
        <ContactForm data={contact} />
      </div>
    </>
  );
}
