export type OptionStrategy = {
  strike_price: number;
  type: OptionStrategyTypeEnum;
  bid: number;
  ask: number;
  long_short: OptionStrategyLongShortEnum;
  expiration_date: string;
};

export enum OptionStrategyTypeEnum {
  Call = 'Call',
  Put = 'Put'
}

export enum OptionStrategyLongShortEnum {
  Long = 'long',
  Short = 'short'
}

export type ChartData = {
  x: string[];
  y: number[];
};

export type Information = {
  ratio: string;
  maxProfit: number;
  maxLoss: number;
  profitProbability: string;
};
