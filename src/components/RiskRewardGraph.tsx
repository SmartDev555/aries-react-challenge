import React from 'react';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ChartData } from '@types';

type Props = {
  chartData: ChartData;
  strikePrice: number;
};

export const RiskRewardGraph: React.FC<Props> = ({
  chartData,
  strikePrice
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newChart = echarts.init(chartRef.current);

    newChart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      color: ['#fa5e40', '#b2ffa8'],
      legend: {
        data: ['Ratio', 'Strike Price']
      },
      grid: {
        show: false
      },
      xAxis: {
        type: 'category',
        name: 'Time',
        data: chartData.x
      },
      yAxis: {
        name: 'Price',
        type: 'value'
      },
      series: [
        {
          name: 'Ratio',
          data: chartData.y,
          type: 'line',
          showBackground: true,
          smooth: true,
          lineStyle: {
            width: 10
          }
        },
        {
          data: chartData.y.map(() => strikePrice),
          type: 'line',
          showBackground: true,
          name: 'Strike Price'
        }
      ]
    } as echarts.EChartsOption);
  }, [chartData]);

  return (
    <div>
      <div className="w-full h-[500px] flex-1 pb-3" ref={chartRef}></div>
    </div>
  );
};
