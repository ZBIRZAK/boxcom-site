"use client";

import GraphicDesign from "../../components/CreativeContent/03_Graphic_Design/GraphicDesign";
import VideoProduction from "../../components/CreativeContent/04_Video_Production/VideoProduction";
// import DistributionAndRepurposing from "../../components/CreativeContent/05_Distribution_&_Repurposing/DistributionAndRepurposing";
import StoryToLife from "../../components/CreativeContent/06_StoryToLife/StoryToLife";
import { useInView } from "react-intersection-observer";

const PostLoadScreens = ({ data }) => {
  // const { ref: ref1, inView: inView1 } = useInView({
  //   triggerOnce: true, // only once
  //   rootMargin: "200px", // start mounting before it’s visible
  // });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true, // only once
    rootMargin: "200px", // start mounting before it’s visible
  });
  // const { ref: ref3, inView: inView3 } = useInView({
  //   triggerOnce: true, // only once
  //   rootMargin: "200px", // start mounting before it’s visible
  // });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true, // only once
    rootMargin: "200px", // start mounting before it’s visible
  });

  return (
    <>
      {/* <div ref={ref1}>
        {inView1 && <GraphicDesign data={data.dataGraphicDesignSection} />}
      </div> */}
      <div ref={ref2}>
        {inView2 && <VideoProduction data={data.dataVideoProductionSection} />}
      </div>
      {/* <div ref={ref3}>
        {inView3 && (
          <DistributionAndRepurposing
            data={data.dataDistributionAndRepurposingSection}
          />
        )}
      </div> */}
      <div ref={ref4}>
        {inView4 && <StoryToLife data={data.dataStoryToLifeSection} />}
      </div>
    </>
  );
};

export default PostLoadScreens;
