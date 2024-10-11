import AboutUsTopSection from '@/components/Aboutus/AboutUsTopSection';
import Leadership from '@/components/Aboutus/LeaderShip';
import MovingSection from '@/components/Homepage/MovingSection';
import StatsSection from '@/components/StatSection/StatSection';
import React from 'react';

const page = () => {
  return (
    <div>
      <AboutUsTopSection />
      <MovingSection />
      <StatsSection />
      <Leadership />
    </div>
  );
};

export default page;
