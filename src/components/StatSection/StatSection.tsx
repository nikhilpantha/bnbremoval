import { Heart, PackageOpen, Truck } from 'lucide-react';
import React from 'react';
import AnimationOnScroll from '../AnimationOnScroll/AnimationOnScroll';

interface StatSectionProps {
  id: number;
  icon: React.ReactNode;
  value: string;
  description: string;
}

const stats: StatSectionProps[] = [
  {
    id: 1,
    icon: <PackageOpen className="text-white" />,
    value: '700+',
    description: 'Storage Center Locations',
  },
  {
    id: 2,
    icon: <Truck className="text-white" />,
    value: '800+',
    description: 'Million Long-Distance Moves',
  },
  {
    id: 3,
    icon: <Heart className="text-white" />,
    value: '300+',
    description: 'Clients Happy & Trust Us',
  },
];

const StatsSection = () => {
  return (
    <div className="bg-softGray">
      <div className="bg-softGray max-w-7xl mx-auto flex flex-col py-16 px-4 md:px-8">
        <div className="flex flex-col xl:flex-row md:items-center gap-10">
          <AnimationOnScroll
            classNameInView="animate__animated animate__fadeInLeft"
            classNameNotInView="flex flex-col items-center xl:items-start w-full xl:w-[35%]"
          >
            <h2 className="text-[35px] md:text-[40px] font-bold mb-2 text-center xl:text-left">
              Facts about our moving service
            </h2>
            <div className="h-1 w-10 bg-green-500"></div>
          </AnimationOnScroll>

          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-8 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex flex-col items-center bg-white md:bg-transparent w-[300px] md:w-auto py-6 rounded-md md:rounded-none shadow-md md:shadow-none ${
                  index !== stats.length - 1 &&
                  'md:border-r-4 border-grayLight border-dashed md:pr-12'
                }`}
              >
                <div className="bg-darkBlue rounded-md p-5 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-[45px] md:text-[50px] font-bold mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-base md:text-sm text-center">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
