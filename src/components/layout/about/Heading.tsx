'use client'

import Image from 'next/image'
import React from 'react'
import AboutImgOne from '../../../../public/about1.png'
import AboutImgTwo from '../../../../public/about2.png'
import AboutImgThree from '../../../../public/about3.png'
import AboutImgFour from '../../../../public/about4.png'
import AboutBottomEllipse from '../../../../public/aboutBottomEllipse.png'
import DotFrame from '../../../../public/dotFrame.png'

function Heading({ data }: any) {
  return (
    <div className="px-[10%] mb-40 mt-28 relative">
      <div className="grid grid-cols-2 gap-14 ">
        <div className="flex items-end gap-14 justify-end">
          <Image
            src={`http://localhost:1337${data?.imgOne?.data?.attributes?.url}`}
            alt="vector user image"
            className="z-50"
            width={data?.imgOne?.data?.attributes?.width}
            height={data?.imgOne?.data?.attributes?.height}
            layout="intrinsic"
          />
          <Image
            src={`http://localhost:1337${data?.imgTwo?.data?.attributes?.url}`}
            alt="vector user image"
            className="z-50"
            width={data?.imgTwo?.data?.attributes?.width}
            height={data?.imgTwo?.data?.attributes?.height}
            layout="intrinsic"
          />
        </div>
        <div>
          <h2 className="text-xl font-normal text-[#1090CB]">{data?.title}</h2>
          <h1 className="text-4xl font-semibold leading-relaxed my-6">
            {data?.subTitle} <br />
            {data?.subTitle2}
          </h1>
          <p className="font-normal leading-relaxed w-[50%] text-[#868686]">
            {data?.description}
          </p>
        </div>
      </div>
      <div className="flex gap-14 justify-center mt-10 relative">
        <Image
          src={`http://localhost:1337${data?.imgThree?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.imgThree?.data?.attributes?.width}
          height={data?.imgThree?.data?.attributes?.height}
          layout="intrinsic"
        />
        <Image
          src={`http://localhost:1337${data?.imgFour?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.imgFour?.data?.attributes?.width}
          height={data?.imgFour?.data?.attributes?.height}
          layout="intrinsic"
        />
        <div className="absolute right-0 bottom-[-100px]">
          <Image
            src={`http://localhost:1337${data?.bottomIcon?.data?.attributes?.url}`}
            alt="vector user image"
            className="z-50"
            width={data?.bottomIcon?.data?.attributes?.width}
            height={data?.bottomIcon?.data?.attributes?.height}
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="absolute top-[-220px] right-0">
        <Image
          src={`http://localhost:1337${data?.rightIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.rightIcon?.data?.attributes?.width}
          height={data?.rightIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
      <div className="absolute top-1/2 left-0 z-50">
        <Image
          src={`http://localhost:1337${data?.leftIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.leftIcon?.data?.attributes?.width}
          height={data?.leftIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
    </div>
  )
}

export default Heading
