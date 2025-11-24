import clsx from "clsx";

const Subtitle1 = ({ html, className }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx("subtitle", className)}
    ></p>
  );
};

export default Subtitle1;
