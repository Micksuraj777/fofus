import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
}

const CampSite = ({ backgroundImage, title, }: CampProps) => {
  return (
    <div className={`h-[300px] w-[500px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
        </div>
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
          
          title="Deadpool keychain"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          
          title="Rusty Keychain"
        />
        <CampSite 
          backgroundImage="bg-bg-img-3"
          
          title="Buddha Keychain"
        />
        <CampSite 
          backgroundImage="bg-bg-img-4"
          
          title="Compass Keychain"
        />
        <CampSite 
          backgroundImage="bg-bg-img-5"
          
          title="Cups Keychain"
        />
        <CampSite 
          backgroundImage="bg-bg-img-6"
          
          title="Tiger paw Keychain"
        />
        <CampSite 
          backgroundImage="bg-bg-img-7"
          
          title="Brawl Keychain"
        />
      </div>

      <div className="flexEnd mt-2 px-6 lg:-mt-96 lg:mr-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
          Why Choose <strong>Fofus Keychains?</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Fofus Keychains offers eco-friendly keychains made from PLA, a biodegradable and renewable material, promoting sustainability. They feature a diverse range of unique designs, regularly updated to suit various tastes and occasions. Customers can personalize their keychains with custom designs, colors, and messages. Each keychain is crafted with high-quality craftsmanship, ensuring durability and a polished finish.
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