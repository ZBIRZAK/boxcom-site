"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const PurpleStar = ({ containerStyles, context, delay }) => {
    const containerRef = useRef(null);
    const { scr1Scr2ScrollOptions } = context;

    useEffect(() => {
        gsap.set(containerRef.current, {
            opacity: 0,
            scale: 0.3,
        });
        
        gsap.to(containerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)", // Effet rebondissant
            delay: delay,
            onComplete: () => {
                // ANIMATIONS CONTINUES après l'apparition
                
                // Rétrécit et grandit en continu
                gsap.to(containerRef.current, {
                    scale: 0.8,
                    duration: 0.7,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                });
                
                // Scintillement continu - apparaît/disparaît avec plus de transparence
                gsap.to(containerRef.current, {
                    opacity: 0.3, // Plus transparent
                    duration: 1,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                });
                
                // Animation au scroll
                gsap.to(containerRef.current, {
                    scrollTrigger: scr1Scr2ScrollOptions,
                    opacity: 0,
                    marginTop: "15%",
                    scale: 0.8,
                });
            }
        });
    }, []);

    // Excitation au hover - rotation + scintillement sans transparence
    const handleMouseEnter = () => {
        // Rotation de 360° - l'excitation principale
        gsap.to(containerRef.current, {
            rotation: "+=360",
            duration: 0.8,
            ease: "power2.out"
        });
        
        // Scintillement rapide entre opacity normale et plus claire (pas transparent)
        gsap.to(containerRef.current, {
            opacity: 1.2, // Plus brillant au lieu de transparent
            filter: "brightness(1.5)", // Effet de brillance
            duration: 0.15,
            ease: "power2.out",
            repeat: 5,
            yoyo: true
        });
    };

    const handleMouseLeave = () => {
        // Arrêter la rotation en cours et remettre à 0
        gsap.killTweensOf(containerRef.current, "rotation");
        gsap.to(containerRef.current, {
            rotation: 0, // Retour à la position droite
            duration: 0.3,
            ease: "power2.out"
        });
        
        // Retour à l'état normal (enlever le filter brightness)
        gsap.to(containerRef.current, {
            filter: "brightness(1)", // Retour à la normale
            duration: 0.3,
            ease: "sine.inOut"
        });
    };

    return (
        <div 
            className="opacity-0 absolute w-[5%] md:bottom-[60%] bottom-[62%] bottom-[52%] md:right-[43%] right-[40%]  z-20 "
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }}
        >
            <img src="/images/purple_star.svg" alt="Purple Star" />
        </div>
    );
}

export default PurpleStar;