"use client"

import Image from 'next/image'
import React from 'react'
import Bell from '../../../../public/bell.png'
import { Button } from '@/components/ui/button'

function FeatureCategories({ data }: any) {
  return (
    <>
      {data?.FeatureCategory?.map((category: any) => (
        <div className="px-20 py-14 bg-[#f4f4f4] text-center rounded-2xl relative hover:bg-[#1090CB] hover:text-white transition-colors duration-300 group cursor-pointer">
          <h1 className="text-3xl font-semibold leading-relaxed">
            {category?.title}
          </h1>
          <p className="leading-relaxed my-8">{category?.description}</p>
          <Button
            className="group-hover:bg-white group-hover:text-[#1090cb]"
            variant={category?.viewButton?.type}
            size="lg"
          >
            {category?.viewButton?.title}
          </Button>
          <div className="absolute top-[-18%] right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Image
              src={
                `http://localhost:1337${category?.icon?.data?.attributes?.url}` ||
                Bell
              }
              alt="vector user image"
              className="z-50"
              width={category?.icon?.data?.attributes?.width}
              height={category?.icon?.data?.attributes?.height}
              layout="intrinsic"
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default FeatureCategories
