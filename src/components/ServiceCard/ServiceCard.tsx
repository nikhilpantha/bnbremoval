import React from 'react';
import {
  Archive,
  Building2,
  Map,
  Package2,
  Radar,
  TruckIcon,
} from 'lucide-react';
import CardTitleDescription from '../TitleDescrtption/CardTitleDescription';
import ServiceCard from './Service';
import AnimationOnScroll from '../AnimationOnScroll/AnimationOnScroll';
import { cn } from '@/lib/utils';

const servicingOptions = [
  {
    icon: <Map className="h-16 w-16 p-2 text-white" />,
    title: 'Local Moving',
    description:
      'Efficient local moving services to help you settle in seamlessly.',
  },
  {
    icon: <TruckIcon className="h-16 w-16 p-2 text-white" />,
    title: 'Rubbish Removal',
    description: 'Hassle-free rubbish removal to declutter your space.',
  },
  {
    icon: <Archive className="h-16 w-16 p-2 text-white" />,
    title: 'Office Moving',
    description:
      'Professional office moving to minimize disruption and downtime.',
  },
  {
    icon: <Building2 className="h-16 w-16 p-2 text-white" />,
    title: 'Interstate Moving',
    description:
      'Reliable interstate moving services for a smooth long-distance transition.',
  },
  {
    icon: <Radar className="h-16 w-16 p-2 text-white" />,
    title: 'House/Apartment Moving',
    description:
      'Comprehensive house and apartment moving solutions tailored to your needs.',
  },
  {
    icon: <Package2 className="h-16 w-16 p-2 text-white" />,
    title: 'Pick-Up and Drop-Off',
    description:
      'Convenient pick-up and drop-off services to simplify your logistics.',
  },
];

const ServiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <CardTitleDescription
        subheading="OUR SERVICES"
        title="Moving Services For Every Need"
        description="Gravida elit class natoque nisi etiam consectetur eget dui
          consectetur. Molestie sit imperdiet congue euismod senectus eleifend
          sociosqu turpis."
      />

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mx-auto max-w-7xl">
        {servicingOptions.map((option, index) => (
          <AnimationOnScroll
            classNameInView={cn(
              'animate__animated',
              index % 3 === 0
                ? 'animate__fadeInLeft'
                : index % 3 === 1
                ? 'animate__fadeInUp'
                : 'animate__fadeInRight'
            )}
            classNameNotInView=""
          >
            <ServiceCard
              key={option.title}
              title={option.title}
              description={option.description}
              icon={option.icon}
            />
          </AnimationOnScroll>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
