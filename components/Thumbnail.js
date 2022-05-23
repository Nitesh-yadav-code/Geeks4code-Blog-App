import React from 'react'
import Image from 'next/image'
function Thumbnail({imageUrl}) {
  return (
    <Image
                src={imageUrl}
                alt="thumnail"
                height={500}
                width={800}
                className=" rounded-sm absolute  "
              />
  )
}

export default Thumbnail