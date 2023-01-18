// import ImageCustomWrapper from './../styles/ImageCustom'
// import Image from 'next/image'

// const ImageCustom = () => {
//   return (
//     <ImageCustomWrapper>
//       <Image className="im-sorry" src='/sad.png' alt="alt" width={320} height={320} />
//     </ImageCustomWrapper>
//   )
// }
// export default ImageCustom;

import { useState } from 'react'
import Image from 'next/image'
import ImageWrapper from './../styles/ImageCustom'


const ImageCustom = ({ path }) => {

  return (
    <ImageWrapper>
      <Image className="im-sorry" src={path} width={32} height={32} alt="alt" />
    </ImageWrapper>
  )
}

export default ImageCustom;