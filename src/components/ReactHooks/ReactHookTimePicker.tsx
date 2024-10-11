"use client";
import React, { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ActionIcon } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  inputClassName?: string;
}

const ReactHookTimePicker: React.FC<Props> = ({ name, inputClassName }) => {
  const { control } = useFormContext();
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon
      size="lg"
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    ></ActionIcon>
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur, ref },
        fieldState: { error },
      }) => (
        <>
          <TimeInput
            placeholder="Select Time"
            ref={ref}
            classNames={{
              wrapper: "flex justify-center items-center",
              input: cn(
                "w-full px-6 py-4 rounded-md border border-black focus:outline-none focus:border-2 focus:border-black",
                inputClassName
              ),
              error: "text-sm text-red-500 mt-1",
            }}
            value={value}
            onChange={(time) => onChange(time)}
            onBlur={onBlur}
            rightSection={pickerControl}
            error={error ? error.message : null}
          />
        </>
      )}
    />
  );
};

export default ReactHookTimePicker;
