import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function IncomeChart() {
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
        label: 'Income',
        data: [1200, 1500, 1800, 2200, 2500],
        borderColor: 'green',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-wrapper">
      <div className="chart-title">Income Overview</div>
      <Line ref={chartRef} data={data} />
    </div>
  );
}

export default IncomeChart;
