import React, { SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = SelectHTMLAttributes<any> & {
  label: string;
  options: string[];
};

export const Select: React.FC<Props> = ({
  label,
  disabled,
  options,
  ...rest
}) => {
  return (
    <div>
      <div className="text-sm">{label}</div>
      <select
        className={clsx(
          'mt-3 block rounded-lg py-1.5 px-3 w-full border border-gray-500 h-10',
          disabled && 'pointer-events-none'
        )}
        disabled={disabled}
        {...rest}>
        {options.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
