import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Deposits', 'Widthdrawal', 'In progress', 'P2p'],
          datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5],
            backgroundColor: ['red', 'blue', 'yellow', 'green'],
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 1
          }]
        },
        options: {
          cutout: '80%', // Adjust this to control the size of the center hole
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                font: {
                  size: 18,
                  color:'white'
                },
                // Display labels vertically
                flexDirection: 'column',
              }
            }
          }
        }
      });
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      <canvas ref={chartContainer} />
    <p className='absolute bottom-44 right-32'>00.00USDT</p>
    </div>
  );
};

export default DonutChart;
