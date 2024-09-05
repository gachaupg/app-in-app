/* eslint-disable no-unused-vars */
import { Button, CircularProgress } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { Copy, Plus, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { GoArrowDownLeft } from "react-icons/go";
import { MdArrowOutward, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Btn from "../../../components/Button";
import { getWallets } from "../../../redux/features/answerSlice";
import { endpoint } from "../../../utils/APIRoutes";
import MainProfilePage from "../../Auth/MainProfilePage";
import Settings from "../../Settings/Settings";
import Swap from "../../Swap/Swap";
import BuyCrypto from "../../buyCrypto/BuyCrypto";
import MainExchange from "../../exchange/MainExchange";
import SideDash from "../DashboardTabs/SideDash";
import Table from "../DashboardTabs/Table";
import Center from "../Trade/Center";
import Market from "../Trade/Market";
import Orders from "../Trade/Orders";
import UserDashboard from "../UserDashboard/UserDashboard";
import DepositForm from "./DepositForm";
import Widthdrwal from "./Widthdrwal";
import { IoIosArrowDown } from "react-icons/io";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const initialState = {
  document_type: "",
  document_number: "",
  document_image: ""
}
const MainDash = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false); // Hide the calendar after selecting a date
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setdata] = useState(initialState)
  console.log('data', data);

  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log('user', user);

  useEffect(() => {
    if (user?.access) {
      navigate("/dashboard");
    } else {
      navigate("/")
    }
  }, [user]);

  const [activeTab, setActiveTab] = useState("P2P Trading");
  const [Verified, setVerified] = useState(false);
  const [activeTab1, setActiveTab1] = useState("Dashboard");
  const [show, setShow] = useState("P2P");
  const tabs = [
    {
      name: "Dashboard",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721367990/svgexport-54_1_ww7fdx.png",
      link: "user-dashboard"
    },
    {
      name: "Exchange",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368341/uil_exchange_craxj9.png",
      link: "exchange"

    },
    {
      name: "P2P Trading",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721678697/users-profiles-left_1_nypmot.png",
      link: "dashboard"

    },
    {
      name: "Swap Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368339/Group_164002_jqrdb5.png",
      link: "swap"

    },
    {
      name: "Buy Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368332/Group_164004_ddibmc.png",
      link: "buy"

    },
    {
      name: "Account",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368328/key-01_njdjyg.png",
      link: "account"

    },
    {
      link: "settings",

      name: "Settings",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    },
  ];
  const [graph, setGraph] = useState('sells')

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [payments, setPayments] = useState([]);
  const [match, setMatch] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loadingKy, setLoadingKyc] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [kyc, setKyc] = useState([])

  console.log('kyc', kyc);

  // useEffect(()=>{
  // if (kyc.is_verified===true) {
  //   setLoadingKyc(false)
  // }else{
  //   return
  // }
  // },[kyc]);

  const location = useLocation()
  const p2pcenter = location.state;
  console.log('data', p2pcenter);
  useEffect(() => {
    if (p2pcenter != null) {
      setActiveTab1('Center')
    }
  }, [p2pcenter])

  // https://omayaexchangebackend.onrender.com/api/kyc/status/

  useEffect(() => {
    const fetchData = async () => {
      const token = user?.access;

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
          `${endpoint}/api/kyc/status/`,
          { headers }
        );
        setKyc(res.data);
        setLoading1(false);

      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [user?.access, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const token = user?.access;

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
          `${endpoint}/trading_engine/wallets/`,
          { headers }
        );
        setPayments(res.data);
        setLoading1(false);
        console.log('payments', res.data);
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [user?.access, navigate]);



  useEffect(() => {
    const fetchData1 = async () => {
      const token = user?.access;

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
          `${endpoint}/trading_engine/trades/matched/`,
          { headers }
        );
        setMatch(res.data);
        setLoading1(false);
        console.log('payments', res.data);
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData1(); // Initial fetch

    const interval = setInterval(fetchData1, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [user?.access, navigate]);






  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading1(true);

    try {
      const token = user?.access;

      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        navigate("/login");
        return;
      }

      if (!data.document_type || !data.document_number) {
        toast.error("Invalid code");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const formData = new FormData();
      formData.append('document_type', data.document_type);
      formData.append('document_number', data.document_number);
      if (data.document_image) {
        formData.append('document_image', data.document_image);
      }
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      const response = await fetch(`${endpoint}/api/kyc/submit/`, {
        method: "PATCH",
        headers: headers,
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log(response);

        toast.success("Request sent successfully!");
        // fetchData();  // Assuming fetchData is defined and fetches the necessary data
        setLoadingKyc(true);
        setOpen1(false);
      } else {
        if (result.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error(`Verification failed: ${result.error || "Unknown error"}`);
        }
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "An unknown error occurred."}`);
      console.error("Error:", error);
    } finally {
      setLoading1(false);
    }
  };


  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      });
  }, []);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1D1D23",
      color: "white",
      width: "100%",
      padding: 2,
      borderRadius: 22,
      border: "1px solid #35353E",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#1D1D23",
      width: "100%",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "gray" : "#1D1D23",
      color: "white",
      width: "100%",
      "&:hover": {
        backgroundColor: "gray",
      },
    }),
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const [transactions, setTransactions] = useState([])
  //  https://omayaexchangebackend.onrender.com/trading_engine/all-transactions/


  // useEffect(() => {
  //   Transactions()
  // }, [user?.access])
  // async function Transactions() {
  //   const token = user.access;

  //   if (!token) {
  //     toast.error("Authentication token is missing. Please log in again.");
  //     navigate("/login");

  //     setLoading1(false);
  //     return;
  //   }

  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   };

  //   try {
  //     const res = await axios.get(
  //       `${endpoint}/trading_engine/all-transactions/`,
  //       { headers }
  //     );
  //     setMatch(res.data);
  //     setLoading1(false);
  //     console.log('paymentssss', res.data);

  //   } catch (error) {
  //     console.log(error);
  //     setLoading1(false);
  //   }
  // }

  function formatBalance(balance) {
    let num = parseFloat(balance);

    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + 'K';
    } else {
      return num.toFixed(2);
    }
  }
  const token = user.access
  const { wallet, loading, error } = useSelector((state) => state.deposits);
  // console.log('depositddds',match);
  useEffect(() => {
    if (token) {
      dispatch(getWallets({ token, toast }));
    }
  }, [dispatch, token]);

  const handleVerify = () => {
    if (kyc.is_verified) {
      setShow("Deposit")
    } else {
      setOpen(true)
    }
  }
  const handleVerify1 = () => {
    if (kyc.is_verified) {
      setShow("Withdraw")
    } else {
      setOpen(true)
    }
  }
  const handleVerify2 = () => {
    if (kyc.is_verified) {
      navigate('/adds')
    } else {
      setOpen(true)

    }
  }
  const handleVerify3 = () => {
    if (kyc.is_verified) {
      navigate('/buy-adds')

    } else {
      setOpen(true)

    }
  }

  // const name = 'Omaya Exchange';
  // const num = '13242542';

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Text copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy text.');
    });
  };
  const [network, setNetWork] = useState('USDT')


  return (
    <>
      <div>
        <div>
          <Modal
            className="rounded-lg border-slate-700"
            open={open1}
            onClose={handleClose1}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            {/* <h2 className="text-slate-400  mb-3">KYC Verification</h2> */}

            <Box
              sx={{ ...style, width: "38%" }}
              className="rounded-lg small primary white border-slate-700"
            >
              <h2 className="text-center mb-4" id="child-modal-title">
                KYC Verification Form
              </h2>
              <div className="p-1">
                <div className="flex flex-row items-center justify-between p-2 w-full gap-6 wrap small">
                  <div className="flex flex-col items-center no-border w-full gap-7">
                    <select
                      onChange={(e) => setdata({ ...data, document_type: e.target.value })}
                      placeholder="Full Name"
                      required
                      type="text"
                      className="flex border border-slate-700  p-2 w-full primary text-white rounded-3xl"
                    >
                      <option value="">Select the type</option>
                      <option value="ID">ID</option>
                      <option value="Passport">Passport</option>
                    </select>
                    <input
                      onChange={(e) => setdata({ ...data, document_number: e.target.value })}

                      placeholder="Document Number"
                      required
                      type="number"
                      className="flex border border-slate-700  p-2 w-full primary text-white rounded-3xl"
                    />
                    <input
                      onChange={(e) => {
                        setdata({ ...data, document_image: e.target.files[0] });
                        toast.success('document picked successfully')
                      }
                      }

                      placeholder="Date of birth"
                      required
                      type="file"
                      className="flex border border-slate-700  p-2 w-full primary text-white rounded-3xl"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center mt-10 justify-between p-2 w-full gap-6 wrap small">
                  <Button
                    className="white txt border p-1 border-slate"
                    onClick={handleClose1}
                  >
                    Close
                  </Button>
                  {
                    loading1 ?
                      <div className="flex items-center justify-center">
                        <CircularProgress />
                      </div>
                      : <Button
                        onClick={handleSubmit}
                        className="white txt1 border p-1 border-slate"
                      >
                        Submit
                      </Button>
                  }
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      {/* {activeTab1 === "Market" && (
        <div className="w-full">
          <img
            className="h-28 object-cover w-full"
            src="https://res.cloudinary.com/pitz/image/upload/v1721737603/Frame_35585_zzkxkx.png"
            alt=""
          />
        </div>
      )} */}
      <div className="primary  flex wrap small  justify-between flex-row ">
        <div
          style={{ width: "20%", color: "#727272", fontSize: "15px" }}
          className="small dash-side  flex flex-col gap-6 pt-12"
        >
          {tabs.map((tab) => (
            <div className="gg" key={tab.name}>
              <div
                className={`flex w-full flex-row pl-14 items-center rounded-tr-lg rounded-br-lg gap-4 p-2 transition-all duration-300 
          ${activeTab === tab.name ? "bg-[#303038]" : "hover:bg-[#404048]"}
           `}
                style={{
                  cursor: "pointer",
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
                  className={`flex items-center justify-between ml-5 w-full 
            ${activeTab === tab.name ? "text-white" : "hover:text-white"}
          `}
                >
                  {tab.name}
                  {tab.name === "Account" && (
                    <MdOutlineKeyboardArrowDown className="ml-2" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {
          activeTab === 'P2P Trading' && (
            <>
              <div
                style={{ width: "83%" }}
                className="small p-2 pt-10 flex pr-36 pl-24 flex-col gap-4"
              >

                <div className="">
                  <Modal
                    className="no-border"
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box className="primary border no-border mr-20 flex flex-col items-center justify-center g 0" sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Verify Account
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p className="w-full ">
                          {loadingKy ? 'Account will be verified soon!, It may take upto 24 hrs' : (
                            <button onClick={handleOpen1} className="flex white p-1 rounded-lg w-full greenbg">
                              Verify Now
                            </button>
                          )}
                        </p>
                      </Typography>
                      <button onClick={() => setOpen(false)} className="flex p-1 items-center justify-center mt-3 w-full border border-slate-700 rounded-lg">Cancel</button>
                    </Box>
                  </Modal>
                </div>
                <div className="flex flex-row small wrap width-full gap-4">
                  <p
                    onClick={() => setActiveTab1("Dashboard")}
                    style={{
                      fontSize: "15px",
                      textDecoration: activeTab1 === "Dashboard" ? "underline" : "",
                      textDecorationColor: activeTab1 === "Dashboard" ? "green" : "",
                      color: activeTab1 === "Dashboard" ? "white" : "grey",
                      cursor: 'pointer'
                    }}
                  >
                    P2P Dashboard
                  </p>
                  <p
                    onClick={() => setActiveTab1("Market")}
                    style={{
                      fontSize: "15px",
                      textDecoration: activeTab1 === "Market" ? "underline" : "",
                      textDecorationColor: activeTab1 === "Market" ? "green" : "",
                      color: activeTab1 === "Market" ? "white" : "grey",
                    }}
                    className=" text-slate-400 cursor-pointer"
                  >
                    Market
                  </p>
                  <p
                    onClick={() => setActiveTab1("Orders")}
                    style={{
                      fontSize: "15px",
                      textDecoration: activeTab1 === "Orders" ? "underline" : "",
                      textDecorationColor: activeTab1 === "Orders" ? "green" : "",
                      color: activeTab1 === "Orders" ? "white" : "grey",
                    }}
                    className=" text-slate-400 cursor-pointer"
                  >
                    Orders
                  </p>
                  <p
                    onClick={() => setActiveTab1("Center")}
                    style={{
                      fontSize: "15px",
                      textDecoration: activeTab1 === "Center" ? "underline" : "",
                      textDecorationColor: activeTab1 === "Center" ? "green" : "",
                      color: activeTab1 === "Center" ? "white" : "grey",
                    }}
                    className=" text-slate-400 cursor-pointer"
                  >
                    P2P Center
                  </p>
                </div>

                {activeTab1 === "Orders" && (
                  <>
                    <Orders />
                  </>
                )}
                {activeTab1 === "Market" && (
                  <>
                    <Market />
                  </>
                )}
                {activeTab1 === "Center" && (
                  <>
                    <Center />
                  </>
                )}
                {activeTab1 === "Dashboard" && (
                  <>
                    <div className="secondary border rounded-2xl border-gray-700 wrap flex flex-row small wrap w-full justify-between items-center  p-2">
                      <div className="flex flex-row gap-2">
                        <RxAvatar className="text-slate-500" size={40} />
                        <div>
                          <p style={{ fontSize: "16px" }} className="white capitalize">
                            Hello, {user?.user?.first_name}!
                          </p>
                          <p
                            style={{ fontSize: "12px", color: "red" }}
                            className=" flex flex-row items-center gap-1 "
                          >
                            {kyc.is_verified ? <p className="green">Verified</p> : 'Unerified account'} {" "}
                            <img
                              className="h-4"
                              src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                              alt=""
                            />
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p style={{ fontSize: "13px" }} className="grey">
                          Use ID
                        </p>
                        <p className="white  cursor-pointer flex flex-row items-center gap-1">
                          {user?.user?.id} <Copy onClick={() => copyToClipboard(user?.user?.id)} size={16} style={{ color: "#F79330" }} />
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p style={{ fontSize: "13px" }} className="grey">
                          User Type
                        </p>
                        <p className="white flex flex-row items-center gap-1">
                          {user?.user?.user_type}{" "}
                        </p>
                      </div>
                      <div className="flex flex-row wrap small-gap items-center gap-5">
                        <div className="flex flex-row gap-3">
                          <div onClick={handleVerify3}>
                            <Btn
                              title="Post Buy Ad"
                              icon={<Plus size={15} />}
                              bg="#1D8751"
                              color="#FFFFFF"
                              className="additional-class-name"
                            />

                          </div>
                          <div onClick={handleVerify2}>
                            <Btn
                              title="Post Sell Ad"
                              icon={<Plus size={15} />}
                              bg="#E23D3A"
                              color="#FFFFFF"
                              className="additional-class-name"
                            />
                          </div>
                        </div>

                        <div className="relative inline-block">
                          <Link to='/notifications'
                            state={match}
                          >
                            <p
                              className="absolute bottom-7 left-6 bg-red-700 h-6 w-6 flex text-white p-2 items-center justify-center rounded-full text-xs cursor-pointer">
                              {match.length}
                            </p>
                            <img
                              className="h-10"
                              src="https://res.cloudinary.com/pitz/image/upload/v1721371733/Frame_34833_xr45hu.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {show === "P2P" && (
                      <>
                        <div className="flex flex-row w-full wrap small justify-between">
                          <div
                            style={{
                              width: "70%",
                            }}
                            className="  flex  small flex-col gap-2"
                          >
                            <p className="white"> P2P Wallet</p>
                            <div className="border  small size border-gray-700 wrap secondary rounded-2xl p-1 items-center   flex flex-row justify-between">
                              <div className="white ml-2">
                                <p className="grey">Balance</p>
                                <p className="flex flex-row">
                                  {
                                    payments.map((balance) => {
                                      return (
                                        <p key={balance.id}>
                                          {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                                        </p>

                                      )
                                    })
                                  }  <span className="ml-1">USDT</span>{" "}
                                  <span className="grey flex flex-row">
                                    {" "}
                                    <span className="ml-1">≈ </span>  {
                                      payments.map((balance) => {
                                        return (
                                          <p key={balance.id}>
                                            {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                                          </p>
                                        )
                                      })
                                    }  <span className="ml-1">USD</span>
                                  </span>
                                </p>
                              </div>

                              <div className="flex gap-2 small wrap">
                                <div onClick={() => {
                                  handleVerify()
                                }}>
                                  <Btn
                                    color="#FFFFFF"
                                    icon={<MdArrowOutward size={20} color="" />}
                                    title="Deposit"
                                    className={`border border-green-600`}
                                  />
                                </div>
                                <div onClick={handleVerify1}>
                                  <Btn
                                    color="#FFFFFF"
                                    icon={<GoArrowDownLeft size={20} color="red" />}
                                    title="Withdrawal"
                                    className={`border border-red-600`}
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
                                  <div className="gray">
                                    <img
                                      className="w-16"
                                      src="https://res.cloudinary.com/pitz/image/upload/v1721373615/Frame_35364_zwm9hh.png"
                                      alt=""
                                    />
                                  </div>
                                  <p className="white mr-10">

                                    {
                                      payments.map((balance) => {
                                        return (
                                          <p key={balance.id}>
                                            {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                                          </p>
                                        )
                                      })
                                    }
                                  </p>
                                  <p className="white mr-6">0.00</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row w-full small wrap justify-between">
                              <div className="flex flex-row items-center gap-3 small wrap ">
                                <p className="  white">P2P Overview (USD)</p>
                                <button onClick={() => setGraph('All')} className={`border  white  border-green-600 ${graph === 'All' && "bg-green-600"} p-1 rounded-2xl w-12`}>
                                  All
                                </button>
                                <button onClick={() => setGraph('sells')} className={`border  white  border-green-600 ${graph === 'sells' && "bg-green-600"} p-1 rounded-2xl w-12`}>
                                  Sells
                                </button>
                                <button onClick={() => setGraph('buys')} className={`border  white  border-green-600 ${graph === 'buys' && "bg-green-600"} p-1 rounded-2xl w-12`}>
                                  Buys
                                </button>
                              </div>
                              <div>
                                <div
                                  className="flex flex-row items-center  justify-center gap-1 cursor-pointer"
                                  onClick={() => setShowCalendar(!showCalendar)}
                                >
                                  <p className="g cursor-pointer">Month </p>
                                  <p className="cur cursor-pointer"><IoIosArrowDown className="g"/></p>
                                </div>

                                {showCalendar && (
                                  <div className="calendar-container">
                                    <Calendar
                                      onChange={handleDateChange}
                                      value={date}
                                      view="month" // Show only months
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            {graph === 'sells' && (
                              <>
                                <div>
                                  <img
                                    className="mt-2 small wrap "
                                    src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                                    alt=""
                                  />
                                </div>
                              </>
                            )}
                            {graph === 'All' && (
                              <>
                                <div>
                                  <img
                                    className="mt-2 small wrap "
                                    src="https://res.cloudinary.com/pitz/image/upload/v1723203872/Frame_34605_3_tcvqya.png"
                                    alt=""
                                  />
                                </div>
                              </>
                            )}
                            {graph === 'buys' && (
                              <>
                                <div>
                                  <img
                                    className="mt-2 small wrap "
                                    src="https://res.cloudinary.com/pitz/image/upload/v1723203855/Frame_34605_2_y0thdu.png"
                                    alt=""
                                  />
                                </div>
                              </>
                            )}
                            <Table />
                            {/* <div className="flex items-center justify-center">
                        <img
                          style={{
                            width: "40%",
                            objectFit: "contain",
                          }}
                          src="https://res.cloudinary.com/pitz/image/upload/v1721386689/Group_164058_cybkz7.png"
                          alt=""
                        />
                      </div> */}
                          </div>
                          <div
                            className="ml-10 small wrap "
                            style={{
                              width: "30%",
                            }}
                          >
                            <p className="white">Overview Total</p>
                            <SideDash activeTab={activeTab} />
                          </div>
                        </div>{" "}
                      </>
                    )}
                    {show === "Withdraw" && (
                      <>
                        <div>
                          <p className="white"> P2P Withdraw</p>
                          <div className="border small size border-gray-700 wrap secondary rounded-2xl p-1 items-center   flex flex-row justify-between">
                            <div className="white ml-2">
                              <p className="grey">Balance</p>
                              <p className="flex flex-row">
                                {
                                  payments.map((balance) => {
                                    return (
                                      <p key={balance.id}>
                                        {typeof balance.balance === 'string' ? Math.floor(balance.balance).toFixed(2) : 'N/A'}
                                      </p>
                                    )
                                  })
                                }  USDT{" "}
                                <span className="grey flex flex-row">
                                  {" "}
                                  <span className="ml-1">≈ </span> {
                                    payments.map((balance) => {
                                      return (
                                        <p key={balance.id}>
                                          {typeof balance.balance === 'string' ? Math.floor(balance.balance).toFixed(2) : 'N/A'}
                                        </p>
                                      )
                                    })
                                  }  USD
                                </span>
                              </p>
                            </div>

                            <div className="flex gap-2 small wrap">
                              <div onClick={() => setShow("Deposit")}>
                                <Btn
                                  color="#FFFFFF"
                                  icon={<Wallet size={20} color="white" />}
                                  title="Deposit"
                                  className={
                                    "border border-slate-700 text-white"
                                  }
                                />
                              </div>
                              <div onClick={() => setShow("Withdraw")}>
                                <Btn
                                  color="#FFFFFF"
                                  icon={<Wallet size={20} color="white" />}
                                  title="Withdrawal"
                                  className={"border bg-red-600 border-red-600"}
                                />
                              </div>
                            </div>
                          </div>
                          {
                            payments.map((balance) => {
                              return (
                                <>
                                  <Widthdrwal setShow={setShow} payments={typeof balance.balance === 'string' ? Math.floor(balance.balance).toFixed(2) : 'N/A'} />
                                </>
                              )
                            })
                          }

                        </div>
                      </>
                    )}
                    {show === "Deposit" && (
                      <>
                        <div>
                          <p className="white"> P2P Deposit</p>
                          <div className="border small size border-gray-700 wrap secondary rounded-2xl p-1 items-center   flex flex-row justify-between">
                            <div className="white ml-2">
                              <p className="grey">Balance</p>
                              <p className="flex flex-row">
                                {
                                  payments.map((balance) => {
                                    return (
                                      <p key={balance.id}>
                                        {typeof balance.balance === 'string' ? Math.floor(balance.balance).toFixed(2) : 'N/A'}
                                      </p>
                                    )
                                  })
                                }  USDT{" "}
                                <span className="grey flex flex-row">
                                  {" "}
                                  <span className="ml-1">≈ </span> {
                                    payments.map((balance) => {
                                      return (
                                        <p key={balance.id}>
                                          {typeof balance.balance === 'string' ? Math.floor(balance.balance).toFixed(2) : 'N/A'}
                                        </p>
                                      )
                                    })
                                  }  USD
                                </span>
                              </p>
                            </div>

                            <div className="flex gap-2 small wrap">
                              <div onClick={() => setShow("Deposit")}>
                                <Btn
                                  color="#FFFFFF"
                                  icon={<MdArrowOutward size={20} color="white" />}
                                  title="Deposit"
                                  className={
                                    "border border-green-600 bg-green-600 text-white"
                                  }
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
                          <DepositForm setDeposit={setShow} />
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          )
        }

        {activeTab === "Buy Crypto" && (
          <>
            <BuyCrypto />
          </>
        )}
        {activeTab === "Exchange" && (
          <>
            <MainExchange />
          </>
        )}
        {activeTab === "Swap Crypto" && (
          <>
            <Swap />
          </>
        )}
        {activeTab === "Settings" && (
          <>
            <Settings />
          </>
        )}
        {activeTab === "Dashboard" && (
          <>
            <UserDashboard />
          </>
        )}
        {activeTab === "Account" && (
          <>
            <MainProfilePage />
          </>
        )}
      </div>{" "}
    </>
  );
};

export default MainDash;
