import Image from 'next/image'
import React from 'react'
import Line from '../../../../public/line.png'
import FeatureEllipse from '../../../../public/featureNewEllipse.png'
import FeatureEllipseGreen from '../../../../public/featureEllipseGreen.png'
import Mobile from '../../../../public/mobilefull.png'
import MobileMock from '../../../../public/mobileMock.png'
import VRMen from '../../../../public/vrmen.png'
import BallWithContent from './BallWithContent'
import FeatureCategories from './FeatureCategories'

function Features() {
  return (
    <div className="relative">
      <div className="my-20 px-[10%] ">
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
        <section className="mt-28 ">
          <div className="relative">
            <div className="absolute left-[-3%]">
              <Image src={Line} alt="line" layout="intrinsic" />
            </div>

            <div className="grid grid-cols-[40%_60%] gap-6 place-items-start">
              <div className="w-full z-50">
                <BallWithContent position="top" />
              </div>
              <div className="w-full flex justify-end">
                <Image src={Mobile} alt="line" />
              </div>
            </div>
            <div className="grid grid-cols-[45%_55%] gap-6 place-items-start mt-14">
              <div className="w-full pb z-50">
                <Image src={MobileMock} alt="line" />
              </div>
              <div className="w-[75%] z-50 flex items-center h-full">
                <BallWithContent position="middle" />
              </div>
            </div>
            <div className="grid grid-cols-[40%_60%] gap-6 place-items-center mt-28">
              <div className="w-full z-50">
                <BallWithContent position="bottom" />
              </div>
              <div className="w-full flex justify-end z-50">
                <Image src={VRMen} alt="line" />
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-[15%] opacity-60">
            <Image src={FeatureEllipse} alt="ellipse" />
          </div>
          <div className="absolute right-0 bottom-0 opacity-80">
            <Image src={FeatureEllipse} alt="ellipse" />
          </div>
          <div className="absolute left-[2%] top-1/3 ">
            <Image src={FeatureEllipseGreen} alt="ellipse" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Features
