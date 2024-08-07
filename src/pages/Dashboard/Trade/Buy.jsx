/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Table from "./tables/BuyTable";
import { SlLike } from "react-icons/sl";
import { DollarSign } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Buy = ({ show ,payments}) => {
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
      <Table show={show} payments={payments}/>
    </>
  );
};

export default Buy;
