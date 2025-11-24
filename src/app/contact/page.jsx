import Faq from "../../components/FAQ/Faq";
import Header from "../../components/Headers/Header";
import { getContact, getHeader } from "../../lib/BackendContents";
import ContactForm from "./ContactForm";
/**
 * https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/
 * https://wordpress.org/support/topic/please-help-with-rest-api-not-work/
 * @returns
 */
const ContactPage = async () => {
  const header = await getHeader();
  const contact = await getContact();

  return (
    <>
      <Header data={header} dark={true} />

      <div className="mx-auto w-full max-w-5xl pt-[80px] space-y-5 mb-10">
        <h1 className="text-5xl">{contact.title}</h1>
        <Faq />
        <ContactForm data={contact} />
      </div>
    </>
  );
};

export default ContactPage;
