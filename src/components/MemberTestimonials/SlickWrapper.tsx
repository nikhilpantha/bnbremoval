'use client';
import Slider from 'react-slick';
import { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlickWrapperProps {
  children: ReactNode;
  settings: any;
}

const SlickWrapper = ({ children, settings }: SlickWrapperProps) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SlickWrapper;
