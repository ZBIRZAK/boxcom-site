import Faq from "../../components/FAQ/Faq";
import Header from "../../components/Headers/Header";
import { getContact, getHeader } from "../../lib/BackendContents";
import { getHost } from "../../lib/helpers";
import { localizeUrl, urls } from "../../lib/urls";
import ContactForm from "./ContactForm";
/**
 * https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/
 * https://wordpress.org/support/topic/please-help-with-rest-api-not-work/
 * @returns
 */
export async function generateMetadata() {
  const host = getHost();

  return {
    title: "Contact | Boxcom",
    alternates: {
      canonical: `${host}${localizeUrl(urls.contact, "en")}`,
      languages: {
        en: `${host}${localizeUrl(urls.contact, "en")}`,
        fr: `${host}${localizeUrl(urls.contact, "fr")}`,
      },
    },
  };
}

const ContactPage = async () => {
  const header = await getHeader("en");
  const contact = await getContact("en");

  return (
    <>
      <Header data={header} dark={true} locale="en" />

      <div className="mx-auto w-full max-w-5xl pt-[80px] space-y-5 mb-10">
        <h1 className="text-5xl">{contact.title}</h1>
        <Faq locale="en" />
        <ContactForm data={contact} />
      </div>
    </>
  );
};

export default ContactPage;
