"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Books = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const books = containerRef.current?.querySelectorAll(".book");

    if (books) {
      gsap.set(books, { y: -200, opacity: 0 });

      gsap.to(books, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "bounce.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: "#page04_screen05", 
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "restart none restart none",
        //   markers: true, 
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute w-[30%] md:bottom-[2%] bottom-[-15%] md:left-0 left-10">
      <img src="/images/objects/book1.svg" alt="Books" className="book" />
      <div className="absolute w-[100%] top-[-23%] right-[5%]">
        <img src="/images/objects/book2.svg" alt="Books" className="book w-full" />
      </div>
      <div className="absolute w-[100%] top-[-55%] right-[5%]">
        <img src="/images/objects/book3.svg" alt="Books" className="book w-full" />
      </div>
      <div className="absolute w-[100%] top-[-65%] right-[5%]">
        <img src="/images/objects/book4.svg" alt="Books" className="book w-full" />
      </div>
    </div>
  );
};

export default Books;
