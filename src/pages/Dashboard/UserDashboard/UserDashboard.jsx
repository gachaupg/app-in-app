import React, {useState,useEffect} from 'react';
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Copy } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { LineChart } from '@mui/x-charts/LineChart';
import { alpha } from '@mui/material/styles';
import BasicArea from '../../../components/chartss/BuyChart';


const transactions = [
  { id: 1, asset: 'BTC', type: 'Withdrawal', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
  { id: 2, asset: 'BTC', type: 'Deposit', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
  { id: 3, asset: 'BTC', type: 'P2P Buy', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
  { id: 4, asset: 'BTC', type: 'P2P Sell', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
  { id: 5, asset: 'BTC', type: 'Deposit', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
  
  
];

const TransactionCard = () => {
    return (
      <div className="bg-[#1D1D23] text-white p-4 rounded-lg mt-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white">My Transactions</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="p-2 bg-green-800 rounded-2xl text-white text-xs">Exchange</p>
            <p className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">P2P</p>
            <p className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Swap</p>
            <p className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Buy</p>
          </div>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-none bg-inherit">
            <thead>
              <tr>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Asset</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Transaction Type</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Amount</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Counterparty</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-800 transition">
                  <td className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">
                    <div className="flex flex-row items-center gap-2">
                      <img src="/src/assets/img/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6" />
                      <div className="text-xs flex gap-2">
                        <p className="text-white">{transaction.asset}</p>
                        <p className="text-gray-400">Bitcoin</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">{transaction.type}</td>
                  <td className={`border-b border-gray-600 px-4 py-2 text-sm ${transaction.type === 'Deposit' || transaction.type === 'P2P Buy' ? 'text-green-500' : 'text-red-500'}`}>
                    $ {transaction.amount}
                  </td>
                  <td className="border-b border-gray-600 px-4 py-2 text-sm">{transaction.counterparty}</td>
                  <td className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">{transaction.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  


ChartJS.register(Title, Tooltip, Legend, ArcElement);

const UserDashboard = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const [kyc, setKyc] = useState([]);
    const [match, setMatch] = useState([]);
    const [loading1, setLoading1] = useState(true);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data_d1 = [20000,5000,3000,2000]; // One segment is 
    const labels_d1 = ['Deposits', 'Withdrawals', 'In Progress', 'Exchange'];

    const data_d2 = [20000,3000]; // One segment is
    const labels_d2 = ['Deposits', 'Withdrawals'];

          // Define the data for the chart
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
          display:false,
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

    const topCards = [
        {
            title: "Bitcoin",
            value: "20,305",
            icon: "/src/assets/img/bitcoin.png",
            margin: "4.3",
            color: "red"
        },
        {
            title: "Usdt",
            value: "1.05",
            icon: "/src/assets/img/bitcoin.png",
            color: "blue",
            margin: "0.2"
        },
        {
            title: "Ethereum",
            value: "1,950",
            icon: "/src/assets/img/bitcoin.png",
            color: "green",
            margin: "1.2"
        },
        {
            title: "Ripple",
            value: "1,950",
            icon: "/src/assets/img/bitcoin.png",
            color: "blue",
            margin: "0.4"
        },
        {
            title: "Solana",
            value: "0.25",
            icon: "/src/assets/img/bitcoin.png",
            color: "yellow",
            margin: "0.87"
        },
        {
          title: "Uniswap",
          value: "6.64",
          icon: "/src/assets/img/bitcoin.png",
          color: "yellow",
          margin: "3.3"
      },
    ]

    const stats =[
      {
        title: "My Total Volume",
        value: "10 M",
      }
      ,
      {
        title: "Exchange",
        value: "1 M",
      }
      ,
      {
        title: "P2P Volume",
        value: "1 M",
      },
      {
        title: "Swap",
        value: "20 K",
      },
      {
        title: "Buy",
        value: "20 K",
      }
    ]


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
            const res = await axios.get(
              `${endpoint}/api/kyc/status/`,
              { headers }
            );
            setKyc(res.data);
            setLoading1(false);
    
          } catch (error) {
            console.log(error);
            setLoading1(false);
          }
        };
    
        fetchData(); 
        const interval = setInterval(fetchData, 5000); 
        return () => clearInterval(interval); 
      }, [user?.access, navigate]);


    const handleVerify = () => {
        if (kyc.is_verified) {
          setShow("Deposit")
        } else {
          setOpen(true)
        }
      }
      const handleVerify1 = () => {
        if (kyc.is_verified) {
          setShow("Withdraw")
        } else {
          setOpen(true)
        }
      }
      const handleVerify2 = () => {
        if (kyc.is_verified) {
          navigate('/adds')
        } else {
          setOpen(true)
    
        }
      }
      const handleVerify3 = () => {
        if (kyc.is_verified) {
          navigate('/buy-adds')
    
        } else {
          setOpen(true)
    
        }
      }

      const iconsStyles = {
        color: "white",
      }
  return (
    <div style={{
        width:'80%'
    }} className='primary mt-12 ml-4 mr-4'>      
    <div className="secondary border rounded-2xl border-gray-700 w-full p-2 flex flex-col sm:flex-row justify-between items-center gap-4">
  {/* User Information Section */}
  <div className="flex flex-col sm:flex-row gap-6 items-center">
    <div className="flex flex-row items-center gap-2">
      <RxAvatar className="text-slate-500" size={40} />
      <div>
        <p className="text-white capitalize text-lg">Hello, {user?.user?.first_name}!</p>
        <p className="text-sm flex flex-row items-center gap-1">
          {kyc.is_verified ? (
            <span className="text-green-500">Verified</span>
          ) : (
            <span className="text-red-500">Unverified account</span>
          )}
          <img
            className="h-4"
            src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
            alt="Verification Icon"
          />
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-1 text-center sm:text-left">
      <p className="text-sm text-gray-400">User ID</p>
      <p className="text-white cursor-pointer flex flex-row items-center gap-1">
        {user?.user?.id} <Copy size={16} style={{ color: "#F79330" }} />
      </p>
    </div>
    <div className="flex flex-col gap-1 text-center sm:text-left">
      <p className="text-sm text-gray-400">User Type</p>
      <p className="text-white">{user?.user?.user_type}</p>
    </div>
  </div>

  {/* Notification Icon Section */}
  <div className="flex flex-row items-center gap-5">
    <div className="relative inline-block">
      <Link to="/notifications" state={match}>
        <img
          className="h-10"
          src="https://res.cloudinary.com/pitz/image/upload/v1721371733/Frame_34833_xr45hu.png"
          alt="Notifications Icon"
        />
      </Link>
    </div>
  </div>
</div>

            <div className='flex flex-row wrap small-gap items-center gap-2 mt-8'>
                {topCards.map((card, index) => {
                    return(
                    <div key={index} className="card flex flex-col border border-gray-400 rounded-2xl w-48 h-52 p-4  text-white">
                    <div className="head flex flex-row justify-between items-center mb-4">
                        <div className="flex flex-row items-center gap-1">
                            <img src="/src/assets/img/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6" />
                            <p className="text-xs">{ card.title }</p>
                        </div>
                        <span className="text-sm bg-white rounded-lg px-2 py-1" style={
                            {color: '#000'}
                        }>24h</span>
                    </div>
                    <div className="currency flex flex-row justify-between items-center  mb-4">
                        <p className="">${card.value}</p>
                        <p className="text-sm text-green-800 bg-green-500 p-1 rounded">+{card.margin}%</p>
                    </div>
                    <div className="graph h-16 rounded-lg overflow-hidden" style={{ color: card.color}}>
                                  <img
                                    className="mt-2 small wrap "
                                    src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                                    alt=""
                                  />
                    </div>
        </div>)
                })}

         
            </div>
            <div className="mt-8 mb-8">
                <h1 className="text-white">My Volume</h1>
                <div className="cards flex flex-wrap justify-between gap-4 mt-4">
                    {stats.map((volume, index) => (
                    <div
                        key={index}
                        className="card flex flex-col gap-2 justify-around items-center border border-gray-700 rounded-2xl w-full sm:w-48 h-32 p-4 text-white bg-[#1D1D23]"
                    >
                        <h1 className="text-white">{volume.title}</h1>
                        <p className="text-[#F79330]">{volume.value} +</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 justify-between">
                        <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                            <div>
                                <p className="text-white font-semibold">Exchange</p>
                                <p className="text-white font-semibold">Overview (USD)</p>
                            </div>
                            <div className="flex gap-2 sm:gap-4">
                                <button className="text-green-800 border border-green-800 text-xs p-2 rounded-lg font-medium">
                                All
                                </button>
                                <button className="text-white font-medium border border-green-800 p-2 rounded-lg text-xs bg-green-800">
                                Deposits
                                </button>
                                <button className="text-green-800 font-medium border border-green-800 text-xs p-2 rounded-lg">
                                Withdrawals
                                </button>
                            </div>
                            <div>
                                <p className="text-gray-400 font-medium text-sm">Month</p>
                            </div>
                            </div>
                            <div className="graph">
                            <img
                                className="mt-2 w-full"
                                src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                                alt=""
                            />
                            </div>
                        </div>

                        <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                            <div className="flex gap-2">
                                <p className="text-white font-semibold">P2P</p>
                                <p className="text-white font-semibold">Overview (USD)</p>
                            </div>
                            <div className="flex gap-2 sm:gap-4">
                                <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">
                                All
                                </button>
                                <button className="p-2 bg-green-800 rounded-2xl text-white text-xs">
                                Sells
                                </button>
                                <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">
                                Buys
                                </button>
                            </div>
                            <div>
                                <p className="text-gray-400 font-medium text-sm">Month</p>
                            </div>
                            </div>
                            <div className="graph">
                            <img
                                className="mt-2 w-full"
                                src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                                alt=""
                            />
                            </div>
                        </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mt-8">
                        {/* Overview Total Card */}
                        <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <p className="text-white">Overview Total</p>
                            </div>
                            <div className="flex flex-wrap gap-2 sm:gap-4">
                                <p className="p-2 bg-green-800 rounded-2xl text-white text-xs">Exchange</p>
                                <p className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">P2P</p>
                                <p className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Swap</p>
                                <p className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Buy</p>
                            </div>
                            </div>
                            <div className="stats flex flex-col md:flex-row justify-between mt-4 gap-4">
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
                                <div className="values text-white text-sm flex flex-col gap-2">
                                <p>20,000 USD</p>
                                <p>5,000 USD</p>
                                <p>3,000 USD</p>
                                <p>2,000 USD</p>
                                </div>
                            </div>
                            <div className="chart flex justify-center items-center w-full md:w-40 h-36">
                                <Doughnut data={chartData} options={options} className="small-chart" />
                            </div>
                            </div>
                        </div>

                        {/* Referral Commissions Card */}
                        <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800 mt-4 lg:mt-0">
                            <div className="flex justify-between items-center mb-4">
                            <p className="text-white font-semibold flex-grow">Your Referral Commissions</p>
                            <div className="flex items-center">
                                <p className="text-gray-400">Month</p>
                                <svg className="w-4 h-4 ml-1 text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
</div>


          <TransactionCard />
    </div>
 
  );
};


export default UserDashboard;