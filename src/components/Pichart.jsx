/* eslint-disable no-unused-vars */
// src/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the necessary components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DoughnutChart = () => {
  const data = [50, 60, 95, 25]; // One segment is empty

  // Define the data for the chart
  const chartData = {
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
    datasets: [
      {
        data: data,
        backgroundColor: ['#FEC228', '#386AB5', '#1D8751', '#E23D3A'], // Yellow, Blue, Green, Red
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 20, // Increase the border radius to make edges more rounded
        hoverBorderWidth: 3, // Optional: makes the segments more pronounced on hover
        hoverBorderColor: '#ffffff', // Optional: a color for hover border
      },
    ],
  };

  // Define the options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Position legend at the bottom
        labels: {
          boxWidth: 20,
          padding: 15,
          font: {
            size: 12,
          },
          usePointStyle: true, // Use point style for legend
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    cutout: '87%', // Adjust the cutout percentage to control the size of the hole
  };

  return (
    <div className="primary h-96 flex flex-col items-center">
      <Doughnut data={chartData} options={options} className="small-chart" />
    </div>
  );
};

export default DoughnutChart;
