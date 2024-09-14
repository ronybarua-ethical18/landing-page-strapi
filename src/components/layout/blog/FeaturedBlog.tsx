import Image from 'next/image'
import React from 'react'
import Author from './Author'

function FeaturedBlog({ data }: any) {
  return (
    <div className="grid grid-cols-2 gap-10 my-32 w-[80%] m-auto place-items-center">
      <div className="">
        <Image
          src={`http://localhost:1337${data?.img?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.img?.data?.attributes?.width}
          height={data?.img?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
      <div className="mb-5 text-left">
        <h1 className="text-3xl font-semibold leading-relaxed">
          {data?.title}
        </h1>
        <p className="text-[#424242] leading-loose mt-5 mb-8 w-[70%]">
          {data?.description}
        </p>
        <Author name={data?.author?.name} date={data?.author?.date} image={data?.author?.image}/>
      </div>
    </div>
  )
}

export default FeaturedBlog
