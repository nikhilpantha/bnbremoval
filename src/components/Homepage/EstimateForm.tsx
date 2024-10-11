'use client';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ReactHookDatePicker from '../ReactHooks/ReactHookDatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactHookTimePicker from '../ReactHooks/ReactHookTimePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import EstimateFormValidationSchema from '../validations/EstimateFormValidationSchema';
import emailjs from 'emailjs-com';
import { Loader } from 'lucide-react';
import { toast } from 'react-toastify';
import ReactHookTextInput from '../ReactHooks/ReactHookTextInput';
import Button from '../Button/Button';

interface EstimateFormData {
  from: string;
  to: string;
  date: string;
  time: string;
  email: string;
}

const EstimateForm = () => {
  const [loading, setLoading] = useState(false);

  const methods = useForm<EstimateFormData>({
    defaultValues: {
      from: '',
      to: '',
      date: '',
      time: '',
      email: '',
    },
    resolver: yupResolver(EstimateFormValidationSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: EstimateFormData) => {
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_BOOKING_TEMPLATE_ID as string,
        {
          from: data.from,
          to: data.to,
          date: data.date,
          time: data.time,
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
    <div className="w-full bg-white lg:rounded-lg lg:shadow-xl">
      <div className="w-full mx-auto h-fit lg:py-6 flex flex-col justify-center items-center">
        <h2 className="font-bold text-center py-6">Book Service</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col w-full gap-4 relative px-6">
              <ReactHookTextInput
                name="email"
                placeholder="Contact email"
                inputClassName="w-full"
              />
              <ReactHookTextInput
                name="from"
                placeholder="Moving From"
                inputClassName="w-full"
              />

              <ReactHookTextInput
                name="to"
                placeholder="Moving To"
                inputClassName="w-full"
              />

              <ReactHookDatePicker
                name="date"
                inputClassName="border border-grayLight w-full h-[56px]"
              />

              <ReactHookTimePicker
                name="time"
                inputClassName="border border-grayLight w-full h-[56px]"
              />

              {loading ? (
                <div className="w-full text-center h-fit flex items-center justify-center rounded-md bg-green-700 py-4">
                  <Loader color="white" />
                </div>
              ) : (
                <Button
                  disabled={loading}
                  className="w-full text-center h-fit"
                  type="submit"
                >
                  Book Appointment
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default EstimateForm;
