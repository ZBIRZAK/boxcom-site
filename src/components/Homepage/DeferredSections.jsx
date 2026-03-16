"use client";

import dynamic from "next/dynamic";

const StillDoubting = dynamic(() => import("./08_StillDoubting/StillDoubting"), {
  ssr: false,
});

const SayItBetter = dynamic(() => import("./09_SayItBetter/SayItBetter"), {
  ssr: false,
});

const Lately = dynamic(() => import("./11_Lately/Lately"), {
  ssr: false,
});

export default function DeferredSections({
  dataSeeForYourself,
  dataTestimonials,
  dataLately,
}) {
  return (
    <>
      <StillDoubting data={dataSeeForYourself} />
      <SayItBetter data={dataTestimonials} />
      <Lately data={dataLately} />
    </>
  );
}

