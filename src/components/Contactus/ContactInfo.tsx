import { FC } from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { MdBusiness, MdFacebook } from 'react-icons/md';
import ContactService from './ContactService';

const socialMediaLinks = [
  {
    id: 'facebook',
    icon: <MdFacebook size={20} stroke="green" fill="green" />,
    link: '#',
  },
  {
    id: 'twitter',
    icon: <Twitter size={20} stroke="green" fill="green" />,
    link: '#',
  },
  {
    id: 'linkedin',
    icon: <Linkedin size={20} stroke="green" fill="green" />,
    link: '#',
  },
  {
    id: 'instagram',
    icon: <Instagram size={20} stroke="green" />,
    link: '#',
  },
];

const ContactInfo: FC = () => {
  return (
    <div>
      <h2 className="text-sm text-green-600 uppercase mb-2">Get in touch</h2>
      <h1 className="text-4xl font-bold mb-4">We'd love to hear from you</h1>
      <p className="text-gray-600 mb-8">
        Nostra vivamus tristique cras ante porttitor habitasse rutrum pede.
        Faucibus nam cursus ultricies a dolor eleifend adipiscing.
      </p>

      <ContactService
        icon={<MdBusiness size={32} />}
        title="Contact Details"
        phone="+61 3257 345 4759"
        email="email@yourdomain.com"
      />
      {/* <ContactService
        icon={<MdBusiness size={32} />}
        title='Commercial'
        phone='+1 (555) 987 6541'
        email='hello@yourdomain.com'
      />
      <ContactService
        icon={<MdBusiness size={32} />}
        title='International'
        phone='+1 (555) 987 6541'
        email='hello@yourdomain.com'
      /> */}

      <div className="mt-8 flex gap-4 items-center">
        <div className="text-gray-700 mb-2">Our Social Media :</div>
        <div className="flex space-x-4">
          {socialMediaLinks.map(({ id, icon, link }) => (
            <a
              key={id}
              href={link}
              className="text-green-600 p-2 rounded-lg border-grayLight border hover:text-green-700"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
