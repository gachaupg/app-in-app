/* eslint-disable no-unused-vars */
import { QuestionMark } from "@mui/icons-material";
import { Copy, DollarSign, Dot, Wallet } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlQuestion } from "react-icons/sl";
import { FiUpload } from "react-icons/fi";

const DepositForm = () => {
  return (
    <div className="text-white mt-2">
      <div
        style={{ width: "100%" }}
        className="border small size border-gray-700 wrap secondary w-full rounded-2xl p-3    flex flex-col justify-between"
      >
        <div className="flex w-full flex-row gap-10 wrap items-center ">
          <div style={{ width: "50%" }} className="flex flex-col p-1 it gap-2 ">
            <p className="grey"> Asset</p>
            <div className="mainGrey p-1 pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="mainGrey  flex flex-row items-center gap-1 w-full">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />
                <p>
                  USDT <span className="grey">Tether USDT</span>
                </p>
              </div>
              <IoMdArrowDropdown color="white" />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <p className="grey"> Network</p>
            <div className="mainGrey p-1 pr-2 mt-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="mainGrey items-center flex flex-row gap-1 w-full">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                  alt=""
                />
                <p>
                  TRC 20{" "}
                  <span
                    style={{
                      fontSize: "12px",
                    }}
                    className="grey"
                  >
                    Tron
                  </span>
                </p>
              </div>
              <IoMdArrowDropdown color="white" />
            </div>
          </div>
        </div>
        <div className="mainGrey border border-green-600 mt-2 mb-1  p-1 pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
          <div className="flex flex-row gap-2 items-center">
            <img
              className="bg-white border border-gray-300 h-16  ml-1 m-1"
              src="https://res.cloudinary.com/pitz/image/upload/v1721644117/Group_1_kkktku.png"
              alt=""
            />
            <p className="flex flex-col gap-2">
              <p className="grey">USDT Address</p>
              <p className="green flex flex-row items-center justify-center">
                <Wallet size={16} /> 1543634364353553
              </p>
            </p>
          </div>
          <p className="text-green-600 flex flex-row items-center gap-1">
            {" "}
            Copy <Copy size={14} className="h-15" color="green" />
          </p>
        </div>

        <p className="grey flex m-1 mt-2 flex-row items-center gap-1">
          Transfer Details <SlQuestion color="green" />
        </p>
        <div
          style={{
            background: "#18181D",
            fontSize:'14px'
          }}
          className=" p-1 pr-2 rounded-2xl w-full flex  flex-row gap-3 justify-between border border-green-700 items-center"
        >
          <ul>
            <li className="flex items-center gap-1">
              <Dot size={30} color="green" /> Please send the money from your
              own account Only
            </li>
            <li className="flex items-center gap-1">
              <Dot size={30} color="green" /> Put transaction ID in the
              description field of the bank
            </li>
            <li className="flex items-center gap-1">
              <Dot size={30} color="green" /> Please note, If you do not follow
              above conditions, we will reject your transaction and send you
              back your money.
            </li>
          </ul>
        </div>
        <div className=" p-2 pr-2  small  rounded-2xl w-full flex mt-3  flex-col gap-3 border border-yellow-700 ">
          <div className="flex flex-row items-center gap-2">
            <p  style={{
            fontSize:'14px'
          }}>Upload Documents</p>
            <button className="bg-slate-100 p-1 w-12 flex justify-center items-center text-center  rounded-lg ">
              <FiUpload className="text-yellow-700" />
            </button>
          </div>
          <p 
           style={{
            fontSize:'14px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="flex mt-4 mb-4 flex-row items-center justify-center gap-20">
          <button onClick={(e) => {
                window.location.reload();
              }} className="border p-1 w-32 rounded-lg border-slate-700">
            Cancel
          </button>
          <button className=" p-1 w-32 rounded-lg bg-red-700">Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default DepositForm;
