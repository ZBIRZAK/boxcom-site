import Lottie from "lottie-react";
import { useDoodle } from "../../../../hooks/useDoodle";

const BooksGlobe = () => {
  const [books, booksRef, contBooksRef] = useDoodle(
    "/animations/ecran2/livres.json",
    {
      from: { opacity: 1 },
      to: {
        opacity: 1,
        yPercent: 10,
        duration: 1,
        ease: "bounce.out",
        repeat: -1,
        repeatDelay: 3,
        scrollTrigger: {
          trigger: "#page01_screen02",
          start: "top 5%",
          toggleActions: "restart none none none",
        },
      },
    }
  );

  const [globe, globeRef, contGlobeRef] = useDoodle(
    "/animations/ecran2/globe_terre.json",
    {
      from: { opacity: 1 },
      to: {
        opacity: 1,
        yPercent: 20,
        duration: 1,
        ease: "bounce.out",
        delay: 0.1,
        repeat: -1,
        repeatDelay: 3,
        scrollTrigger: {
          trigger: "#page01_screen02",
          start: "top 5%",
          toggleActions: "restart none none none",
        },
      },
    }
  );

  return (
    <div className="absolute z-2 right-[5%] md:right-[20%] bottom-[0%] max-w-[150px] md:max-w-[200px] h-[auto]">
      <div
        ref={contGlobeRef}
        className="relative -right-[15%] w-[60%] md:w-[50%] mb-[-5%]"
      >
        <Lottie animationData={globe} lottieRef={globeRef} />
      </div>

      <div ref={contBooksRef} className="w-[70%]">
        <Lottie animationData={books} lottieRef={booksRef} autoplay={false} />
      </div>
    </div>
  );
};

export default BooksGlobe;
