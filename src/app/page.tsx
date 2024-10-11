import AtoZSection from '@/components/Homepage/AtoZSection';
import HomeTopSection from '@/components/Homepage/HomeTopSection';
import MovingSection from '@/components/Homepage/MovingSection';
import SlidingSection from '@/components/Homepage/SlidingText';
import MemberTestimonials from '@/components/MemberTestimonials/MemberTestimonials';
import ServiceSection from '@/components/ServiceCard/ServiceCard';
import StatsSection from '@/components/StatSection/StatSection';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <HomeTopSection />
      <MovingSection />
      <SlidingSection />
      <ServiceSection />
      <StatsSection />
      <WhyChooseUs />
      <AtoZSection />
      <MemberTestimonials />
    </div>
  );
}
