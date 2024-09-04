import Image from 'next/image'
import React from 'react'
import AuthorImage from '../../../../public/authorOne.png'

export default function Author({ name, date }: { name: string; date: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex  space-x-4 items-center">
        <Image src={AuthorImage} alt="author" />
        <div>
          <h2 className="font-semibold">{name}</h2>
          <h3 className="text-gray-400 font-light text-sm">{date}</h3>
        </div>
      </div>
      <a href="/" className='text-[#1090CB]'>Read More</a>
    </div>
  )
}
