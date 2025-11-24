"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

// const MusicalNote2 = ({
//   containerStyles = "musicalNote2Container",
//   delay = 0, // délai initial (one-shot)
//   loop = true,
//   leadScale = 0.7,
//   leadOpacity = 0.7,
//   followerScale = 1.8,
//   followerOpacity = 0.5,
//   leadGap = 1.5, // temps entre deux apparitions de la lead
// }) => {
//   const leadRef = useRef(null);
//   const followersRef = useRef([]);

//   useEffect(() => {
//     const lead = leadRef.current;
//     const followers = followersRef.current.filter(Boolean);

//     gsap.set(lead, { opacity: 0, scale: 0 });
//     gsap.set(followers, { opacity: 0, scale: 1 });

//     const leadTl = gsap.timeline({
//       repeat: loop ? -1 : 0,
//       repeatDelay: leadGap,
//       delay, // one-shot au démarrage
//     });

//     leadTl.fromTo(
//       lead,
//       { opacity: 0, scale: 0 },
//       {
//         opacity: leadOpacity,
//         scale: leadScale,
//         duration: 0.8,
//         ease: "power2.out",
//         onComplete: () => {
//           gsap.set(followers, { opacity: followerOpacity, scale: 1 });
//           gsap.to(followers, {
//             scale: followerScale,
//             opacity: 0,
//             duration: 1.0,
//             ease: "power2.out",
//             stagger: 0.2,
//           });
//         },
//       }
//     );

//     return () => leadTl.kill();
//   }, [
//     delay,
//     loop,
//     leadScale,
//     leadOpacity,
//     followerScale,
//     followerOpacity,
//     leadGap,
//   ]);

//   const src = "/images/notes/double-croche.svg";

//   return (
//     <div
//       className="absolute md:w-[4%] w-[10%] md:top-[65%] top-[40%] md:right-[-84%] right-[-80%] "
//       style={{ position: "relative" }}
//     >
//       <div ref={leadRef}>
//         <img src={src} alt="Lead" className="w-full block" />
//       </div>

//       {[0, 1, 2, 3].map((i) => (
//         <div
//           key={i}
//           ref={(el) => (followersRef.current[i] = el)}
//           className="absolute inset-0 "
//         >
//           <img
//             src={src}
//             alt={`Follower ${i + 1}`}
//             className="w-full h-full object-contain block"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MusicalNote2;

const MusicalNote2=()=>{
  const imgRef=useRef();

  useEffect(()=>{
    const img=imgRef.current;
    const tl=gsap.timeline({delay:5.2,repeat:-1, repeatDelay:2})
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
    <div ref={imgRef} className="absolute w-[3%] top-[65%] right-[15%]">
       <img
          src="/images/notes/double-croche.svg"
          // alt={`Follower ${i + 1}`}
          className="w-full h-full object-contain block"
        />
    </div>
  )
}
export default MusicalNote2;
