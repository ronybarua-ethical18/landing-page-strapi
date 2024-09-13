'use client'

import Image from 'next/image'
import React from 'react'

export const IconWithBG = (bgType: string, icon: any) => {
  const bgColor =
    bgType === 'purple'
      ? 'bg-[#F1E8FF]'
      : bgType === 'tomato'
        ? 'bg-[#fff2f2]'
        : bgType === 'blue'
          ? 'bg-[#e2f3ff]'
          : 'bg-[#FFE7FB]'

  return (
    <div className={`rounded-2xl p-4  ${bgColor}`}>
      <Image
        src={`http://localhost:1337${icon?.data?.attributes?.url}`}
        alt="vector user image"
        className="z-50"
        width={icon?.data?.attributes?.width}
        height={icon?.data?.attributes?.height}
        layout="intrinsic"
      />
    </div>
  )
}

function ServiceList({ data }: any) {
  return (
    <div className='relative mb-40'>
        <div className="absolute bottom-[-140px] w-full">
      <div
        className="py-10 px-16 bg-white w-[80%] m-auto"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px' }}
      >
        <div className="grid md:grid-cols-2 gap-14 h-full ">
          {data?.service?.map(
            (service: {
              id: number
              title: string
              description: string
              bgType: string
              icon: any
            }) => (
              <div key={service.id} className="flex gap-4 items-center">
                {IconWithBG(service.bgType, service.icon)}
                <div>
                  <h1 className="text-lg font-semibold">{service.title}</h1>
                  <p className="text-sm mt-2 text-[#797979]">
                    {service?.description}
                  </p>
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

export default ServiceList
