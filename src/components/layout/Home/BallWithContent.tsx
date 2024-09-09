import Image from 'next/image'
import React from 'react'
import Happy from '../../../../public/happy.png'

function BallWithContent({ type }: { type: string }) {
  return (
    <div>
      <div className="flex gap-6 items-center">
        <div
          className={`rounded-full p-3 ${type === 'mobile' ? 'bg-[#08d3bb]' : type === 'vr' ? 'bg-[#9208d3]' : 'bg-[#0f88c0]'} `}
        >
          <Image src={Happy} alt="ball icon" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Lorem Ipsum is simply dummy text
          </h1>
          <h2 className="text-sm font-light mt-1">
            Lorem Ipsum is simply dummy text
          </h2>
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-4xl font-semibold leading-relaxed">
          <span className="text-[#0f88c0]">Lorem Ipsum</span> is simply dummy
          text of the printing.
        </h1>
        <p className='leading-relaxed text-base mt-5'>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.{' '}
        </p>
      </div>
    </div>
  )
}

export default BallWithContent
