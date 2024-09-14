import Image from 'next/image'
import React from 'react'

function Heading({ data }: any) {
  return (
    <div className="px-[10%] my-20 flex justify-between items-center">
      <div>
        <Image
          src={`http://localhost:1337${data?.icon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.icon?.data?.attributes?.width}
          height={data?.icon?.data?.attributes?.height}
          layout="intrinsic"
        />
        <h1 className="text-4xl font-semibold my-6">{data?.title}</h1>
        <p className="text-[#777777]">{data?.description}</p>
      </div>
      <div className="relative">
        <Image
          src={`http://localhost:1337${data?.mapImg?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.mapImg?.data?.attributes?.width}
          height={data?.mapImg?.data?.attributes?.height}
          layout="intrinsic"
        />
        <div className="bg-[rgba(255,224,224,0.7)] p-5 rounded-full absolute right-1/2 bottom-32">
          <Image
            src={`http://localhost:1337${data?.dotImg?.data?.attributes?.url}`}
            alt="vector user image"
            className="z-50"
            width={data?.dotImg?.data?.attributes?.width}
            height={data?.dotImg?.data?.attributes?.height}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  )
}

export default Heading
