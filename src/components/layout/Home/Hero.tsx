import React from 'react'
import { Button } from '../../ui/button'
import LeftEllipse from '../../../../public/HeroLeftEllipse.png'
import HeroVector from '../../../../public/HeroVector.png'
import HeroRight from '../../../../public/HeroRight.png'
import HeroUser from '../../../../public/HeroUser.png'
import HeroEllipse from '../../../../public/HeroEllipse.png'
import HeroPlant from '../../../../public/HeroPlant.png'
import SuccelentAngle from '../../../../public/SuccelentAngle.png'
import Cuboid from '../../../../public/Cuboid.png'
import Image from 'next/image'

function Hero() {
  return (
    <div className="relative bg-[#e7f4fa] z-0">
      {/* Ellipse Background */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2  z-10">
        <Image src={LeftEllipse} alt="left-ellipse" layout="intrinsic" />
      </div>
      <div className="absolute left-0 bottom-[-150px]  z-10">
        <Image src={HeroVector} alt="left-ellipse" layout="intrinsic" />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Image src={HeroRight} alt="left-ellipse" layout="intrinsic" />
      </div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-4 h-full  md:px-[10%] sm:px-[5%] z-20">
        <div className="flex items-center">
          <div className="relative">
            <h1 className="text-5xl font-semibold leading-snug">
              Experienced{' '}
              <span className="text-[#1090CB]">mobile and web </span>
              applications and website builders measuring.
            </h1>
            <p className="text-[#5C5C5C] leading-loose my-8">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.{' '}
            </p>
            <div className="flex gap-4">
              <Button variant="blue" size="lg">
                Contact Us
              </Button>
              <Button variant="white" size="lg">
                View More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <div className="absolute right-8 top-1/3 transform -translate-y-1/2 opacity-70  z-10">
            <Image src={HeroEllipse} alt="vector user image" />
          </div>
          <div className="">
            <Image src={HeroUser} alt="vector user image" className="z-50" />
            <div className="absolute bottom-12 md:right-6 sm:right-0">
              <Image src={HeroPlant} alt="vector user image" className="z-50" />
            </div>
            <div className="absolute md:left-1/4 top-1/3 sm:left-0">
              <Image
                src={SuccelentAngle}
                alt="vector user image"
                className="z-50"
              />
            </div>
            <div className="absolute lg:right-10 top-1/4 sm:right-0">
              <Image src={Cuboid} alt="vector user image" className="z-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
