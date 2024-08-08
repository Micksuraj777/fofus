import { FEATURES } from "@/constants";

const Services = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
          <h2 className="bold-40 lg:bold-64 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Explore Our Services
          </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
          <h3 className="mt-6 text-gray-800 font-medium text-lg italic">
            Join the Fofus Community
          </h3>
          <p className="italic">
            Follow us on social media and share your Fofus Keychains moments
            with{" "}
            <a
              href="https://www.instagram.com/fofus.keychains?igsh=aDA4YzU3cnBuZzU5"
              target="_blank"
              className="text-blue-600"
            >
              #FofusKeychains
            </a>
            . Stay updated with our latest designs, special offers, and
            behind-thescenes content.
          </p>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 text-gray-500 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Services;
