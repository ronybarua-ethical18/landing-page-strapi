import { blogs } from '@/lib/dummyData';
import Image from 'next/image';
import React from 'react';
import Author from './Author';

function LatestBlogs() {
  return (
    <div className='my-40 px-[10%]'>
      <div className='grid grid-cols-3 gap-14'>
        {blogs.map(({ id, img, title, desc }) => (
          <div key={id} className="mb-10">
            <div>
              <div className="relative">
                <Image src={img} alt={title} layout="responsive"  />
              </div>
              <div>
                <h2 className="font-semibold text-2xl leading-relaxed my-5">{title}</h2>
                <p className="font-light mt-3 text-base leading-loose">{desc}</p>
                <div className="mt-5">
                  <Author name="John Smith" date="2024-09-04"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
