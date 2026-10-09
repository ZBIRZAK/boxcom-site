import clsx from "clsx";

function localizeListHtml(html = "", locale = "en") {
  if (locale !== "fr") return html;

  return html.replace(/\bInclude\s*:/gi, "Inclus :");
}

const TextList = ({ html, className, locale = "en" }) => {
  return (
    <ul
      className={clsx(
        "list-disc list-inside text space-y-4  mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4",
        className
      )}
      dangerouslySetInnerHTML={{ __html: localizeListHtml(html, locale) }}
    ></ul>
  );
};

export default TextList;
