/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../../utils/APIRoutes";
import { CircularProgress } from "@mui/material";

const BuyForm = ({ id, buy, setBuy, handleClose, setId,verified,setOpen }) => {
  const [show, setShow] = useState("");
  const [final, setFinal] = useState(false);
  const [payments, setPayments] = useState({});
  const [loading1, setLoading1] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();

  const initialState = {
    order_type: "buy",
    currency: payments?.currency || "",
    amount: "",
    commission_rate: payments?.commission_rate || 0,
    exchange_rate: payments?.exchange_rate || 0,
    payment_method: payments?.payment_method || "",
    payment_provider: payments?.payment_provider || "",
    limit: payments?.limit_duration || 0,
    completion_time: payments?.completion_time || 0,
    completion_rate: payments?.completion_rate || 0,
    asset: payments?.asset || "",
    advertiser_name: payments?.advertiser_name || "",
    auto_reply: payments?.auto_reply || "",
    terms_and_conditions: payments?.terms_and_conditions || "",
  };

  const [order, setOrder] = useState(initialState);
console.log(order);

  useEffect(() => {
    fetchData();
  }, [user.access]);

  useEffect(() => {
    const calculatedAmount = show !== ""
      ? parseFloat(show) - (parseFloat(show) * (payments.commission_rate / 100))
      : 0;

    if (payments) {
      setOrder({
        ...order,
        currency: payments.currency,
        commission_rate: payments.commission_rate,
        exchange_rate: payments.exchange_rate,
        payment_method: payments.payment_method,
        payment_provider: payments.payment_provider,
        limit: 10.00,
        terms_and_conditions: payments.terms_and_conditions,
        completion_time: payments.completion_time,
        completion_rate: payments.completion_rate,
        asset: payments.asset,
        advertiser_name: payments.advertiser_name,
        auto_reply: payments.auto_reply,
        amount: calculatedAmount.toFixed(2),
      });
    }
  }, [payments, show]);
 const [uid11, uid1] =useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading1(true);

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
      const response = await fetch(
        `${endpoint}/trading_engine/p2p/orders/${id}/match/`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(order),
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success("Bought successfully!");
        navigate(`/buy/${id}`, { state: order.amount });
      } else {
        if (data.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error(`Buy USDT failed: ${data.error || "Unknown error"}`);
        }
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading1(false);
    }
  };

  const handleClick = () => {
    setFinal(!final);
  };

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
        `${endpoint}/trading_engine/p2porders/${id}/`,
        { headers }
      );
      setLoading1(false);
      setPayments(res.data);
    } catch (error) {
      setLoading1(false);
    }
  }
  console.log(verified);
  
  const handleVerify2 = async (e) => {
    if (verified===true) {
      e.preventDefault();
      setLoading1(true);
  
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
        const response = await fetch(
          `${endpoint}/trading_engine/p2p/orders/${id}/match/`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(order),
          }
        );
        const data = await response.json();
  
        if (response.ok) {
          toast.success("Bought successfully!");
          navigate(`/buy/${id}`, { state: order.amount });
        } else {
          if (data.code === "token_not_valid") {
            toast.error("Your session has expired. Please log in again.");
            navigate("/login");
          } else {
            toast.error(`Buy USDT failed: ${data.error || "Unknown error"}`);
          }
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      } finally {
        setLoading1(false);
      }
    } else {
      setOpen(true)
    }
  }
 
  return (
    <div className="flex items-center justify-center ">
      <div className="secondary mt-10 flex gap-10 flex-row justify-between secondary border border-slate-700 p-2 rounded-lg" style={{ width: '100%' }}>
        <div className="flex flex-col p-1 items-start">
          {/* The left section */}
          <div className="flex flex-row w-full gap-5 justify-spa items-center">
            {/* Advertiser name and details */}
            <p className="greenbg h-full w-10 rounded-lg flex text-center justify-center items-center p-1 text-white">
              <span className="h-7 text-center flex items-center capitalize justify-center w-8 p-1 greenbg rounded-lg" style={{ fontSize: "16px" }}>
                {payments?.advertiser_name?.substring(0, 2).toUpperCase()}
              </span>
            </p>
            <div className="flex flex-col">
              <p className="flex flex-row items-center capitalize gap-1 text-white" style={{ fontSize: "14px" }}>
                {payments.advertiser_name?.username}
                <img src="https://res.cloudinary.com/pitz/image/upload/v1721730938/Frame_34214_gjn30n.png" alt="" />
              </p>
              <p className="flex flex-row items-center gap-1" style={{ fontSize: "10px" }}>
                <span className="text-green-600">120</span> Orders
                <span className="text-green-600"> {payments.completion_rate * 100}%</span> Completion
                <span className="text-green-600 flex flex-row justify-between items-center">
                  <SlLike /> 95%
                </span>
              </p>
            </div>
          </div>
          {/* Time, release time, available assets */}
          <div className="flex flex-row gap-10 mt-5 w-full">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">{payments.limit_duration} minutes</p>
              <p className="g" style={{ fontSize: "13px" }}>Time limit</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">2 minutes</p>
              <p className="g" style={{ fontSize: "13px" }}>Average release time</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">{payments.amount !== undefined && payments.amount !== null ? Number(payments.amount).toFixed(2) : "0.00"} USDT</p>
              <p className="g" style={{ fontSize: "13px" }}>Available assets</p>
            </div>
          </div>
          {/* Advertiser's Terms */}
          <div className="flex flex-col border rounded-lg h- border-slate-700 primary p-2 h-52 mt-5 w-full">
            <p className="flex flex-row items-center white gap-1">
              <img src="https://res.cloudinary.com/pitz/image/upload/v1721821790/alert-circle_qykxiy.png" alt="" />
              <p>Advertiser's Terms <span className="text-red-600">(Please read carefully)</span></p>
            </p>
            <p className="g">{payments.terms_and_conditions}</p>
          </div>
        </div>
        {/* The right section */}
        <div className="flex flex-col p-1 mr-20 gap-2 items-start" style={{ width: "40%" }}>
          <p className="white">Commission <span className="green">{payments.commission_rate}</span></p>
          {/* Input for sending amount */}
          <div className="border primary h- border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="g">I want to {show} send</p>
              <input required onChange={(e) => setShow(e.target.value)} placeholder="220 USD" type="text" className="w-full p-1 primary no-border white place" />
            </div>
            <p className="white flex flex-row items-center gap-1">
              <IoIosArrowDown /> USDT
            </p>
          </div>
          {/* Amount to receive */}
          <div className="border rounded-2xl h- primary border-slate-700 w-full p-3 flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="g"> I want to Receive</p>
              <p className="white">{order.amount} USDT</p>
            </div>
            <p className="white flex flex-row items-center gap-1">
              <IoIosArrowDown /> USD
            </p>
          </div>
          {/* Button to continue */}
          <div className="flex  w-full justify-between mt-3 ">
          <button
              onClick={() => {
                setBuy((prevBuy) => (prevBuy === id ? false : id));
                setId(id);
              }}
              style={{
                width: "42%",
              }}
              className="p-1 border small border-slate-700 h-10 white rounded-lg"
            >
              Cancel
            </button>
            {loading1 ? (
              <CircularProgress />
            ) : (
              <button
                onClick={handleVerify2}
                style={{
                  width: "45%",
                  fontSize: "15px",
                }}
                className="p-1 small white greenbg white rounded-lg"
              >
                BUY USDT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
