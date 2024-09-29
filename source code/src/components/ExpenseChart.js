import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ExpenseChart() {
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
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Expenses',
        data: [1000, 1200, 900, 1400, 1100],
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <div className="chart-wrapper">
      <div className="chart-title">Expenses Overview</div>
      <Bar ref={chartRef} data={data} />
    </div>
  );
}

export default ExpenseChart;
