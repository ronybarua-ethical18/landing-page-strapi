import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Pie from "../../../../public/pie.png"
import Star from "../../../../public/star.png"
import Image from 'next/image'

function ContactEmail({data}:any) {
  return (
    <div className="bg-[#e7f3f9] py-24 text-center relative">
      <h1 className="text-3xl font-semibold leading-relaxed">
        Lorem Ipsum is simply dummy <br />
        text of the printing.{' '}
      </h1>
      <div className="flex w-[40%] m-auto items-center space-x-2 justify-center mt-16">
        <Input type="email" placeholder="Email" className='rounded-lg' />
        <Button type="submit" className="h-14" size="lg">
          Subscribe
        </Button>
      </div>
      <div className="absolute right-1/3 top-[10%]">
        <Image src={Pie} alt="logo" />
      </div>
      <div className="absolute left-[10%] top-[-45px]">
        <Image src={Star} alt="logo" />
      </div>
    </div>
  )
}

export default ContactEmail
