import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  icon: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage,icon, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src={`${icon}`}
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Carousel = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          icon="/research.svg"
          title="Research"
          subtitle="Soft robotics/artificial muscle,IOT devices and communication,3D printing"
          peopleJoined="10+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          icon="/doc.svg"
          title="Engineering Documentation"
          subtitle="Research assistance,Patent assistance"
          peopleJoined="10+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-3"
          icon="/man.svg"
          title="Manufacturing Assistance"
          subtitle="CNC,3D printing,Laser engraving and bender,Prototyping"
          peopleJoined="10+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-4"
          icon="/circuit.svg"
          title="Electronics"
          subtitle="Pcb designing,Embedded programming"
          peopleJoined="10+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-5"
          icon="/buss.svg"
          title="Business assistance"
          subtitle="Market assess,Startup support"
          peopleJoined="10+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-900 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
          About an <strong>ORCIAN.</strong> 
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          We are Orcians, a passionate group dedicated to social innovation and research that focuses on developing socially valuable products. As a privately funded organization, we are committed to making a positive impact on society and creating a better future for all. Join us on this exciting towards innovation and progress!
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Carousel