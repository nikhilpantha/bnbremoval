'use client';
import Image from 'next/image';
import React from 'react';
import { navItem } from '../Homepage/MenuItems';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div
      className={`bg-cover bg-center w-full relative bg-custom-blue bg-gradient-to-b from-custom-blue  to-black/100 py-20 xl:py-40`}
    >
      <div className="grid xl:grid-cols-4 gap-20 max-w-[1445px] mx-auto text-white px-6">
        <div className="text-white space-y-6 xl:col-span-2">
          <Image src={'/logo.png'} alt="eaze move" height={80} width={100} />
          <div className="space-y-4">
            <h1 className="text-white">B & B Removal</h1>
            <p>
              We help people to move from one place to another. House moving.
              Unit Rubbish
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <h3>Links</h3>
          <div className="space-y-6">
            {navItem.map((item) => (
              <Link href={item.href} key={item.href}>
                <p className="hover:text-primary-green transition transform duration-500 ease-in-out text-xl pb-6">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h3>Contact us</h3>
          <div className="space-y-6">
            <div className="flex gap-2 text-white items-center pr-4">
              <Phone fill="#4ECA71" size={24} className="text-primary-green" />
              <span className="text-xl">+61 452 426 031</span>
            </div>

            <div className="md:flex gap-2 text-white hidden items-center">
              <MapPin fill="#4ECA71" size={24} className="text-primary-green" />
              <span className="text-xl">5065/57-59 Queen street</span>
            </div>
            <div className="md:flex gap-2 text-white hidden items-center">
              <MdEmail
                fill="#4ECA71"
                size={24}
                className="text-primary-green"
              />
              <span className="text-xl">nikhilpantha207@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
