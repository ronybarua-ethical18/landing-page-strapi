import Image from 'next/image'
import React from 'react'
import AboutImgOne from '../../../../public/about1.png'
import AboutImgTwo from '../../../../public/about2.png'
import AboutImgThree from '../../../../public/about3.png'
import AboutImgFour from '../../../../public/about4.png'
import AboutTopEllipse from '../../../../public/aboutTopEllipse.png'
import AboutBottomEllipse from '../../../../public/aboutBottomEllipse.png'
import DotFrame from '../../../../public/dotFrame.png'

function Heading() {
  return (
    <div className="px-[10%] mb-40 mt-28 relative">
      <div className="grid grid-cols-2 gap-14 ">
        <div className="flex items-end gap-14 justify-end">
          <Image
            src={AboutImgTwo}
            alt="aboutimg"
            className="object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
          <Image src={AboutImgOne} alt="aboutimg" />
        </div>
        <div>
          <h2 className="text-xl font-normal text-[#1090CB]">About us</h2>
          <h1 className="text-4xl font-semibold leading-relaxed my-6">
            Lorem Ipsum is simply <br />
            dummy text of the printing.{' '}
          </h1>
          <p className="font-normal leading-relaxed w-[50%] text-[#868686]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </div>
      <div className="flex gap-14 justify-center mt-10 relative">
        <Image
          src={AboutImgThree}
          alt="aboutimg"
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image src={AboutImgFour} alt="aboutimg" className="z-50" />
        <div className="absolute right-0 bottom-[-100px]">
          <Image src={DotFrame} alt="dotImage" />
        </div>
      </div>
      <div className="absolute top-[-220px] right-0">
        <Image src={AboutTopEllipse} alt="aboutimg" />
      </div>
      <div className="absolute top-1/2 left-0 z-50">
        <Image src={AboutBottomEllipse} alt="aboutimg" />
      </div>
    </div>
  )
}

export default Heading
