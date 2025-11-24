import clsx from "clsx";

const Title1 = ({ html, className }) => {
  return (
    <h2
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx("title md:block hidden text-left", className)}
    ></h2>
  );
};

export default Title1;
