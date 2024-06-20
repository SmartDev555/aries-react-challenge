import React from 'react';

type Props = {
  label: string;
  value: string | number;
};

export const OptionChip: React.FC<Props> = ({ label, value }) => {
  return (
    <div>
      <div className="text-sm">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
};
