import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Hello() {
  return (
    <div className="bg-[#e8f4fa] px-[10%] py-20">
      <div className="text-center">
        <h1 className="text-3xl font-normal mb-4">Say Hello</h1>
        <p className="text-[#777777]">
          Lorem Ipsum is simply dummy text of the printing .
        </p>
      </div>
      <div className="w-[55%] m-auto mt-10">
        <div className="grid grid-cols-2 gap-8">
          <Input
            type="email"
            placeholder="First name"
            className="rounded-lg bg-[#fff]"
          />
          <Input
            type="email"
            placeholder="Last name"
            className="rounded-lg bg-[#fff]"
          />
        </div>
        <div className="">
          <Input
            type="email"
            placeholder="Email Address"
            className="rounded-lg bg-[#fff] my-10"
          />
          <Textarea placeholder="Type your message here." className='bg-white' rows={14} />
        </div>
      </div>
    </div>
  )
}
