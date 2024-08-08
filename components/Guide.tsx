import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[400px]">How It Works ?</h2>
          <ul className="regular-16 text-gray-500 xl:max-w-[520px] list-disc">
            <li>
              <strong>Browse Our online store:</strong>Explore our extensive range of keychains and find the one that
              speaks to you.
            </li>
            <li>
              <strong>Customize :</strong>Use our customization tool to add your personal touch.
            </li>
            <li>
              <strong>Place Your Order:</strong> Enjoy a seamless shopping experience with our secure checkout
              process.
            </li>
            <li>
              <strong>Fast & Reliable delivery:</strong>Get your custom creations delivered with care and precision.
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="flexCenter max-container relative w-full">
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
      </div> */}
    </section>
  )
}

export default Guide