'use client'

import Image from 'next/image'
import React from 'react'
import { CountUp } from 'use-count-up'
import StatisticsOne from '../../../../public/statistics1.png'
import StatisticsTwo from '../../../../public/statistics2.png'
import StatisticsThree from '../../../../public/statistics3.png'
import Bell from '../../../../public/bell.png'

export default function Statistics({ data }: any) {

  return (
    <div className="my-40 px-[10%] py-28 bg-[#1090CB] relative">
      <div className="grid grid-cols-4 gap-10 text-center">
        {data?.counter?.map((count: any) => (
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-white">
              <CountUp
                thousandsSeparator=","
                isCounting
                end={count?.value}
                duration={3.2}
              />{' '}
              +
            </h1>
            <h1 className="text-sm text-white font-normal mt-2">
              {count?.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="absolute left-[10%] top-[-110px]">
      <Image
          src={`http://localhost:1337${data?.leftTopIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.leftTopIcon?.data?.attributes?.width}
          height={data?.leftTopIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>

      <div className="absolute right-[10%] top-[-50px]">
      <Image
          src={`http://localhost:1337${data?.rightTopBellIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.rightTopBellIcon?.data?.attributes?.width}
          height={data?.rightTopBellIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
      <div className="absolute right-[10%] top-[-50px]">
      <Image
          src={`http://localhost:1337${data?.rightTopIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.rightTopIcon?.data?.attributes?.width}
          height={data?.rightTopIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
      <div className="absolute left-0 bottom-[-10px]">
      <Image
          src={`http://localhost:1337${data?.leftBottomIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.leftBottomIcon?.data?.attributes?.width}
          height={data?.leftBottomIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
    </div>
  )
}
