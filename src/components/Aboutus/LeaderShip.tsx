import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const teamMembers = [
  {
    name: 'James Renfrow',
    title: 'Founder of EazeMove',
    image: '/assets/person1.jpg',
    socialLinks: [
      { platform: 'Facebook', url: '#', Icon: Facebook },
      { platform: 'Twitter', url: '#', Icon: Twitter },
      { platform: 'Instagram', url: '#', Icon: Instagram },
      { platform: 'LinkedIn', url: '#', Icon: Linkedin },
    ],
  },
  {
    name: 'Amanda Garrett',
    title: 'Accounting',
    image: '/assets/person2.jpg',
    socialLinks: [
      { platform: 'Facebook', url: '#', Icon: Facebook },
      { platform: 'Twitter', url: '#', Icon: Twitter },
      { platform: 'Instagram', url: '#', Icon: Instagram },
      { platform: 'LinkedIn', url: '#', Icon: Linkedin },
    ],
  },
  {
    name: 'Jessica Trevino',
    title: 'Operational Manager',
    image: '/assets/person4.jpg',
    socialLinks: [
      { platform: 'Facebook', url: '#', Icon: Facebook },
      { platform: 'Twitter', url: '#', Icon: Twitter },
      { platform: 'Instagram', url: '#', Icon: Instagram },
      { platform: 'LinkedIn', url: '#', Icon: Linkedin },
    ],
  },
  {
    name: 'James D. Elliott',
    title: 'Sales Manager',
    image: '/assets/person3.jpg',
    socialLinks: [
      { platform: 'Facebook', url: '#', Icon: Facebook },
      { platform: 'Twitter', url: '#', Icon: Twitter },
      { platform: 'Instagram', url: '#', Icon: Instagram },
      { platform: 'LinkedIn', url: '#', Icon: Linkedin },
    ],
  },
];

const Leadership = () => {
  return (
    <div className="py-24 flex flex-col gap-12 max-w-7xl mx-auto px-6">
      <div className="flex flex-col justify-center gap-6 items-center">
        <h2 className="text-lg font-semibold font-helvetica text-green-600">
          OUR LEADERSHIP
        </h2>
        <p className="text-4xl font-bold font-helvetica tracking-tight text-gray-900">
          You’ve got a move to make, and we’re here to help
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white w-full h-full rounded-lg shadow-md text-center"
          >
            <div className="min-h-96 md:min-h-72 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="w-full object-cover rounded-t-lg mb-4"
              />
            </div>
            <div className="p-4 pb-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <div className="flex justify-center mt-4 space-x-4">
                {member.socialLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.Icon
                      fill="#214562"
                      strokeWidth={1}
                      className="text-gray-600 size-8 rounded-lg bg-primary-blue p-2 hover:text-blue-400"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
