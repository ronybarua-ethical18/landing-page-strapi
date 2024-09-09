import Image from 'next/image'
import React from 'react'
import Line from '../../../../public/line.png'
import Mobile from '../../../../public/mobilefull.png'
import MobileMock from '../../../../public/mobileMock.png'
import VRMen from '../../../../public/vrmen.png'
import BallWithContent from './BallWithContent'

function Features({ data }: any) {
  const features = data?.Feature || [] 

  const renderFeature = (feature: any, index: number) => {
    const imageSrc = feature?.featureImg?.data?.attributes?.url 
      ? `http://localhost:1337${feature?.featureImg?.data?.attributes?.url}`
      : feature.type === 'mobile'
        ? Mobile
        : feature.type === 'web'
          ? MobileMock
          : VRMen;

    const imageWidth = feature?.featureImg?.data?.attributes?.width || 500;  
    const imageHeight = feature?.featureImg?.data?.attributes?.height || 500; 

    const isImageRight = feature.type !== 'web'; 
    const gridLayout = isImageRight
    ? 'grid-cols-[40%_60%]'
    : feature.type === 'web'
      ? 'grid-cols-[45%_55%]'
      : 'grid-cols-[60%_40%]'

    return (
      <div
        className={`grid ${gridLayout} gap-6 place-items-start ${feature?.type === 'vr' ? 'mt-44' : 'mt-14'}`}
        key={index}
      >
        {isImageRight ? (
          <>
            <div className="w-full z-50">
              <BallWithContent type={feature.type} />
            </div>
            <div className="w-full flex justify-end">
                <Image
                  src={imageSrc}
                  alt={feature.type}
                  width={imageWidth} 
                  height={imageHeight} 
                  layout="intrinsic"
                />
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex justify-start">
                <Image
                  src={imageSrc}
                  alt={feature.type}
                  width={imageWidth}  
                  height={imageHeight} 
                  layout="intrinsic"
                  style={{zIndex:9999}}
                />
            </div>
            <div className="w-[75%] z-50 flex items-center h-full">
              <BallWithContent type={feature.type} />
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="my-20 px-[10%] ">
        <section>
          <h1 className="text-center text-3xl font-semibold">{data?.title}</h1>
          <h2 className="text-center text-base font-light mt-5 text-[#868686] leading-relaxed">
            {data?.subTitle}
          </h2>
        </section>
        <section className="mt-28 ">
          <div className="relative">
            <div className="absolute left-[-3%]">
              <div className="relative w-full h-auto">
                <Image
                  src={
                    `http://localhost:1337${data?.dotLineImg?.data?.attributes?.url}` || Line
                  }
                  alt="line"
                  width={data?.dotLineImg?.data?.attributes?.width || 500}
                  height={data?.dotLineImg?.data?.attributes?.height || 500}
                  layout="intrinsic"
                />
              </div>
            </div>

            {features.map((feature: any, index: number) =>
              renderFeature(feature, index),
            )}
          </div>
          <div className="absolute right-0 top-[15%] opacity-60">
            <div className="relative w-full h-auto">
              <Image
                src={
                  `http://localhost:1337${data?.mobileCircleImg?.data?.attributes?.url}` || Line
                }
                alt="line"
                width={data?.mobileCircleImg?.data?.attributes?.width || 500}
                height={data?.mobileCircleImg?.data?.attributes?.height || 500}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-70">
            <div className="relative w-full h-auto">
              <Image
                src={
                  `http://localhost:1337${data?.arCircleImg?.data?.attributes?.url}` || Line
                }
                alt="line"
                width={data?.arCircleImg?.data?.attributes?.width || 500}
                height={data?.arCircleImg?.data?.attributes?.height || 500}
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="absolute left-[2%] top-1/3 ">
            <div className="relative w-full h-auto">
              <Image
                src={
                  `http://localhost:1337${data?.webCircleImg?.data?.attributes?.url}` || Line
                }
                alt="line"
                width={data?.webCircleImg?.data?.attributes?.width || 500}
                height={data?.webCircleImg?.data?.attributes?.height || 500}
                layout="intrinsic"
                className='z-20'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Features;
