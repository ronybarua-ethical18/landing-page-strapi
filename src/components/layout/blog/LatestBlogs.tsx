import { blogs } from '@/lib/dummyData'
import Image from 'next/image'
import React from 'react'
import Author from './Author'

function LatestBlogs({ data }: any) {
  return (
    <div className="my-40 px-[10%]">
      <div className="grid grid-cols-3 gap-14">
        {data?.blog.map((item: any) => (
          <div key={item.id} className="mb-10">
            <div>
              <div className="relative">
                <Image
                  src={`http://localhost:1337${item?.img?.data?.attributes?.url}`}
                  alt="vector user image"
                  className="z-50"
                  width={item?.img?.data?.attributes?.width}
                  height={item?.img?.data?.attributes?.height}
                  layout="responsive"
                />
              </div>
              <div>
                <h2 className="font-semibold text-2xl leading-relaxed my-5">
                  {item?.title}
                </h2>
                <p className="font-light mt-3 text-base leading-loose">
                  {item?.description}
                </p>
                <div className="mt-5">
                  <Author name={item?.author} date={item?.date} image={item?.authorImg}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestBlogs
