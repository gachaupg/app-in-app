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
      <div className='flex justify-between items-center'>
                          <div>
                            <p style={{color:"white"}}>My Transactions</p>
                          </div>
                          <div className='flex gap-4'>
                            <p className='p-2 bg-green-800 rounded-2xl text-white text-xs'>Exchange</p>
                            <p className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>P2P</p>
                            <p className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>Swap</p>
                            <p className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>Buy</p>
                          </div>
                      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-none mt-4 bg-inherit">
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
              <tr key={transaction.id}>
                <td className="border-b  border-gray-600 px-4 py-2 text-sm text-gray-400">
                  <div className="assets flex flex-row gap-2 text-center">
                    <img src="/src/assets/img/bitcoin.png" alt="Bitcoin Logo" class="w-6 h-6" />
                    <p className='text-xs text-white'>{transaction.asset}</p>
                    <p className='text-xs text-gray-400'>Bitcoin</p>
                  </div>
                </td>
                <td className="border-b  border-gray-600 px-4 py-2 text-sm text-gray-400">{transaction.type}</td>
                <td className={transaction.type === 'Deposit' || transaction.type === 'P2P Buy' ? 'border-b  border-gray-600 px-4 py-2 text-green-500' : 'border-b  border-gray-600 px-4 py-2 text-red-500'}>$ {transaction.amount}</td>
                <td className="border-b  border-gray-600 px-4 py-2 text-sm">{transaction.counterparty}</td>
                <td className="border-b  border-gray-600 px-4 py-2 text-sm text-gray-400">{transaction.time}</td>
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
                      backgroundColor: ['#1D8751', '#E23D3A'], // Yellow, Blue, Green, Red
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
    }} className='primary mt-12 ml-4 mr-8'>      
         <div className="secondary border rounded-2xl border-gray-700 wrap flex flex-row small wrap w-full justify-between items-center  p-2">
                    <div className="flex flex-row gap-16">
                    <div className="flex flex-row gap-2">
                        <RxAvatar className="text-slate-500" size={40} />
                        <div>
                          <p style={{ fontSize: "16px" }} className="white capitalize">
                            Hello, {user?.user?.first_name}!
                          </p>
                          <p
                            style={{ fontSize: "12px", color: "red" }}
                            className=" flex flex-row items-center gap-1 "
                          >
                            {kyc.is_verified ? <p className="green">Verified</p> : 'Unerified account'} {" "}
                            <img
                              className="h-4"
                              src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                              alt=""
                            />
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p style={{ fontSize: "13px" }} className="grey">
                          Use ID
                        </p>
                        <p className="white  cursor-pointer flex flex-row items-center gap-1">
                          {user?.user?.id} <Copy size={16} style={{ color: "#F79330" }} />
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p style={{ fontSize: "13px" }} className="grey">
                          User Type
                        </p>
                        <p className="white flex flex-row items-center gap-1">
                          {user?.user?.user_type}{" "}
                        </p>
                      </div>
                    </div>
                   
                      <div className="flex flex-row wrap small-gap items-center gap-5">

                        <div className="relative inline-block">
                          <Link to='/notifications'
                            state={match}
                          >
                            <img
                              className="h-10"
                              src="https://res.cloudinary.com/pitz/image/upload/v1721371733/Frame_34833_xr45hu.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
            <div className='flex flex-row wrap small-gap items-center gap-2 mt-8'>
                {topCards.map((card, index) => {
                    return(
                    <div key={index} class="card flex flex-col border border-gray-400 rounded-2xl w-48 h-52 p-4  text-white">
                    <div class="head flex flex-row justify-between items-center mb-4">
                        <div class="flex flex-row items-center gap-1">
                            <img src="/src/assets/img/bitcoin.png" alt="Bitcoin Logo" class="w-6 h-6" />
                            <p class="text-xs">{ card.title }</p>
                        </div>
                        <span class="text-sm bg-white rounded-lg px-2 py-1" style={
                            {color: '#000'}
                        }>24h</span>
                    </div>
                    <div class="currency flex flex-row justify-between items-center  mb-4">
                        <p class="">${card.value}</p>
                        <p class="text-sm text-green-800 bg-green-500 p-1 rounded">+{card.margin}%</p>
                    </div>
                    <div class="graph h-16 rounded-lg" style={{ color: card.color}}>
                                  <img
                                    className="mt-2 small wrap "
                                    src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                                    alt=""
                                  />
                    </div>
        </div>)
                })}

         
            </div>
            <div className='mt-8 mb-8'>
              <h1 style={{color:"white"}}>My Volume</h1>
              <div className='cards flex flex-row justify-between mt-4'>
                {
                  stats.map((volume,index)=>{
                    return(
                      <div  key={index} className="card flex flex-col gap-2 justify-around items-center border border-gray-700 rounded-2xl w-48 h-32 p-4  text-white bg-red; bg-[#1D1D23] ">
                      <h1 style={{color:"white"}}>{volume.title}</h1>
                      <p style={{color:"#F79330"}}>{volume.value} +</p>
                    </div>
                    )

                  })
                }
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-between">
                <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                        <div className=''>
                            <p className="text-white font-semibold">Exchange</p>
                            <p className="text-white font-semibold">Overview (USD)</p>
                        </div>
                        <div className='flex gap-4'>
                            <button className='text-green-800 border border-green-800 text-xs p-2 rounded-lg font-medium'>All</button>
                            <button className='text-white font-medium border border-green-800 p-2 rounded-lg text-xs bg-green-800'>Deposits</button>
                            <button className='text-green-800 font-medium border border-green-800 text-xs p-2 rounded-lg '>Withdrawals</button>
                        </div>
                        <div>
                            <p className='text-gray-400 font-medium text-sm'>Month</p>
                        </div>
                    </div>
                    <div className="graph">
                                  <img
                                    className="mt-2 small wrap "
                                    src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                                    alt=""
                                  />
                    </div>
                </div>

                
            <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
                <div className="flex justify-between items-center mb-4">
                    <div className='flex gap-2'>
                        <p className="text-white font-semibold">P2P</p>
                        <p className="text-white font-semibold">Overview (USD)</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>All</button>
                        <button className='p-2 bg-green-800 rounded-2xl text-white text-xs'>Sells</button>
                        <button className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>Buys</button>
                    </div>
                    <div>
                        <p className='text-gray-400 font-medium text-sm'>Month</p>
                    </div>
                </div>
                <div className="graph">
                                  <img
                                    className="mt-2 small wrap "
                                    src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                                    alt=""
                                  />
                </div>
            </div>
