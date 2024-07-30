/* eslint-disable no-unused-vars */
import { Delete, Plus, Trash, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Feedback from "./p2pCenter/Feedback";
import { Link } from "react-router-dom";
import MyAdds from "./p2pCenter/MyAdds";

const Center = () => {
  const [show ,setShow]=useState('Payments')
  return (
    <div className="flex rounded-lg flex-col pr-32 gap-2 w-full">
      <div
        className={`secondary small border border-slate-700 p-2  rounded-lg flex flex-row justify-between `}
      >
        <div className="flex flex-col gap-2 ">
          <p className="flex flex-row items-center gap-3 r">
            <p className="p-2 bg-green-600 text-white h-10 w-10 rounded-full flex items-center ">
              OA
            </p>
            <p className="g">User Name</p>
            <p className="g bg-green-600 text-white h-6 w-6 rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/pitz/image/upload/v1721926700/Icon_2_wrahsk.png"
                alt=""
              />
            </p>
          </p>
          <div className="flex w-full items-center gap-2">
            <button
              className="p-1 rounded-2xl h-6 flex items-center justify-center text-green-600"
              style={{
                background: "#384B41",
              }}
            >
              verified merchant
            </button>
            <button
              className="p-1 bg-green-600 rounded-2xl h-9 flex items-center justify-center text-white"
              style={{}}
            >
              verified merchant
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center float-left">
          <p className="green float-left">P2P Balance</p>
          <p className="g">
            <span className="white"> 1900.8648 USDT</span> ≈ 1,900 USD
          </p>
          <p className="g">
            In escrow : <span className="white">800 USD</span>
          </p>
        </div>
      </div>

      <div
        className={`secondary small border border-slate-700 p-2  rounded-lg flex flex-row justify-between `}
      >
        <div className=" flex white flex-col">
          120
          <p style={{ fontSize: "13px" }} className="g">
            Trades
          </p>
        </div>
        <div className=" flex white flex-col">
          98%
          <p style={{ fontSize: "13px" }} className="g">
            Avg.release time
          </p>
        </div>
        <div className=" flex white flex-col">
          2:56 Min
          <p style={{ fontSize: "13px" }} className="g">
            AVg.pay time
          </p>
        </div>
        <div className=" flex white flex-col">
          99%
          <p style={{ fontSize: "13px" }} className="g">
            Rating
          </p>
        </div>
        <div className=" flex white flex-col">
          120 USD
          <p style={{ fontSize: "13px" }} className="g">
            Total volume
          </p>
        </div>
      </div>
      <div className={`primary small   p-2  flex flex-row justify-between `}>
        <div className={`primary small  p-2  flex flex-row gap-10 `}>
          <button
          
          onClick={()=>setShow('Payments')}
            style={{ fontSize: "13px" }}
            className="h-10 w-36 bg-green-600 text-white rounded-3xl"
          >
            Payment Methods
          </button>
          <button
          onClick={()=>setShow('Feedback')}
            style={{ fontSize: "13px" }}
            className="h-10 border w-36 border-green-600 text-green-600 rounded-3xl"
          >
            Feedback <span className="g">(8)</span>
          </button>
          <button
            style={{ fontSize: "13px" }}
            className=" h-10 border w-36 border-green-600 text-green-600 rounded-3xl"
          >
            Ad Settings
          </button>
          <button
           onClick={()=>setShow('myAds')}
            style={{ fontSize: "13px" }}
            className="p-2 h-10 border w-36 border-green-600 text-green-600 rounded-3xl"
          >
            My Ads{" "}
            <span
              style={{
                color: "#F79330            ",
              }}
              className="g"
            >
              (14)
            </span>
          </button>
          <button
            style={{ fontSize: "13px" }}
            className="p-2 h-10 border w-36 border-green-600 text-green-600 rounded-3xl"
          >
           <Link to="/adds">
           + Pos New Ad
           </Link>
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721930070/Rectangle_115_bwo3u8.png"
              alt=""
            />
            <p className="g">Live Ads Exist</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            {" "}
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721930066/Rectangle_114_lbm9hq.png"
              alt=""
            />
            <p className="g">Offline Ads Exist</p>
          </div>
        </div>
        </div>
        {show==='Feedback' &&(
          <>
          <Feedback/>
          </>
        )}
         {show==='myAds' &&(
          <>
          <MyAdds/>
          </>
        )}
     {show==='Payments' &&(
      <>
       <div
        className={`secondary small border border-slate-700 p-2  rounded-lg flex flex-col justify-between `}
       >
        <div className="flex flex-row  w-full justify-between items-center p-1">
          <p className="white">Bank</p>
          <div className="border flex items-center  p-1 white border-green-600 rounded-lg">
            <Plus color="green" />{" "}
            <select className="secondary w-44" name="" id="">
              <option value="">Add Method</option>
            </select>
          </div>
        </div>
        <p className="white flex flex-row items-center gap-1">
          <img
            className="rounded-full object-contain"
            src="https://res.cloudinary.com/pitz/image/upload/v1721925032/492x0w_1_rw99fe.png"
            alt=""
          />{" "}
          Primier Bank <IoMdArrowDropdown color="white" />
        </p>
        <div className="w-full flex flex-row items-center justify-between gap-6">
          <div
            style={{
              background: "#35353E                ",
            }}
            className="secondary mt-2  rounded-3xl w-full p-2"
          >
            <p className="g">Account Holder</p>
          </div>
          <div className="primary mt-2  rounded-3xl w-full p-2">
            <p className="g">Account Number</p>
          </div>
        </div>
        <p className="white mt-4 flex flex-row items-center gap-1">
          <img
            className="rounded-full object-contain"
            src="https://res.cloudinary.com/pitz/image/upload/v1721979295/image_7_1_la1uwx.png"
            alt=""
          />{" "}
          Salam Bank <IoMdArrowDropdown color="white" />
        </p>
        <div className="w-full flex flex-row items-center justify-between gap-6">
          <div
            style={{
              background: "#35353E                ",
            }}
            className="secondary mt-2  rounded-3xl w-full p-2"
          >
            <p className="g">Account Holder</p>
          </div>
          <div className="primary mt-2  rounded-3xl w-full p-2">
            <p className="g">Account Number</p>
          </div>
        </div>
        <p
          style={{
            height: "1px",
          }}
          className="w-full bg-slate-700 mt-2 mb-2"
        ></p>
        <div className="flex flex-row w-full gap-7 p-3 items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="white">Mobile Money</p>
            <p className="flex flex-row white items-center gap-2">
              <img
                className="rounded-full"
                src="https://res.cloudinary.com/pitz/image/upload/v1721980076/image_1_dfpk3p.png"
                alt=""
              />{" "}
              Taaj Money
            </p>
          </div>
          <Trash2Icon color="green" />
        </div>
        <div className="flex flex-row gap-6 items-center w-full">
        <div className="flex flex-col w-full  gap-1">
                        <p className="g">Wallet Name</p>
            <div className="primary mt-2  rounded-3xl w-full p-2">
              <p className="green">Omar Ali</p>
            </div>
          </div>
          <div className="flex flex-col w-full  gap-1">
            <p className="g">Wallet Number</p>
            <div className="primary mt-2  rounded-3xl w-full p-2">
              <p className="green">123456789</p>
            </div>
          </div>
        </div>
        <button className="flex border border-green-700 rounded-3xl text-center green  justify-center p-1 mt-4 flex-row gap-6 items-center w-full">
         Update
        </button>
      </div>
      </>
     )}
    </div>
  );
};

export default Center;
