import ScrollButton from "../../Buttons/ScrollButton";

const Welcome = ({ data }) => {
  // console.log("data");
  // console.log(data);
  return (
    <section className="relative section-dark w-full !h-auto text-center flex flex-col justify-center items-center md:p-15 py-10 px-5">
      <h1 className="hidden">{data.main_title}</h1>

      <div
        className="title text-white"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <div
        className="md:w-[70%] text"
        dangerouslySetInnerHTML={{ __html: data.text }}
      />
      <ScrollButton to="page06_screen03" />
    </section>
  );
};
export default Welcome;
