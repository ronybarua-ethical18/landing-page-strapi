import React from 'react'
import Image from 'next/image'
import SocialLinksBar from '../home/SocialLinksBar'
import Phone from '../../../../public/phone.png'
import GPSImage from '../../../../public/gps.png'

function ContactDetails() {
  return (
    <div className="px-[10%] my-20 grid grid-cols-3 gap-10">
      <div>
        <h1 className="mb-5">Follow us</h1>
        <SocialLinksBar />
      </div>
      <div className="border-r-2 border-l-2 flex space-x-4 items-center justify-center">
        <Image src={Phone} alt="phone" />
        <h2 className="font-light">+94 4444 5555 6</h2>
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <Image src={GPSImage} alt="gps" />
        <h2 className="font-light">
          but also the leap into electronic typesetting
        </h2>
      </div>
    </div>
  )
}

export default ContactDetails
