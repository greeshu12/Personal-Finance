import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function BudgetChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy(); // Destroy chart on unmount
      }
    };
  }, []);

  const data = {
    labels: ['Housing', 'Food', 'Entertainment', 'Savings'],
    datasets: [
      {
        label: 'Budget',
        data: [500, 300, 200, 400],
        backgroundColor: ['blue', 'green', 'orange', 'purple'],
      },
    ],
  };

  return (
    <div className="chart-wrapper">
      <div className="chart-title">Budget Allocation</div>
      <Pie ref={chartRef} data={data} />
    </div>
  );
}

export default BudgetChart;
