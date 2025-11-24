import clsx from "clsx";

const Title2 = ({ html, className }) => {
  return (
    <h3
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx("mid-title", className)}
    ></h3>
  );
};

export default Title2;
