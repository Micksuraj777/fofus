import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/orci.png" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-900">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">At ORCI, our mission is to empower small-scale businesses and support their growth. Our team of dedicated experts is committed to enhancing the appeal and professionalism of your business. Let us guide you on the path to success and help you reach new heights</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/business.jpeg"
          alt="boat"
          width={1440}
          height={200}
          className="w-full h-[580px] object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:right-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="bold-20 mt-2">Big Scale Industry</p>
              </div>
            </div>

            <div className='flex w-full flex-col'>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Small Scale Industry</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide