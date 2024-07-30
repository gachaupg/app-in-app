/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Table from "./tables/BuyTable";
import { SlLike } from "react-icons/sl";
import { DollarSign } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Buy = ({ show }) => {
  return (
    <>
      <div className="   flex wrap small flex-row gap-2w-36 justify-between p-1">
        <div
          style={{
            width: "80%",
          }}
          className=" w-full wrap small  flex wrap small gap-20 flex-row   p-1"
        >
          <div className="secondary w-56 flex  h-12 border border-slate-700 p-2 rounded-lg">
            <input
              className="secondary w-32 text-white  focus"
              type="text"
              placeholder="Enter amount"
            />
            <p
              style={{ width: "1px" }}
              className="grey bg-slate-600 h-full "
            ></p>
            <select className="secondary text-white" name="" id="">
              <option value="usdt">USDT</option>
            </select>
          </div>

          <div className="secondary w-56 h-12  flex  border border-slate-700 p-2 rounded-lg">
            <img
              className="mr-1"
              src="https://res.cloudinary.com/pitz/image/upload/v1721729168/coins-rotate_1_pkc6kn.png"
              alt=""
            />
            <select className="secondary w-full  text-slate-400" name="" id="">
              <option value="usdt">Payment Type</option>
              <option
                className="border bg-green-600 border-green-600"
                value="usdt"
              >
                {" "}
                <div className="border bg-green-600 border-green-600">
                  <input type="checkbox" />
                </div>{" "}
                Bank Transfer
              </option>
              <option value="usdt">Mobile Money</option>
              <option value="usdt">Merchant</option>
              <option value="usdt">All</option>
            </select>
          </div>

          <div className="secondary w-56 h-12  flex  border border-slate-700 p-2 rounded-lg">
            <img
              className="mr-1"
              src="https://res.cloudinary.com/pitz/image/upload/v1721729412/tdesign_undertake-transaction_qqlfvc.png"
              alt=""
            />
            <select className="secondary w-full text-slate-400" name="" id="">
              <option value="usdt">Salaam Bank</option>
              <option value="usdt">premier Bank</option>
              <option value="usdt">Dahabshiil Bank</option>
              <option value="usdt">Amal Bank</option>
              <option value="usdt">All</option>
            </select>
          </div>
          <div className="secondary flex h-12  border border-slate-700 p-3 w-12 rounded-lg">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721729409/Vector_4_k5otms.png"
              alt=""
            />
          </div>
        </div>
        <button
          className={`
          bg-green-600
           rounded-lg text-center h-12 flex  items-center justify-center w-32 text-white`}
        >
          <img
            src="https://res.cloudinary.com/pitz/image/upload/v1721729606/arrow-refresh-01_f760kl.png"
            alt=""
          />
          Refresh
        </button>
      </div>

      <div className="secondary w-full flex   flex-row justify-between secondary  border border-slate-700 p-2 rounded-lg ">
        <div
          style={{
            width: "45%",
          }}
          className="flex flex-col p-1 gap-1 items-start "
        >
          <div className="flex flex-row gap-2 justify-center items-center">
            <p className=" bg-green-600 h-full w-10 rounded-lg flex text-center justify-center items-center p-1 text-white">
              OA
            </p>
            <div className="flex flex-col  ">
              <p
                style={{
                  fontSize: "14px",
                }}
                className="flex flex-row items-center  gap-1 text-white"
              >
                Advitisers Username{" "}
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
                  <span className="text-green-600"> 90.20%</span> Completion
                  <span className="text-green-600 flex flex-row items-center">
                    <SlLike /> 95%
                  </span>
                </p>
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 mt-5 w-full">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">10 minutes</p>
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
            <p className="g">
              Placeholder for the comments from the advertiser
            </p>
          </div>
        </div>
        <div
          className="flex flex-col p-1 mr-20  gap-2 items-start"
          style={{
            width: "40%",
          }}
        >
          <p className="white">
            Commission <span className="green">1%</span>
          </p>
          <div className="border primary h- border-slate-700 rounded-2xl w-full p-3 flex flex-row justify-between gap-2">
            <div className="flex flex-col gap-3">
              <p className="g">I want to send</p>
              <p className="white flex flex-row items-center gap-1">
                {" "}
                <DollarSign color="green" /> 220
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
            <select className="primary w-full  g" name="" id="">
              <option className="primary g" value="Select the payment method">
                Select the payment method
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
              className="p-1 small  bg-green-600 white rounded-lg "
            >
              <Link to="/buy">BUY USDT</Link>
            </button>
          </div>
        </div>
      </div>
      <Table show={show} />
    </>
  );
};

export default Buy;
