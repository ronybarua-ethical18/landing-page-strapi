import Image from 'next/image'
import React from 'react'
import Bell from '../../../../public/bell.png'
import { Button } from '@/components/ui/button'

function FeatureCategories() {
  return (
    <div className="px-20 py-14 bg-[#f4f4f4] text-center rounded-2xl relative hover:bg-[#1090CB] hover:text-white transition-colors duration-300 group cursor-pointer">
      <h1 className="text-3xl font-semibold leading-relaxed">
        Lorem Ipsum is simply <br /> dummy text.
      </h1>
      <p className="leading-relaxed my-8">
        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
        applications and website builders measuring dozens of completed
        projects. We build and develop mobile applications for several top
        platforms, including Android & IOS.{' '}
      </p>
      <Button className="group-hover:bg-white group-hover:text-[#1090cb]" variant="blue" size="lg">
        View More
      </Button>
      <div className="absolute top-[-18%] right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Image src={Bell} alt="ellipse" />
      </div>
    </div>
  )
}

export default FeatureCategories
