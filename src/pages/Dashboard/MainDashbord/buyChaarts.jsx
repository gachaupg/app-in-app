import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { endpoint } from '../../../utils/APIRoutes';
import { toast } from 'react-toastify';

const BuyChat = () => {
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

        // Filter only 'sell' order types
        const sellOrders = depositData.filter(item => item.order_type === 'buy');

        // Initialize month data with zero values
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthData = months.reduce((acc, month) => {
          acc[month] = 0;
          return acc;
        }, {});

        // Group sell data by month and sum amounts
        sellOrders.forEach(item => {
          const date = new Date(item.created_on);
          const month = date.toLocaleString('default', { month: 'short' }); // Get month like 'Jan', 'Feb'

          if (monthData.hasOwnProperty(month)) {
            monthData[month] += parseFloat(item.amount || 0);
          }
        });

        // Convert the monthData object to an array of { month, count } objects for the chart
        const formattedData = months.map(month => ({
          month,
          count: parseFloat(monthData[month].toFixed(2)), // Optionally round to 2 decimal places
        }));

        // Update the chart data
        setData(formattedData);

        // Calculate the total sell amount
        const totalSellAmount = sellOrders.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
        setSell(parseFloat(totalSellAmount.toFixed(2)));

      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 50000);

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
              label: 'Sell Orders by Month',
              data: data.map((row) => row.count), // Data are the summed amounts
              backgroundColor: '#013E1EFF',
              borderColor: 'green',
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

export default BuyChat;
