'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'

export function Teams({ data }: any) {
  return (
    <div className="relative">
      <div className="px-[10%] text-center my-40">
        <h1 className="font-semibold text-2xl my-10 text-left">
          {data?.title}
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
            {data?.Team?.map((item: any) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="text-center flex items-center justify-center z-50">
                  <Image
                    src={`http://localhost:1337${item?.img?.data?.attributes?.url}`}
                    alt="vector user image"
                    className="z-50"
                    width={item?.img?.data?.attributes?.width}
                    height={item?.img?.data?.attributes?.height}
                    layout="intrinsic"
                  />
                </div>
                <div className="text-left ml-5 mt-5">
                  <h1 className="font-light">{item?.designation}</h1>
                  <h2 className="font-semibold ">{item?.name}</h2>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
