'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function ServiceDescription({ data }: any) {
  return (
    <div className="px-[10%] my-48">
      <div className="grid grid-cols-2">
        <div>
          <div className="mt-14">
            <h1 className="text-4xl font-semibold leading-relaxed">
              {data?.title}
            </h1>
            <p className="leading-relaxed text-base mt-5">
              {data?.description}
            </p>
            <p className="my-8">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens{' '}
            </p>
            <Button variant="white" className="border-[#1090CB]" size="lg">
              Contact us
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={`http://localhost:1337${data?.img?.data?.attributes?.url}`}
            alt="vector user image"
            className="z-50"
            width={data?.img?.data?.attributes?.width}
            height={data?.img?.data?.attributes?.height}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  )
}
