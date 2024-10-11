'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import FindCoverage from './FindCoverage';

interface MenuItem {
  name: string;
  href: string;
}

interface MenuItemsProps {
  title: string;
  description: string;
  label: string;
  imageSrc: string;
  showButton: boolean;
  height?: number;
  children?: React.ReactNode;
}

export const navItem: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
];

const MenuItems = ({ imageSrc, height = 80, children }: MenuItemsProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`max-h-[900px] h-[${height}vh] bg-cover bg-center w-full relative`}
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <FindCoverage />
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="lg:p-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={'/logo.png'}
                alt="eaze move"
                height={50}
                width={150}
              />
            </Link>

            <button
              className="text-xl pr-5 font-bold text-black"
              onClick={toggleSidebar}
            >
              <XIcon />
            </button>
          </div>
          <ul className="mt-10">
            {navItem.map((item, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`relative w-full max-h-[900px] h-[${height}vh] bg-custom-blue bg-opacity-60 relative`}
      >
        <div className="max-w-[1445px] w-full mx-auto h-full">
          <div className="justify-center items-center flex flex-col pt-16 flex-1 h-full">
            <div className="mx-auto py-6 px-6 w-full flex justify-between bg-transparent items-center">
              <Link href="/">
                <Image
                  src={'/logo.png'}
                  alt="eaze move"
                  height={80}
                  width={100}
                />
              </Link>

              <div className="flex gap-14">
                <div className="text-white gap-16 hidden md:flex">
                  {navItem.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <p className="hover:text-primary-green transition transform duration-500 ease-in-out">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="md:hidden">
                  <MenuIcon
                    className="text-white cursor-pointer"
                    onClick={toggleSidebar}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
