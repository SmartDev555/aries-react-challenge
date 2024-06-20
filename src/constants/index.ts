import {
  OptionStrategy,
  OptionStrategyTypeEnum,
  OptionStrategyLongShortEnum
} from '@types';

export const SAMPLE_OPTIONS: OptionStrategy[] = [
  {
    strike_price: 100,
    type: OptionStrategyTypeEnum.Call,
    bid: 10.05,
    ask: 12.04,
    long_short: OptionStrategyLongShortEnum.Long,
    expiration_date: '2025-12-17T00:00:00Z'
  },
  {
    strike_price: 102.5,
    type: OptionStrategyTypeEnum.Call,
    bid: 12.1,
    ask: 14,
    long_short: OptionStrategyLongShortEnum.Long,
    expiration_date: '2025-12-17T00:00:00Z'
  },
  {
    strike_price: 103,
    type: OptionStrategyTypeEnum.Put,
    bid: 14,
    ask: 15.5,
    long_short: OptionStrategyLongShortEnum.Short,
    expiration_date: '2025-12-17T00:00:00Z'
  },
  {
    strike_price: 105,
    type: OptionStrategyTypeEnum.Put,
    bid: 16,
    ask: 18,
    long_short: OptionStrategyLongShortEnum.Long,
    expiration_date: '2025-12-17T00:00:00Z'
  }
];
