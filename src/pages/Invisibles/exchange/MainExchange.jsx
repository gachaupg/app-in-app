/* eslint-disable no-unused-vars */
import { Button, CircularProgress } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { Copy, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { GoArrowDownLeft } from "react-icons/go";
import { LiaStarSolid } from "react-icons/lia";
import { MdArrowOutward, MdOutlineArrowBackIosNew, MdOutlineArrowDropUp, MdOutlineArrowForwardIos } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { TiArrowUnsorted } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import MainProfilePage from "../../Auth/MainProfilePage";
import ExchangeTable from "../../Dashboard/DashboardTabs/Exchange";
import SideDash from "../../Dashboard/DashboardTabs/SideDash";
import Center from "../../Dashboard/Trade/Center";
import Orders from "../../Dashboard/Trade/Orders";
import Market from "../../p2p/Market";
import Deposit from "./forms/Deposit";
import ForexWidth from "./forms/ForexWidth";
import Widthform from "./forms/Width";

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
const MainExchange = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setdata] = useState(initialState)

  const { user } = useSelector((state) => ({ ...state.auth }));

  // useEffect(() => {
  //   if (user?.access) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/")
  //   }
  // }, [user]);

  const [activeTab, setActiveTab] = useState("P2P Trading");
  const [Verified, setVerified] = useState(false);
  const [activeTab1, setActiveTab1] = useState("Dashboard");
  const [show, setShow] = useState("P2P");
  const [showForm, setShowForm] = useState("");
  const tabs = [
    {
      name: "Dashboard",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721367990/svgexport-54_1_ww7fdx.png",
      link: "dashboard"
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
      name: "Settings",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    },
  ];
  const [graph, setGraph] = useState('sells')
  const handlClick = () => {
    setShow('P2P')
  }
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [payments, setPayments] = useState([]);
  const [match, setMatch] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [kyc, setKyc] = useState([])

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
    fetchData()
  }, [user?.access])
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
  }

  useEffect(() => {
    fetchData1()
  }, [user?.access])
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
  }



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
  const [crypto, setCrypto] = useState('crypto');
  const handleVerify2 = () => {
    if (kyc.is_verified) {
      setShow("Deposit")
    } else {
      setOpen(true)

    }
  }
  const handleVerify3 = () => {
    if (kyc.is_verified) {
      setShow("Withdraw")
    } else {
      setOpen(true)

    }
  }

  const handleVerify = () => {
    if (kyc.is_verified) {
      setShow("Deposit")
    } else {
      setOpen(true)

    }
  }
  const handleVerify4 = () => {
    if (kyc.is_verified) {
      setShow("Withdraw")

    } else {
      setOpen(true)

    }
  }
  const [loadingKy, setLoadingKyc] = useState(false);

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
  const name = 'Omaya Exchange';
  const num = '13242542';

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };
  const [network, setNetWork] = useState('USDT')

  return (
    <>
      <div className="primary">
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
              sx={{ ...style, width: "68%" }}
              className="rounded-lg small primary white border-slate-700"
            >
              <h2 className="text-center mb-4" id="child-modal-title">
                KYC Verification Form
              </h2>
              <div className="p-1">
                <div className="flex flex-row items-center justify-between p-2 w-full gap-6 wrap small">
                  <div className="flex flex-col items-center w-full gap-7">
                    <select
                      onChange={(e) => setdata({ ...data, document_type: e.target.value })}
                      placeholder="Full Name"
                      required
                      type="text"
                      className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
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
                      className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
                    />
                    <input
                      onChange={(e) => setdata({ ...data, document_image: e.target.files[0] })}

                      placeholder="Date of birth"
                      required
                      type="file"
                      className="flex border border-slate-700 p-2 w-full primary text-white rounded-3xl"
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
      <div
        style={{ width: "83%" }}
        className="small p-2 pt-12 flex pr-36 pl-24 flex-col gap-4"
      >

        <div className="">
          <Modal
            className="no-border"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="primary border no-border mr-20 flex flex-col items-center justify-center g 0" sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Verify Account
              </Typography>
              <div className="flex flex-row items-center justify-between w-full">

                {loadingKy ? 'Account will be verified soon!, It may take upto 24 hrs' : (
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <button onClick={handleOpen1} className="p-2 greenbg rounded-lg w-32 white mt-3">
                      Verify Now
                    </button>
                  </Typography>
                )}

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <button onClick={handleClose} className="p-2 border border-slate-700 rounded-lg w-32 white mt-3">
                    Cancel
                  </button>
                </Typography>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="flex flex-row small wrap w-full gap-4">
          <p
            className="w-full"
            onClick={() => setActiveTab1("Dashboard")}
            style={{
              fontSize: "15px",
              textDecorationColor: activeTab1 === "Dashboard" ? "green" : "",
              color: activeTab1 === "Dashboard" ? "white" : "grey",
              cursor: 'pointer'
            }}
          >
            {show === 'Withdraw' || show === 'wi' &&
              <div className="flex flex-row items-center justify-between">
                <p className="white">Withdraw</p>
                <p className="white">  Transaction Type</p>

              </div>
            }
            {show === 'Deposit' || show === 'Withdraw' || show === 'depo' &&
              <div className="flex flex-row items-center gap-5 w-full justify-between">
                <div>
                  <p className="white">Deposit</p>
                  <div className="flex flex-row border gap-2 rounded-lg border-green-700 w-32 p-1">
                    <button onClick={() => setCrypto('crypto')} className={`${crypto === 'crypto' ? 'greenbg' : ''} rounded-lg p-1 white`}>Crypto</button>
                    <button onClick={() => setCrypto('forex')} className={`${crypto === 'forex' ? 'greenbg' : ''} rounded-lg p-1  white`}>Forex</button>
                  </div>
                </div>
                <div>
                  <p className="white">  Transaction Type</p>
                  <div className=" w-full p-2 flex flex-row items-center justify-center gap-5 small">
                    <button onClick={handleVerify} className={`white gap-3 flex items-center justify-center border border-green-700  w-36 ${show === 'Deposit' ? 'greenbg' : ''} p-1 rounded-3xl`}>
                      <MdArrowOutward color="white" />  Deposit
                    </button>
                    <button onClick={handleVerify4} className={`border gap-3 white w-36 flex items-center white justify-center border-red-700 ${show === 'Withdraw' ? 'bg-red-700' : ''} p-1 rounded-3xl`}>
                      <GoArrowDownLeft color="white" />   Withdraw
                    </button>
                  </div>
                </div>
              </div>

            }
            {show != 'Withdraw' || show != 'depo' && <p className="white">Exchange Dashboard
            </p>}


            {show === 'Deposit' &&
              <div className="flex small wrap flex-row flex-wrap items-center gap-5 w-full justify-between">
                <div>
                  <p className="white">Deposit</p>
                  <div className="flex  small wrap flex-row border gap-2 rounded-lg border-green-700 w-32 p-1">
                    <button onClick={() => setCrypto('crypto')} className={`${crypto === 'crypto' ? 'greenbg' : ''} rounded-lg p-1 white`}>Crypto</button>
                    <button onClick={() => setCrypto('forex')} className={`${crypto === 'forex' ? 'greenbg' : ''} rounded-lg p-1  white`}>Forex</button>
                  </div>
                </div>
                <div>
                  <p className="white">  Transaction Type</p>
                  <div className=" w-full small wrap p-2 flex flex-row items-center justify-center gap-5 small">
                    <button onClick={() => setShow("Deposit")} className={`white flex items-center justify-center border border-green-700  w-36 ${show === 'Deposit' ? 'greenbg' : ''} p-1 rounded-3xl`}>
                      <MdArrowOutward color="white" />  Deposit
                    </button>
                    <button onClick={() => setShow("Withdraw")} className={`border white w-36 flex items-center white justify-center border-red-700 ${show === 'Withdraw' ? 'bg-red-700' : ''} p-1 rounded-3xl`}>
                      <GoArrowDownLeft color="white" />   Withdraw
                    </button>
                  </div>
                </div>
              </div>

            }

          </p>
        </div>

        {activeTab1 === "Orders" && (
          <>
            <Orders />
          </>
        )}
        {activeTab1 === "Center" && (
          <>
            <Center />
          </>
        )}
        {activeTab1 === "Dashboard" && (
          <>

            {show === "P2P" && (
              <>
                <div className="flex flex-row w-full wrap small justify-between">

                  <div
                    style={{
                      width: "70%",
                    }}
                    className="  flex  small flex-col gap-2"
                  >
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
                            {kyc.is_verified ? <p className="green">Verified</p> : 'Unverified account'} {" "}

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
                    <div className="flex items-center justify-between">
                      <div className="flex flex-row items-center justify- gap-4">
                        <p className="white">Favourite Assets  </p>
                        <MdOutlineArrowBackIosNew className="green" />
                        <MdOutlineArrowForwardIos className="green" />
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="white">Add Assets</p>
                        <Plus size={30} className="green" />
                      </div>
                    </div>
                    <div className="w-full small wrap flex primary mt-4  rounded-2xl flex-row items-center justify-between gap-2   border-spacing-1 ">
                      <div className="border small border-slate-700 p-2 gap-14 rounded-2xl flex flex-row  justify-between">
                        <div className="flex small flex-row items-center gap-2">
                          <img className="h-7" src="https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png" alt="" />
                          <p style={{
                            fontSize: '12px'
                          }} className="flex white flex-col">
                            BTC
                            <p style={{
                              fontSize: '10px'
                            }} className="g text-sm">
                              Bitcoin
                            </p>
                          </p>
                        </div>
                        <div>
                          <div style={{
                            fontSize: '12px'
                          }}>
                            <p className="white">
                              32,349.00USD
                            </p>
                            <p style={{ fontSize: '12px' }} className="green flex items-center gap-1"><MdOutlineArrowDropUp />+4.66%</p>
                          </div>
                        </div>

                      </div>
                      <div className="border small border-slate-700 p-2 gap-14 rounded-2xl flex flex-row  justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <img className="h-6" src="https://res.cloudinary.com/pitz/image/upload/v1724012530/Group_34041_1_usw7t0.png" alt="" />
                          <p style={{
                            fontSize: '12px'
                          }} className="flex white flex-col">
                            ETH
                            <p style={{
                              fontSize: '10px'
                            }} className="g text-sm">
                              Ethereum
                            </p>
                          </p>
                        </div>
                        <div>
                          <div style={{
                            fontSize: '12px'
                          }}>
                            <p className="white">
                              32,349.00USD
                            </p>
                            <p style={{ fontSize: '12px' }} className="green flex items-center gap-1"><MdOutlineArrowDropUp />+4.66%</p>
                          </div>
                        </div>

                      </div>
                      <div className="border small border-slate-700 p-2 gap-10 rounded-2xl flex flex-row  justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <img className="h-6" src="https://res.cloudinary.com/pitz/image/upload/v1724012474/Group_34041_fil5u6.png" alt="" />
                          <p style={{
                            fontSize: '12px'
                          }} className="flex white flex-col">
                            TRX
                            <p style={{
                              fontSize: '10px'
                            }} className="g text-sm">
                              Tron
                            </p>
                          </p>
                        </div>
                        <div>
                          <div style={{
                            fontSize: '12px'
                          }}>
                            <p className="white">
                              32,349.00USD
                            </p>
                            <p style={{ fontSize: '12px' }} className="green flex items-center gap-1"><MdOutlineArrowDropUp />+4.66%</p>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="flex flex-row w-full small wrap justify-between">
                      <div className="flex flex-row items-center gap-3 small wrap ">
                        <p className="  white">P2P Overview (USD)</p>
                        <button onClick={() => setGraph('All')} className={`border  white  border-green-600 ${graph === 'All' && "bg-green-600"} p-1 rounded-2xl w-12`}>
                          All
                        </button>
                        <button onClick={() => setGraph('sells')} className={`border  white  border-green-600 ${graph === 'sells' && "bg-green-600"} p-1 rounded-2xl `}>
                          Deposits
                        </button>
                        <button onClick={() => setGraph('buys')} className={`border  white  border-green-600 ${graph === 'buys' && "bg-green-600"} p-1 rounded-2xl `}>
                          Withdrawals
                        </button>
                      </div>
                      {/* <BasicArea/> */}

                      <div>
                        <img
                          src="https://res.cloudinary.com/pitz/image/upload/v1721374243/Frame_34636_mplpeh.png"
                          alt=""
                        />
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
                    <ExchangeTable />

                  </div>
                  <div
                    className="ml-10 small wrap "
                    style={{
                      width: "30%",
                    }}
                  >
                    <div className="secondary w-full rounded-2xl p-2 flex flex-row items-center justify-center gap-2 h-24 small border border-slate-700">
                      <button onClick={handleVerify} className="border white flex items-center justify-center w-28 border-green-600 p-1 rounded-3xl">
                        <MdArrowOutward color="green" />  Deposit
                      </button>
                      <button onClick={handleVerify3} className="border white w-28 flex items-center justify-center border-red-600 p-1 rounded-3xl">
                        <GoArrowDownLeft color="red" />   Withdraw
                      </button>
                    </div>
                    <p className="white">Overview Total</p>
                    <SideDash />
                  </div>
                </div>{" "}
              </>
            )}
            {show === 'width' && (
              <>
                <Deposit setShow={handlClick} />
              </>
            )}
            {show === "Withdraw" && crypto === 'crypto' && (
              <>
                <Widthform setShow={handlClick} setShow1={setShow} />
              </>
            )}
            {show === "Withdraw" && crypto === 'forex' && (
              <>
                <ForexWidth />
              </>
            )}
            {show === 'depo' && (
              <>
                <Deposit setShow={setShow} network={network} />
              </>
            )}
            {show === "Deposit" && (
              <>
                <div>
                  <div className="flex w-full flex-row items-center justify-between">

                    <p style={{ fontSize: '14px', width: '60%' }} className="g mb-3">
                      To deposit funds, please select your transaction type: Crypto or Forex.
                      Choose from the cryptocurrencies or Forex brokers listed below to proceed.
                    </p>
                  </div>

                  <div>
                    {crypto === 'crypto' && (
                      <>
                        <div className="border rounded-2xl border-slate-700">
                          <div className="border small size g rounded-t-2xl wrap border-slate-700 gback w-full p-1 items-center flex flex-row justify-between">
                            <p className="flex-1 text-left">Name</p>
                            <p className="flex-1 flex flex-row items-center gap-2 justify-center">Price <TiArrowUnsorted /></p>
                            <p className="flex-1 flex flex-row items-center gap-2 justify-center">Network <TiArrowUnsorted /></p>
                            <p className="flex-1 flex flex-row items-center gap-2 justify-center">Favorite</p>
                          </div>

                          <div onClick={() => {
                            setNetWork('USDT')
                            setShow('depo')
                          }
                          } className="border cursor-pointer small size mt-3 wrap border-slate-700 gback w-full p-1 items-center flex flex-row justify-between">
                            <div className="flex-1 flex flex-row cursor-pointer items-center gap-2">
                              <img className="h-10" src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png" alt="USDT TRC20" />
                              <div>
                                <p className="white">USDT TRC20</p>
                                <p className="g text-ms">Tether, Tron Network</p>
                              </div>
                            </div>
                            <p className="flex-1 yellowT text-center">$0.99</p>
                            <p className="flex-1 white text-center">TRON</p>
                            <p className="flex-1 flex justify-center yellowT">
                              <LiaStarSolid />
                            </p>
                          </div>
                          <div onClick={() => {
                            setNetWork('ETH')
                            setShow('depo')
                          }} className="border small size cursor-pointer wrap border-slate-700  w-full p-1 items-center flex flex-row justify-between">
                            <div className="flex-1 flex flex-row items-center gap-2">
                              <img className="h-10" src="https://res.cloudinary.com/pitz/image/upload/v1724012530/Group_34041_1_usw7t0.png" alt="USDT TRC20" />
                              <div>
                                <p className="white">ETH</p>
                                <p className="g text-ms">Ethereum</p>
                              </div>
                            </div>
                            <p className="flex-1 yellowT text-center">$0.99</p>
                            <p className="flex-1 white text-center">ETHEREUM</p>
                            <p className="flex-1 flex justify-center yellowT">
                              <LiaStarSolid />
                            </p>
                          </div>
                          <div onClick={() => {
                            setNetWork('BTC')
                            setShow('depo')
                          }} className="border small size wrap cursor-pointer border-slate-700  w-full p-1 items-center flex flex-row justify-between">
                            <div className="flex-1 flex flex-row items-center gap-2">
                              <img className="h-10" src="https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png" alt="USDT TRC20" />
                              <div>
                                <p className="white">BTC</p>
                                <p className="g text-ms">Bitcoin</p>
                              </div>
                            </div>
                            <p className="flex-1 yellowT text-center">$0.99</p>
                            <p className="flex-1 white text-center">BITCOIN</p>
                            <p className="flex-1 flex justify-center yellowT">
                              <LiaStarSolid />
                            </p>
                          </div>

                          <div onClick={() => {
                            setNetWork('TRC20')
                            setShow('depo')
                          }} className="border small cursor-pointer size wrap border-slate-700  w-full p-1 items-center flex flex-row justify-between">
                            <div className="flex-1 flex flex-row items-center gap-2">
                              <img className="h-10" src="https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png" alt="USDT TRC20" />
                              <div>
                                <p className="white">TRX</p>
                                <p className="g text-ms">Tron</p>
                              </div>
                            </div>
                            <p className="flex-1 yellowT text-center">$0.99</p>
                            <p className="flex-1 white text-center">TRON</p>
                            <p className="flex-1 flex justify-center yellowT">
                              <LiaStarSolid />
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {crypto === 'forex' && (
                    <>
                      <div className="border rounded-2xl border-slate-700">
                        <div className="border small size g rounded-t-2xl wrap border-slate-700 gback w-full p-1 items-center flex flex-row justify-between">
                          <p className="flex-1 text-left">Name</p>
                          <p className="flex-1 flex flex-row items-center gap-2 justify-center">Country</p>
                          <p className="flex-1 flex flex-row items-center gap-2 justify-center">More </p>
                        </div>

                        <div className="border small size mt-1 wrap border-slate-700 gback w-full p-1 items-center flex flex-row justify-between">
                          <div className="flex-1 flex flex-row items-center gap-2">
                            <img className="h-10" src="https://res.cloudinary.com/pitz/image/upload/v1724056975/FX_msvvv4.png" alt="USDT TRC20" />
                            <div>
                              <p className="white">FXPRIMUS</p>
                            </div>
                          </div>
                          <p className="flex-1 g text-center">Cypress</p>
                          <p className="flex-1 flex justify-center yellowT">
                            <LiaStarSolid />
                          </p>
                        </div>
                        <div className="border small size wrap border-slate-700  w-full p-1 items-center flex flex-row justify-between">
                          <div className="flex-1 flex flex-row items-center gap-2">
                            <img className="h-10" src="https://res.cloudinary.com/pitz/image/upload/v1724056992/ICM_eboxhq.png" alt="USDT TRC20" />
                            <div>
                              <p className="white">ICM CAPITAL</p>
                            </div>
                          </div>
                          <p className="flex-1 g text-center">UAE</p>
                          <p className="flex-1 flex justify-center yellowT">
                            <LiaStarSolid />
                          </p>
                        </div>
                      </div>
                    </>
                  )}



                </div>
              </>
            )}
          </>
        )}
        {activeTab1 === "Account" && (
          <>
            <MainProfilePage />
          </>
        )}
        {activeTab1 === "Market" && (
          <>
            <Market />
          </>
        )}
      </div>
    </>
  );
};

export default MainExchange;
