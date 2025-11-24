'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CleDeSol = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.to(imgRef.current, {
      rotation: 25,
      duration: 1.3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <div className="absolute w-[6%] bottom-[12%] right-[9%]">
      <img ref={imgRef} src="/images/notes/cledesol.svg" alt="clé de sol" />
    </div>
  )
}
export default CleDeSol;
