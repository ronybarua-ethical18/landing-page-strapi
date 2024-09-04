'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { projects } from '@/lib/dummyData'

function LatestProjects() {
  return (
    <div className="px-[10%] my-40">
      <h1 className="text-2xl font-semibold text-left mb-14">
        Our latest Projects
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
          {projects.map(item => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
              <div className="text-center flex items-center justify-center z-50">
                <Image src={item.img} alt="logo" />
              </div>
              <div className="text-left ml-5 mt-5">
                <h2 className="font-semibold ">{item.title}</h2>
                <h1 className="font-light mt-5">{item.desc}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default LatestProjects
