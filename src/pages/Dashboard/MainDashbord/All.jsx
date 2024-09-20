import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { endpoint } from '../../../utils/APIRoutes';
import { toast } from 'react-toastify';

const Chat = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  const [buy, setBuy] = useState('');
  const [sell, setSell] = useState('');
  const [loading1, setLoading1] = useState(false);
  const [data, setData] = useState([]); // State for chart data
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = user?.access;

      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        navigate("/login");
        setLoading1(false);
        return;
      }

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        const res = await axios.get(`${endpoint}/trading_engine/p2p/all-orders/?my_orders=true/`, { headers });
        const depositData = res.data;

        setLoading1(false);

        // Initialize month data with zero values for both buy and sell
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthData = months.reduce((acc, month) => {
          acc[month] = { buy: 0, sell: 0 };
          return acc;
        }, {});

        // Group data by month and order type, summing amounts
        depositData.forEach(item => {
          const date = new Date(item.created_on);
          const month = date.toLocaleString('default', { month: 'short' }); // Get month like 'Jan', 'Feb'

          if (monthData.hasOwnProperty(month)) {
            if (item.order_type === 'buy') {
              monthData[month].buy += parseFloat(item.amount || 0);
            } else if (item.order_type === 'sell') {
              monthData[month].sell += parseFloat(item.amount || 0);
            }
          }
        });

        // Convert the monthData object to an array of { month, buy, sell } objects for the chart
        const formattedData = months.map(month => ({
          month,
          buy: parseFloat(monthData[month].buy.toFixed(2)), // Optionally round to 2 decimal places
          sell: parseFloat(monthData[month].sell.toFixed(2)),
        }));

        // Update the chart data
        setData(formattedData);

        // Calculate the total buy and sell amounts
        const totalBuyAmount = depositData
          .filter(item => item.order_type === 'buy')
          .reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
        const totalSellAmount = depositData
          .filter(item => item.order_type === 'sell')
          .reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);

        setBuy(parseFloat(totalBuyAmount.toFixed(2)));
        setSell(parseFloat(totalSellAmount.toFixed(2)));

      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [user?.access, navigate]);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const ctx = chartRef.current.getContext('2d');

      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map((row) => row.month), // Labels are months
          datasets: [
            {
              label: 'Buy Orders by Month',
              data: data.map((row) => row.buy), 
              backgroundColor: 'rgba(0, 255, 0, 0.2)', 
              borderColor: '#013E1EFF', 
              borderWidth: 2,
              fill: true,
              tension: 0.1,
              pointRadius: 0,      
              pointHoverRadius: 0,
            },
            {
              label: 'Sell Orders by Month',
              data: data.map((row) => row.sell), 
              backgroundColor: 'red', 
              borderColor: '#A70202FF',
              borderWidth: 2,
              fill: true,
              tension: 0.1,
              pointRadius: 0,      
              pointHoverRadius: 0,
            },
          ],
        },
        options: {
          animation: true,
          plugins: {
            legend: {
              display: true,
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return (
    <div className='small border border-slate-700 rounded-lg secondary'>
      <canvas id="acquisitions" ref={chartRef}></canvas>
    </div>
  );
};

export default Chat;
