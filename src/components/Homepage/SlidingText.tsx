import React from 'react';
import TitleDescription from '../TitleDescrtption/TitleDescription';

const SlidingSection = () => {
  return (
    <div className="relative w-full h-[600px] bg-fixed bg-cover bg-center sliding-image">
      <div className="absolute top-0 left-0 bg-custom-blue/60 w-full h-full z-10 flex justify-center items-center">
        <TitleDescription
          title="We provide reliable, professional services to make your transition smooth and worry-free"
          desc="We offer dependable and expert services designed to ensure your transition is seamless and stress-free. Our dedicated team prioritizes your needs, providing personalized support every step of the way to help you navigate changes with confidence."
          label="Contact US"
          className="z-10 text-center px-10 w-full lg:w-[40%]"
          titleClassName="text-white text-4xl font-bold"
          descClassName="text-white text-center"
          buttonClassName="border-none"
        />
      </div>
    </div>
  );
};

export default SlidingSection;
