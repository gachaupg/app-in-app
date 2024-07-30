/* eslint-disable no-unused-vars */
import { QuestionMark } from "@mui/icons-material";
import { DollarSign, Dot, Wallet } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlQuestion } from "react-icons/sl";
import { Link } from "react-router-dom";

const DepositForm = () => {
  return (
    <div className="text-white mt-2">
      <div
        style={{ width: "100%" }}
        className="border small size border-gray-700 wrap mt-6 secondary w-full rounded-2xl p-3    flex flex-col justify-between"
      >
        <div className="flex w-full flex-row justify-between  gap-10 wrap items-center ">
          <div style={{ width: "50%" }} className="flex small   flex-col p-1 it gap-2 ">
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
          <div style={{ width: "50%" }} className="small">
            <p className="grey"> Network</p>
            <div className="mainGrey p-1 pr-2 mt-2 rounded-2xl  flex flex-row justify-between w-full items-center">
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
        <div></div>
        <p className="mb-2">Wallet Type</p>
        <div
          style={{
            width: "38%",
          }}
          className="border small wrap ml-1 p-1 flex flex-row border-green-600 gap-6 rounded-lg"
        >
          <button className="border mainGrey small flex flex-row items-center gap-1 p-1 border-green-600 rounded-lg">
            <img
              className="h-5"
              src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
              alt=""
            />
            USDT Wallet Address
          </button>
          <button className="  text-yellow-500 small flex flex-row items-center gap-1 p-1 border-green-600 rounded-lg">
            <img
              className="h-5"
              src="https://res.cloudinary.com/pitz/image/upload/v1721629441/Group_164092_ybnudz.png"
              alt=""
            />
            Binance
          </button>
          <button className="  small flex flex-row items-center gap-1 p-1 border-green-600 rounded-lg">
            <img
              className="h-5"
              src="https://res.cloudinary.com/pitz/image/upload/v1721629407/open_sesame_night_1_tunfpk.png"
              alt=""
            />
          </button>
        </div>
        <div className="flex w-full flex-row justify-between wrap gap-10 items-center ">
          <div style={{ width: "50%" }} className="flex  small flex-col p-2 gap-2 ">
            <p className="grey"> I want to withdrawal</p>
            <div className="border border-slate-700 p-1 pr-2 h-10 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="  flex flex-row gap-1 w-full">
                <DollarSign color="green" />
                <input
                  className=" w-full secondary"
                  type="text"
                  placeholder="100"
                  name=""
                  id=""
                />
              </div>
              <p className="flex flex-row items-center">
                <span className="text-green-600">Max</span> USDT{" "}
                <IoMdArrowDropdown color="white" />
              </p>
            </div>
          </div>
          <div className="small" style={{ width: "50%" }}>
            <div className="flex flex-row mt-2 justify-between">
              <p className="grey"> I want to receive</p>
              <p className="grey">
                {" "}
                Network fee <span className="text-green-600">$ 3</span>
              </p>
            </div>
            <div className="mainGrey p-1 pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="mainGrey  flex flex-row gap-1 w-full">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                  alt=""
                />
                <p className="flex flex-row gap-1 items-center">
                  <span
                    style={{
                      fontSize: "15px",
                    }}
                    className="grey"
                  >
                    99.10454
                  </span>
                  USDT
                </p>
              </div>
              <SlQuestion color="white" />
            </div>
          </div>
        </div>
        <div></div>
        <p className="grey">USDT Address</p>
        <div className=" p-1 pr-2 rounded-2xl w-full flex flex-row justify-between border border-slate-700 items-center">
          <div className="  flex flex-row gap-1 w-full">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
              alt=""
            />
            <div className="  flex flex-row gap-1 w-full">
              <DollarSign color="green" />
              <input
                className=" w-full secondary"
                type="text"
                placeholder="Type in your TRC20 wallet address"
                name=""
                id=""
              />
            </div>{" "}
          </div>
          <Wallet color="white" />
        </div>
        <p className="grey flex flex-row items-center mt-2 mb-2 gap-1">
          Transfer Details <SlQuestion color="green" />
        </p>
        <div
          style={{
            background: "#18181D",
            fontSize:'13px'
          }}
          className=" p-1 pr-1 rounded-2xl w-full flex  flex-row gap-1 justify-between border border-green-700 items-center"
        >
          <ul>
            <li className="flex items-center ">
              <Dot size={30} color="green" /> Please send the money from your
              own account Only
            </li>
            <li className="flex items-center ">
              <Dot size={30} color="green" /> Put transaction ID in the
              description field of the bank
            </li>
            <li className="flex items-center ">
              <Dot size={30} color="green" /> Please note, If you do not follow
              above conditions, we will reject your transaction and send you
              back your money.
            </li>
          </ul>
        </div>
        <div className="flex mt-4 mb-4 flex-row items-center justify-center gap-20">
          <Link to="/dashboard">
            <button
              onClick={(e) => {
                window.location.reload();
              }}
              className="border p-2 w-32 rounded-lg border-slate-700"
            >
              Cancel
            </button>
          </Link>
          <button className=" p-2 w-32 rounded-lg bg-red-700">Withdraw</button>
        </div>
      </div>
    </div>
  );
};

export default DepositForm;
