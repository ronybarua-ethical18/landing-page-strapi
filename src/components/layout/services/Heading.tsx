import Image from 'next/image'
import React from 'react'
import ServiceIcon from '../../../../public/service.png'
import { aboutServices, servicesWithDesc } from '@/lib/dummyData'

export const IconWithBG = (id: number, icon: any) => {
  const bgColor =
    id === 1
      ? 'bg-[#F1E8FF]'
      : id === 2
        ? 'bg-[#fff2f2]'
        : id === 3
          ? 'bg-[#e2f3ff]'
          : 'bg-[#FFE7FB]'

  return (
    <div className={`rounded-2xl p-4  ${bgColor}`}>
      <Image src={icon} alt="icon" />
    </div>
  )
}

function Heading() {
  return (
    <div className="bg-[#e7f4fa] pt-20 pb-52 mb-52 relative">
      <div className="flex flex-col justify-center items-center">
        <Image src={ServiceIcon} alt="icon" />
        <h1 className="text-3xl font-semibold my-5">
          Our <span className="text-[#1090CB]">Services</span>
        </h1>
        <p className="leading-relaxed w-[30%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>

      <div className='absolute bottom-[-140px] w-full'>
        <div
          className="py-10 px-16 bg-white w-[80%] m-auto"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }}
        >
          <div className="grid md:grid-cols-2 gap-14 h-full ">
            {servicesWithDesc.map(
              (service: {
                id: number
                title: string
                description: string
                serviceDesc:string
                icon: any
              }) => (
                <div key={service.id} className="flex gap-4 items-center">
                  {IconWithBG(service.id, service.icon)}
                  <div>
                    <h1 className="text-lg font-semibold">{service.title}</h1>
                    <p className='text-sm mt-2 text-[#797979]'>{service.serviceDesc}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
