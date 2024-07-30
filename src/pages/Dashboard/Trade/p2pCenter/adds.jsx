import { Clock, Copy, DollarSign, Plus } from "lucide-react";
import { useState } from "react";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Adds = () => {
  const [activeTab, setActiveTab] = useState("P2P Trading");
  const [activeTab1, setActiveTab1] = useState("Dashboard");
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
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721678697/users-profiles-left_1_nypmot.png",
    },
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
    <>
      {activeTab1 === "Market" && (
        <div className="w-full">
          <img
            className="h-28 object-cover w-full"
            src="https://res.cloudinary.com/pitz/image/upload/v1721737603/Frame_35585_zzkxkx.png"
            alt=""
          />
        </div>
      )}
      <div className="primary  flex wrap small justify-between flex-row ">
        <div
          style={{ width: "18%", color: "#727272", fontSize: "15px" }}
          className="small flex flex-col gap-6 pt-12"
        >
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex w-full flex-row  pl-20 items-center rounded-tr-lg rounded-br-lg gap-4 p-2 `}
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
          className="small p-2 pt-12 flex pr-32 pl-10 flex-col gap-4"
        >
          <p className="white">Post AD</p>
          <div className="border border-red-700 w-36 rounded-lg flex flex-row gap-2 p-1">
            <p className="white w-16 text-center flex items-center justify-center">
              Buy
            </p>
            <p className="bg-red-600 w-16 text-center rounded-lg p-2 text-white">
              Sell
            </p>
          </div>
          <p className="g">Type & Price</p>
          <div className="border secondary p-3 border-slate-700 rounded-lg w-full  flex flex-row gap-6 items-center">
            <div className="flex flex-col w-full gap-1">
              <p className="g">Asset</p>
              <div className="border p-1 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                <p className="flex flex-row items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                    alt=""
                  />
                  <p className="white">Tether USDT</p>
                  <p className="g">TRC20</p>
                </p>
                <IoMdArrowDropdown color="white" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <p className="g">Commission</p>
              <div className="border p-1 pl-2 rounded-3xl border-slate-700 flex flex-row justify-between  w-full primary ">
                <p className="flex flex-row items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                    alt=""
                  />
                  <p className="white">0 %</p>
                  <p className="g"></p>
                </p>
                <p
                  style={{
                    fontSize: "22px",
                  }}
                  className="green"
                >
                  + -
                </p>
              </div>
            </div>
          </div>
          <p className="g">Amount & Payment Method</p>
          <div className="border secondary p-3 border-slate-700 rounded-lg w-full  flex flex-col gap-6 ">
            <div className="  p-3  w-full  flex flex-row gap-6 items-center">
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  I want to sell
                </p>
                <div className="border p-1 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex flex-row items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                      alt=""
                    />
                    <p className="white">
                      1,000 <span className="g">USDT</span>
                    </p>
                  </p>
                  <IoMdArrowDropdown color="white" />
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Order Min.
                </p>
                <div className="border p-1 pl-2 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex flex-row items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                      alt=""
                    />
                    <p className="white flex items-center">
                      <DollarSign className="green" /> 20.00{" "}
                    </p>
                    <p className="g"></p>
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                    className="green flex items-center"
                  >
                    USD <IoIosArrowDown />
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Order Max.
                </p>
                <div className="border p-1 pl-2 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex flex-row items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                      alt=""
                    />
                    <p className="white flex items-center">
                      <DollarSign className="green" /> 200.00{" "}
                    </p>
                    <p className="g"></p>
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                    className="green flex items-center"
                  >
                    USD <IoIosArrowDown />
                  </p>
                </div>
              </div>
            </div>
            <div className=" secondary   w-full  flex flex-row gap-6 items-center">
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Payment Method
                </p>
                <div className="border p-1 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex flex-row items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721368349/svgexport-54_1_cfztu4.png"
                      alt=""
                    />
                    <p className="white">Bank Transfer</p>
                  </p>
                  <IoMdArrowDropdown color="white" />
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Provider
                </p>
                <div className="border p-1 pl-2 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex flex-row items-center gap-2">
                    <img
                      className="rounded-full"
                      src="https://res.cloudinary.com/pitz/image/upload/v1721979295/image_7_1_la1uwx.png"
                      alt=""
                    />
                    <p className="white flex items-center">Salam Bank </p>
                    <p className="g"></p>
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                    className="green flex items-center"
                  >
                    USD <IoIosArrowDown />
                  </p>
                </div>
              </div>
              <div className="flex flex-col 6 w-36 gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Time limit
                </p>
                <div className="border p-1 pl-2 rounded-3xl w-32 border-slate-700 h-10 flex flex-row items-center justify-between  primary ">
                  <p className="flex flex-row items-center gap-2">
                    <Clock color="green" />
                    <p className="white flex items-center">
                      5 <span className="g">min</span>{" "}
                    </p>
                    <p className="g"></p>
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                    className="green flex items-center"
                  >
                    {" "}
                    <IoIosArrowDown />
                  </p>
                </div>
              </div>
            </div>
            <div className=" secondary   w-full  flex flex-row gap-6 items-center">
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Your Account
                </p>
                <div className="border p-1 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full secondary ">
                  <p className="flex flex-row items-center gap-2">
                    {/* <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1721368349/svgexport-54_1_cfztu4.png"
                    alt=""
                  /> */}
                    <p className="white">Omar Ali</p>
                  </p>
                  {/* <IoMdArrowDropdown color="white" /> */}
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Account Number
                </p>
                <div className="border p-1 pl-2 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full secondary ">
                  <p className="flex flex-row items-center gap-2">
                    {/* <img
                  className="rounded-full"
                    src="https://res.cloudinary.com/pitz/image/upload/v1721979295/image_7_1_la1uwx.png"
                    alt=""
                  /> */}
                    <p className="white flex items-center">123456787 </p>
                    <p className="g"></p>
                  </p>
                  {/* <p style={{
                    fontSize:"13px"
                }} className="green flex items-center">USD <IoIosArrowDown />
                </p> */}
                </div>
              </div>
            </div>
            <button className="bg-green-600 w-48 text-white p-1 rounded-3xl">
              Add payment method
            </button>
          </div>
          <p className="g">Terms & Auto reply</p>
          <div className="border flex flex-col  border-slate-700 p-4 rounded-lg secondary">
            <p className="g">Terms (Optional)</p>
            <div className="border flex flex-col w-full  h-32  border-slate-700 p-2 rounded-2xl primary">
              <p className="g">Placeholder for the comments from adviser</p>
            </div>
            <p className="g mt-4">Auto Reply (Optional)</p>
            <div className="border flex flex-col w-full  h-32  border-slate-700 p-2 rounded-2xl primary">
              <p className="g">Placeholder for the comments from adviser</p>
            </div>
            <div className=" w-full gap-6 flex items-center mt-3">
              <button className="border border-green-600 rounded-2xl w-full p-1 g">
                Cancel
              </button>
              <button className="border border-green-600 bg-green-600 w-full rounded-2xl p-1 white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Adds;
