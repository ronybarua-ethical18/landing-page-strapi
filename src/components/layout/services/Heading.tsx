'use client'


import Image from 'next/image'
import React from 'react'

function Heading({ data }: any) {
  return (
    <div className="bg-[#e7f4fa] pt-20 pb-52  relative">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={`http://localhost:1337${data?.logo?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.logo?.data?.attributes?.width}
          height={data?.logo?.data?.attributes?.height}
          layout="intrinsic"
        />
        <h1 className="text-3xl font-semibold my-5">
          {data?.title.split(' ')[0]}{' '}
          <span className="text-[#1090CB]">{data?.title.split(' ')[1]}</span>
        </h1>
        <p className="leading-relaxed w-[30%]">{data?.description}</p>
      </div>
    </div>
  )
}

export default Heading
