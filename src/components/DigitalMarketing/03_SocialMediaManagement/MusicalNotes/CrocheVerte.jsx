'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CrocheVerte = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.to(imgRef.current, {
      rotation: -20, 
      duration: 1.1, 
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <div className="absolute w-[7%] md:top-[44%] top-[25%] right-[8%]">
      <img ref={imgRef} src="/images/notes/croche-verte.svg" className="h-full w-full"/>
    </div>
  )
}
export default CrocheVerte;
