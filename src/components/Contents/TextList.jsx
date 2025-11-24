import clsx from "clsx";

const TextList = ({ html, className }) => {
  return (
    <ul
      className={clsx(
        "list-disc list-inside text space-y-4  mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-4",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    ></ul>
  );
};

export default TextList;
