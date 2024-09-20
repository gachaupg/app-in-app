/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SlLike } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../../utils/APIRoutes";

const BuyForm = ({ id, buy, setBuy, handleClose, setId, verified, setOpen, payments1 }) => {
  const [show, setShow] = useState('');
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate("");

  const initialState = {
    order_type: "sell",
    currency: "",
    amount: "",
    commission_rate: 0,
    exchange_rate: 0,
    payment_method: "",
    payment_provider: "",
    limit: 0,
    completion_time: 0,
    completion_rate: 0,
    asset: "",
    advertiser_name: "",
    auto_reply: "",
    terms_and_conditions: "",
  };

  const [order, setOrder] = useState(initialState);
  console.log('order', order);

  useEffect(() => {
    fetchData();
  }, [user.access]);

  useEffect(() => {
    if (payments) {
      const
        calculatedAmount = show !== ""
          ? parseFloat(show) + (parseFloat(show) * (payments.commission_rate / 100))
          : 0; setOrder((prevOrder) => ({
            ...prevOrder,
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
            amount: show,
          }));
    }
  }, [payments, show]);

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

    if (order.order_type === "sell") {
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
          navigate(`/sell/${id}`, { state: order.amount });
        } else {
          if (data.code === "token_not_valid") {
            toast.error("Your session has expired. Please log in again.");
            navigate("/login");
          } else {
            toast.error(`Sell USDT failed: ${data.error || "Unknown error"}`);
          }
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
      } finally {
        setLoading1(false);
      }
    }
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
      setPayments(res.data);
    } catch (error) {
      setLoading1(false);
    }
  }

  const handleVerify2 = async (e) => {
    if (verified) {
      e.preventDefault();
      setLoading1(true);

      const token = user.access;

      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        navigate("/login");
        setLoading1(false);
        return;
      }

      if (order.order_type === "sell") {
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
            navigate(`/sell/${id}`, { state: order.amount });
          } else {
            if (data.code === "token_not_valid") {
              toast.error("Your session has expired. Please log in again.");
              navigate("/login");
            } else {
              toast.error(`Sell USDT failed: ${data.error || "Unknown error"}`);
            }
          }
        } catch (error) {
          toast.error(`Error: ${error.message}`);
        } finally {
          setLoading1(false);
        }
      }
    } else {
      setOpen(true)
      toast.error('Verify account first');

    }
  }
  const [receive, setReceive] = useState('');
  const [limCheck, setLim] = useState(false);
  console.log('recieve', receive);
  console.log('show', show);

  const commissionRate = payments.commission_rate;

  const handleShowChange = (e) => {
    const value = e.target.value;
    setShow(value === '' ? 0.0 : value);
    const calculatedReceive = (commissionRate) * (parseFloat(value)).toFixed(2);
    setReceive(calculatedReceive);
  };

  const handleReceiveChange = (e) => {
    const value = e.target.value;
    setReceive(value === '' ? 0.0 : value);
    const calculatedShow = (parseFloat(value) / (commissionRate)).toFixed(2);
    setShow(calculatedShow);
  };
  useEffect(() => {
    const minOrderAmount = Number(payments.max_order_amount - payments.min_order_amount).toFixed(2);
    const receive1 = Number(receive).toFixed(2);
    const show1 = Number(show).toFixed(2);

    if (show1 || receive1 !== minOrderAmount) {
      setLim(true);
    }
  }, [show, payments.min_order_amount, receive, payments.max_order_amount]);

  return (
    <div className="flex small wrap items-center justify-center">
      <div
        style={{
          width: "100%",
        }}
        className="secondary mt-10 small wrap flex gap-10 flex-row justify-between secondary border border-slate-700 p-2 rounded-lg"
      >
        <div

          className="flex flex-col p-1  items-start "
        >

          <div className="flex flex-row w-full gap-5 justify-spa  items-center">
            <p className=" bg-green-600 h-full w-10 rounded-lg flex text-center justify-center items-center p-1 text-white">
              <span
                style={{
                  fontSize: "16px",
                }}
                className="h-7 text-center flex items-center capitalize justify-center w-8 p-1 bg-green-600 rounded-lg"
              >
                {payments?.advertiser_name?.substring(0, 2).toUpperCase()}
              </span>
            </p>
            <div className="flex flex-col  ">
              <p
                style={{
                  fontSize: "14px",
                }}
                className="flex flex-row items-center  capitalize gap-1 text-white"
              >
                {payments.advertiser_name?.split('@')[0]}
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721730938/Frame_34214_gjn30n.png"
                  alt=""
                />
              </p>
              <p>
                <p
                  style={{
                    fontSize: "10px",
                  }}
                  className="flex g flex-row items-center gap-1"
                >
                  <span className="text-green-600">120</span> Orders
                  <span className="text-green-600">
                    {" "}
                    {payments.completion_rate * 100}%
                  </span>{" "}
                  Completion
                  <span className="text-green-600 flex flex-row justify-between items-center">
                    <SlLike /> 95%
                  </span>
                </p>
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 mt-5 w-full">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">{payments.limit_duration}minutes</p>
              <p
                style={{
                  fontSize: "13px",
                }}
                className="g"
              >
                Time limit
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">2 minutes</p>
              <p
                style={{
                  fontSize: "13px",
                }}
                className="g"
              >
                Average release time
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white"> {payments.amount !== undefined && payments.amount !== null
                ? Number(payments.amount).toFixed(2)
                : "0.00"} USDT</p>
              <p
                style={{
                  fontSize: "13px",
                }}
                className="g"
              >
                Available assets
              </p>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg h- border-slate-700 primary p-2 h-52 mt-5 w-full">
            <p className="flex flex-row items-center white gap-1">
              <img
                src="https://res.cloudinary.com/pitz/image/upload/v1721821790/alert-circle_qykxiy.png"
                alt=""
              />
              <p>
                Advertiser's Terms{" "}
                <span className="text-red-600">(Please read carefully)</span>
              </p>
            </p>
            <p className="g">{payments.terms_and_conditions}</p>
          </div>
        </div>
        <div
          className="flex flex-col p-1 mr-20 gap-2 items-start"
          style={{
            width: "40%",
          }}
        >
          <p className="white">
            Rate <span className="green">{payments.commission_rate}</span>
          </p>
          <p className="text-yellow-600">
            Processing Fee <span className="green">0.00</span>
          </p>
          <div className="border primary border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="g">I want to {show} send</p>
              <div className="flex flex-row items-center w-full justify-between">
                <input
                  required
                  value={show!=""?show:""}
                  onChange={handleShowChange}
                  placeholder="220 USDT"
                  type="text"
                  className="w-full p-1 primary no-border white place"
                />
                <p className="g"> {
                  payments1.map((i) => {
                    return (
                      <>

                        <span onClick={() => {
                          setShow((isNaN(parseFloat(i.balance)) ? 0.00 : parseFloat(i.balance)).toFixed(2));
                          setReceive((isNaN(parseFloat(i.balance)) ? 0.00 : parseFloat(i.balance)).toFixed(2) * commissionRate)
                        }} className="text-yellow-500 mr-2 cursor-pointer">
                          ALL
                        </span>
                      </>
                    )
                  })
                }
                  USDT</p>
              </div>
            </div>
          </div>
          <div className="border primary border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="g">I want to receive</p>
              <p className="white flex flex-row items-center gap-3">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />
                <p>
                  <input
                    required
                    value={receive!=""?receive:""}
                    onChange={handleReceiveChange}
                    placeholder="220 USDT"
                    type="text"
                    className="w-full p-1 primary no-border white place"
                  />
                </p>
                <span className="g">USD</span>
              </p>
            </div>
          </div>

          {/* Payment method selection */}
          <div className="border primary border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <select className="primary no-border w-full g">
              <option value="">Set my payment method</option>
              <option className="primary g" value="Select the payment method">
                {payments?.payment_method_name}
              </option>
            </select>
          </div>
          {/* Action buttons */}
          <div className="w-full mt-7 flex flex-row small wrap gap-24">
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
                className="p-1 small white bg-red-600 white rounded-lg"
              >
                SELL USDT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
