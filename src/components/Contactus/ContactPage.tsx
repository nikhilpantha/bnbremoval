'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import ContactInfo from './ContactInfo';
import { ContactFormSchemaValidation } from '../validations/ContactFormValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import ReactHookTextInput from '../ReactHooks/ReactHookTextInput';
import { Button } from '@mantine/core';
import emailjs from 'emailjs-com';
import { Loader } from 'lucide-react';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    resolver: yupResolver(ContactFormSchemaValidation),
  });

  const onSubmit = (data: any) => {
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID as string,
        {
          name: data.yourName,
          phone: data.phone,
          message: data.message,
          subject: data.subject,
          email: data.email,
        },
        process.env.NEXT_PUBLIC_EMAIL_USER_KEY_ID as string
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Appointment request sent successfully');
        },
        (err) => {
          setLoading(false);
          toast.error('FAILED to send appointment request', err);
        }
      );
  };

  return (
    <div className="container max-w-[1400px] mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />

        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Send us a message</h2>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ReactHookTextInput
                  label="Your Name"
                  name="yourName"
                  placeholder="Your name"
                  inputClassName="lg:w-[250px] w-full"
                />
                <ReactHookTextInput
                  label="Phone"
                  name="phone"
                  placeholder="Phone number"
                  inputClassName="lg:w-[250px] w-full"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ReactHookTextInput
                  label="Email Address"
                  name="email"
                  placeholder="Email Address"
                  inputClassName="lg:w-[250px] w-full"
                />
                <ReactHookTextInput
                  label="Subject"
                  name="subject"
                  placeholder="Subject"
                  inputClassName="lg:w-[250px] w-full"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-dark font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full p-4 border-grayLight rounded-md border shadow-sm  focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  rows={4}
                  placeholder="Your message"
                  {...methods.register('message')}
                />
              </div>
              {loading ? (
                <div className="w-full text-center h-fit flex items-center justify-center rounded-md bg-green-700 py-4">
                  <Loader color="white" />
                </div>
              ) : (
                <Button
                  disabled={loading}
                  className="w-fit text-center h-fit"
                  type="submit"
                >
                  SEND MESSAGE
                </Button>
              )}
              {/* <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  
                </button>
              </div> */}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
