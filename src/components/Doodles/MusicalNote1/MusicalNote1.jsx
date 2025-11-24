"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);


// const MusicalNote1 = ({ containerStyles, delay = 0 }) => {
//   const imgRef = useRef(null);
//   const particlesContainerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animation d'entrée initiale (une seule fois)
//       const introTl = gsap.timeline({ delay });
      
//       introTl.fromTo(
//         imgRef.current,
//         { opacity: 0, scale: 0.2 },
//         { 
//           opacity: 1, 
//           scale: 0.8, 
//           duration: 2, 
//           ease: "power2.out",
//           onComplete: () => {
//             // Démarrer la boucle de naissance après l'intro
//             startBirthLoop();
//           }
//         }
//       );

//       // Timeline en boucle pour les naissances de clés
//       const startBirthLoop = () => {
//         const birthTl = gsap.timeline({ 
//           repeat: -1, // Boucle infinie
//           repeatDelay: 1 // Pause de 4 secondes entre chaque cycle
//         });
        
//         birthTl
//           // Phase 1: Respiration calme
//           .to(imgRef.current, {
//             y: -6,
//             duration: 2,
//             ease: "sine.inOut",
//             yoyo: true,
//             repeat: 1 // 2 cycles de respiration
//           })
          
//           // Phase 2: Légère pulsation (la mère se prépare)
//           .to(imgRef.current, {
//             scale: 0.9,
//             duration: 0.3,
//             ease: "power2.inOut",
//             yoyo: true,
//             repeat: 1
//           })
          
//           // Phase 3: Naissance des petites clés
//           .call(() => {
//             createBirthParticles();
//           })
          
//           // Phase 4: Retour au calme
//           .to(imgRef.current, {
//             y: 0,
//             duration: 0.5,
//             ease: "power2.out"
//           });
//       };
//     });

//     return () => ctx.revert();
//   }, [delay]);

//   const createBirthParticles = () => {
//     const particleCount = 10;
  
//     for (let i = 0; i < particleCount; i++) {
//       const particle = document.createElement("img");
//       particle.src = "/images/ecran1-note_1.svg";
//       particle.style.position = "absolute";
//       particle.style.width = `${30 + Math.random() * 20}%`; // smaller than main note
//       particle.style.height = "auto";
//       particle.style.pointerEvents = "none";
//       particle.style.zIndex = "15";
//       particle.style.opacity = "0";
  
//       // Start at center of the main note
//       particle.style.top = "50%";
//       particle.style.left = "50%";
//       particle.style.transform = "translate(-50%, -50%)";
  
//       particlesContainerRef.current.appendChild(particle);
  
//       // Build a zigzag path (like smoke)
//       const basePath = [
//         { x: 0, y: 0 },
//         { x: -20, y: -60 },
//         { x: 20, y: -120 },
//         { x: -15, y: -180 },
//         { x: 10, y: -240 },
//       ];
  
//       // Add variation per particle (so they don't overlap perfectly)
//       const offsetX = (i - Math.floor(particleCount / 2)) * 10;
//       const customPath = basePath.map((p) => ({
//         x: p.x + offsetX + (Math.random() * 10 - 5), // horizontal jitter
//         y: p.y + (Math.random() * 20 - 10), // vertical wobble
//       }));
  
//       // Animate along zigzag path
//       gsap.fromTo(
//         particle,
//         {
//           opacity: 0.7,
//           scale: 0.4 + Math.random() * 0.3,
//           x: 0,
//           y: 0,
//         },
//         {
//           duration: 4 + Math.random() * 1.5,
//           ease: "power1.inOut",
//           motionPath: {
//             path: customPath,
//             curviness: 1.5,
//           },
//           opacity: 0,
//           rotation: Math.random() * 60 - 30, // slight tilt
//           scale: 2 + Math.random() * 0.6,
//           delay: i * 0.5, // staggered start
//           onComplete: () => {
//             if (particlesContainerRef.current && particle.parentNode) {
//               particlesContainerRef.current.removeChild(particle);
//             }
//           },
//         }
//       );
//     }
//   };
  

//   return (
//     <div className="absolute md:w-[2.2%] w-[8%] md:top-[20%] top-[35%] left-[5%] rotate-[9deg] z-20">
//       {/* Container pour les particules */}
//       <div 
//         ref={particlesContainerRef}
//         className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"
//       />
      
//       {/* Clé de sol principale */}
//       <img
//         ref={imgRef}
//         src="/images/ecran1-note_1.svg"
//         alt="Note musicale"
//         className="block w-full h-auto relative z-20" 
//       />
//     </div>
//   );
// };

// export default MusicalNote1;

const MusicalNote1=()=>{
  const imgRef=useRef();

  useEffect(()=>{
    const img=imgRef.current;
    const tl=gsap.timeline({ delay:5,repeat:-1, repeatDelay:2})
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
    <div ref={imgRef} className="absolute md:w-[2.2%] w-[8%] md:top-[20%] top-[35%] left-[5%] rotate-[9deg] z-20">
      <img
        src="/images/ecran1-note_1.svg"
        alt="Note musicale"
      />
    </div>
  )
}
export default MusicalNote1;