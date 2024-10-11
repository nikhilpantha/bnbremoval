'use client';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { cn } from '@/lib/utils';

interface Props {
  name: string;
  inputClassName?: string;
}

const ReactHookDatePicker: React.FC<Props> = ({ name, inputClassName }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => (
        <div className="flex flex-col">
          <DatePicker
            selected={value}
            onChange={(date) => onChange(date)}
            onBlur={onBlur}
            placeholderText="Pick a date"
            className={cn(
              'border z-100 !px-6 !py-4 rounded-md focus:outline-none focus:border-2 focus:border-black',
              inputClassName
            )}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />

          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default ReactHookDatePicker;
