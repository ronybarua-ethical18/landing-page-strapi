'use client'

import Image from 'next/image'
import React from 'react'
import { CountUp } from 'use-count-up'
import StatisticsOne from '../../../../public/statistics1.png'
import StatisticsTwo from '../../../../public/statistics2.png'
import StatisticsThree from '../../../../public/statistics3.png'
import Bell from '../../../../public/bell.png'

export default function Statistics() {
  return (
    <div className="my-40 px-[10%] py-28 bg-[#1090CB] relative">
      <div className="grid grid-cols-4 gap-10 text-center">
        <div>
          <h1 className="text-5xl font-semibold text-white">
            <CountUp
              thousandsSeparator=","
              isCounting
              end={112}
              duration={3.2}
            />{' '}
            +
          </h1>
          <h1 className="text-sm text-white font-normal mt-2">
            Happy Customers
          </h1>
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-white">
            <CountUp
              thousandsSeparator=","
              isCounting
              end={24}
              duration={3.2}
            />{' '}
            +
          </h1>
          <h1 className="text-sm text-white font-normal mt-2">
            Happy Customers
          </h1>
        </div>
        <div className="mx-16">
          <h1 className="text-5xl font-semibold text-white">
            <CountUp isCounting end={705} duration={3.2} /> +
          </h1>
          <h1 className="text-sm text-white font-normal mt-2">
            Number of shops
          </h1>
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-white">
            <CountUp isCounting end={6000} duration={3.2} /> +
          </h1>
          <h1 className="text-sm text-white font-normal mt-2">
            Professional services
          </h1>
        </div>
      </div>
      <div className='absolute left-[10%] top-[-110px]'>
        <Image src={StatisticsOne} alt="statistics"/>
      </div>
      
      <div className='absolute right-[10%] top-[-50px]'>
        <Image src={StatisticsTwo} alt="statistics"/>
      </div>
      <div className='absolute right-[10%] top-[-50px]'>
        <Image src={Bell} alt="statistics"/>
      </div>
      <div className='absolute left-0 bottom-[-10px]'>
        <Image src={StatisticsThree} alt="statistics"/>
      </div>
    </div>
  )
}
