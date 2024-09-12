"use client"

import React from 'react'

function Description({data}:any) {
  return (
    <div className="px-[10%] my-48">
      <h1 className="font-semibold text-5xl text-[#1090CB] leading-relaxed">
        {data?.title}
      </h1>
      <p className='leading-loose text-[#585858] mt-10 w-[50%]'>
        {data?.description}
      </p>
    </div>
  )
}

export default Description
