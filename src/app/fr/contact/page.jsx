import Faq from "../../../components/FAQ/Faq";
import Header from "../../../components/Headers/Header";
import { getContact, getHeader } from "../../../lib/BackendContents";
import { getHost } from "../../../lib/helpers";
import { localizeUrl, urls } from "../../../lib/urls";
import ContactForm from "../../contact/ContactForm";

export async function generateMetadata() {
  const host = getHost();

  return {
    title: "Contactez-nous | Boxcom",
    alternates: {
      canonical: `${host}${localizeUrl(urls.contact, "fr")}`,
      languages: {
        en: `${host}${localizeUrl(urls.contact, "en")}`,
        fr: `${host}${localizeUrl(urls.contact, "fr")}`,
      },
    },
  };
}

export default async function ContactFrPage() {
  const header = await getHeader("fr");
  const contact = await getContact("fr");

  return (
    <>
      <Header data={header} dark={true} locale="fr" />

      <div className="mx-auto w-full max-w-5xl pt-[80px] space-y-5 mb-10">
        <h1 className="text-5xl">{contact.title}</h1>
        <Faq locale="fr" />
        <ContactForm data={contact} />
      </div>
    </>
  );
}
