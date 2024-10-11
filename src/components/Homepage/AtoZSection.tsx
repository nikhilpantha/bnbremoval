import Image from 'next/image';
import React from 'react';
import TitleDescription from '../TitleDescrtption/TitleDescription';

const AtoZSection = () => {
  return (
    <div className="relative w-full flex justify-center h-[600px] sliding-image bg-center">
      <Image
        src={'/assets/worker3.jpg'}
        alt="A to Z"
        layout="fill"
        className="object-cover fixed w-full h-full"
      />

      <div className="absolute top-0 left-0 bg-custom-blue/60 w-full flex justify-center md:justify-start items-center h-full z-10">
        <div className="max-w-7xl w-full mx-auto">
          <TitleDescription
            title="We will take care of all your moving needs from A to Z!"
            desc="We provide comprehensive moving services, handling every detail from start to finish, ensuring a seamless and stress-free experience tailored to your specific needs."
            label="Contact US"
            className="z-5 text-center md:text-start w-full md:max-w-lg lg:w-[50%] px-4"
            titleClassName="text-white text-4xl font-bold"
            descClassName="text-white"
            buttonClassName="border-none place-self-center md:place-self-start"
            variant="start"
          />
        </div>
      </div>
    </div>
  );
};

export default AtoZSection;
