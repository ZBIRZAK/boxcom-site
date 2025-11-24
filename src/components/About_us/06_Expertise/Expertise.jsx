import ScrollButton from "../../Buttons/ScrollButton";

const Icon = ({ name }) => {
  if (name === "star")
    return (
      <div className="w-[60%] h-[60%] bg-[#ff2262] [clip-path:polygon(51%_0%,62%_29%,96%_35%,70%_58%,78%_91%,51%_75%,24%_91%,30%_58%,4%_35%,38%_29%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    );
  if (name === "eye")
    return (
      <div className="w-[60%] h-[60%] bg-[url('/images/oeil.svg')] bg-contain bg-no-repeat bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    );
  if (name === "mosaic")
    return (
      <div className="w-[60%] h-[60%] bg-[url('/images/cercle-mozaic.svg')] bg-contain bg-no-repeat bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    );
  if (name === "globe")
    return (
      <div className="w-[60%] h-[60%] bg-[url('/images/globe.png')] bg-contain bg-no-repeat bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    );
  if (name === "saga")
    return (
      <div className="w-[60%] h-[60%] bg-[url('/images/saga-africa.png')] bg-contain bg-no-repeat bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    );
  return null;
};

const Expertise = ({ data, dark = false }) => {
  const titleHtml = (data?.title || "")
    .replace("<span>", '<span class="relative inline-block text-[#ff0078] ">')
    .replace(
      "</span>",
      '<img src="/images/Design-line.gif" alt="" class="absolute !w-[500px] md:top-[-20%] top-[-10%]"/></span>'
    );

  const milestones = Object.values(data?.milestones || {});

  return (
    <section
      id="page06_screen06"
      className="relative w-full md:overflow-hidden !h-auto md:!h-screen"
    >
      {!dark && (
        <div className="absolute inset-0 z-1">
          <img
            src="/images/bg-screen6-9-3.webp"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="relative z-10 w-full py-4 md:pt-20">
        <h2
          className="hero-title2 text-center w-full "
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
      </div>

      {/* ECRAN POUR MOBILE */}
      <div className="md:hidden relative z-10 w-[92%] mx-auto pb-14 grid gap-y-8 ">
        {milestones.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[56px_1fr] gap-x-4 items-start"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute top-0 bottom-1/2 left-1/2 -translate-x-1/2 w-[3px] bg-white/35" />
              <div className="relative z-10 w-12 h-12 rounded-full bg-white">
                <Icon name={item.icon} />
              </div>
              <div className="absolute top-1/2 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-white/35" />
            </div>
            <div>
              <div className="font-extrabold text-[#ff0078] text-base mt-1">
                {item.year}
              </div>
              <div
                className="mt-2 [&_ul]:list-disc [&_ul]:list-inside !text-[#ccc] text"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
              {/* <div dangerouslySetInnerHTML={{ __html: item?.text  }} /> */}
              {/* <div>
                {item.text}
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* ECRAN POUR DESKTOP */}
      <div className="hidden md:flex relative top-[9%] justify-between items-start max-w-[1300px] mx-auto flex-wrap gap-4">
        <div className="absolute top-[17%] left-[9%] w-[82%] right-0 h-[2.5px] bg-white z-2" />
        {milestones.map((item, index) => (
          <div
            key={index}
            className="w-[19%] min-w-[200px] relative text-center z-20"
          >
            <div className="font-bold text-[#ff0078] -mt-10 mb-4 text-2xl">
              {item.year}
            </div>
            <div className="w-[95px] h-[95px] rounded-full bg-white mx-auto relative flex items-center justify-center">
              <Icon name={item.icon} />
            </div>
            <div
              className="mt-2 [&_ul]:list-disc [&_ul]:list-inside leading-6 text-start"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <ScrollButton to="page06_screen07" />
      </div>
    </section>
  );
};

export default Expertise;
