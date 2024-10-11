import React from 'react';
import AnimationOnScroll from '../AnimationOnScroll/AnimationOnScroll';

interface CardTitleDescriptionProps {
  subheading: string;
  title: string;
  description: string;
}

const CardTitleDescription = ({
  subheading,
  title,
  description,
}: CardTitleDescriptionProps) => {
  return (
    <div className="flex flex-col gap-4 text-center px-6">
      <div className="flex justify-center">
        <div className="text-lg font-semibold font-helvetica  text-green-600">
          {subheading}
        </div>
      </div>
      <AnimationOnScroll
        classNameInView="animate__fadeInUp"
        classNameNotInView=""
      >
        <h3 className=" text-4xl font-bold font-helvetica tracking-tight text-gray-900">
          {title}
        </h3>
      </AnimationOnScroll>
      <AnimationOnScroll classNameInView="animate__fadeInDown">
        <p className=" max-w-4xl mx-auto font-helvetica text-lg text-gray-50">
          {description}
        </p>
      </AnimationOnScroll>
    </div>
  );
};

export default CardTitleDescription;
