'use client';
import React from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { cn } from '@/lib/utils';
import { Controller, useFormContext } from 'react-hook-form';

interface ReactHookTextInputProps extends Omit<TextInputProps, 'ref'> {
  name: string;
  label?: string;
  variant?: 'filled' | 'unstyled';
  inputClassName?: string;
  onInputChange?: () => void;
}

const ReactHookTextInput = ({
  name,
  label,
  inputClassName,
  onInputChange,
  variant,
  ...rest
}: ReactHookTextInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          {...field}
          label={label}
          variant={variant}
          error={error?.message}
          onChange={(e) => {
            field.onChange(e.target.value);
            onInputChange?.();
          }}
          classNames={{
            label: 'text-gray-dark font-semibold pb-2',
            error: '!text-sm text-red-500',
            input: cn(
              '!rounded-lg text-box border border-grayLight !px-6 !py-4 !h-[56px] md:!text-[16px] !text-[14px] !font-poppins focus:border-primary text-green disabled:bg-highlight',
              variant === 'unstyled' && 'focus:border-none',
              inputClassName
            ),
          }}
          {...rest}
        />
      )}
    />
  );
};

export default ReactHookTextInput;
