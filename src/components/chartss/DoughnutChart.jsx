import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DoughnutChart = ({ data, options }) => {
  return (
    <Doughnut data={data} options={options} />
  );
};

export default DoughnutChart;
