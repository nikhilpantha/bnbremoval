import React from 'react';
import Button from '../Button/Button';
import { cn } from '@/lib/utils';
import AnimationOnScroll from '../AnimationOnScroll/AnimationOnScroll';
import Link from 'next/link';

interface TitleDescriptionProps {
  title: string;
  desc: string;
  variant?: 'center' | 'start';
  label: string;
  className?: string;
  titleClassName?: string;
  descClassName?: string;
  buttonClassName?: string;
  showButton?: boolean;
}

const TitleDescription = ({
  title,
  desc,
  label,
  className,
  titleClassName,
  descClassName,
  buttonClassName,
  variant = 'center',
  showButton = true,
}: TitleDescriptionProps) => {
  return (
    <div
      className={cn(
        `flex flex-col gap-8 w-full`,
        variant === 'start' ? 'items-start' : 'items-center',
        className
      )}
    >
      <AnimationOnScroll
        classNameInView={cn('capitalize', titleClassName)}
        classNameNotInView="animate__animated animate__fadeInDown"
      >
        <h1>{title}</h1>
      </AnimationOnScroll>

      <AnimationOnScroll
        classNameInView={cn(descClassName)}
        classNameNotInView="tracking-normal animate__animated animate__fadeInUp"
      >
        <h4>{desc}</h4>
      </AnimationOnScroll>

      {showButton && (
        <AnimationOnScroll
          classNameInView={cn(descClassName)}
          classNameNotInView={cn(
            'w-fit',
            variant === 'start' ? 'place-self-start' : 'place-self-center',
            buttonClassName
          )}
        >
          <Link href={'/contact-us'}>
            <Button icon>{label}</Button>
          </Link>
        </AnimationOnScroll>
      )}
    </div>
  );
};

export default TitleDescription;
