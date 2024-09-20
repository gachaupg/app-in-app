/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AttachFile } from "@mui/icons-material";
import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Rating from '@mui/material/Rating';
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
  const location = useLocation()
  const fromDashboard = location.state;
  const [value, setValue] = React.useState(2);

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state.auth }));

  const [show, setShow] = useState("Sell");
  const [payments, setPayments] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [status, setStatus] = useState([])
  const initialState = {
    order_type: "sell",
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



  const [buy, setBuy] = useState(initialState);
  console.log("====================================");
  // console.log("buyddd", payments);
  console.log("====================================");


  useEffect(() => {

    if (payments) {
      setBuy({
        order_type: "sell",
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
        console.log('payments ', res.data);

      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [user?.access, navigate]);



  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading1(true);
    const token = user.access;
    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading1(false);
      return;
    }

    if (buy.order_type === 'sell') {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        console.log("Sending request with headers:", buy); // Debugging line
        console.log(
          "Sending request to endpoint:",
          `${endpoint}/trading_engine/p2p/trades/${status.id}/complete/`
        ); // Debugging line
        // https://omayaexchangebackend.onrender.com/trading_engine/p2p/trades/1/confirm/
        const response = await fetch(
          `${endpoint}/trading_engine/p2p/trades/${status.id}/complete/`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(buy),
          }
        );
        const data = await response.json();

        if (response.ok) {

          // toast.success("USDT transferred successfully!");
          // fetchData3();
          setOpen1(true);
          // navigate('/dashboard')
          // if (status.status==='completed') {

          //   
          // }else{
          //   setOpen1(false)
          // }
        } else {
          if (data.code === "token_not_valid") {
            toast.error("Your session has expired. Please log in again.");
            navigate("/login");
          } else {
            toast.error(`Sell Request failed: ${data.error || "Unknown error"}`);
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
        setMatch(res.data);
        setLoading1(false);
        console.log('new data pay', res.data);
        localStorage.setItem('id', JSON.stringify(res.data.id));

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

        const res = await axios.get(`${endpoint}/trading_engine/p2p/trades/${id}/confirm/`,
          { headers }
        );
        setComplete(res.data);
        console.log('new data staus ', res.data);

        setLoading1(false);
        if (res.data.status === 'completed') {
          setOpen1(true);
          navigate('/dashboard')
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
  return (
    <div className="white primary flex justify-between  pt-10  wrap small pr-40 pl-40 ">
      <p className="white">
        {/* {status.status==='complete'?'hii':'no'} */}
      </p>
      <div
        style={{
          width: "65%",
        }}
        className="flex flex-col small w-full  gap-6"
      >
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
              fontSize: '12px'
            }} className="white text text-xs">
              Rate your experience with the Merchant
            </Typography>
            <Typography style={{
              fontSize: '13px'
            }} className="g">
              <div style={{
              
              }} className="flex flex-row items-center w-full gap-10 mb-3 justify-between">
                <button
                  style={{
                  }}
                  onClick={() => {
                    handleOpen2()
                  }}
                  className="small mt-3 p-1 white greenbg rounded-lg flex gap-3 flex-row items-center">
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
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="flex flex-col primary items-center" sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <IoCheckmarkCircleSharp className="green" size={40} />
            </Typography>
            <Typography className="white">
              Successfully Transferred the USDT
            </Typography>
            <Typography style={{
              fontSize: '13px'
            }} className="g">
              I will receive {fromDashboard} USD
            </Typography>
            <button onClick={() => {
             navigate('/dashboard', { state: { data: 'Market' } })
             window.scrollTo(0, 0);

            }}
              className="w-full small mt-3 p-1 white greenbg rounded-2xl">
              Cancel</button>
            <button onClick={() => {
              handleOpen2()
            }}
              className="w-full small mt-3 p-1 white greenbg rounded-2xl">
              Provide feedback</button>
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
            <p className=" greenbgh-14 w-14 rounded-lg flex text-center justify-center items-center p-1 text-white">
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
                {payments?.advertiser_name.username}
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
                  className="gap-1 g flex  items-center"
                >
                  Rating{" "}
                  <span className="text-green-600 gap-1 flex flex-row items-center">
                    <SlLike /> 95%
                  </span>
                  Commission :{" "}
                  <span className="text-green-600">
                    {payments?.commission_rate}%
                  </span>
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
        <div className="flex  small wrapitems-center justify-between">
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
            <span className="text-green-600 flex flex-row items-center gap-1 ml-3">
              {payments?.id} <Copy size={17} />
            </span>
          </p>
        </div>
        <div className="flex gap-10 justify-around p-1 w-full small wrap rounded-lg border border-slate-700 items-center">
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">I want to Sell</p>
            <div className="flex flex-row  justify-between items-center rounded-lg   gap-1 p-2 border border-slate-700 items-center">
              <p className="green flex justify-around ">
                <DollarSign />{" "}
                {fromDashboard}
              </p>
              <p className="flex flex-row  items-center">
                USDT <IoIosArrowDown className="g" />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">I want to Receive</p>
            <div className="flex  rounded-lg  flex-col gap-1 p-1 border border-slate-700 items-">
              <p className="green flex items-center gap-1">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />{" "}
                {fromDashboard}
                <span className="white">USD</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">Commission</p>
            <div className="flex g  justify-between items-center rounded-lg   gap-1 p-1 border border-slate-700 items-">
              <p className="green flex p-1 justify-center items-center gap-1">
                <DollarSign /> {payments?.commission_rate}%
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
                  <p className="text-green-600 flex items-center">
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
                  <p className="text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="g">Transaction Id</p>
                <div className="flex flex-row gap-2 justify-between  w-full">
                  <p className="border  text-green-6 flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot /> <p>132452345234</p>
                  </p>
                  <p className="text-green-600 flex items-center">
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
            <span onClick={handleOpen} className="span text-red-600">
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
              className={`w-full  rounded-lg p-2 ${status.status === "matched" ? 'gback cursor-not-allowed' : 'bg-red-700'}`}
              disabled={status.status === "matched"}
            >
              {loading1 ? <CircularProgress /> : "Payment received notify the buyer"}
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
            </select>
          </div>
          <p className="mt-2 mb-2">Upload Documents</p>
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
            <Button
              className="white txt1 border border-slate"
              onClick={handleClose}
            >
              Submit
            </Button>
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
    </div>
  );
};

export default BuyPage;
