import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);
const OverView = ({ totalWithdrawals, totalDeposits }) => {
  const data_d1 = [totalWithdrawals, 0, totalDeposits, 0]; // One segment is 
  const labels_d1 = ['Deposits', 'Withdrawals', 'In Progress', 'Exchange'];
  console.log(totalDeposits);
  const chartData = {
    labels: labels_d1,
    datasets: [
      {
        data: data_d1,
        backgroundColor: ['#FEC228', '#386AB5', '#1D8751', '#E23D3A'], // Yellow, Blue, Green, Red
        borderColor: 'transparent',
        borderWidth: 2,
        borderRadius: 20,
      },
    ],
  };

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
  return (
    <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-white">Overview Total</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <button className="p-2 bg-green-800 rounded-2xl text-white text-xs">Exchange</button>
          <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">P2P</button>
          <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Swap</button>
          <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Buy</button>
        </div>
      </div>
      <div className="stats flex flex-col md:flex-row justify-between mt-4 ">
        <div className="data flex justify-between items-center gap-4 md:gap-20">
          <div className="depo text-gray-400 text-sm flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1D8751] rounded-sm"></div>
              <p>Deposits</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#E2303A] rounded-sm"></div>
              <p>Withdrawals</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FEC228] rounded-sm"></div>
              <p>In Progress</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#386AB5] rounded-sm"></div>
              <p>Exchange</p>
            </div>
          </div>
          <div className="values text-white text-sm flex flex-col gap-2 ">
            <p className='text-xs'>{totalDeposits} USD</p>
            <p className='text-xs'>{totalWithdrawals} USD</p>
            <p className='text-xs'>00 USD</p>
            <p className='text-xs'>00 USD</p>
          </div>
        </div>
        <div className="chart flex justify-center items-center w-full md:w-40 h-36">
          <Doughnut data={chartData} options={options} className="small-chart" />
        </div>
      </div>
    </div>
  );

}

export default OverView;