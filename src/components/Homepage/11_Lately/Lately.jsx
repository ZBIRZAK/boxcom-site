"use client";

import Button from "../../Buttons/Button2";
import InstaFeed from "./InstaFeed";

const Lately = ({ data }) => {
  const title = data.title
    .replace(
      "<span>",
      '<span class="heading-secondary--rose relative inline-block">'
    )
    .replace(
      "</span>",
      '<img src="/images/Design-line2.gif" class="absolute top-[5%] left-[49%] -translate-x-1/2 max-w-[200px] -mt-20 block -z-10" /></span>'
    );

  return (
    <section id="page01_screen11" className="relative w-full !h-screen z-9 ">
      <img
        src="/images/bg-screen6-9-3.webp"
        className="absolute w-full h-full object-cover"
      />

      <div className="md:pt-[70px] z-10 relative">
        <h2
          className="relative z-10 heading-secondary heading-secondary--white text-center py-10"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div className="relative z-10">
        <InstaFeed />
      </div>

      <div className="relative z-10 flex justify-center">
        <Button
          dark={true}
          variant="outline"
          size="xl"
          end="arrow"
          onClick={() => {
            document.location = data.cta_link;
          }}
        >
          {data.cta_button}
        </Button>
      </div>
    </section>
  );
};

export default Lately;
