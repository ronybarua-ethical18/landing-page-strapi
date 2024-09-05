import Image from 'next/image'
import React from 'react'
import VectorIcon from '../../../../public/contact.png'
import Map from '../../../../public/map.png'
import RedDot from '../../../../public/redDot.png'

function Heading() {
  return (
    <div className="px-[10%] my-20 flex justify-between items-center">
      <div>
        <Image src={VectorIcon} alt="vector icon" />
        <h1 className="text-4xl font-semibold my-6">Let’s Collaborate</h1>
        <p className="text-[#777777]">
          Lorem Ipsum is simply dummy text of the printing .
        </p>
      </div>
      <div className="relative">
        <Image src={Map} alt="map" />
        <div className="bg-[rgba(255,224,224,0.7)] p-5 rounded-full absolute right-1/2 bottom-32">
          <Image src={RedDot} alt="map" className="" />
        </div>
      </div>
    </div>
  )
}

export default Heading
