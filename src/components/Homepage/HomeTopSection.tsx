import React from 'react';
import MenuItems from './MenuItems';
import EstimateForm from './EstimateForm';

const HomeTopSection = () => {
  return (
    <div>
      <MenuItems
        title="We take the stress out of moving"
        description="Lt tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        label="Discover More"
        imageSrc="/assets/worker2.jpg"
        showButton
      >
        <div className="grid items-center lg:grid-cols-3 gap-10 md:py-20 w-full px-6">
          <div className="md:col-span-2 py-40 md:py-0 px-4 space-y-4 animate__animated animate__fadeInLeft">
            <h1 className="text-6xl font-bold text-white text-center lg:text-left">
              Our aim is to satisfy customers.
            </h1>
            <p className="text-white text-xl text-center lg:text-left">
              Your Trusted Family Moving Company in Sydney, Australia
            </p>
          </div>
          <div className="hidden lg:block animate__animated animate__fadeInRight">
            <EstimateForm />
          </div>
        </div>
      </MenuItems>
      <div className="block  lg:hidden py-10">
        <EstimateForm />
      </div>
    </div>
  );
};

export default HomeTopSection;
