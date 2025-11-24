'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const DoubleCrocheJaune = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.to(imgRef.current, {
      rotation: -20,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <div className="absolute w-[17%] md:w-[13%] top-[8%] left-[30%]">
      <img ref={imgRef} src="/images/notes/doublecroche-jaune.svg" className="h-full w-full" />
    </div>
  )
}
export default DoubleCrocheJaune;
