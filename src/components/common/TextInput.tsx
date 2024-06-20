import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<any> & {
  label: string;
};

export const TextInput: React.FC<Props> = ({ label, disabled, ...rest }) => {
  return (
    <div>
      <div className="text-sm">{label}</div>
      <input
        className={clsx(
          'mt-3 block rounded-lg py-1.5 px-3 w-full border border-gray-500 h-10',
          disabled && 'pointer-events-none'
        )}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};
