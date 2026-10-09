import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defactoPressParagraph =
  '<p class="mt-3"><a href="https://www.boxcomafrica.com/en/projects/defacto" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#ff0062] transition-colors hover:text-black">Côté relations presse, découvrez aussi notre travail avec DeFacto sur Boxcom Africa.</a></p>';

function addDefactoPressLink(html = "") {
  if (!html || html.includes(defactoPressParagraph)) return html;

  return html.replace(/<p\b[^>]*>[\s\S]*?<\/p>/gi, (paragraph) =>
    /DeFacto Morocco/i.test(paragraph)
      ? `${paragraph}${defactoPressParagraph}`
      : paragraph
  );
}

const BigIdeas = ({ data, paragraphStyles, locale = "en" }) => {
  const refBigResults = useRef();
  const refBigResults2 = useRef();
  const refContents = useRef();
  const paragraph =
    locale === "fr" ? addDefactoPressLink(data.paragraph) : data.paragraph;

  useEffect(() => {
    // gsap.set(refBigResults.current, { opacity: 0, x: 500 });
    // gsap.to(refBigResults.current, {
    //   opacity: 1,
    //   x: 0,
    //   ease: "power2.inOut",
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: "#page01_screen05",
    //     start: "top 70%",
    //     end: "top 30%",
    //     // markers: true,
    //     scrub: true,
    //   },
    //   onComplete: () => {
    //     gsap.set(refBigResults2.current, { opacity: 1, scale: 1 });

    //     gsap.to(refBigResults2.current, {
    //       opacity: 0,
    //       scale: 5,
    //       duration: 2,
    //       ease: "power3.out",
    //       onComplete: () => {
    //         gsap.set(refBigResults2.current, { opacity: 0, scale: 1 });
    //       },
    //     });
    //   },
    // });
    gsap.fromTo(
      refContents.current,
      { opacity: 0, paddingTop: 50 },
      {
        opacity: 1,
        paddingTop: 0,
        duration: 2,
        scrollTrigger: {
          trigger: refContents.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart restart restart restart",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center md:order-1 order-2 md:pt-[70px] pt-[30px] mb-6">
      {/* <div className=""> */}
      <h2 className="ml-4 title !mb-0  md:block hidden">{data.title1}</h2>

        <h2
          ref={refBigResults}
          className="title ml-4 md:block hidden "
        >
          {data.title2}
        </h2>


      <div
        ref={refContents}
        className="opacity-0 space-y-3 p-5 list"
        style={{ textAlign: "justify" }}
      >
        <div
          className="subtitle"
          dangerouslySetInnerHTML={{ __html: data.intro }}
        />
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
        <p className="end-title">{data.massive_text}</p>
      </div>
      </div>
    // </div>
  );
};

export default BigIdeas;
