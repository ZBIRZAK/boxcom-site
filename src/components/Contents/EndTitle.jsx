import clsx from "clsx";

const EndTitle = ({ html, className }) => {
  return (
    <h3
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx("end-title", className)}
    ></h3>
  );
};

export default EndTitle;
