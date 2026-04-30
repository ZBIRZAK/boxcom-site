import Header from "../../components/Headers/Header";
import { getHeader } from "../../lib/BackendContents";
import { getHost } from "../../lib/helpers";
import { urls } from "../../lib/urls";
import styles from "./page.module.scss";

export async function generateMetadata() {
  const host = getHost();

  return {
    title: "Privacy Policy | Boxcom",
    description:
      "Read Boxcom's Privacy Policy, including data collection, usage, retention, security, and your rights.",
    alternates: {
      canonical: `${host}${urls.privacyPolicy}`,
    },
  };
}

export default async function PrivacyPolicyPage() {
  const header = await getHeader();

  return (
    <div className={styles.page}>
      <Header data={header} dark />

      <main className={styles.container}>
        <section className={styles.hero}>
          {/* <span className={styles.kicker}>Legal</span> */}
          <h1 className={styles.title}>BOXCOM PRIVACY POLICY</h1>
          <p className={styles.meta}>
            <span className={styles.label}>Effective date:</span>{" "}
            <time dateTime="2025-05-01">May 1, 2025</time> |{" "}
            <span className={styles.label}>Last updated:</span>{" "}
            <time dateTime="2026-01-15">January 15, 2026</time>
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2>Introduction</h2>
            <p>
              Boxcom ("we," "our," or "us") is a digital marketing and PR
              agency based in Casablanca, Morocco. We are committed to
              protecting the personal data we handle in the course of our
              business activities. This Privacy Policy explains what data we
              collect, how we use it, how we protect it, and what rights you
              have over your personal data.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="who-we-are">1. Who We Are</h2>
            <p>
              Boxcom is a digital marketing and public relations agency founded
              in Casablanca in 2014. We provide services including PR, social
              media management, content creation, digital advertising, lead
              generation, WhatsApp marketing, and web development to clients in
              Morocco and internationally.
            </p>
            <p>
              In the course of our work, we process personal data in several
              capacities: as a data controller for our own internal databases,
              and as a data processor on behalf of our clients when executing
              campaigns and lead generation activities.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="what-data-we-collect">2. What Personal Data We Collect</h2>
            <p>
              Depending on the context of our relationship with you, we may
              process the following categories of personal data:
            </p>
            <ul>
              <li>
                Media and journalist contacts: name, professional email address,
                phone number, media outlet, and area of specialization (our
                proprietary database)
              </li>
              <li>
                Lead generation: names, email addresses, and phone numbers
                collected via smart forms, landing pages, and lead magnets on
                behalf of our clients, always with explicit opt-in consent
              </li>
              <li>
                WhatsApp marketing: phone numbers used for conversational
                campaigns, collected with prior consent
              </li>
              <li>
                Paid social and retargeting audiences: behavioral and interest
                data processed through Meta, TikTok, and LinkedIn advertising
                platforms, in accordance with those platforms' data policies
              </li>
              <li>
                Client and prospect contacts: name, professional email address,
                job title, company name, and phone number
              </li>
              <li>
                Community management: names and messages of individuals who
                interact with our clients' social media accounts
              </li>
              <li>
                Website visitors: IP address, browser type, pages visited, and
                cookies via our website analytics tools
              </li>
              <li>
                Job applicants: name, email, CV, and professional background
              </li>
            </ul>
            <p>
              We do not collect sensitive personal data such as health data,
              political opinions, or financial information in our standard
              business operations.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="how-we-use-data">3. How and Why We Use Your Data</h2>
            <p>We process personal data for the following purposes:</p>
            <ul>
              <li>
                Managing our media and journalist database for PR outreach on
                behalf of our clients
              </li>
              <li>
                Collecting and qualifying leads through opt-in forms and lead
                magnets on behalf of our clients. Each campaign landing page
                includes a dedicated privacy notice specific to the project,
                ensuring data subjects are fully informed at the point of
                collection. All campaigns are conducted in compliance with
                applicable regulations, including Morocco's CNDP Law 09-08, the
                EU General Data Protection Regulation (GDPR) for campaigns
                targeting individuals in the European Union, and other
                applicable local regulations depending on the target market
              </li>
              <li>
                Executing WhatsApp marketing campaigns using consented contact
                lists
              </li>
              <li>
                Running paid social, retargeting, and lookalike audience
                campaigns on behalf of our clients
              </li>
              <li>
                Managing community interactions on social media platforms on
                behalf of our clients
              </li>
              <li>
                Communicating with current and prospective clients about our
                services
              </li>
              <li>
                Managing our contractual relationships and fulfilling our
                service obligations
              </li>
              <li>
                Improving our website and understanding user behavior through
                analytics
              </li>
              <li>
                Responding to inquiries submitted through our contact form or by
                email
              </li>
              <li>
                Complying with our legal and regulatory obligations
              </li>
            </ul>
            <p>
              Our legal basis for processing personal data is generally: the
              performance of a contract, our legitimate interests as a business,
              compliance with legal obligations, or your explicit consent where
              applicable. For all lead generation activities conducted on behalf
              of clients, consent is captured at the point of collection through
              a project-specific privacy notice on each campaign landing page.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="retention">4. How Long We Retain Your Data</h2>
            <p>
              We retain personal data only for as long as necessary for the
              purpose for which it was collected:
            </p>
            <ul>
              <li>
                Media contacts: retained as long as they remain active in their
                professional role, and reviewed annually
              </li>
              <li>
                Lead generation data: retained for the duration of the client
                campaign. Each campaign operates under a project-specific
                privacy notice, and data is collected exclusively on an opt-in
                basis. Upon contract termination, data is deleted or returned to
                the client as agreed
              </li>
              <li>
                WhatsApp marketing contacts: retained only for the duration of
                the campaign, with opt-out honored immediately
              </li>
              <li>
                Client data: retained for the duration of the contract and up to
                5 years thereafter, in accordance with Moroccan legal
                requirements
              </li>
              <li>
                Prospect data: retained for up to 3 years from the last
                meaningful interaction
              </li>
              <li>Website analytics data: retained for up to 26 months</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 id="security">5. How We Store and Protect Your Data</h2>
            <p>
              We store personal data using the following platforms, all of which
              provide industry-standard security:
            </p>
            <ul>
              <li>
                Odoo: our primary CRM and business management platform, which
                stores contact and client data with encryption at rest and in
                transit (TLS/SSL)
              </li>
              <li>
                Google Workspace: used for email and document collaboration,
                with encryption in transit and at rest, and access controls
              </li>
              <li>
                Meta, TikTok, and LinkedIn advertising platforms: audience data
                processed directly within those platforms under their respective
                data processing agreements
              </li>
            </ul>
            <p>
              Access to personal data is restricted to Boxcom staff members who
              require it to perform their duties. We do not sell personal data
              to any third party.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="consent-compliance">6. Consent and Regulatory Compliance</h2>
            <p>
              Boxcom conducts lead generation and marketing campaigns for clients
              across Morocco, Africa, Europe, the Gulf, and North America.
              Depending on the target audience and geography, we apply the
              relevant data protection framework, including Morocco's Law 09-08
              (CNDP), the EU General Data Protection Regulation (GDPR), and
              other applicable local regulations. For all campaigns, data
              subjects provide free, informed, and explicit consent prior to any
              data collection, through a project-specific privacy notice attached
              to each campaign landing page. Opt-out requests are honored
              immediately and without condition.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="your-rights">7. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li>
                Right to access: you can request a copy of the personal data we
                hold about you
              </li>
              <li>
                Right to correction: you can ask us to correct any inaccurate or
                incomplete data
              </li>
              <li>
                Right to deletion: you can ask us to delete your personal data,
                subject to our legal retention obligations
              </li>
              <li>
                Right to object: you can object to us processing your data for
                direct marketing purposes
              </li>
              <li>
                Right to restrict processing: you can ask us to limit how we use
                your data in certain circumstances
              </li>
              <li>
                Right to data portability: you can request your data in a
                structured, commonly used format
              </li>
              <li>
                Right to withdraw consent: where processing is based on consent,
                you may withdraw it at any time without affecting the lawfulness
                of prior processing
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at the details
              below. We will respond within 30 days.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="breach-response">8. Data Breach Response</h2>
            <p>
              In the event of a personal data breach, Boxcom has an internal
              process to assess, contain, and notify affected parties as
              required by applicable law. Our privacy contact is responsible for
              coordinating the response and, where legally required, notifying
              the relevant supervisory authority (including the CNDP in Morocco
              or the relevant EU data protection authority) and any affected
              individuals in a timely manner.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="third-parties">9. Third Parties and Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share data with trusted
              third-party service providers (such as Odoo, Google, Meta,
              TikTok, and LinkedIn) solely to operate our business and deliver
              our services, under appropriate data processing terms. We do not
              transfer personal data outside of our operational tools without
              ensuring appropriate safeguards are in place.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="cookies">10. Cookies</h2>
            <p>
              Our website may use cookies to improve your browsing experience and
              gather analytics. You can control cookie preferences through your
              browser settings. A detailed cookie notice may be provided
              separately on our website.
            </p>
          </div>

          <div className={styles.section}>
            <h2 id="contact-officer">11. Contact and Privacy Officer</h2>
            <p>
              For any questions, requests, or concerns regarding this Privacy
              Policy or your personal data, please contact our designated
              Privacy Officer:
            </p>
            <ul>
              <li>
                <span className={styles.label}>Name:</span> Kawtar Lamali
              </li>
              <li>
                <span className={styles.label}>Role:</span> Privacy Officer,
                Boxcom
              </li>
              <li>
                <span className={styles.label}>Email:</span>{" "}
                <a href="mailto:k.lamali@box-com.com" className={styles.link}>
                  k.lamali@box-com.com
                </a>
              </li>
              <li>
                <span className={styles.label}>Address:</span> 3 Rue El Jihani,
                Quartier Racine, Casablanca, Morocco 20250
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 id="policy-updates">12. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The most
              recent version will always be available on our website at{" "}
              <a href="https://www.box-com.com/privacy-policy" className={styles.link}>
                www.box-com.com/privacy-policy
              </a>
              . We encourage you to review it periodically.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
