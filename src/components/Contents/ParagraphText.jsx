import clsx from "clsx";

const ParagraphText = ({ html, className }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx("text", className)}
    ></div>
  );
};

export default ParagraphText;
