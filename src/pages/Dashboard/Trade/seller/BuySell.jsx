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
import { DollarSign, Dot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { IoIosThumbsDown, IoIosThumbsUp, IoMdArrowRoundForward } from "react-icons/io";
import { IoCheckmarkCircleSharp, IoDocumentTextOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../../utils/APIRoutes";


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
    const [match, setMatch] = useState([]);

    const params = useParams();
    const { id } = params;
    const navigate = useNavigate();
    const { user } = useSelector((state) => ({ ...state.auth }));

    const [show, setShow] = useState([]);
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
    console.log("hello", match.buy_order);

    const [buy, setBuy] = useState(initialState);


    const fetchData5 = async () => {
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
                `${endpoint}/trading_engine/p2porders/${match.buy_order}/`,
                { headers }
            );
            setShow(res.data);
            setLoading1(false);
            console.log('paymentssasssss', res.data);

        } catch (error) {
            console.log(error);
            setLoading1(false);
        }
    };

    //     fetchData(); // Initial fetch

    //     const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    //     return () => clearInterval(interval); // Clean up interval on unmount
    // }, [user?.access, navigate]);


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
                    `${endpoint}/trading_engine/p2porders/${match.buy_order}/`,
                    { headers }
                );
                setPayments(res.data);
                setLoading1(false);
                console.log('paymentsrrrr', res.data);
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

        if (buy.order_type === 'buy') {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };

            try {
                console.log("Sending request with headers:", buy); // Debugging line
                console.log(
                    "Sending request to endpoint:",
                    `${endpoint}/trading_engine/p2p/trades/${status.id}/confirm/`,

                    // https://omayaexchangebackend.onrender.com/trading_engine/p2p/trades/<int:trade_id>/complete/
                ); // Debugging line
                // https://omayaexchangebackend.onrender.com/trading_engine/p2p/trades/1/confirm/
                const response = await fetch(
                    `${endpoint}/trading_engine/p2p/trades/${status.id}/confirm/`,

                    // `${endpoint}/trading_engine/p2p/trades/${id}/complete/`,
                    {
                        method: "POST",
                        headers: headers,
                        body: JSON.stringify(buy),
                    }
                );
                const data = await response.json();

                if (response.ok) {
                    // toast.success("Request sent!");
                    fetchData3();
                    // if (status.status === 'completed' ) {
                    //     navigate('/dashboard')
                    //   }
                } else {
                    if (data.code === "token_not_valid") {
                        toast.error("Your session has expired. Please log in again.");
                        navigate("/login");
                    } else {
                        toast.error(`Request failed: ${data.error || "Unknown error"}`);
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
        fetchData3();
    }, [user?.access]);
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
            const res = await axios.get(`${endpoint}/trading_engine/p2p/trades/${id}/confirm/`, {
                headers,
            });
            setLoading1(false);
            setStatus(res.data); // Assuming the response data is what you need to set
            if (res.data.status === 'completed') {
                setOpen1(true);

            }
        } catch (error) {
            console.log(error);
            setLoading1(false);
        }
    }

    const [seconds, setSeconds] = useState(9);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        // Run the countdown if seconds are greater than 0
        if (seconds > 0) {
            const timerId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(timerId); // Clean up the interval on component unmount or re-render
        } else {
            setIsDisabled(true); // Disable the button when seconds reach 0
        }
    }, [seconds]);

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
                fetchData5()
                const res1 = await axios.get(
                    `${endpoint}/trading_engine/p2porders/${res.data.buy_order}/`,
                    { headers }
                );
                setShow(res1.data);
                console.log('ggggggg', res1.data);

                if (res.data.status === 'completed') {
                    setOpen1(true);
                    // navigate('/dashboard')

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

    // useEffect(()=>{

    //       },[match])



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
                            width: '100%'
                        }} className="flex flex-row items-center w-full gap-10 mb-3 justify-between">
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
                className="flex flex-col small w-full  gap-6"
            >
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
                            Successfully Sold
                        </Typography>
                        <Typography style={{
                            fontSize: '13px'
                        }} className="g">
                            I will receive {fromDashboard.amount} USDT
                        </Typography>
                        <button onClick={() => {
                            navigate('/dashboard', { state: { data: 'Market' } })
                            window.scrollTo(0, 0);
                        }}
                            className="w-full small mt-3 p-1 white border border-slate-700
                             rounded-2xl">Cancel</button>
                        <button onClick={() => {
                            handleOpen2()
                        }}
                            className="w-full small mt-3 p-1 white greenbg
                             rounded-2xl">Provide feedback</button>
                    </Box>
                </Modal>
                <p>Verify  payment</p>



                <div className="flex flex-row gap-4 w-full">
                    <div>
                        <div style={{
                            width: '1px'
                        }} className="h-full bg-white"></div>
                    </div>
                    <div className="w-full">
                        <div className="flex w-full small wrap  flex-row gap-2 items-center justify-between">
                            <p>Order Created</p>
                            <p className="flex flex-row items-center"> <IoDocumentTextOutline /> Order Number : <span className="green">{'252442'}</span></p>
                        </div>

                        <div className="border border-slate-700 p-2 gap-4 rounded-2xl flex flex-row items-center justify-between">
                            <div className="flex w-full flex-col">
                                <p className="g text-sm">Fiat USDT</p>
                                <div className="greybg w-full rounded-2xl p-1 flex flex-row items-center justify-between yellowT">
                                    <p className="flex items-center">
                                        <DollarSign className="green" />
                                        {Number(fromDashboard.amount).toFixed(2)}
                                    </p>
                                    <p>USDT</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col">
                                <p className="g text-sm">Commission</p>
                                <div className="greybg w-full rounded-2xl p-1 flex flex-row items-center justify-between ">
                                    <p className="flex items-center" ><DollarSign className="green" />{show.commission_rate}%</p>
                                    <p>USD</p>
                                </div>
                            </div>
                            <div className="flex w-full flex-col">
                                <p className="g text-sm">Total  Quantity </p>
                                <div className="greybg w-full rounded-2xl p-1 flex flex-row items-center justify-between yellowT">
                                    <p className="flex items-center">
                                        <DollarSign className="green" />
                                        {Number(fromDashboard.amount).toFixed(2)}
                                    </p>                                    <p>USD</p>
                                </div>

                            </div>
                        </div>
                        <p style={{
                            fontSize: '12px'
                        }} className="text-xm mt-2">Confirm that the payment is from Mohamed Ziyad Yousef  (Buyer's name)</p>


                        <div className="flex flex-col rounded-lg secondary border border-slate-700  p-2 w-full">
                            <div className="flex small wrap flex-col w-full p-1  gap-10 justify-between">
                                <div
                                    style={{ width: "30%" }}
                                    className="primary small rounded-lg w-full p-2  h-14"
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
                                    <div className="w-full flex items-center wrap flex-row ">
                                        <p className="g w-36">Account Name</p>
                                        <p className="border w-full flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                                            <Dot /> <p> {show?.account_name}</p>
                                        </p>

                                    </div>
                                    <div className="w-full flex items-center wrap flex-row ">
                                        <p className="g w-36">Account Number</p>
                                        <div className="flex flex-row gap-2 justify-between  w-full">
                                            <p className="border text-green-600 flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                                                <Dot color="green" />{" "}
                                                <p>{show?.account_number}</p>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div
                                style={{
                                    fontSize: "14px",
                                }}
                                className="flex rounded-lg mt-8 flex-row pl-6 p-3 pr-6 justify-between items-center wrap small gap-2 border border-yellow-600"
                            ><p className="yellowT">
                                    Advertisers's Name
                                </p>
                                <p className="white flex flex-row items-center">
                                    <Dot size={30} />
                                    <p className="flex items-center">
                                        {fromDashboard.buyer.split('@')[0]}
                                    </p>

                                </p>
                            </div>



                        </div>

                        <p>Confirm payment is received.</p>

                    </div>
                </div>
                <p className="g" style={{ fontSize: '11px' }}>After confirming the payment, be sure  to click Payment Received button below</p>

                <div className="flex flex-row small wrap gap-10 justify-between">
                    <button
                        className="border w-full border-slate-700 rounded-lg p-2"
                        disabled={isDisabled}
                    >
                        {isDisabled ? 'Cant Appeal' : `Appeal in ${seconds} seconds`}
                    </button>
                    <button

                        onClick={handleSubmit}
                        className={`w-full rounded-lg p-2 ${match.status === 'half-matched' ? 'gback cursor-not-allowed' : 'yellowfaded'}`}
                        disabled={match.status === 'half-matched'}

                    >
                        {loading1 ? <CircularProgress /> : "Money sent notify the buyer"}
                    </button>
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
