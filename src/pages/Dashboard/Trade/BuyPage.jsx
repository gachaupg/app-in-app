/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AttachFile } from "@mui/icons-material";
import { CircularProgress, Rating, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Copy, DollarSign, Dot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { IoIosArrowDown, IoIosThumbsDown, IoIosThumbsUp, IoMdArrowRoundForward } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import { FiUpload } from "react-icons/fi";
import { preview } from "vite";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",

  pt: 2,
  px: 4,
  pb: 3,
};
const BuyPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false)
  const location = useLocation()
  const fromDashboard = location.state;
  // console.log('====================================');
  // console.log(fromDashboard);
  // console.log('====================================');
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state.auth }));

  const [show, setShow] = useState("Buy");
  const [payments, setPayments] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [status, setStatus] = useState([])
  const initialState = {
    order_type: "buy",
    currency: payments?.currency || "",
    amount: payments?.amount || 0,
    commission_rate: payments?.commission_rate || 0,
    exchange_rate: payments?.exchange_rate || 0,
    payment_method: payments?.payment_method || "",
    payment_provider: payments?.payment_provider || "",
    limit: payments?.limit_duration || 0,
    completion_time: payments?.completion_time || 0,
    completion_rate: payments?.completion_rate || 0,
    asset: payments?.asset || "",
    advertiser_name: payments?.advertiser_name || "",
    auto_reply: payments?.auto_reply || "",
    terms_and_conditions: payments?.terms_and_conditions || "",
  };
  // console.log("hello", status);

  const [buy, setBuy] = useState(initialState);
  console.log("====================================");
  // console.log("buyddd", payments);
  console.log("====================================");


  useEffect(() => {

    if (payments) {
      setBuy({
        order_type: "buy",
        currency: payments.currency,
        amount: fromDashboard,
        commission_rate: payments.commission_rate,
        exchange_rate: payments.exchange_rate,
        payment_method: payments.payment_method,
        payment_provider: payments.payment_provider,
        limit: 10.00,
        terms_and_conditions: payments.terms_and_conditions,
        completion_time: payments.completion_time,
        completion_rate: payments.completion_rate,
        asset: payments.asset,
        advertiser_name: payments.advertiser_name,
        auto_reply: payments.auto_reply,
      });
    }
  }, [payments]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          `${endpoint}/trading_engine/p2porders/${id}/`,
          { headers }
        );
        setPayments(res.data);
        setLoading1(false);
        console.log('paymentsttt', res.data);
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [user?.access, navigate]);

  const [complete, setComplete] = useState([])

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

        var uid = JSON.parse(localStorage.getItem('id'));

        const res = await axios.get(`${endpoint}/trading_engine/p2p/trades/${uid}/confirm/`,
          { headers }
        );
        setComplete(res.data);
        console.log('new data dgdggd ', res.data);

        setLoading1(false);
        if (res.data.status === 'completed') {
          setOpen1(true);
        }
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
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
        const res = await axios.get(`${endpoint}/trading_engine/p2p/trades/${id}/confirm/`,
          { headers }
        );
        setStatus(res.data);
        setLoading1(false);
        console.log('paymentse55rre', res.data);
        localStorage.setItem('id', JSON.stringify(res.data.id));
        // if (res.data.status === 'completed') {
        //   setOpen1(true);

        // }
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [user?.access, navigate]);


  const handleSubmit = async () => {
    setLoading1(true);
    const token = user.access;
    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading1(false);
      return;
    }

    if (buy.order_type === 'buy') {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        console.log("Sending request with headers:", buy);
        console.log(
          "Sending request to endpoint:",
          `${endpoint}/trading_engine/p2p/trades/${status.id}/confirm/`
        ); // Debugging line
        // https://omayaexchangebackend.onrender.com/trading_engine/p2p/trades/1/confirm/
        const response = await fetch(
          `${endpoint}/trading_engine/p2p/trades/${status.id}/confirm/`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(buy),
          }
        );
        const data = await response.json();

        if (response.ok) {
          // toast.success("Buy Request sent!");
          // fetchData3();

        } else {
          if (data.code === "token_not_valid") {
            toast.error("Your session has expired. Please log in again.");
            navigate("/login");
          } else {
            toast.error(`Buy Request failed: ${data.error || "Unknown error"}`);
          }
          console.error("Error response:", data);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        console.error("Error:", error);
      } finally {
        setLoading1(false);
      }
    }
  };


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.black',
    border: 'none',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };
  const initialState1 = {

    trade_id:id,
    reason_for_appeal: "",
    screenshot: "",

  };
  const [widthdrwal, setWidthdrwal] = useState(initialState1);
  const [verify, setVerify] = useState(true);


  const handleAppeal = async () => {
    setLoading1(true);
    const token = user.access;
    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading(false);
      return;
    }
    if (verify === true) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const formData = new FormData();
      formData.append('trade_id', widthdrwal.trade_id);
      formData.append('reason_for_appeal', widthdrwal.reason_for_appeal);

      if (widthdrwal.screenshot) {
        formData.append('screenshot', widthdrwal.screenshot);
      }
      try {
        const response = await fetch(
          `${endpoint}/trading_engine/appeals/create/`,
          {
            method: "POST",
            headers: headers,
            body: formData,
          }
        );

        const data = await response.json();
        console.log('appeal',data);
        
        if (response.ok) {
          toast('Success')
        } else if (data.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error(`Deposit failed:${data.error} `);
        }
      } catch (error) {
        toast.error(`Error: ${error.error}`);
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Invalid code");
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Text copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy text.');
    });
  };
  return (
    <div className="white primary flex justify-between  pt-10  wrap small pr-40 pl-40 ">
   
      <Modal
        open={open2}
        // onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
        <Box className="flex flex-col primary items-center" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography style={{
            fontSize:'12px'
          }} className="white text text-xs">
            Rate your experience with the Merchant            
            </Typography>
          <Typography style={{
            fontSize: '13px'
          }} className="g">
            <div className="flex flex-row items-center w-full gap-10 mb-3 justify-between">
            <button
                style={{
                }}
                onClick={() => {
                  handleOpen2()
                }}
                className="  small mt-3 p-1 white greenbg rounded-lg flex gap-3 flex-row items-center">
                Positive <IoIosThumbsUp />
              </button>
            <button onClick={() => {
                window.scrollTo(0, 0);
              }}
                className=" small mt-3 p-1 white secondary rounded-lg flex gap-3 flex-row items-center">
                Negative <IoIosThumbsDown color="red" />
              </button>
              
            </div>
            <div className="flex rounded-lg flex-col items-center justify-center border border-slate-700 p-2">
              <p className="g">Leave the comment (optional)</p>

              <input type="text" className="h-40 primary no-border w-full " />
            </div>
          </Typography>
         <div className="flex flex-row items-center w-full justify-between gap-10">
         <button onClick={() => {
           navigate('/dashboard', { state: { data: 'Market' } })
           window.scrollTo(0, 0);

          }}
            className="w-80 small mt-3 p-1 white border border-slate-700 rounded-2xl">
            Cancel</button>
          <button onClick={() => {
            // handleOpen2()
          }}
            className="w-full small mt-3 p-1 white greenbg rounded-2xl">
            Submit</button>
         </div>
        </Box>
      </Modal>
      <div
        style={{
          width: "65%",
        }}
        className="flex flex-col small w-full wrap  gap-6"
      >
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="flex w-full flex-col primary items-center" sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <IoCheckmarkCircleSharp className="green" size={40} />
            </Typography>
            <Typography className="white">
              Successfully Bought
            </Typography>
            <Typography style={{
              fontSize: '13px'
            }} className="g">
              I will receive {fromDashboard} USDT
            </Typography>
            <div className="flex flex-col gap-2">
              <button onClick={() => {
                handleClose1();
              navigate('/dashboard', { state: { data: 'Market' } })
           window.scrollTo(0, 0);

              }}
                className="w-full small mt-3 p-1 white greenbg rounded-2xl">
                Cancel
              </button>
              <button
                style={{
                  // width: '16rem'
                }}
                onClick={() => {
                  handleOpen2()
                }}
                className=" w-80 small mt-3 p-1 white greenbg rounded-2xl">
                Provide feedback
              </button>
            </div>
          </Box>
        </Modal>
        <p>Advertisers Info</p>
        <div
          //   style={{
          //     width: "100%",
          //   }}
          className="flex small small wrap flex-row justify-start gap-2 items-center justify-center  border border-slate-700 rounded-lg secondary p-3  pr-5 pl-5 items-center  "
        >
          <div className="flex w-96 small wrap  flex-row gap-2 items-center">
            <p className=" bg-green-600 h-14 w-14 rounded-lg flex text-center justify-center items-center p-1 text-white">
              <span
                style={{
                  fontSize: "16px",
                }}
                className="h-7 text-center flex items-center capitalize justify-center w-8 p-1 bg-green-600 rounded-lg"
              >
                <p>
                  {payments?.advertiser_name?.substring(0, 2).toUpperCase()}
                </p>


                {/* {payments?.advertiser_name?.substring(0, 1).toUpperCase() + payments?.advertiser_name.username?.substring(1, 2).toUpperCase()} */}
              </span>

            </p>
            <div className="flex flex-col  ">
              <p
                style={{
                  fontSize: "14px",
                }}
                className="flex w-full capitalize flex-row items-center  gap-1 text-white"
              >
                {payments?.advertiser_name.split('@')[0]}
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
                  <span className="text-green-600">
                    {" "}
                    {payments?.completion_rate * 100} %
                  </span>{" "}
                  Completion
                </p>
                <p
                  style={{
                    fontSize: "10px",
                  }}
                  className="gap-1 g flex justify-center  items-center"
                >
                  Rating{" "}
                  <span className="text-green-600 gap-1 flex flex-row items-center">
                    <SlLike /> 95%
                  </span>
                  <p className="flex flex-row items-center">Commission: <span className="text-green-600">
                    {/* {payments.commission_rate!= null || "" ? payments.commission_rate : 0.0}% */}
                  </span></p>

                </p>
              </p>
            </div>
          </div>
          <div className="flex small wrap flex-row gap-10 w-full">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">{payments?.limit_duration} minutes</p>
              <p
                style={{
                  fontSize: "13px",
                }}
                className="g"
              >
                Time limit :0.7
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
              <p className="white">
                {" "}
                {payments?.amount !== undefined && payments?.amount !== null
                  ? Number(payments?.amount).toFixed(2)
                  : "0.00"}{" "}
                USDT
              </p>
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
        </div>
        <div></div>
        <div className="flex  small wrap items-center justify-between">
          <p> order Info</p>
          <p
            className="flex flex-row items-center gap-2
          "
          >
            <img
              className="h-4"
              src="https://res.cloudinary.com/pitz/image/upload/v1721843528/Group_2_iypdkq.png"
              alt=""
            />{" "}
            Order Number :{" "}
            <span onClick={() => copyToClipboard(payments?.id)} className="cursor-pointer text-green-600 flex flex-row items-center gap-1 ml-3">
              {payments?.id} <Copy size={17} />
            </span>
          </p>
        </div>
        <div className="flex gap-10 justify-around p-1 small wrap rounded-lg border border-slate-700 items-center">
          <div className="flex  flex-col gap-1 p-1  ">
            <p className="g">I want to Send</p>
            <div className="flex flex-row  justify-between items-center rounded-lg  w-56  gap-1 p-2 border border-slate-700 items-center">
              <p className="green flex justify-around ">
                <DollarSign />{" "}
                {fromDashboard}
              </p>
              <p className="flex flex-row  items-center">
                USD <IoIosArrowDown className="g" />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">I want to Receive</p>
            <div className="flex  rounded-lg w-full flex-col gap-1 p-1 border border-slate-700 items-">
              <p className="green flex items-center gap-1">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />{" "}
                {/* {fromDashboard * payments.commission_rate ?? 0.0} */}
                <span className="white">USDT</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">Commission</p>
            <div className="flex g  justify-between items-center rounded-lg w-56  gap-1 p-1 border border-slate-700 items-">
              <p className="green flex p-1 justify-center items-center gap-1">
                <DollarSign />
              </p>
              <p>USD</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg secondary border border-slate-700  p-2 w-full">
          <div className="flex small wrap flex-row w-full p-1 items-center gap-10 justify-between">
            <div
              style={{ width: "40%" }}
              className="primary small rounded-lg w-full p-2  h-60"
            >
              <p className="flex small flex-row items-center  gap-1">
                {" "}
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721888934/Premier_bank_1_ljsbtx.png"
                  alt=""
                />{" "}
                {payments?.payment_method?.name ? payments?.payment_method?.name : "Primer Bank"}
              </p>
            </div>
            <div
              style={{ width: "100%" }}
              className="flex small flex-col gap-2 items-center gap-2"
            >
              <div className="w-full">
                <p className="g">Account Name</p>
                <div className="flex flex-row gap-2 justify-between  w-full">
                  <p className="border flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot /> <p> {payments?.account_name}</p>
                  </p>
                  <p onClick={() => copyToClipboard(payments?.account_name)} className="cursor-pointer text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="g">Account Number</p>
                <div className="flex flex-row gap-2 justify-between  w-full">
                  <p className="border text-green-600 flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot color="green" />{" "}
                    <p>{payments?.account_number}</p>
                  </p>
                  <p onClick={() => copyToClipboard(payments?.account_number)} className="cursor-pointer text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="g">Transaction Id</p>
                <div className="flex flex-row gap-2 justify-between  w-full">
                  <p className="border  text-green-6 flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot /> <p>{payments?.id}</p>
                  </p>
                  <p onClick={() => copyToClipboard(payments?.id)} className="cursor-pointer text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: "14px",
            }}
            className="flex rounded-lg mt-8 flex-col gap-2 border border-green-600"
          >
            <p className="   text-green-6 flex items-center w-full p-1">
              <Dot color="green" />{" "}
              <p>Please send the money from your own account Only</p>
            </p>
            <p className="   text-green-6 flex items-center w-full p-1">
              <Dot color="green" />{" "}
              <p>Put transaction ID in the description field of the bank</p>
            </p>
            <p className="   text-green-6 flex items-center w-full p-1">
              <Dot color="green" />{" "}
              <p>
                Please note, If you do not follow above conditions, we will
                reject your transaction and send you back your money.
              </p>
            </p>
          </div>
          <p className="mt-1">
            I have an issue with{" "}
            <span onClick={handleOpen} className="span cursor-pointer text-red-600">
              {" "}
              Appeal/Complain
            </span>
          </p>
          <div className="flex flex-row small wrap gap-10 justify-between">
            <button className="border w-full border-slate-700  rounded-lg p-2">
              Cancel Transaction
            </button>
            <button
              onClick={handleSubmit}
              className={`w-full rounded-lg p-2 ${status.status === 'half-matched' ? 'gback' : 'greenbg'}`}
              disabled={status.status === 'half-matched'}

            >
              {loading1 ? <CircularProgress /> : "Money sent, notify seller"}
            </button>


          </div>
        </div>
      </div>
      <Modal
        className=" rounded-lg border-slate-700"
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{ ...style, width: "40%" }}
          className="rounded-lg primary white border-slate-700"
        >
          <h2 className="text-center" id="child-modal-title">
            Submit Appeal
          </h2>
          <div
            className="p-1 rounded-lg"
            style={{
              background: "#453A30            ",
            }}
          >
            <p
              style={{
                color: "#E06542",
              }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedl
            </p>
            <p
              style={{
                color: "#E06542",
              }}
            >
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedl
            </p>
            <p
              style={{
                color: "#E06542",
              }}
            >
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedl
            </p>
          </div>
          <p className="text-center ">Appeal reason</p>
          <div className="secondary border  border-slate-700 w-full rounded-2xl p-1">
            <select className="secondary g  w-full  p-1" name="" id="">
              <option className="g" value="">
                Select the reason for appeal
              </option>
              <option  onChange={(e) => {
                setWidthdrwal({ ...widthdrwal, reason_for_appeal: e.target.value });
              }} className="g" value=" usdt not recieved">
                usdt not received
              </option>
            </select>
          </div>
          <div className="flex flex-row mt-1 items-center gap-2">
            <p style={{ fontSize: "14px" }}>Upload Documents</p>
            <label htmlFor="file-upload" className="cursor-pointer flex  items-center gap-1">
              <button
                className="bg-slate-100 p-1 w-12 flex justify-center items-center text-center rounded-lg"
                onClick={() => {
                  document.getElementById("file-upload").click();
                }}
              >
                <FiUpload className="text-yellow-700" />
              </button>
              <p>{widthdrwal.screenshot?.name}</p>
            </label>
            <input
              id="file-upload"
              type="file"
             
              className="hidden"
              onChange={(e) => {
                setWidthdrwal({ ...widthdrwal, screenshot: e.target.files[0] });
                toast.success('Document picked successfully');
              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
            }}
            className="g"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <div className="flex flex-row items-center gap-20 mt-4 justify-between">
            <Button
              className="white txt border border-slate"
              onClick={handleClose}
            >
              Close{" "}
            </Button>
           {
            loading1? <CircularProgress/>
            : <Button
            className="white txt1 border border-slate"
            onClick={handleAppeal}
          >
            Submit
          </Button>
           }
          </div>
        </Box>
      </Modal>
      <div style={{ width: "50%" }} className="flex  p-2 ml-3 small  flex-col ">
        <p>Chat with Advertiser</p>
        <div className="secondary p-1 w-full border rounded-lg mt-2 flex flex-col border-slate-700">
          <p className="flex flex-row items-center gap-2 text-center items-center justify-center">
            {" "}
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721844614/Group_34041_rtorm8.png"
              alt=""
            />{" "}
            ADviteriser user name
          </p>
          <p
            style={{ height: "1px" }}
            className=" w-full mt-2 mb-2 bg-slate-700"
          ></p>
          <div className="flex small wrap flex-col gap-2">
            <div className="greybg small  w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="greybg w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="bg-green-600 small margin ml-36 float-left w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="greybg w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="bg-green-600 small margin ml-36 float-left w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <p
              style={{ height: "1px" }}
              className=" w-full mt-2 mb-2 bg-slate-700"
            ></p>
            <div className="flex flex-row items-center justify-between p-1">
              <input className="secondary g w-full" type="text" />{" "}
              <div className="flex flex-row gap-1">
                <AttachFile color="green" />{" "}
                <p className="h-7 w-7 bg-green-600 flex items-center justify-center  text-center rounded-full">
                  <IoMdArrowRoundForward />
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="flex flex-row items-center gap-1">
          Advertiser's Terms <BsExclamationCircle color="red" />
        </p>
        {payments?.terms_and_conditions}
      </div>
    </div >
  );
};

export default BuyPage;
