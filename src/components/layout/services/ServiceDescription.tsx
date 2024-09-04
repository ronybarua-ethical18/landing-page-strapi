"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Illustration from '../../../../public/illustration.png'

export default function ServiceDescription() {
  return (
    <div className="px-[10%] my-40">
      <div className="grid grid-cols-2">
        <div>
          <div className="mt-14">
            <h1 className="text-4xl font-semibold leading-relaxed">
              <span className="text-[#0f88c0]">Lorem Ipsum</span> is simply
              dummy <br />text of the printing.
            </h1>
            <p className="leading-relaxed text-base mt-5">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.{' '}
            </p>
            <p className='my-8'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens </p>
            <Button variant="white" className='border-[#1090CB]' size="lg">Contact us</Button>
          </div>
        </div>
        <div>
            <Image src={Illustration} alt="illustration"/>
        </div>
      </div>
    </div>
  )
}
