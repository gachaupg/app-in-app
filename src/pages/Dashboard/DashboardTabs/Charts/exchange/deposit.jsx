import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { endpoint } from '../../../../../utils/APIRoutes';

const DepositGraph = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = user?.access;
    
            if (!token) {
                toast.error("Authentication token is missing. Please log in again.");
                navigate("/login");
                return;
            }
    
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };
    
            try {
                const res = await axios.get(`${endpoint}/trading_engine/all-transactions/`, { headers });
                
                // Log the response data to inspect its structure
                console.log('API response data:', res.data);
    
                // Ensure the data is an array
                const transactions = Array.isArray(res.data) ? res.data : res.data.transactions;
    
                // If the structure is correct, filter the deposit transactions
                const depositOrders = transactions.filter(item => item.transaction_type === 'deposit');
    
                // Your data processing logic here
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const monthData = months.reduce((acc, month) => ({ ...acc, [month]: 0 }), {});
    
                depositOrders.forEach(item => {
                    const date = new Date(item.timestamp);
                    const month = date.toLocaleString('default', { month: 'short' });
    
                    if (monthData.hasOwnProperty(month)) {
                        monthData[month] += parseFloat(item.amount || 0);
                    }
                });
    
                const formattedData = months.map(month => ({
                    month,
                    count: parseFloat(monthData[month].toFixed(2)),
                }));
    
                setData(formattedData);
    
            } catch (error) {
                console.error("Error fetching transactions:", error);
                toast.error("Error fetching transactions.");
            }
        };
    
        fetchData();
        const interval = setInterval(fetchData, 50000);
        return () => clearInterval(interval);
    }, [user?.access, navigate]);
    
    useEffect(() => {
        if (chartRef.current && data.length > 0) {
            const ctx = chartRef.current.getContext('2d');
    
            const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            gradient.addColorStop(0, 'green');  
            gradient.addColorStop(1, '#02381CFF');  
    
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map((row) => row.month),
                    datasets: [
                        {
                            label: 'Deposits by Month',
                            data: data.map((row) => row.count),
                            backgroundColor: gradient, 
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

export default DepositGraph;
