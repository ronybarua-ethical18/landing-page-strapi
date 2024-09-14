import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Hello({ data }: any) {
  return (
    <div className="bg-[#e8f4fa] px-[10%] py-20">
      <div className="text-center">
        <h1 className="text-3xl font-normal mb-4">{data?.title}</h1>
        <p className="text-[#777777]">{data?.subTitle}</p>
      </div>
      <div className="w-[55%] m-auto mt-10">
        <div className="grid grid-cols-2 gap-8">
          {data?.input?.slice(0, 2).map((item:any) => (
            <Input
              key={item.id}
              type={item.type}
              placeholder={item.placeholder}
              className="rounded-lg bg-[#fff]"
            />
          ))}
        </div>
        <div className="">
          <Input
            key={data?.input[2].id}
            type={data?.input[2].type}
            placeholder={data?.input[2].placeholder}
            className="rounded-lg bg-[#fff] my-10"
          />
          <Textarea
            key={data?.input[3].id}
            placeholder={data?.input[3].placeholder}
            className="bg-white"
            rows={data?.input[3].row}
          />
        </div>
      </div>
    </div>
  )
}
