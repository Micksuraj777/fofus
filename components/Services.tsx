import { FEATURES } from '@/constants'
import Image from 'next/image'
import cn from 'classnames';

const Services = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
            <h2 className="bold-40 lg:bold-64 text-center">Our Services</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
                link={feature.link}
                linkdata={feature.linkdata}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  link:string;
  linkdata:string;
}

const FeatureItem = ({ title, icon, description,link,linkdata }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-[#3034af]">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
      <a
      href={link}
      target='_blank'
      className={cn({
        'p-2 text-white bg-[#3034af] mt-3 rounded-lg text-sm hover:bg-transparent hover:border-2 hover:border-[#3034af] hover:text-[#3034af]': title === 'Portfolio building',
        'hidden': title !== 'Portfolio building',
      })}
    >
      {linkdata}
    </a>
    </li>
  )
}

export default Services