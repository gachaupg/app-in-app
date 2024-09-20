
/* eslint-disable no-unused-vars */
import { CheckBox } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { DollarSign, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../../../utils/APIRoutes";
const initialState = {
  order_type: "",
  currency: "USD",
  amount: "",
  commission_rate: "",
  exchange_rate: "0.3",
  payment_method_name: "1",
  payment_provider_name: "1",
  account_number: "",
  account_name: "",
  limit: "10",
  completion_time: "10",
  completion_rate: "0.98",
  asset: "TRON",
  advertiser_name: {
    id: 1,
    username: "dennis",
    email: "denixxdenixx64@gmail.com",
  },
  auto_reply: "",
  terms_and_conditions: "",
};

const Adds = () => {
  const [sell, setSell] = useState(initialState);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.black",
    border: "1px solid green",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };
  const [activeTab, setActiveTab] = useState("P2P Trading");
  const [activeTab1, setActiveTab1] = useState("Dashboard");
  const [show, setShow] = useState("P2P");
  const [active, setActive] = useState("sell")

  const tabs = [
    {
      link: 'dashboard',
      name: "Dashboard",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721367990/svgexport-54_1_ww7fdx.png",
    },
    {
      link: 'exchange',

      name: "Exchange",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368341/uil_exchange_craxj9.png",
    },
    {
      link: 'dashboard',

      name: "P2P Trading",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721678697/users-profiles-left_1_nypmot.png",
    },
    {
      link: 'swap',

      name: "Swap Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368339/Group_164002_jqrdb5.png",
    },
    {
      link: 'buy',

      name: "Buy Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368332/Group_164004_ddibmc.png",
    },
    {
      link: 'account',

      name: "Account",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368328/key-01_njdjyg.png",
    },
    {
      link: 'settings',

      name: "Settings",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [payments, setPayments] = useState([]);
  const [details, setdetails] = useState([]);
  const [provider, setProvider] = useState([]);
  const [loading1, setLoading1] = useState(false);
  // console.log("payments", details);
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [payments1, setPayments1] = useState([]);
  const [test,setTest] = useState('');

  useEffect(() => {
    if (payments) {
      setSell({

        completion_time: "10",
        completion_rate: "0.98",
        exchange_rate: "0.8",
        asset: "TRON",
        limit: sell.limit,
        commission_rate: sell.commission_rate,
        auto_reply: sell.auto_reply,
        terms_and_conditions: sell.terms_and_conditions,
        amount: sell.amount,
        advertiser_name: user.user,
        order_type: active === "sell" ? "sell" : "buy",
        currency: "USD",
      });
    }
  }, [payments]);

  console.log('hello', details);


  useEffect(() => {
    fetchData3();
  }, [user.access]);
  async function fetchData3() {
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
      const res = await axios.get(`${endpoint}/trading_engine/user-payment-details/`, {
        headers,
      });
      setLoading1(false);
      setdetails(res.data); // Assuming the response data is what you need to set
      console.log("hello", res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }


  useEffect(() => {
    fetchData1();
  }, [user.access]);
  async function fetchData1() {
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
      const res = await axios.get(`${endpoint}/trading_engine/bank-details/`, {
        headers,
      });
      setLoading1(false);
      setPayments1(res.data); // Assuming the response data is what you need to set
      console.log("hello", res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

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
      const res = await axios.get(`${endpoint}/trading_engine/payment-methods/`, {
        headers,
      });
      setLoading1(false);
      setPayments(res.data); // Assuming the response data is what you need to set
      // console.log("hello", res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  useEffect(() => {
    fetchData2();
  }, [user.access]);
  async function fetchData2() {
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
      const res = await axios.get(`${endpoint}/trading_engine/payment-providers/Bank/`, {
        headers,
      });
      setLoading1(false);
      setProvider(res.data); // Assuming the response data is what you need to set
      // console.log("hello", res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  console.log(sell);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading1(true);

    // Assuming user.user.access is available in your component's state or context
    const token = user.access;

    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading1(false);
      return;
    }

    if (sell.amount) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        console.log("Sending request with headers:", headers); // Debugging line
        console.log(
          "Sending request to endpoint:",
          `${endpoint}/trading_engine/p2p/orders/`
        ); // Debugging line

        const response = await fetch(
          `${endpoint}/trading_engine/p2p/orders/`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(sell),
          }
        );
        const data = await response.json();

        if (response.ok) {
          toast.success("Added successfully!");
          setOpen(true);
        } else {
          if (data.code === "token_not_valid") {
            toast.error("Your session has expired. Please log in again.");
            navigate("/login");
          } else {
            toast.error(
              `Save bank details failed: 
               Amount: ${data.amount || 'N/A'}, 
               Commission Rate: ${data.commission_rate || 'N/A'}, 
               Terms and Conditions: ${data.terms_and_conditions || 'N/A'}, 
               Auto Reply: ${data.auto_reply || 'N/A'}, 
               Limit: ${data.limit || 'N/A'}`
            );

            console.log('====================================');
            console.log('new', data.amount);
            console.log('====================================');
          }
          console.error("Error response:", data);
        }
      } catch (error) {
        toast.error(`Reenter the details: ${error}`);
        console.error("Error:", error);
      } finally {
        setLoading1(false);
      }
    }
  };

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
          className="small dash-side flex flex-col gap-6 pt-12"
        >
          {tabs.map((tab) => (
            <Link key={tab.name} to={`/${tab.link}`}>
              <div

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
                  className={`flex items-center ${activeTab === tab.name ? "white" : ""} justify-between ml-5 w-full`}
                >
                  {tab.name}
                  {tab.name === "Account" && (
                    <MdOutlineKeyboardArrowDown className="ml-2" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{ width: "83%" }}
          className="small p-2 pt-12 flex pr-32 pl-10 flex-col gap-4"
        >
          <p className="white">Post AD</p>
          <div className={`border ${active === "sell" ? "border-red-700" : "border-green-700"} w-36 rounded-lg flex flex-row gap-2 p-1`}>
            <p onClick={() => setActive("buy")} className={`white ${active === "buy" ? 'greenbg' : ""} rounded-lg cursor-pointer w-16 text-center flex items-center justify-center`}>
              Buy
            </p>
            <p onClick={() => setActive("sell")} className={`${active === "sell" ? "bg-red-600 " : ""}w-16 text-center cursor-pointer rounded-lg p-2 text-white`}>
              Sell
            </p>
          </div>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="flex flex-col primary items-center" sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <IoCheckmarkCircleSharp className="green" size={40} />
                </Typography>
                <Typography className="white">
                  Successfully Published
                </Typography>
                <button
                  onClick={() => {
                    handleClose();
                    window.location.reload();
                  }}
                  className="w-full mt-3 p-1 white greenbg rounded-2xl"
                >
                  OK
                </button>
              </Box>
            </Modal>
          </div>
          <p className="g">Type & Price</p>
          <div className="border small wrap secondary p-3 border-slate-700 rounded-lg w-full  flex flex-row gap-6 items-center">
            <div className="flex flex-col w-full gap-1">
              <p className="g">Asset</p>
              <div className="border p-1 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                <p className="flex  w-full flex-row items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                    alt=""
                  />
                  <select
                    onChange={(e) =>
                      setSell({ ...sell, asset: e.target.value })
                    }
                    className="w-full no-border primary text-white"
                    name=""
                    id=""
                  >
                    <option value="">Select your asset</option>
                    <option value="TRC20">Tether USDT (TRC20)</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <p className="g">Rate</p>
              <div className="border p-1 pl-2 rounded-3xl border-slate-700 flex flex-row justify-between  w-full primary ">
                <p className="flex w-full flex-row items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                    alt=""
                  />
                  <input
                    onChange={(e) =>
                      setSell({ ...sell, commission_rate: e.target.value })
                    }
                    className="w-full no-border primary text-white "
                    placeholder="0%"
                    type="number"
                  />
                </p>
                <p
                  style={{
                    fontSize: "22px",
                  }}
                  className="green"
                ></p>
              </div>
              {sell.commission_rate >= 0.9 && sell.commission_rate <= 1 ? "" : <p className="text-red-700">0.9 - 1</p>}

            </div>

          </div>
          <p className="g">Amount & Payment Method</p>
          <div className="border small wrap secondary p-3 border-slate-700 rounded-lg w-full  flex flex-col gap-6 ">
            <div className="  small wrap p-3  w-full  flex flex-row gap-6 items-center">
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  I want to sell
                </p>
                <div className="border p-1 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex w-full flex-row items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                      alt=""
                    />
                    <input
                      onChange={(e) =>
                        setSell({ ...sell, amount: e.target.value })
                      }
                      className="w-full no-border primary text-white custom-placeholder"
                      placeholder="1,000 USDT"
                      type="number"
                    />

                    {/* <p className="white">
                      1,000 <span className="g">USDT</span>
                    </p> */}
                  </p>
                  {/* <IoMdArrowDropdown color="white" /> */}
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
            <div className=" secondary  small wrap  w-full  flex flex-row gap-6 items-center">
              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Payment Method
                </p>
                <div className="border p-1 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex flex-row w-full items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721368349/svgexport-54_1_cfztu4.png"
                      alt=""
                    />
                    <Plus color="green" />{" "}
                    <select
                      onChange={(e) =>
                        setSell({ ...sell, payment_method_name: e.target.value })
                      }
                      className="primary p-1 cursor-pointer w-full white no-border"
                      name=""
                      id=""
                    >
                      <option value="">
                        {" "}
                        <Plus color="green" /> Add Method
                      </option>

                      {payments.map((i) => {
                        return (
                          <>
                            <option value={i.name}>{i.name}</option>{" "}
                          </>
                        );
                      })}
                    </select>
                  </p>
                  {/* <IoMdArrowDropdown color="white" /> */}
                </div>
              </div>

              <div className="flex flex-col w-full gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Provider
                </p>
                <div className="border p-1 pl-2 rounded-3xl border-slate-700 flex flex-row items-center justify-between  w-full primary ">
                  <p className="flex w-full flex-row items-center gap-2">
                    <img
                      className="rounded-full"
                      src="https://res.cloudinary.com/pitz/image/upload/v1721979295/image_7_1_la1uwx.png"
                      alt=""
                    />

                    <select
                      onChange={(e) =>
                        setSell({
                          ...sell,
                          payment_provider_name: e.target.value,
                        })
                      }
                      className="primary white cursor-pointer  w-full  no-border"
                      name=""
                      id=""
                    >                            <option value="">Provider</option>

                      {" "}
                      {provider.map((i) => {
                        return (
                          <>
                            <option value={i.
                              provider_name
                            }>{i.
                              provider_name
                              }</option>{" "}
                          </>
                        );
                      })}
                    </select>

                    {/* <p className="white flex items-center">Salam Bank </p>
                    <p className="g"></p> */}
                  </p>
                  {/* <p
                    style={{
                      fontSize: "13px",
                    }}
                    className="green flex items-center"
                  >
                    USD <IoIosArrowDown />
                  </p> */}
                </div>
              </div>
              <div className="flex flex-col 6 w-36 gap-1">
                <p style={{ fontSize: "14px" }} className="g">
                  Time limit
                </p>
                <div className="border p-1 pl-2 rounded-3xl w-32 border-slate-700 h-10 flex flex-row items-center justify-between  primary ">
                  <p className="flex flex-row items-center gap-2">
                    <select
                      onChange={(e) =>
                        setSell({ ...sell, limit: e.target.value })
                      }
                      className="primary p-1 cursor-pointer w-full white no-border"
                      name=""
                      id=""
                    >
                      <option value="">Time limit</option>
                      <option value="5">
                        <CheckBox color="gree" /> 5 min
                      </option>
                      <option value="10">
                        <CheckBox /> 10 min
                      </option>
                      <option value="15">
                        <CheckBox /> 15 min
                      </option>
                    </select>
                  </p>
                </div>
              </div>
            </div>

            {
              selected != {} ?
                <div className="w-full border white flex justify-between p-3 items-center border-slate-700 rounded-lg">
                  <div className="flex flex-col g">
                    <p className="g">
                      Account name
                    </p>
                    <p>{selected?.name}</p>
                  </div>
                  <div className="flex flex-col g">
                    <p className="g">
                      Account Number
                    </p>
                    <p>{selected?.number}</p>
                  </div>
                </div> :
                <p>Pay methods will appear hear</p>
            }
            <div className=" secondary small wrap p-2 border rounded lg border-slate-700  w-full   flex flex-row gap-6 items-center">
              <div className="flex  flex-col w-full gap-1">
                {details.map((i) => {
                  return (
                    <>
                      {i.payment_provider_name === sell.payment_provider_name && (
                        <>
                          <div className=" p-1 pl-3 rounded-lg wrap border border-slate-700  flex flex-row items-center justify-between  w-full secondary ">
                            <div className="flex flex-col w-full">
                              <p style={{ fontSize: "14px" }} className="g">
                                Your Account
                              </p>
                              <p
                                className="w-full p-1 no-border secondary text-white custom-placeholder"
                              >
                                {i.account_name}
                              </p>
                            </div>
                            <div className="flex flex-col items-center w-full">
                              <p style={{ fontSize: "14px" }} className="g">
                                Account Number
                              </p>
                              <p
                                className=" p-1 no-border secondary text-white custom-placeholder"
                              >
                                {i.account_number}
                              </p>
                            </div>
                            <button onClick={() => {
                              setSeleted({
                                'name': i.account_name,
                                'number': i.account_number,
                              })
                            }} className="greenbg p-1 rounded-lg text-white">
                              Select
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )
                })}
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
              <input
                onChange={(e) =>
                  setSell({ ...sell, terms_and_conditions: e.target.value })
                }
                placeholder="Write your Comments "
                className="primary white no-border h-32"
                type="text"
              />
            </div>
            <p className="g mt-4">Auto Reply (Optional)</p>
            <div className="border flex flex-col w-full  h-32  border-slate-700 p-2 rounded-2xl primary">
              <input
                onChange={(e) =>
                  setSell({ ...sell, auto_reply: e.target.value })
                }
                placeholder="Write your Comments "
                className="primary text-white no-border h-32"
                type="text"
              />
            </div>
            <div className=" w-full gap-6 flex items-center mt-3">
              <button className="border p-2 border-green-600 rounded-2xl w-full p-1 g">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className={` ${active === "sell" ? "bg-red-700" : "greenbg"}  p-2 w-full rounded-2xl p-1 white`}
              >
                {loading1 ? "Submitting..." : "Post Ad"}
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Adds;
