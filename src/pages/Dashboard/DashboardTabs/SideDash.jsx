/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Title, Tooltip, Legend, ArcElement);
const SideDash = ({ activeTab }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();

  const [payments, setPayments] = useState([]);
  const [deposit, setDeposit] = useState([]);
  const [width, setWidth] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [amount, setTotalAmount] = useState('')
  const [widthamount, setWidthTotalAmount] = useState('')
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
          `${endpoint}/trading_engine/wallets/`,
          { headers }
        );
        setPayments(res.data);
        setLoading1(false);
        console.log('payments', res.data);
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
        const res = await axios.get(`${endpoint}/trading_engine/p2p/deposit/`, { headers });

        const depositData = res.data;
        setDeposit(depositData);


        const totalAmount = depositData.reduce((acc, item) => acc + item.amount, 0);
        setTotalAmount(totalAmount);

        setLoading1(false);
        console.log('payments', depositData);
        console.log('Total Amount:', totalAmount);
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
        const res = await axios.get(`${endpoint}/trading_engine/p2p-withdraw/`, { headers });

        const depositData = res.data;
        setDeposit(depositData);


        const totalAmount = depositData.reduce((acc, item) => acc + item.amount, 0);
        setWidthTotalAmount(totalAmount);

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


  console.log('amount', deposit);

  function formatBalance(balance) {
    let num = parseFloat(balance);

    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M';
    } else {
      return num.toFixed(2);
    }
  }

  const data_d1 = [
   amount+widthamount,
    amount,
    widthamount,
    0
  ];
  const labels_d1 = ['Deposits', 'Withdrawals', 'In Progress', 'P2P'];
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
    <div className="w-full flex flex-col gap-4 small wrap ">
      <div className="border border-gray-700 w-full secondary small wrap  rounded-2xl p-2  mt-1  justify-center items-center  flex flex-col justify-between">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <Doughnut data={chartData} options={options} className="small-chart" />
          <div className="absolute flex flex-col items-center">
            <p className="white flex gap-1 text-center">  {
              payments.map((balance) => {
                return (
                  <p key={balance.id}>
                    <p key={balance.id}>
                      {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                    </p>
                  </p>
                )
              })
            } USD</p>
            <p style={{ fontSize: "12px" }} className="grey text-center">
              Transactions
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-green-600"></p>
              <p className="grey">Deposits</p>
            </div>
            <p className="white">{formatBalance(amount)} USD</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-red-600"></p>
              <p className="grey">Withdrawals</p>
            </div>
            <p className="white">{formatBalance(widthamount)} USD</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-yellow-400"></p>
              <p className="grey">In Progress</p>
            </div>
            <p className="white">00.00 USD</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-blue-600"></p>
              <p className="grey">P2P</p>
            </div>
            <p className="white gap-1 flex"> {payments.map((balance) => {
              return (
                <p key={balance.id}>
                  <p key={balance.id}>
                    {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                  </p>
                </p>
              )
            })
            } USD</p>
          </div>
        </div>
      </div>
      <p className="text-start white">P2P buys</p>

      <div
        style={{ width: "100%" }}
        className="flex small flex-col p-3 border rounded-lg border-gray-700 secondary w-full"
      >
        <div className="flex white flex-row items-center mb-3 justify-between ">
          <p>00.00 USD</p>
          <button className="flex items-center  p-1 grey   border-slate-500">
            month <MdOutlineKeyboardArrowDown size={15} />
          </button>
        </div>
        <div className="progress-bar">
          <div
            className="filler "
            style={{ width: `60%`, background: "#32A86C" }}
          />
        </div>
        <div className="mt-2">
          <div className="flex flex-row grey items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-green-800 h-3 w-3 roo rounded-sm"></p>
              <p className="white">Completed</p>
            </div>
            <p>00.00 USD </p>
          </div>
          <div className="flex  greyflex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-yellow-400 h-3 w-3 roo rounded-sm"></p>
              <p className="white">Inscrow</p>
            </div>
            <p className="grey">00.00 USD</p>
          </div>
        </div>
      </div>
      <p className="white">P2P sells</p>
      <div
        style={{ width: "100%" }}
        className="flex flex-col p-3 small border  rounded-lg border-slate-700 secondary w-full"
      >
        <div className="flex white flex-row items-center mb-3 justify-between ">
          <p>00.00 USD</p>
          <button className="flex items-center  p-1  grey  border-slate-500">
            month <MdOutlineKeyboardArrowDown size={15} />
          </button>
        </div>

        <div className="progress-bar">
          <div
            className="filler "
            style={{ width: `60%`, background: "#FA615F" }}
          />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-green-800 h-3 w-3 roo rounded-sm"></p>
              <p className="white">Completed</p>
            </div>
            <p className="grey">00.00 USD</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-yellow-400 h-3 w-3 roo rounded-sm"></p>
              <p className="white ml-1">Inscrow</p>
            </div>
            <p className="grey">00.00 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDash;
