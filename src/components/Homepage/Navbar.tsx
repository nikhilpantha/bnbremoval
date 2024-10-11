import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="h-fit w-full fixed py-3 inset-0 bg-black z-20 flex justify-between px-6">
        <Image
          src={'/assets/logo.svg'}
          alt="logo"
          height={150}
          width={150}
          className="p-2"
        />

        <button className="px-5 py-1 rounded-sm text-[14px] text-white font-medium bg-dark-green border-none">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
