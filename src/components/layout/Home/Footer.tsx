import React from 'react'
import SocialLinksBar from './SocialLinksBar'

function Footer() {
  return (
    <div className="grid grid-cols-4 gap-9 px-[10%] py-20 border">
      <div className="">
      <h1 className='font-bold text-2xl'><span className='text-[#1090CB]'>Next</span>Strapi</h1>
        <p className="my-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </p>
        <p>@Lorem </p>
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-6">About us</h2>
        <ul>
          <li>Lorem</li>
          <li>Portfolio</li>
          <li>Careers</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
      <h2 className="font-semibold text-lg">Contact us</h2>
        <p className="my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>+908 89097 890</p>
      </div>
      <div className='flex items-end'>
        <SocialLinksBar />
      </div>
    </div>
  )
}

export default Footer
