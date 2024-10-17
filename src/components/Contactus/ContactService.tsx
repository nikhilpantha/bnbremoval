import { FC } from 'react';

interface ContactServiceProps {
  icon: JSX.Element;
  title: string;
  phone: string;
  email: string;
}

const ContactService: FC<ContactServiceProps> = ({
  icon,
  title,
  phone,
  email,
}) => (
  <div className="flex lg:!flex-row flex-col justify-between items-center py-4  rounded-md shadow">
    <div className="flex items-center">
      <div className="flex gap-6 items-center">
        <div className="w-16 h-16 ml-4 flex justify-center items-center bg-custom-blue rounded-md text-white">
          {icon}
        </div>
        <div className="w-2 h-20 border-l border-grayLight lg:pl-8 pl-0"></div>
      </div>

      <div className="ml-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
    {/* <button className="text-green-600 border lg:w-[150px] border-green-600 w-full rounded-md px-4 py-2 hover:bg-green-600 hover:text-white transition">
      Get a Quote
    </button> */}
  </div>
);

export default ContactService;
