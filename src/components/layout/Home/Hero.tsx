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

function Hero({ data }: any) {
  return (
    <div className="relative bg-[#e7f4fa] z-0">
      {/* Ellipse Background */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2  z-10">
        <Image
          src={
            `http://localhost:1337${data?.contentLeftIcon?.data.attributes.url}` ||
            LeftEllipse
          }
          alt={`left ellipse icon`}
          width={data?.contentLeftIcon?.data.attributes.width}
          height={data?.contentLeftIcon?.data.attributes.height}
          layout="intrinsic"
        />
      </div>
      <div className="absolute left-0 bottom-[-150px]  z-10">
        <Image
          src={
            `http://localhost:1337${data?.bottomLeftIcon?.data.attributes.url}` ||
            HeroVector
          }
          alt="left-ellipse"
          layout="intrinsic"
          width={data?.bottomLeftIcon?.data.attributes.width}
          height={data?.bottomLeftIcon?.data.attributes.height}
        />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Image
          src={
            `http://localhost:1337${data?.topRightIcon?.data.attributes.url}` ||
            HeroVector
          }
          alt="left-ellipse"
          layout="intrinsic"
          width={data?.topRightIcon?.data.attributes.width}
          height={data?.topRightIcon?.data.attributes.height}
        />
      </div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-4 h-full  md:px-[10%] sm:px-[5%] z-20">
        <div className="flex items-center">
          <div className="relative">
            <h1 className="text-5xl font-semibold leading-snug">
              {data?.title}
            </h1>
            <p className="text-[#5C5C5C] leading-loose my-8">
              {data?.description}
            </p>
            <div className="flex gap-4">
              {data?.button?.map((btn: any) => (
                <Button variant={btn?.type} size="lg">
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <div className="absolute right-8 top-1/3 transform -translate-y-1/2 opacity-70  z-10">
            <Image
              src={
                `http://localhost:1337${data?.heroBgEllipse?.data.attributes.url}` ||
                HeroEllipse
              }
              alt="vector user image"
              className="z-50"
              width={data?.heroBgEllipse?.data.attributes.width}
              height={data?.heroBgEllipse?.data.attributes.height}
              layout="intrinsic"
            />
          </div>
          <div className="">
            <Image
              src={
                `http://localhost:1337${data?.heroIcon?.data.attributes.url}` ||
                HeroUser
              }
              alt="vector user image"
              style={{ zIndex: 9999 }}
              width={data?.heroIcon?.data.attributes.width}
              height={data?.heroIcon?.data.attributes.height}
              layout="intrinsic"
            />
            <div className="absolute bottom-12 md:right-6 sm:right-0">
              <Image
                src={
                  `http://localhost:1337${data?.heroBottomIcon?.data.attributes.url}` ||
                  HeroPlant
                }
                alt="vector user image"
                className="z-50"
                width={data?.heroBottomIcon?.data.attributes.width}
                height={data?.heroBottomIcon?.data.attributes.height}
                layout="intrinsic"
              />
            </div>
            <div className="absolute md:left-1/4 top-1/3 sm:left-0">
              <Image
                src={
                  `http://localhost:1337${data?.heroLeftIcon?.data.attributes.url}` ||
                  SuccelentAngle
                }
                alt="Hero left icon"
                layout="intrinsic"
                width={data?.heroLeftIcon?.data.attributes.width}
                height={data?.heroLeftIcon?.data.attributes.height}
              />
            </div>
            <div className="absolute lg:right-10 top-1/4 sm:right-0">
              <Image
                src={
                  `http://localhost:1337${data?.heroRightIcon?.data.attributes.url}` ||
                  HeroRight
                }
                alt="Hero right icon"
                layout="intrinsic"
                width={data?.heroRightIcon?.data.attributes.width}
                height={data?.heroRightIcon?.data.attributes.height}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
