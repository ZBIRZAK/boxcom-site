'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Star1 = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, filter: "brightness(0.7)" },
      { 
        opacity: 1, 
        filter: "brightness(2)",
        duration: 1.5, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut"
      }
    )
  }, [])

  return (
    <div className="absolute w-[15%] top-[18%] left-[20%]">
      <img ref={imgRef} src="/images/shapes/star2.svg" alt="haut/gauche" />
    </div>
  )
}
export default Star1;
