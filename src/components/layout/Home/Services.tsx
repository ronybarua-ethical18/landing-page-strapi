import Image from 'next/image'
import React from 'react'
import { Separator } from '@/components/ui/separator'

const IconWithBG = (type: string, icon: any, width: number, height: number) => {
  const bgColor =
    type === 'purple'
      ? 'bg-[#efeaff]'
      : type === 'green'
        ? 'bg-[#ecffda]'
        : type === 'blue'
          ? 'bg-[#dae6ff]'
          : 'bg-[#f8dfd4]'

  return (
    <div className={`rounded-2xl p-4  ${bgColor}`}>
      <Image
        src={`http://localhost:1337${icon}`}
        width={width}
        height={height}
        alt="icon"
        layout="intrinsic"
      />
    </div>
  )
}

function Services({ data }: any) {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 md:px-[10%] sm:px-[5%] py-5 my-5">
        {data?.Service?.map(
          (service: {
            id: string
            title: string
            description: string
            bgType: string
            icon: any
          }) => (
            <div key={service.id} className="flex gap-4 items-center">
              {IconWithBG(
                service.bgType,
                service.icon?.data?.attributes?.url,
                service.icon?.data?.attributes?.width,
                service.icon?.data?.attributes?.height,
              )}
              <div>
                <h1 className="text-lg font-semibold">{service.title}</h1>
                <p className="text-sm text-gray-600 mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
      <Separator className="bg-[#C7C7C7] mb-5" />
    </div>
  )
}

export default Services
