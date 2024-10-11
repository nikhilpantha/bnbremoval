import React from 'react';

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: PricingCardProps) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-2xl flex flex-col justify-between h-full border border-transparent hover:border-green-500 transition duration-300">
      <div className="mb-4 text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-primary-green rounded-md">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold font-helvetica text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray text-lg tracking-normal font-helvetica">
          {description}
        </p>
      </div>

      {/* <div className="mt-auto font-helvetica text-center"> 
       <a
          href="/learn-more"
          className="inline-block mt-4 text-green-500 font-semibold border-b border-green-500 hover:text-green-600"
        >
          Learn More
        </a> 
  </div> */}
    </div>
  );
};

export default ServiceCard;
