import * as cheerio from "cheerio";

const LDJsonScripts = ({ seoData }) => {
  const $ = cheerio.load(seoData || "");

  // <script type="application/ld+json">
  const ldJsons = $("script[type='application/ld+json']")
    .map((_, el) => $(el).html())
    .get();

  return (
    <>
      {ldJsons.map((jsonString, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Cheerio returns the exact JSON text; safe to inject server-side
          dangerouslySetInnerHTML={{
            __html: jsonString.replaceAll(
              process.env.BACKEND_HOST,
              process.env.FRONTEND_HOST
            ),
          }}
        />
      ))}
    </>
  );
};

export default LDJsonScripts;
