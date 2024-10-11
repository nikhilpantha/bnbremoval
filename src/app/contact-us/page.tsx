import ContactPage from '@/components/Contactus/ContactPage';
import MenuItems from '@/components/Homepage/MenuItems';
import React from 'react';

const page = () => {
  return (
    <div>
      <div>
        <MenuItems
          title="Contact Us"
          description="contact us"
          imageSrc="/assets/person4.jpg"
          showButton={false}
          label=""
        >
          <div className="grid items-center lg:grid-cols-3 gap-10 md:py-20 w-full px-6">
            <div className="md:col-span-2 py-40 md:py-0 px-4 space-y-4 animate__animated animate__fadeInLeft">
              <h1 className="text-6xl font-bold text-white text-center lg:text-left">
                Contact Us
              </h1>
              <p className="text-white text-xl text-center lg:text-left">
                You can know about us in here.
              </p>
            </div>
          </div>
        </MenuItems>
      </div>

      <ContactPage />
    </div>
  );
};

export default page;
