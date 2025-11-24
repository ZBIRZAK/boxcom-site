import clsx from "clsx";

const ColumnContentWrapper = ({ children, id, className }) => {
  return (
    <div className={"flex justify-center md:order-1 order-2"} style={{ textAlign: "justify" }}>
      <div id={id} className={clsx("md:px-12 px-5 md:pt-[70px] pt-[30px] mb-6", className)}>
        {children}
      </div>
    </div>
  );
};

export default ColumnContentWrapper;
