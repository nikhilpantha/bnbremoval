import {
  FileAudio,
  MessageCircle,
  MessagesSquare,
  ShieldPlus,
} from 'lucide-react';
import Image from 'next/image';
import AnimationOnScroll from '../AnimationOnScroll/AnimationOnScroll';

const points = [
  {
    icon: <MessagesSquare strokeWidth={1.5} className="h-10 w-10" />,
    title: 'Free for Consultation',
    description:
      'Get expert advice and a personalized moving plan at no cost to you.',
  },
  {
    icon: <MessageCircle strokeWidth={1.5} className="h-10 w-10" />,
    title: 'Professional Mover',
    description:
      'Our experienced team ensures a seamless and efficient moving experience.',
  },
  {
    icon: <ShieldPlus strokeWidth={1.5} className="h-10 w-10" />,
    title: 'Protection Services',
    description:
      'We offer comprehensive protection options for your belongings during transit.',
  },
  {
    icon: <FileAudio strokeWidth={1.5} className="h-10 w-10" />,
    title: 'Ready 24/7 Support',
    description:
      'Our dedicated support team is available around the clock to assist you.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10">
        <div className="flex flex-col w-full lg:col-span-7">
          <AnimationOnScroll classNameInView="animate__fadeInUp">
            <h2 className="text-base font-semibold font-helvetica text-primary-green text-center lg:text-left">
              WHY CHOOSE US
            </h2>
            <p className="mt-2 text-[40px] font-extrabold font-helvetica max-w-lg mx-auto tracking-normal leading-none text-black text-center lg:text-left">
              We’ll take care of your stuff like it was our own
            </p>
            <p className="py-4 text-gray text-lg tracking-normal font-helvetica font-medium text-center lg:text-left max-w-lg mx-auto">
              At our company, we treat your belongings with the utmost care and
              respect, ensuring they are safely packed, transported, and handled
              as if they were our own. Your peace of mind is our priority, and
              we are committed to delivering exceptional service every step of
              the way.
            </p>
          </AnimationOnScroll>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <AnimationOnScroll classNameInView="animate__fadeInUp">
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-lg p-4"
                >
                  <div className="text-green-500 mt-1">{point.icon}</div>
                  <div>
                    <h4 className="font-semibold font-helvetica tracking-normal text-xl text-gray-800">
                      {point.title}
                    </h4>
                    <p className="text-gray font-helvetica tracking-normal text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </AnimationOnScroll>
            ))}
          </div>
        </div>

        <AnimationOnScroll
          classNameInView="animate__fadeInRight"
          classNameNotInView="relative min-h-96 h-full w-full flex justify-center items-center lg:col-span-5"
        >
          <Image
            src="/whyChooseImage.jpg"
            alt="Why Choose Us Image"
            fill
            className="rounded-lg w-full h-full shadow-lg object-cover"
          />

          <div className="absolute -top-12 right-[-30px] bg-white h-[150px] w-[150px] hidden rounded-full p-4 shadow-2xl xl:flex items-center justify-center">
            <div className="p-4 text-center">
              <p className="text-[40px] font-mono font-extrabold text-primary-green">
                15+
              </p>
              <p className="text-gray font-helvetica text-xs">
                Storage Center Locations
              </p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
