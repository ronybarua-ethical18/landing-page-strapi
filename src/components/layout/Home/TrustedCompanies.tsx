'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { logos } from '@/lib/dummyData'
import LogoEllipse from '../../../../public/logoEllipse.png'

export function TrustedCompanies({data}:any) {
  return (
    <div className="relative">
      <div className="px-[4%] text-center mb-40">
        <h1 className="text-2xl font-medium mb-10">
          You will be in good Company
        </h1>
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
            {logos.map(item => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="text-center flex items-center justify-center z-50">
                  <Image src={item.img} alt="logo" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="absolute left-0 top-[-70px]">
        <Image src={LogoEllipse} alt="logo" />
      </div>
    </div>
  )
}
