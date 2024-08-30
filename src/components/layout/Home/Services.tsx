import { services } from '@/lib/dummyData'
import Image from 'next/image'
import React from 'react'
import { Separator } from '@/components/ui/separator'

function Services() {
  const IconWithBG = (id: number, icon: any) => {
    const bgColor =
      id === 1
        ? 'bg-[#efeaff]'
        : id === 2
          ? 'bg-[#ecffda]'
          : id === 3
            ? 'bg-[#dae6ff]'
            : 'bg-[#f8dfd4]'

    return (
      <div className={`rounded-2xl p-4  ${bgColor}`}>
        <Image src={icon} alt="icon" />
      </div>
    )
  }

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 md:px-[10%] sm:px-[5%] py-5 my-4">
        {services.map(
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
