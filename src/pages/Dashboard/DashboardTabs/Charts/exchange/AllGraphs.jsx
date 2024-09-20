import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { endpoint } from '../../../../../utils/APIRoutes';

const ALLGraph = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ withdrawals: [], deposits: [] });
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
                
                console.log('API response data:', res.data);

                const transactions = Array.isArray(res.data) ? res.data : res.data.transactions;

                const withdrawals = transactions.filter(item => item.transaction_type === 'withdrawal');
                const deposits = transactions.filter(item => item.transaction_type === 'deposit');

                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const initMonthData = months.reduce((acc, month) => ({ ...acc, [month]: 0 }), {});

                const monthData = {
                    withdrawals: { ...initMonthData },
                    deposits: { ...initMonthData }
                };

                withdrawals.forEach(item => {
                    const date = new Date(item.timestamp);
                    const month = date.toLocaleString('default', { month: 'short' });

                    if (monthData.withdrawals.hasOwnProperty(month)) {
                        monthData.withdrawals[month] += parseFloat(item.amount || 0);
                    }
                });

                deposits.forEach(item => {
                    const date = new Date(item.timestamp);
                    const month = date.toLocaleString('default', { month: 'short' });

                    if (monthData.deposits.hasOwnProperty(month)) {
                        monthData.deposits[month] += parseFloat(item.amount || 0);
                    }
                });

                setData({
                    withdrawals: months.map(month => parseFloat(monthData.withdrawals[month].toFixed(2))),
                    deposits: months.map(month => parseFloat(monthData.deposits[month].toFixed(2))),
                });

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
        if (chartRef.current && data.withdrawals.length > 0 && data.deposits.length > 0) {
            const ctx = chartRef.current.getContext('2d');

            const withdrawalGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            withdrawalGradient.addColorStop(0, '#1D1D23');
            withdrawalGradient.addColorStop(1, '#1D1D23'); 
            const depositGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
            depositGradient.addColorStop(0, '#1D1D23');
            depositGradient.addColorStop(1, '#1D1D23'); 
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Withdrawal by Month',
                            data: data.withdrawals,
                            backgroundColor: withdrawalGradient,
                            borderColor: 'red',
                            borderWidth: 2,
                            fill: true,
                            tension: 0.1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                        },
                        {
                            label: 'Deposit by Month',
                            data: data.deposits,
                            backgroundColor: depositGradient,
                            borderColor: 'green',
                            borderWidth: 2,
                            fill: true,
                            tension: 0.1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                        }
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

export default ALLGraph;
