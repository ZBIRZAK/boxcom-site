'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CrocheViolette = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.to(imgRef.current, {
      rotation: 25, 
      duration: 1.4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <div className="absolute w-[10%] md:w-[8%] top-[15%] md:top-[11%] md:left-[-2%] left-[5%] rotate-[30deg]">
      <img ref={imgRef} src="/images/notes/croche-violette.svg" />
    </div>
  )
}
export default CrocheViolette;
