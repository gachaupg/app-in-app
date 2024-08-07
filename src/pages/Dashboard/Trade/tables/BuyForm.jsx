/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { DollarSign } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../../utils/APIRoutes";
import axios from "axios";

const initiaalState = {
  advertiser: "Omar Ali",
  commision: "0.6",
  Available: "1,200 USDT",
  payment: "Salam Bank",
  trade: "Buy USDT",
  completion_rate: "",
};

const BuyForm = ({ id }) => {
  const [show, setShow] = useState("Buy");
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  // console.log("buy", payments);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate("");
  useEffect(() => {
    fetchData();
  }, [user.access]);
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
      setPayments(res.data); // Assuming the response data is what you need to set
      // console.log("hello", res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }
  return (
    <div>
      <div className="secondary w-full flex   flex-row justify-between secondary  border border-slate-700 p-2 rounded-lg ">
        <div
          style={{
            width: "45%",
          }}
          className="flex flex-col p-1 gap-1 items-start "
        >
          <div className="flex flex-row gap-2 justify-center items-center">
            <p className=" bg-green-600 h-full w-10 rounded-lg flex text-center justify-center items-center p-1 text-white">
              <span
                style={{
                  fontSize: "16px",
                }}
                className="h-7 text-center flex items-center capitalize justify-center w-8 p-1 bg-green-600 rounded-lg"
              >
                {payments.advertiser_name?.username.substring(0, 2)}
              </span>
            </p>
            <div className="flex flex-col  ">
              <p
                style={{
                  fontSize: "14px",
                }}
                className="flex flex-row items-center  capitalize gap-1 text-white"
              >
                {payments.advertiser_name?.username}
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
                  <span className="text-green-600 flex flex-row items-center">
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
              <p className="white">1,200 USDT</p>
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
          className="flex flex-col p-1 mr-20  gap-2 items-start"
          style={{
            width: "40%",
          }}
        >
          <p className="white">
            Commission <span className="green">{payments.commission_rate}</span>
          </p>
          <div className="border primary h- border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="g">I want to send</p>
              <p className="white flex flex-row items-center gap-1">
                <DollarSign color="green" />{" "}
                {payments.amount !== undefined && payments.amount !== null
                  ? Number(payments.amount).toFixed(2)
                  : "0.00"}
              </p>
            </div>
            <p className="white flex flex-row items-center gap-1">
              USD <IoIosArrowDown />
            </p>
          </div>
          <div className="border primary  border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="g">I want to recieve</p>
              <p className="white flex flex-row items-center gap-3">
                {" "}
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />{" "}
                220
              </p>
            </div>
            {/* <p className="white flex flex-row items-center gap-1">
              USD <IoIosArrowDown />
            </p> */}
          </div>

          <div className="border primary  border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <select className="primary no-border w-full  g" name="" id="">
              <option className="primary g" value="Select the payment method">
                {payments.payment_method?.name}
              </option>
            </select>
          </div>
          <div className=" w-full mt-7 flex flex-row small wrap  gap-24">
            <button
              style={{
                width: "42%",
              }}
              className="p-1 border small border-slate-700 h-10  white rounded-lg "
            >
              Cancel
            </button>

            <button
              style={{
                width: "45%",
                fontSize: "15px",
              }}
              className="p-1 small bg-green-600 white rounded-lg"
            >
              <Link
                to={{
                  pathname: `/buy/${payments.id}`,
                  
                }}
                style={{
                  color: "white", // Ensures the text is white
                  textDecoration: "none", // Removes the underline
                }}
              >
                BUY USDT
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
