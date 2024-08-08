import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container flex flex-col gap-20 pb-32 xl:flex-row">
      <div className="" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-20 lg:bold-40 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Welcome to Fofus Keychains
        </h1>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[1500px] italic">
          Discover Your Unique Keychain
        </p>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[1500px] text-justify italic">
          At Fofus Keychains, we specialize in crafting high-quality PLA-made
          keychains, designing personal characters, and bringing your thoughts
          and memories to life.
        </p>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[1500px] text-justify italic">
          In our fast-paced lives, keychains combine practicality with
          portability, providing a constant reminder of your most cherished
          memories. By converting your unique experiences into custom keychains,
          we create lasting mementos that travel with you everywhere. This makes
          them not just a daily essential but also a perfectly heartfelt gift
          for those you care about.
        </p>
        <Link href="https://ecommerce.orci.in/" target="_blank" className="flex p-4 bg-gradient-to-r from-blue-500 to-purple-500 w-fit rounded-lg mt-4 text-white hover:underline">
          Visit Our Store
        </Link>
      </div>
      <div className="relative flex flex-1 items-start">
      </div>
    </section>
  );
};

export default Hero;
