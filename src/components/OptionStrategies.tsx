import React, { useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { RadioItem } from '@components/common/RadioItem';
import { SAMPLE_OPTIONS } from '../constants';
import {
  OptionStrategy,
  OptionStrategyLongShortEnum,
  OptionStrategyTypeEnum
} from '@types';
import { OptionChip } from '@components/common/OptionChip';
import moment from 'moment';
import { TextInput } from '@components/common/TextInput';
import { Select } from '@components/common/Select';

type Props = {
  onChangeOption: (value: OptionStrategy) => void;
};

const customKey = SAMPLE_OPTIONS.length;

export const OptionStrategies: React.FC<Props> = ({ onChangeOption }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [customOption, setCustomOption] = useState<OptionStrategy>({
    strike_price: 0,
    type: OptionStrategyTypeEnum.Call,
    bid: 0,
    ask: 0,
    long_short: OptionStrategyLongShortEnum.Long,
    expiration_date: '2025-12-17T00:00:00Z'
  });

  const handleChangeCustomOption = (
    key: keyof OptionStrategy,
    value:
      | number
      | OptionStrategyTypeEnum
      | OptionStrategyLongShortEnum
      | string
  ) => {
    setCustomOption({
      ...customOption,
      [key]: value
    });
  };

  useEffect(() => {
    if (selectedIndex < customKey) {
      onChangeOption(SAMPLE_OPTIONS[selectedIndex]);
    } else {
      onChangeOption(customOption);
    }
  }, [selectedIndex, customOption]);

  return (
    <RadioGroup
      value={selectedIndex}
      onChange={setSelectedIndex}
      className="space-y-2">
      <div className="py-2 border-b border-b-gray-300 text-xl font-bold mb-4">
        Default Options
      </div>
      {SAMPLE_OPTIONS.map((option, index) => (
        <RadioItem key={index} value={index}>
          <div className="grid grid-cols-6">
            <OptionChip label="Strike Price ($)" value={option.strike_price} />
            <OptionChip label="Type" value={option.type} />
            <OptionChip label="Bid ($)" value={option.bid} />
            <OptionChip label="Ask ($)" value={option.ask} />
            <OptionChip label="Long / Short" value={option.long_short} />
            <OptionChip
              label="Expiration"
              value={moment(option.expiration_date).format('MM/DD/YYYY')}
            />
          </div>
        </RadioItem>
      ))}

      <div className="py-2 border-b border-b-gray-300 text-xl font-bold mb-4 pt-6">
        Custom Option
      </div>
      <RadioItem value={customKey}>
        <div className="grid grid-cols-6 gap-4">
          <TextInput
            type="number"
            label="Strike Price ($)"
            disabled={selectedIndex !== customKey}
            value={customOption.strike_price}
            onChange={(event) =>
              handleChangeCustomOption('strike_price', event.target.value)
            }
          />
          <Select
            label="Type"
            options={[OptionStrategyTypeEnum.Call, OptionStrategyTypeEnum.Put]}
            value={customOption.type}
            onChange={(event) =>
              handleChangeCustomOption('type', event.target.value)
            }
          />
          <TextInput
            type="number"
            label="Bid ($)"
            disabled={selectedIndex !== customKey}
            value={customOption.bid}
            onChange={(event) =>
              handleChangeCustomOption('bid', event.target.value)
            }
          />
          <TextInput
            type="number"
            label="Ask ($)"
            disabled={selectedIndex !== customKey}
            value={customOption.ask}
            onChange={(event) =>
              handleChangeCustomOption('ask', event.target.value)
            }
          />
          <Select
            label="Long / Short"
            options={[
              OptionStrategyLongShortEnum.Long,
              OptionStrategyLongShortEnum.Short
            ]}
            value={customOption.long_short}
            onChange={(event) =>
              handleChangeCustomOption('long_short', event.target.value)
            }
          />
          <OptionChip
            label="Expiration"
            value={moment(customOption.expiration_date).format('MM/DD/YYYY')}
          />
        </div>
      </RadioItem>
    </RadioGroup>
  );
};
