import { Input } from '@/components/ui/input'
import React from 'react'
import { FaSearch } from 'react-icons/fa'


function HeadingWithTags({data}:any) {
  return (
    <div className="my-20 px-[10%]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <h1 className="text-3xl font-bold text-[#1090CB] mt-3">{data?.subTitle}</h1>
        <p className="text-[#777777] leading-relaxed my-5">
          {data?.description}
        </p>

        <div className="flex items-center justify-center mt-8 mb-20">
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" /> 
            </span>
            <Input
              type="email"
              placeholder={data?.input?.placeholder}
              className="pl-10 rounded-lg bg-[#F1F1F1]"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 w-[70%] m-auto">
          {data?.tag.map((item:any) => (
            <div
              key={item.id}
              className="py-2 px-3 cursor-pointer hover:bg-[#1090CB] group rounded-3xl bg-[#E7EFF3] hover:transition-all hover:ease-in-out"
            >
              <h3 className="text-sm text-[#1090CB] group-hover:text-white ">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default HeadingWithTags
