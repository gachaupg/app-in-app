/* eslint-disable no-unused-vars */
import { Refresh } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { endpoint } from "../utils/APIRoutes";
import Buy from "./Dashboard/Trade/Buy";
import Sell from "./Dashboard/Trade/Sell";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MainMarket = () => {
  const [show, setShow] = useState("Buy");
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("P2P Trading");

  useEffect(() => {
    fetchData();
  }, [user]);

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
        `${endpoint}/trading_engine/p2p/all-orders/`,
        { headers }
      );
      setPayments(res.data);
      setLoading1(false);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  const tabs = [
    {
      link: 'dashboard',
      name: "Dashboard",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721367990/svgexport-54_1_ww7fdx.png",
    },
    {
      link: 'exchange',

      name: "Exchange",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368341/uil_exchange_craxj9.png",
    },
    {
      link: 'dashboard',

      name: "P2P Trading",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721678697/users-profiles-left_1_nypmot.png",
    },
    {
      link: 'swap',

      name: "Swap Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368339/Group_164002_jqrdb5.png",
    },
    {
      link: 'buy',

      name: "Buy Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368332/Group_164004_ddibmc.png",
    },
    {
      link: 'account',

      name: "Account",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368328/key-01_njdjyg.png",
    },
    {
      link: 'settings',

      name: "Settings",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    },
  ];

  return (
    <div className="primary flex wrap small justify-between flex-row gap-10 pr-40 pt-10">
      <div
        style={{ width: "25%", color: "#727272", fontSize: "15px" }}
        className="small dash-side flex flex-col gap-6 pt-12"
      >
        {tabs.map((tab) => (
          <Link key={tab.name} to={`/${tab.link}`}>
            <div
              className={`flex w-56 flex-row pl-14 items-center rounded-tr-lg rounded-br-lg gap-4 p-2 ${
                activeTab === tab.name ? "bg-[#303038]" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveTab(tab.name)}
            >
              <img
                className={`${tab.name === "Buy Crypto" ? "h-5" : "h-6"}`}
                src={tab.icon}
                alt={tab.name}
              />
              <div
                style={{
                  fontSize: tab.name === "Buy Crypto" ? "15.5px" : "h-6",
                }}
                className={`flex items-center ${
                  activeTab === tab.name ? "text-white" : ""
                } justify-between ml-5 w-full`}
              >
                {tab.name}
                {tab.name === "Account" && (
                  <MdOutlineKeyboardArrowDown className="ml-2" />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
          <div style={{
          width:"80%"
      }} className="flex primary pl-20 rounded-lg flex-col gap-2 w-full">
              <div
                  
          className={`primary small  border rounded-lg flex flex-row gap-2 ${
            show === "Buy" ? "border-green-600" : "border-red-600"
          } w-36 p-1`}
        >
          <button
            onClick={() => setShow("Buy")}
            className={`p-1 ${
              show === "Buy" ? "bg-green-600" : ""
            } rounded-lg text-center flex items-center justify-center w-16 text-white`}
          >
            Buy
          </button>
          <button
            onClick={() => setShow("Sell")}
            className={`p-1 ${
              show === "Sell" ? "bg-red-600" : ""
            } rounded-lg text-center flex items-center justify-center w-16 text-white`}
          >
            Sell
          </button>
        </div>
        {loading1 ? (
          <div className="flex items-center justify-center mt-20">
            <CircularProgress className="green" />
          </div>
        ) : (
          <>
            {show === "Buy" && <Buy payments={payments} show={show} />}
            {show === "Sell" && <Sell payments={payments} show={show} />}
          </>
        )}
      </div>
    </div>
  );
};

export default MainMarket;
