import Sparkler from "./Sparkler";

const PageSparkler = () => {
  return (
    <div className="pt-[100px] w-full md:max-w-[1280px] mx-auto">
      <div className="text-5xl font-bold mb-8">Text Sparkler</div>

      <div className="flex justify-center items-center h-screen bg-black">
        <Sparkler count={100} />
      </div>
    </div>
  );
};

export default PageSparkler;
