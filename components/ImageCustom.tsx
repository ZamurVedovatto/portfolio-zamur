import { useState, useEffect } from 'react'
import Image from 'next/image'
import ImageWrapper from './../styles/ImageCustom'

const ImageCustom = ({ path, top, left }) => {
  const [config, setConfig] = useState({
    top: top || 20,
    left: left || 15,
    rotate: 45,
    width: 180,
    height: 180,
  })

  const randNum = (max: number = 50) => Math.floor(Math.random() * max) + 1;

  useEffect(() => {
    setConfig({
      top: randNum(90),
      left: randNum(100),
      rotate: randNum(45),
      width: randNum(420),
      height: randNum(420),
    })
  }, [])
  
  return (
    <ImageWrapper>
      <Image className="im-sorry" src={path} width={config.width} height={config.height} alt="alt" style={{top: `${config.top}vh`, left: `${config.left}vw,`, transform:`rotateZ(${config.rotate}deg)`, width: `${config.width}px !important`, height: `${config.height}px !important` }} />
    </ImageWrapper>
  )
}

export default ImageCustom;