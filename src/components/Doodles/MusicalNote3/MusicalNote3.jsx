"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// gsap.registerPlugin(MotionPathPlugin);

// const MusicalNote3 = () => {
//   const mainNoteRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Main note animation (pop in + vibration)
//     gsap.fromTo(
//       mainNoteRef.current,
//       { scale: 0, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.6,
//         rotate: 5,
//         delay: 5,
//         ease: "back.out(2)",
//         onComplete: () => {
//           const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
//           tl.to(mainNoteRef.current, {
//             x: 3,
//             rotate: -5,
//             duration: 0.1,
//             yoyo: true,
//             repeat: 15,
//           });

//           tl.to(mainNoteRef.current, {
//             x: 0,
//             rotate: 0,
//             duration: 0.5,
//           });
//         },
//       }
//     );

//     // Base zigzag path (upward)
//     const basePath = [
//       { x: 0, y: 0 },
//       // { x: -20, y: -50 },
//       { x: 20, y: -100 },
//       { x: -15, y: -150 },
//       { x: 10, y: -200 },
//     ];

//     // Function to create floating notes with variation
//     const createFloatingNote = () => {
//       const numRays = 2;
//       for (let i = 0; i < numRays; i++) {
//         const note = document.createElement("img");
//         note.src = "/images/notes/musical_note_3.svg";
//         note.className = "absolute w-[1.5%]";
//         if (!containerRef.current) {
//           continue;
//         }
//         containerRef.current?.appendChild(note);

//         // Position new note at main note position
//         const mainBounds = mainNoteRef.current.getBoundingClientRect();
//         const containerBounds = containerRef.current.getBoundingClientRect();
//         note.style.left =
//           mainBounds.left - containerBounds.left + mainBounds.width / 2 + "px";
//         note.style.top = mainBounds.top - containerBounds.top + "px";
//         note.style.opacity = 0.5;

//         // Clone path with a sideways offset (spread like rays)
//         const offsetX = (i - Math.floor(numRays / 2)) * 25; // spread horizontally
//         const customPath = basePath.map((p) => ({
//           x: p.x + offsetX,
//           y: p.y + (Math.random() * 20 - 10), // small random vertical wobble
//         }));

//         // Animate along the custom path
//         gsap.to(note, {
//           duration: 4 + Math.random() * 2,
//           ease: "power1.inOut",
//           // delay:5.5,
//           motionPath: {
//             path: customPath,
//             curviness: 1.5,
//           },
//           opacity: 0,
//           rotation: Math.random() * 60 - 30,
//           scale: 0.8 + Math.random() * 0.5,
//           onComplete: () => {
//             note.remove();
//           },
//         });
//       }
//     };
//     let interval;
//     gsap.delayedCall(5.5, () => {
//       interval = setInterval(createFloatingNote, 1200);
//       containerRef.current._noteInterval = interval;
//     });
//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-screen overflow-hidden"
//     >
//       <div
//         ref={mainNoteRef}
//         className=" opacity-0 absolute md:w-[2%] w-[5%] md:top-[50%] md:left-[17%] right-[19%] top-[28%]"
//       >
//         <img src="/images/notes/musical_note_3.svg" alt="" />
//       </div>
//     </div>
//   );
// };

// export default MusicalNote3;

const MusicalNote3=()=>{
  const imgRef=useRef();

  useEffect(()=>{
    const img=imgRef.current;
    const tl=gsap.timeline({delay:5.4,repeat:-1, repeatDelay:2})
    tl.fromTo(img,{
      opacity:0,
      scale:0.5,
    },{
      opacity:1,
      scale:1,
      duration:1,
      ease:"power1.in",
    });
    tl.to(img,{
      motionPath:{
        path:[
          { x: 0, y: 0 },
          { x: -20, y: -60 },
          { x: 20, y: -120 },
          { x: -15, y: -180 },
          { x: 10, y: -240 },
        ],
      },
      opacity:0,
      duration:3,
      ease:"sine.out"
    })
  },[]);

  return(
    <div ref={imgRef} className=" opacity-0 absolute md:w-[2%] w-[5%] md:top-[60%] md:left-[17%] right-[19%] top-[28%]">
      <img src="/images/notes/musical_note_3.svg" alt="" />
    </div>
  )
}
export default MusicalNote3;