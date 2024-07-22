import { Copy, Plus, Wallet } from "lucide-react";
import { useState } from "react";
import Btn from "../../../components/Button";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";
import Table from "../DashboardTabs/Table";
import SideDash from "../DashboardTabs/SideDash";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DepositForm from "./DepositForm";
import Widthdrwal from "./Widthdrwal";

const MainDash = () => {
  const [activeTab, setActiveTab] = useState("P2P Trading");
  const [show, setShow] = useState("P2P");
  const tabs = [
    {
      name: "Dashboard",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721367990/svgexport-54_1_ww7fdx.png",
    },
    {
      name: "Exchange",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368341/uil_exchange_craxj9.png",
    },
    {
      name: "P2P Trading",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    }, // Add the icon URL for P2P Trading

    {
      name: "Swap Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368339/Group_164002_jqrdb5.png",
    },
    {
      name: "Buy Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368332/Group_164004_ddibmc.png",
    },
    {
      name: "Account",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368328/key-01_njdjyg.png",
    },
    {
      name: "Settings",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    },
  ];

  return (
    <div className="primary flex wrap small justify-between flex-row ">
      <div
        style={{ width: "14%", color: "#727272", fontSize: "15px" }}
        className="small flex flex-col gap-6 pt-12"
      >
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex w-full flex-row items-center rounded-tr-lg rounded-br-lg gap-4 p-2 pl-6`}
            style={{
              cursor: "pointer",
              background: activeTab === tab.name ? "#303038" : "",
            }}
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
              className={`flex items-center justify-between ml-5 w-full`}
            >
              {tab.name}
              {tab.name === "Account" && (
                <MdOutlineKeyboardArrowDown className="ml-2" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ width: "83%" }}
        className="small p-2 pt-12 flex flex-col mr-10 gap-4"
      >
        <div className="flex flex-row small wrap width-full gap-4">
          <p
            style={{
              fontSize: "15px",
              textDecoration: "underline",
              textDecorationColor: "green",
              color: "white",
            }}
          >
            P2P Dashboard
          </p>
          <p style={{ fontSize: "15px" }} className=" text-slate-400">
            Market
          </p>
          <p style={{ fontSize: "15px" }} className=" text-slate-400">
            Orders
          </p>
          <p style={{ fontSize: "15px" }} className=" text-slate-400">
            P2P Center
          </p>
        </div>
        <div className="secondary border rounded-2xl border-gray-700 wrap flex flex-row  small wrap w-full justify-between items-center p-2">
          <div className="flex flex-row gap-2">
            <img
              className="h-10"
              src="https://res.cloudinary.com/pitz/image/upload/v1721370108/Ellipse_858_1_frdc61.png"
              alt=""
            />
            <p>
              <p style={{ fontSize: "16px" }} className="white">
                Hello, Omar Ali!
              </p>
              <p
                style={{ fontSize: "12px" }}
                className="green flex flex-row items-center gap-1 "
              >
                Verified account{" "}
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                  alt=""
                />
              </p>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: "13px" }} className="grey">
              Use ID
            </p>
            <p className="white flex flex-row items-center gap-1">
              23252434525 <Copy size={16} style={{ color: "#F79330" }} />
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: "13px" }} className="grey">
              User Type
            </p>
            <p className="white flex flex-row items-center gap-1">
              Individual{" "}
            </p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row gap-3">
              <Btn
                title="Post Buy Add"
                icon={<Plus size={15} />}
                bg="#1D8751"
                color="#FFFFFF"
                className="additional-class-name"
              />

              <Btn
                title="Post Sell Add"
                icon={<Plus size={15} />}
                bg="#E23D3A"
                color="#FFFFFF"
                className="additional-class-name"
              />
            </div>
            <img
              className="h-10"
              src="https://res.cloudinary.com/pitz/image/upload/v1721371733/Frame_34833_xr45hu.png"
              alt=""
            />
          </div>
        </div>
        {show === "P2P" && (
          <>
            <div className="flex flex-row w-full wrap small justify-between">
              <div
                style={{
                  width: "70%",
                }}
                className="  flex flex-col gap-2"
              >
                <p className="white"> P2P Wallet</p>
                <div className="border small size border-gray-700 wrap secondary rounded-2xl p-1 items-center   flex flex-row justify-between">
                  <p className="white ml-2">
                    <p className="grey">Balance</p>
                    <p className="flex flex-row">
                      1900.8648 USDT{" "}
                      <span className="grey flex flex-row">
                        {" "}
                        <span className="ml-1">≈ </span> 1,900 USD
                      </span>
                    </p>
                  </p>

                  <div className="flex gap-2 small wrap">
                    <div onClick={() => setShow("Deposit")}>
                      <Btn
                        color="#FFFFFF"
                        icon={<MdArrowOutward size={20} color="green" />}
                        title="Deposit"
                        className={"border border-green-600"}
                      />
                    </div>
                    <div onClick={() => setShow("Withdraw")}>
                      <Btn
                        color="#FFFFFF"
                        icon={<GoArrowDownLeft size={20} color="red" />}
                        title="Withdrawal"
                        className={"border border-red-600"}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex primary mt-2  rounded-2xl flex-col  border  border-spacing-1 border-gray-700">
                  <div
                    style={{ width: "100%", background: "#35353E" }}
                    className="greybg rounded-t-2xl p-1 pl-2 w-96 flex flex-row small wrap justify-between"
                  >
                    <div
                      style={{ width: "60%" }}
                      className="greybg rounded-t-2xl p-1 pl-2 small wrap w-96 flex flex-row justify-between"
                    >
                      <p className="grey">Asset</p>
                      <p className="grey">Available</p>
                      <p className="grey">In Escrow</p>
                    </div>
                  </div>
                  <div
                    style={{ width: "100%" }}
                    className="primary mt-4 rounded-b-2xl p-1 pl-2 small wrap   w-96 flex flex-row justify-between"
                  >
                    <div
                      style={{ width: "60%" }}
                      className="primary  rounded-b-2xl p-1 pl-2  small wrap   flex flex-row justify-between"
                    >
                      <p className="gray">
                        <img
                          className="w-16"
                          src="https://res.cloudinary.com/pitz/image/upload/v1721373615/Frame_35364_zwm9hh.png"
                          alt=""
                        />
                      </p>
                      <p className="white mr-10">0.1234</p>
                      <p className="white mr-6">0.1234</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full small wrap justify-between">
                  <div className="flex flex-row items-center gap-3 small wrap ">
                    <p className="  white">P2P Overview (USD)</p>
                    <button className="border text-green-600  border-green-600 p-1 rounded-2xl w-10">
                      All
                    </button>
                    <button className="border  white  border-green-600 bg-green-600 p-1 rounded-2xl w-12">
                      Sells
                    </button>
                    <button className="border  pb-1 text-green-600 border-green-600 p-1 rounded-2xl w-12">
                      Buys
                    </button>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721374243/Frame_34636_mplpeh.png"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  className="mt-2 small wrap "
                  src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                  alt=""
                />
                <Table />
                <div className="flex items-center justify-center">
                  <img
                    style={{
                      width: "40%",
                      objectFit: "conntain",
                    }}
                    src="https://res.cloudinary.com/pitz/image/upload/v1721386689/Group_164058_cybkz7.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="ml-10 small wrap "
                style={{
                  width: "30%",
                }}
              >
                <p className="white">Overview Total</p>
                <SideDash />
              </div>
            </div>{" "}
          </>
        )}
        {show === "Withdraw" && (
          <>
            <div>
              <p className="white"> P2P Wallet</p>
              <div className="border small size border-gray-700 wrap secondary rounded-2xl p-1 items-center   flex flex-row justify-between">
                <p className="white ml-2">
                  <p className="grey">Balance</p>
                  <p className="flex flex-row">
                    1900.8648 USDT{" "}
                    <span className="grey flex flex-row">
                      {" "}
                      <span className="ml-1">≈ </span> 1,900 USD
                    </span>
                  </p>
                </p>

                <div className="flex gap-2 small wrap">
                    <div onClick={() => setShow("Deposit")}>
                      <Btn
                        color="#FFFFFF"
                        icon={<MdArrowOutward size={20} color="white" />}
                        title="Deposit"
                        className={"border border-green-600 bg-green-600 text-white"}
                      />
                    </div>
                    <div onClick={() => setShow("Withdraw")}>
                      <Btn
                        color="#FFFFFF"
                        icon={<GoArrowDownLeft size={20} color="red" />}
                        title="Withdrawal"
                        className={"border border-red-600"}
                      />
                    </div>
                  </div>
              </div>
              <Widthdrwal />
            </div>
          </>
        )}
         {show === "Deposit" && (
          <>
            <div>
              <p className="white"> P2P Wallet</p>
              <div className="border small size border-gray-700 wrap secondary rounded-2xl p-1 items-center   flex flex-row justify-between">
                <p className="white ml-2">
                  <p className="grey">Balance</p>
                  <p className="flex flex-row">
                    1900.8648 USDT{" "}
                    <span className="grey flex flex-row">
                      {" "}
                      <span className="ml-1">≈ </span> 1,900 USD
                    </span>
                  </p>
                </p>

                <div className="flex gap-2 small wrap">
                    <div onClick={() => setShow("Deposit")}>
                    <Btn
                        color="#FFFFFF"
                        icon={<MdArrowOutward size={20} color="white" />}
                        title="Deposit"
                        className={"border border-green-600 bg-green-600 text-white"}
                      />
                    </div>
                    <div onClick={() => setShow("Withdraw")}>
                      <Btn
                        color="#FFFFFF"
                        icon={<GoArrowDownLeft size={20} color="red" />}
                        title="Withdrawal"
                        className={"border border-red-600"}
                      />
                    </div>
                  </div>
              </div>
              <DepositForm />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainDash;