</div>
            <div className="flex flex-row gap-4 justify-between items-center mt-8">
                  <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800 items-center">
                      <div className='flex justify-between items-center'>
                          <div>
                            <p style={{color:"white"}}>Overview Total</p>
                          </div>
                          <div className='flex gap-4'>
                            <p className='p-2 bg-green-800 rounded-2xl text-white text-xs'>Exchange</p>
                            <p className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>P2P</p>
                            <p className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>Swap</p>
                            <p className='text-green-800 border border-green-800 text-xs p-2 rounded-2xl'>Buy</p>
                          </div>
                      </div>
                      <div className="stats flex justify-between mt-4">
                          <div className="data flex justify-between gap-20 items-center">
                              <div className="depo text-gray-400 text-sm flex flex-col gap-2">
                                  <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-[#1D8751] rounded-sm'></div>
                                    <p>Deposits</p>
                                  </div>
                                  <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-[#E2303A] rounded-sm'></div>
                                    <p>Withdrawals</p>
                                  </div>
                                  <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-[#FEC228]  rounded-sm'></div>
                                    <p>In Progress</p>
                                    </div>
                                  <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-[#386AB5] rounded-sm'></div>
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
                          <div className="chart flex gap-2 w-40 h-36">
                              <Doughnut data={chartData} options={options} className="small-chart" />
                            </div>
                      </div>
                      
                      
                  </div>
                  
              <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800 ">
                        <div className="flex justify-rounded items-center mb-4">
                                <div className="flex-grow">
                                    <p className="text-white font-semibold">Your Referral Commissions</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-400 ">Month</p>
                                    <svg className="w-4 h-4 ml-1 text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                                    </svg>
                                </div>
                    </div>

                    <div className="stats flex justify-between mt-4">
                          <div className="data flex justify-between gap-20 items-center">
                              <div className="depo text-sm flex flex-col gap-8">
                                  <div className=' flex flex-col gap-2'>
                                    <div className='flex items-center gap-2 text-gray-400'>
                                      <div className='w-3 h-3 bg-[#1D8751] rounded-sm'></div>
                                      <p>Deposits</p>
                                    </div>
                                    <p className='text-white text-sm'>30,000 USD</p>
                                    
                                  </div>
                                  <div className=' flex flex-col gap-2'>
                                    <div className='flex items-center gap-2 text-gray-400'>
                                      <div className='w-3 h-3 bg-[#E2303A] rounded-sm'></div>
                                      <p>Withdrawals</p>
                                    </div>
                                    <p className='text-white text-sm'>5,000 USD</p>
                                    
                                  </div>
                              </div>
                          </div>
                          <div className="chart flex gap-2 w-40 h-36">
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