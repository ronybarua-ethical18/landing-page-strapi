import Image from 'next/image'
import React from 'react'
import AuthorImage from '../../../../public/authorOne.png'

export default function Author({
  name,
  date,
  image,
}: {
  name: string
  date: string
  image: any
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex  space-x-4 items-center">
        <Image
          src={`http://localhost:1337${image?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={image?.data?.attributes?.width}
          height={image?.data?.attributes?.height}
          layout="intrinsic"
        />
        <div>
          <h2 className="font-semibold">{name}</h2>
          <h3 className="text-gray-400 font-light text-sm">{date}</h3>
        </div>
      </div>
      <a href="/" className="text-[#1090CB]">
        Read More
      </a>
    </div>
  )
}
