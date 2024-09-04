import { Button } from '@/components/ui/button'
import { aboutServices, services } from '@/lib/dummyData'
import Image from 'next/image'
import React from 'react'

export const IconWithBG = (id: number, icon: any) => {
    const bgColor =
      id === 1
        ? 'bg-[#fff2f2]'
        : id === 2
          ? 'bg-[#e2f3ff]'
          : id === 3
            ? 'bg-[#F1E8FF]'
            : 'bg-[#FFE7FB]'
  
    return (
      <div className={`rounded-2xl p-4  ${bgColor}`}>
        <Image src={icon} alt="icon" />
      </div>
    )
  }

function ServicesWithTitle() {
  return (
    <div className=" grid grid-cols-2 mb-20">
      <div className="pl-[20%]">
        <div className="bg-[#4628A4] p-1 w-[100px] mb-10"></div>
        <h1 className="text-3xl leading-relaxed font-semibold">
          Lorem Ipsum is simply dummy <br /> text of the printing.{' '}
        </h1>
        <p className="leading-loose w-[60%] my-10">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects.
        </p>
        <Button variant="white" className='border-[#1090CB]' size="lg">Contact us</Button>
      </div>
      <div
        className="py-10 px-16"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }}
      >
        <div className="grid md:grid-cols-2 gap-6 h-full">
        {aboutServices.map(
          (service: {
            id: number
            title: string
            description: string
            icon: any
          }) => (
            <div key={service.id} className="flex gap-4 items-center">
              {IconWithBG(service.id, service.icon)}
              <div>
                <h1 className="text-lg font-semibold">{service.title}</h1>
              </div>
            </div>
          ),
        )}
      </div>
      </div>
    </div>
  )
}

export default ServicesWithTitle
