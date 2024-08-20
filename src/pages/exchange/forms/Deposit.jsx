/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import Checkbox from '@mui/material/Checkbox';
import { Copy, DollarSign, Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";

import { CheckBox } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { BiPaste } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import { SlQuestion } from "react-icons/sl";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.black",
    border: "none",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
};

const initialState = {

    amount: "",
    currency: "USD",
    screenshot: null,
    deposit_address: "",
    payment_method: "Bank",
    payment_provider: "",
    additional_info: ""
};

const DepositForm = () => {


    const [files, setFile] = useState('');
    const [widthdrwal, setWidthdrwal] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => ({ ...state.auth }));
    console.log(widthdrwal);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [widthTap, setWidthTab] = useState("USDT");

    const [codes, setCodes] = useState(Array(6).fill(""));
    const [timeLeft, setTimeLeft] = useState(60);
    const [verify, setVerify] = useState(true);
    const [payments, setPayments] = useState([]);
    const [details, setdetails] = useState([]);
    const [provider, setProvider] = useState([]);
    const [loading1, setLoading1] = useState(false);
    const [payments1, setPayments1] = useState([]);
    console.log('hello', payments);


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
            const res = await axios.get(`https://omayaexchangebackend.onrender.com/trading_engine/user-payment-details/`, {
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
            const res = await axios.get(`https://omayaexchangebackend.onrender.com/trading_engine/payment-methods/`, {
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
            const res = await axios.get(`https://omayaexchangebackend.onrender.com/trading_engine/payment-providers/Bank/`, {
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

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
            formData.append('amount', widthdrwal.amount);
            formData.append('deposit_address', widthdrwal.deposit_address);
            formData.append('payment_provider', widthdrwal.payment_provider);
            formData.append('payment_method', widthdrwal.payment_method);
            formData.append('additional_info', widthdrwal.additional_info);
            formData.append('currency', widthdrwal.currency);
            if (widthdrwal.screenshot) {
                formData.append('screenshot', widthdrwal.screenshot);
            }
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            try {
                const response = await fetch(
                    `${endpoint}/trading_engine/deposit/`,
                    {
                        method: "POST",
                        headers: headers,
                        body: formData,
                    }
                );

                const data = await response.json();
                if (response.ok) {
                    toast.success("Deposited successfully!");
                } else if (data.code === "token_not_valid") {
                    toast.error("Your session has expired. Please log in again.");
                    navigate("/login");
                } else {
                    toast.error(`Deposit failed. Please try again: ${data.detail || data.message || data}`);
                }
            } catch (error) {
                toast.error(`Error: ${error.message}`);
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        } else {
            toast.error("Invalid code");
            setLoading(false);
        }
    };


    return (
        <div className="text-white mt-2">
            <p className="g">Transaction Info</p>
            <div
                style={{ width: "100%" }}
                className="border small size border-gray-700 wrap secondary w-full rounded-2xl p-3    flex flex-col justify-between"
            >
                <div className="flex w-full flex-row gap-10 wrap items-center ">
                    <div
                        style={{ width: "50%" }}
                        className="flex small flex-col p-1 it gap-2 "
                    >
                        <p className="grey"> Asset</p>
                        <div className="primary p-1 small pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <div className="primary  flex flex-row items-center gap-1 w-full">
                                <img
                                    src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                                    alt=""
                                />

                                <p>
                                    USDT <span className="grey">TRC20 </span>
                                </p>
                            </div>
                            <IoMdArrowDropdown color="white" />
                        </div>
                    </div>
                    <div
                        style={{ width: "50%" }}
                        className="flex small flex-col p-1 it gap-2 "
                    >
                        <p className="grey"> i want to recieve</p>
                        <div className="primary p-1 small pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <div className="  flex flex-row items-center gap-1 w-full">
                                <DollarSign color="green" />
                                <input type="number" onChange={(e) => setWidthdrwal({ ...widthdrwal, amount: e.target.value })} placeholder="100" className="p-1 primary no-border w-full" />
                            </div>
                            <IoMdArrowDropdown color="white" />
                        </div>
                    </div>
                    <div className="small" style={{ width: "50%" }}>
                        <p className="grey"> Asset Amount</p>
                        <div className="mainGrey p-1 pr-2 mt-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <div className="mainGrey items-center flex flex-row gap-1 w-full">
                                <img
                                    src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                                    alt=""
                                />
                                <p>
                                    {widthdrwal.amount != "" ? widthdrwal.amount : '00'} USDT
                                    <span
                                        style={{
                                            fontSize: "12px",
                                        }}
                                        className="grey"
                                    >

                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="w-full flex flex-row items-center gap-1"><LiaExclamationCircleSolid size={30} className="text-red-700" />
                    This is only estimated price and its based on current Market Price.  We will fix the price when we receive the funds .</p>
                <p className="white">Net Amount to Transfer</p>

                <button className="p-1 rounded-2xl gap-2 w--full mt-3 mb-3 greenbg flex flex-row items-center justify-center">
                    Amount including Total fees
                    <span style={{
                        background: '#0E713E'
                    }} className="p-1 rounded-2xl w-20 flex flex-row gap-2 text-white bg-green-300">
                        <DollarSign /> {widthdrwal.amount != null ? `${Number(widthdrwal.amount) + 3}` : 0.0}
                    </span>
                </button>
                <button className="p-1 rounded-2xl gap-2 w--full mt-3 border border-slate-700 mt-2 flex flex-row items-center justify-center">

                    <p className="flex flex-row items-center gap-2"><span style={{
                        background: '#35353E'
                    }} className="p-1 rounded-2xl  flex flex-row gap-2 text-white bg-green-300">
                        <Dot />    Commision 1%
                    </span> <span className="green">$ 1</span></p>
                    <p className="flex flex-row items-center gap-2"><span style={{
                        background: '#35353E'
                    }} className="p-1 rounded-2xl  flex flex-row gap-2 text-white bg-green-300">
                        <Dot />  Network fee :
                    </span> <span className="green">$ 1</span></p>
                    <p className="flex flex-row items-center gap-2"><span style={{
                        background: '#35353E',
                        color: '#F79330'
                    }} className="p-1 rounded-2xl  flex flex-row gap-2 text-white bg-green-300">
                        <Dot />  Total fees
                    </span> <span className="yellowT">$ {widthdrwal.amount != null ? `${Number(widthdrwal.amount) + 3}` : 0.00}</span></p>
                </button>
                {/* <div className="flex w-full flex-row gap-10 wrap items-center ">
                    <div
                        style={{ width: "100%" }}
                        className="flex small flex-col p-1 it gap-2 "
                    >
                        <div className="mainGrey p-1 pr-2 mt-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <input onChange={(e) => setWidthdrwal({ ...widthdrwal, amount: e.target.value })} placeholder="Amount to deposit" className="p-1 mainGrey w-full no-border" type="number" />
                        </div>
                    </div>

                </div> */}
                <p className="w-full flex flex-row items-center mt-3 gap-1"> <LiaExclamationCircleSolid className="yellowT" />
                    Transactions are subject to commission, above is the information on the commission rates</p>
                {/* <div className="flex flex-row items-center gap-2">
                    <input
                        type="checkbox"
                        className="w-5 h-5 appearance-none rounded-md border-2 border-green-600 bg-white checked:bg-green-600 checked:border-green-600 cursor-pointer relative"
                        style={{
                            WebkitAppearance: "none", // Ensures that the custom styles are applied across browsers
                        }}
                    />
                    <label className="text-white">
                        I confirm that I sent the payment
                    </label>
                </div> */}


            </div>
            <p className="g">Your Wallet Address</p>
            <div className="flex flex-col items-start border secondary  border-slate-700 rounded-2xl p-2">
                <p className="g">Wallet/ Account Address</p>
                <div className="flex w-full flex-row items gap-5">

                    <div style={{
                        width: '100%'
                    }} className="w-full flex flex-row p-1 rounded-2xl items-center primary">
                        <p className="flex items-center green"> <BiPaste /></p>
                        <input type="text" onChange={(e) => setWidthdrwal({ ...widthdrwal, deposit_address: e.target.value })} placeholder="input your wallet adress" className="p-1  rounded-2xl w-full no-border primary" />
                    </div>
                    <div className="greybg rounded-2xl green w-20 items-center justify-center flex flex-row ">
                        <p className="flex items-center">Paste <BiPaste /></p>
                    </div>
                </div>
                <p> <Checkbox
                         className="border border-green-700 green checkbox"
                         {...label} /> I Confirm that the above submitted address is correct Address for the Cryptocurrency i chose, and not other Crypto *</p>
            </div>

            <p className="grey flex m-1 mt-2 flex-row items-center gap-1">
                Transfer Details <SlQuestion color="green" />
            </p>
            <div
                style={{

                    fontSize: "14px",
                }}
                className=" border secondary border-slate-700 p-2 rounded-2xl"
            >
                <div>
                    <p className="flex flex-row gao-2 items-center">
                        <Checkbox
                         className="border border-green-700 green checkbox"
                         {...label} />
                        
                        Please SEND the Funds to the preferred Payment Method below </p>
                </div>
                <div className="flex secondary  flex-row justify-between gap-6 w-full items-center">
                    <div className=" flex flex-col mb-3 w-full">
                        <p className="grey mb-1"> Payment Method</p>
                        <div className="primary p-1 small pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <div className="  flex flex-row items-center gap-1 w-full">
                                <img className="h-6 rounded-full" src="https://res.cloudinary.com/pitz/image/upload/v1721025707/Icon_cr4c7m.png" alt="" />
                                {/* <select onChange={(e) => setWidthdrwal({ ...widthdrwal, payment_method: e.target.value })} className="p-2 primary no-border w-full" >
                                    <option value="">Payment method</option>
                                    {payments.map((i) => (
                                        <option key={i.provider_method} className="white" value={i.provider_method}>
                                            {i.provider_method}
                                        </option>
                                    ))}
                                </select> */}
                                <select onChange={(e)=>setWidthdrwal({...widthdrwal,payment_method:e.target.value})} className="p-2 primary no-border w-full" >
                                    <option value="">Payment provider</option>
                                    {payments.map((i) => {
                                        return (
                                            <>
                                                <option className='white' value={i.name}>{i.name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col mb-3 w-full">
                        <p className="grey mb-1"> Payment provider</p>
                        <div className="primary p-1 small pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <div className="  flex flex-row items-center gap-1 w-full">
                                <img className="h-6 rounded-full" src="https://res.cloudinary.com/pitz/image/upload/v1721979295/image_7_1_la1uwx.png" alt="" />
                                <select onChange={(e) => setWidthdrwal({ ...widthdrwal, payment_provider: e.target.value })} className="p-2 primary no-border w-full" >
                                    <option value="">Payment provider</option>
                                    {provider.map((i) => {
                                        return (
                                            <>
                                                <option value={i.provider_name}>{i.provider_name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex secondary  flex-row justify-between gap-6 w-full items-center">
                    <div className=" flex flex-col mb-3 w-full">
                        <p className="grey mb-1"> Account Name</p>
                        <div className=" p-1 small pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <div className=" border border-green-700 mr-3  p-1 rounded-2xl flex flex-row items-center gap-1 w-full">
                                <Dot color="green" />
                                <p className="green">Omaya Exchange</p>
                            </div>
                            <div className="greybg rounded-2xl green p-2 w-20 items-center justify-center flex flex-row ">
                                <p className="flex items-center gap-1">Copy <Copy size={16} /></p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col mb-3 w-full">
                        <p className="grey mb-1"> Account Number</p>
                        <div className=" p-1 small pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
                            <div className=" border border-green-700 mr-3  p-1 rounded-2xl flex flex-row items-center gap-1 w-full">
                                <Dot color="green" />
                                <p className="green">2427526242</p>
                            </div>
                            <div className="greybg rounded-2xl green p-2 w-20 items-center justify-center flex flex-row ">
                                <p className="flex items-center gap-1">Copy <Copy size={15} /></p>
                            </div>
                        </div>
                    </div>

                </div>
                <li className="flex items-center mt-3 gap-1">
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

            </div>
            <div className="flex flex-col mb-3 items-start border mt-3 secondary  border-slate-700 rounded-2xl p-2">
                <div className="p-2 pr-2 small rounded-2xl w-full flex mt-3 flex-col gap-3 ">
                    <div className="flex flex-row items-center gap-2">
                        <p style={{ fontSize: "14px" }}>Upload Screensots</p>
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <button
                                className="greenbg p-1 w-12 flex justify-center items-center text-center rounded-lg"
                                onClick={() => document.getElementById("file-upload").click()}
                            >
                                <FiUpload className="text-white" />
                            </button>
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"

                            onChange={(e) => setWidthdrwal({ ...widthdrwal, screenshot: e.target.files[0] })}
                        />
                    </div>
                    <p className="g ">
                        Please upload the screenshot of your payment here.
                    </p>
                    <p className="g ">
                        This is necessary for verification purposes.
                    </p>
                    <p className="white">Notes</p>
                    <input type="text"
                        onChange={(e) => setWidthdrwal({ ...widthdrwal, additional_info: e.target.value })}
                        placeholder="Please type here any extra information you want to share with us"
                        className="p-1 w-full primary  rounded-2xl p-2 no-border primary" />

                    <div className="flex flex-row items-center gap-2">
                    <Checkbox
                         className="border border-green-700 green checkbox"
                         {...label} />
                        <p>I confirm that I sent the payment</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                    <Checkbox
                         className="border border-green-700 green checkbox"
                         {...label} />
                        <p>I confirm that I sent the payment</p>
                    </div>

                    {loading ? <div className="flex items-center  justify-center">
                        <CircularProgress />
                    </div> :
                        <button onClick={handleSubmit} className="p-2 greenbg rounded-2xl white w-full">
                            Submit
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default DepositForm;
