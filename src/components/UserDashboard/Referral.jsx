import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Referral = () => {
    
  const data_d2 = [20000, 3000]; // One segment is
  const labels_d2 = ['Deposits', 'Withdrawals'];


  // Define the data for the chart
  const chartData2 = {
    labels: labels_d2,
    datasets: [
      {
        data: data_d2,
        backgroundColor: ['#1D8751', '#E23D3A'], //Green, Red
        borderColor: 'transparent',
        borderWidth: 2,
        borderRadius: 20,
      },
    ],
  };

  // Define the options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          boxWidth: 20,
          padding: 15,
          font: {
            size: 12,
          },
          usePointStyle: true, // Use point style for legend
        },
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    cutout: '87%', 
  };
    return(
        <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800 mt-4 lg:mt-0">
        <div className="flex justify-between items-center mb-4">
          <p className="text-white font-semibold flex-grow">Your Referral Commissions</p>
          <div className="flex items-center">
            <p className="text-gray-400">Month</p>
            <svg className="w-4 h-4 ml-1 text-gray-400 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </div>
        </div>
        <div className="stats flex flex-col md:flex-row justify-between mt-4 gap-4">
          <div className="data flex flex-col gap-8 items-start">
            <div className="depo text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-3 h-3 bg-[#1D8751] rounded-sm"></div>
                <p>Deposits</p>
              </div>
              <p className="text-white text-sm">30,000 USD</p>
            </div>
            <div className="depo text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-3 h-3 bg-[#E2303A] rounded-sm"></div>
                <p>Withdrawals</p>
              </div>
              <p className="text-white text-sm">5,000 USD</p>
            </div>
          </div>
          <div className="chart flex justify-center items-center w-full md:w-40 h-36">
            <Doughnut data={chartData2} options={options} className="small-chart" />
          </div>
        </div>
      </div>
    )
}
export default Referral;