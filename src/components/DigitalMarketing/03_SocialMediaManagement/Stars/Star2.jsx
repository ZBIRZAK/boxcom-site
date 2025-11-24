'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Star2 = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, filter: "brightness(0.5)" },
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
    <div className="absolute w-[15%] top-[9%] left-[50%]">
      <img ref={imgRef} src="/images/shapes/star2.svg" alt="haut/milieu" />
    </div>
  )
}
export default Star2;
