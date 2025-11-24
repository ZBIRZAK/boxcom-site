'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Star4 = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, filter: "brightness(0.6)" },
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
    <div className="absolute w-[15%] top-[49%] right-[3%]">
      <img ref={imgRef} src="/images/shapes/star2.svg" alt="bas/droite" />
    </div>
  )
}
export default Star4;