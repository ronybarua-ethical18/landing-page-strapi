import Image from 'next/image'
import React from 'react'
import Happy from '../../../../public/happy.png'

function BallWithContent({position}:{position:string}) {
  return (
    <div className='flex gap-6 items-center'>
        <div className={`rounded-full p-3 ${position === "top" ? "bg-[#08d3bb]":position === "bottom" ? "bg-[#9208d3]":"bg-[#0f88c0]"} `}>
            <Image src={Happy} alt="ball icon"/>
        </div>
        <div>
            <h1 className='text-lg font-semibold'>Lorem Ipsum is simply dummy text</h1>
            <h2 className='text-sm font-light mt-1'>Lorem Ipsum is simply dummy text</h2>
        </div>
    </div>
  )
}

export default BallWithContent