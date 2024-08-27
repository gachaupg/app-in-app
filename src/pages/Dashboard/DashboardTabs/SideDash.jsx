/* eslint-disable no-unused-vars */
import axios from "axios";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";

const SideDash = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();

  const [payments, setPayments] = useState([]);
  const [match, setMatch] = useState([]);
  const [loading1, setLoading1] = useState(false);
  useEffect(() => {
    fetchData()
  }, [user?.access])
  async function fetchData() {
    const token = user.access;

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
  }


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

  return (
    <div className="w-full flex flex-col gap-4 small wrap ">
      <div className="border border-gray-700 w-full secondary small wrap  rounded-2xl p-2  mt-1  justify-center items-center  flex flex-col justify-between">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <img
            className="w-48 h-48"
            src="https://res.cloudinary.com/pitz/image/upload/v1721369888/Group_34205_w3htkn.png"
            alt=""
          />
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
            <p className="white">00.00 USD</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-red-600"></p>
              <p className="grey">Withdrawals</p>
            </div>
            <p className="white">00.00 USD</p>
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
            <p className="white">00.00 USD</p>
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
