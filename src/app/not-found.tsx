import MenuItems from '@/components/Homepage/MenuItems';
import Link from 'next/link';

import React from 'react';

const pages = () => {
  return (
    <div>
      <MenuItems
        title="About Us"
        description="When you call us, you can rest assured that we’ll take care of every detail of your move"
        imageSrc="/assets/worker3.jpg"
        showButton={false}
        label=""
        height={50}
      >
        <div className="grid items-center lg:grid-cols-3 gap-10 md:py-20 w-full px-6">
          <div className="md:col-span-2 py-40 text-center flex flex-col items-center justify-center md:py-0 px-4 space-y-4 animate__animated animate__fadeInLeft">
            <h1 className="text-6xl font-bold text-white text-center lg:text-left">
              404
            </h1>
            <p className="text-white text-xl text-center lg:text-left">
              Page not found
            </p>
            <Link href="/">
              <p className="px-6 py-2 text-white bg-primary-green rounded-md">
                go back to home page
              </p>
            </Link>
          </div>
        </div>
      </MenuItems>
    </div>
  );
};

export default pages;
