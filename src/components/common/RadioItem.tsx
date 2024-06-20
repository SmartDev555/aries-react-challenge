import React, { PropsWithChildren } from 'react';
import { Radio } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

type Props = PropsWithChildren<{
  value: number;
}>;

export const RadioItem: React.FC<Props> = ({ children, value }) => {
  return (
    <Radio
      value={value}
      className="group relative flex cursor-pointer rounded-lg py-4 px-5 shadow-md transition">
      <div className="flex w-full items-center gap-6">
        <CheckCircleIcon className="size-6 fill-black opacity-0 transition group-data-[checked]:opacity-100" />
        <div className="flex-1">{children}</div>
      </div>
    </Radio>
  );
};
