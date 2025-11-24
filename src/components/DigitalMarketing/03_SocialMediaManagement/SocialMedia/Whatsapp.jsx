'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Whatsapp = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.to(imgRef.current, {
      scale: 1.2,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      transformOrigin: "50% 50%",
      delay: gsap.utils.random(0, 1.5),
      repeatDelay: gsap.utils.random(0.2, 0.8) 
    })
  }, [])

  return (
    <div className="absolute w-[13%] top-[21%] left-[2%]">
      <img ref={imgRef} src="/images/social_networks/whatsapp.svg"/>
    </div>
  )
}
export default Whatsapp;
