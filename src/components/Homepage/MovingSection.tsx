import { Check } from 'lucide-react';
import Image from 'next/image';

const points = [
  'Dedicated and Professional Mover',
  'One of 10 Best Moving Service Companies',
  'Bringing solutions to moving problems',
];

const MovingSection = () => {
  return (
    <section className="py-16 bg-gray-50 max-w-7xl lg:mx-auto px-6">
      <div className="gap-10 md:gap-20 lg:flex space-y-10 lg:space-y-0 lg:flex-row-reverse">
        <div className="flex gap-2 h-[300px] sm:h-[400px] md:h-[500px] w-full">
          <div className="h-full w-full relative animate__animated animate__fadeInUp">
            <Image
              src={'/assets/worker1.jpg'}
              alt="Image 1"
              fill
              className="rounded-lg object-cover h-full w-full shadow-lg"
            />
          </div>
          <div className="flex flex-col h-full w-full gap-2">
            <div className="h-full w-full relative animate__animated animate__fadeInLeft">
              <Image
                src={'/assets/worker2.jpg'}
                alt="Full Height Image"
                fill
                className="rounded-lg w-full object-cover] shadow-lg h-[60%] "
              />
            </div>
            <div className="h-full w-full relative animate__animated animate__fadeInRight">
              <Image
                src={'/assets/worker3.jpg'}
                alt="Smaller Image"
                fill
                className="rounded-lg w-full  shadow-lg object-cover h-[40%]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full justify-center col-start-1 animate__animated animate__fadeInLeft">
          <h2 className="text-base font-semibold font-helvetica text-primary-green">
            WHO WE ARE
          </h2>

          <h2 className=" font-bold font-helvetica tracking-normal leading-none text-black">
            We handle your belongings with care, leaving no trace behind.
          </h2>

          <h3 className="tracking-normal font-helvetica border-l-4 pl-4 border-primary-green text-gray">
            Experience a seamless move with our trusted team. We handle your
            belongings with care, ensuring a stress-free transition to your new
            home.
          </h3>

          <h5 className=" text-gray font-medium tracking-normal">
            Experienced and strong Boys Best removal in Sydney Your moving
            stress is ours now
          </h5>

          <div className="flex flex-col mt-2 gap-3">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center tracking-[0px] h-10 border-b-slate-400/30 border-b text-gray font-semibold"
              >
                <Check
                  strokeWidth={4}
                  className="text-white bg-primary-green rounded-sm w-5 h-5 p-[4px] mr-2"
                />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingSection;
