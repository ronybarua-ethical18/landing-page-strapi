import Image from 'next/image'
import React from 'react'
import Line from '../../../../public/line.png'
import BallWithContent from './BallWithContent'

function Features() {
  return (
    <div className="my-20 px-[10%]">
      <section>
        <h1 className="text-center text-3xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing.{' '}
        </h1>
        <h2 className="text-center text-base font-light mt-5 text-[#868686] leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
        <h2 className="text-center text-base font-light text-[#868686] leading-relaxed">
          {' '}
          Lorem Ipsum has been the industry's
        </h2>
      </section>
      <section className="mt-28 grid md:grid-cols-2">
        <div className="relative">
          <Image src={Line} alt="line" layout='intrinsic'/>

          <div className="absolute top-0 left-11">
            <BallWithContent position="top" />
          </div>
        
          <div className="absolute bottom-[-25px] left-11">
            <BallWithContent position="bottom" />
          </div>
        </div>
        <div className='relative'>
        <div className="absolute top-1/2  left-[-45px]">
            <BallWithContent position="center" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
