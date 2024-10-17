import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FindCoverage = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 animate__animated animate__fadeInDown">
      <div className="max-w-[1445px] w-full mx-auto">
        <div className="w-full lg:rounded-b-md h-30 p-4 px-4 items-center place-self-center mx-auto bg-custom-blue flex justify-between">
          <div className="flex gap-4">
            <div className="flex gap-2 text-white lg:border-r border-white/30 items-center pr-4">
              <Phone fill="#4ECA71" size={18} className="text-primary-green" />
              <span>+61 452 426 031</span>
            </div>

            <div className="md:flex gap-2 text-white hidden items-center">
              <MapPin fill="#4ECA71" size={18} className="text-primary-green" />
              <span>789 Oak St, Smalltown, TX 23456, US</span>
            </div>
          </div>

          <div className="hidden xs:block py-1">
            <Link href={`tel:${+61452426031}`}>
              <span className="border-none px-6 py-3 text-sm text-md bg-primary-green rounded-md uppercase text-white font-semibold tracking-0">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCoverage;
