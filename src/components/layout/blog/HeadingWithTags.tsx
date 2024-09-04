import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import HeadingImg from '../../../../public/heading.png'
import Author from './Author'

const tags = [
  {
    id: 1,
    title: 'Lorem ipsum',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
  },
]

function HeadingWithTags() {
  return (
    <div className="my-20 px-[10%]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Latest news</h1>
        <h1 className="text-3xl font-bold text-[#1090CB] mt-3">Updates</h1>
        <p className="text-[#777777] leading-relaxed my-5">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <div className="flex items-center justify-center mt-8 mb-20">
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" /> {/* Your icon */}
            </span>
            <Input
              type="email"
              placeholder="Search"
              className="pl-10 rounded-lg bg-[#F1F1F1]"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 w-[70%] m-auto">
          {tags.map(tag => (
            <div
              key={tag.id}
              className="py-2 px-3 cursor-pointer hover:bg-[#1090CB] group rounded-3xl bg-[#E7EFF3] hover:transition-all hover:ease-in-out"
            >
              <h3 className="text-sm text-[#1090CB] group-hover:text-white ">
                {tag.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-10 my-32 w-[80%] m-auto place-items-center">
          <div className="">
            <Image src={HeadingImg} alt="headingimage" />
          </div>
          <div className="mb-5 text-left">
            <h1 className="text-3xl font-semibold leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing.
            </h1>
            <p className="text-[#424242] leading-loose mt-5 mb-8 w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the .
            </p>
            <Author name="John Smith" date="2024-09-04" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadingWithTags
