'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import LogoEllipse from '../../../../public/logoEllipse.png'

export function TrustedCompanies({ data }: any) {
  return (
    <div className="relative">
      <div className="px-[4%] text-center mb-40">
        <h1 className="text-2xl font-medium mb-10">{data?.title}</h1>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full z-50"
        >
          <CarouselContent>
            {data?.TrustedCompany?.map((item: any) => (
              <CarouselItem
                key={item?.id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div className="text-center flex items-center justify-center z-50">
                  <Image
                    src={`http://localhost:1337${item?.logo?.data.attributes.url}`}
                    alt="vector user image"
                    className="z-50"
                    width={item?.logo?.data.attributes.width}
                    height={item?.logo?.data.attributes.height}
                    layout="intrinsic"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="absolute left-0 top-[-70px]">
        <Image
          src={`http://localhost:1337${data?.bgImg?.data.attributes.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.bgImg?.data.attributes.width}
          height={data?.bgImg?.data.attributes.height}
          layout="intrinsic"
        />
      </div>
    </div>
  )
}
