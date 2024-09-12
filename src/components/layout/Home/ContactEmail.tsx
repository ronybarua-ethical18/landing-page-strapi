"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

function ContactEmail({ data }: any) {
  return (
    <div className="bg-[#e7f3f9] py-24 text-center relative">
      <h1 className="text-3xl font-semibold leading-relaxed">{data?.title}</h1>
      <div className="flex w-[40%] m-auto items-center space-x-2 justify-center mt-16">
        <Input
          type="email"
          placeholder={data?.placeholder}
          className="rounded-lg"
        />
        <Button
          type="submit"
          className="h-14"
          size="lg"
          variant={data?.subscribeBtn?.type}
        >
          {data?.subscribeBtn?.title}
        </Button>
      </div>
      <div className="absolute right-1/3 top-[10%]">
        <Image
          src={`http://localhost:1337${data?.rightIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.rightIcon?.data?.attributes?.width}
          height={data?.rightIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
      <div className="absolute left-[10%] top-[-45px]">
        <Image
          src={`http://localhost:1337${data?.leftIcon?.data?.attributes?.url}`}
          alt="vector user image"
          className="z-50"
          width={data?.leftIcon?.data?.attributes?.width}
          height={data?.leftIcon?.data?.attributes?.height}
          layout="intrinsic"
        />
      </div>
    </div>
  )
}

export default ContactEmail
