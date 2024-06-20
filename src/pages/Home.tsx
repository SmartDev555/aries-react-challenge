import React, { ReactElement, useEffect, useState } from 'react';
import { RiskRewardGraph } from '@components/RiskRewardGraph';
import { OptionStrategies } from '@components/OptionStrategies';
import { ChartData, Information, OptionStrategy } from '@types';
import {
  generateChartData,
  getProfitProbability,
  getRiskRewardRatio
} from '../core/analysis';

const Home = (): ReactElement => {
  const [option, setOption] = useState<OptionStrategy>();
  const [chartData, setChartData] = useState<ChartData>({
    x: [],
    y: []
  });
  const [info, setInfo] = useState<Information>({
    ratio: '',
    maxProfit: 0,
    maxLoss: 0,
    profitProbability: ''
  });

  useEffect(() => {
    if (option) {
      const newChartData = generateChartData(option);

      setChartData(newChartData);

      const ratioInfo = getRiskRewardRatio(newChartData.y);
      const profitProbability = getProfitProbability(newChartData.y);

      setInfo({
        ...ratioInfo,
        profitProbability
      });
    }
  }, [option]);

  return (
    <div className="px-10">
      <h1 className="text-center font-bold text-4xl mb-20">
        Options Profit Calculator
      </h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="py-2 border-b border-b-gray-300 text-xl font-bold mb-4">
            Risk-Reward Graph
          </h2>
          <RiskRewardGraph
            chartData={chartData}
            strikePrice={option?.strike_price ?? 0}
          />
          <div className="text-lg font-semibold">
            <div>Risk-Reward Ratio: {info.ratio}</div>
            <div>Max Profit: {info.maxProfit}$</div>
            <div>Max Loss: {info.maxLoss}$</div>
            <div>Profit Probability: {info.profitProbability}%</div>
          </div>
        </div>
        <OptionStrategies onChangeOption={setOption} />
      </div>
    </div>
  );
};

export default Home;
