import React, { useState, useEffect } from 'react';
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Copy } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import TransactionCard from '../../../components/Transactions/TransactionCard';
import axios from 'axios';
import TopCards from '../../../components/UserDashboard/TopCards';
import Stats from '../../../components/UserDashboard/stats';
import OverView from '../../../components/UserDashboard/OverView';
import Referral from '../../../components/UserDashboard/Referral';
import ExchangeOverView from '../../../components/UserDashboard/ExchangeOverView';
import P2PoOverview from '../../../components/UserDashboard/P2POverview';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button, CircularProgress } from "@mui/material";

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
const UserDashboard = () => {
  const [match, setMatch] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState([]);
  const dispatch = useDispatch();
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false); // Hide the calendar after selecting a date
  };
  const navigate = useNavigate();
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

  const [activeTab, setActiveTab] = useState("Dashboard");
  const [Verified, setVerified] = useState(false);
  const [activeTab1, setActiveTab1] = useState("Market");

  const [graph, setGraph] = useState('sells')

  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [payments, setPayments] = useState([]);
  const [loadingKy, setLoadingKyc] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [kyc1, setKyc1] = useState([])
  const [kyc, setKyc] = useState([])

  console.log('kyc', kyc1);


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
        setKyc1(res.data);
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
        if (res.data.is_verified) {
          setOpen(false)
        } else {
          setOpen(true)

        }
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
        setShow(res.data);
        setLoading1(false);
        console.log('payments', res.data);
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData1();

    const interval = setInterval(fetchData1, 5000);

    return () => clearInterval(interval);
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

  const [deposit, setDeposit] = useState([]);
  const [bal, setBal] = useState([]);
  const [width, setWidth] = useState([]);
  const [amount, setTotalAmount] = useState('')
  const [widthamount, setWidthTotalAmount] = useState('')
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
        setBal(res.data);
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
        const res = await axios.get(`${endpoint}/trading_engine/p2p/deposit/`, { headers });

        const depositData = res.data;
        setDeposit(depositData);


        const totalAmount = depositData.reduce((acc, item) => acc + item.amount, 0);
        setTotalAmount(totalAmount);

        setLoading1(false);
        console.log('payments', depositData);
        console.log('Total Amount:', totalAmount);
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
        const res = await axios.get(`${endpoint}/trading_engine/p2p-withdraw/`, { headers });

        const depositData = res.data;
        setDeposit(depositData);


        const totalAmount = depositData.reduce((acc, item) => acc + item.amount, 0);
        setWidthTotalAmount(totalAmount);

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
 const [tota1,setCont]=useState([])
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState(0);
  const [totalAmount, setTotalAmount1] = useState(0);

  



  useEffect(() => {
      const fetchTransactions = async () => {
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
                  `${endpoint}/trading_engine/all-transactions/`,
                  { headers }
              );

              const filteredData = res.data.transactions.filter(
                  (transaction) => transaction.user_email === user.user.email
              );

              let deposits = 0;
              let withdrawals = 0;

              filteredData.forEach((transaction) => {
                  if (transaction.transaction_type === "deposit") {
                      deposits += parseFloat(transaction.amount);
                  } else if (transaction.transaction_type === "withdrawal") {
                      withdrawals += parseFloat(transaction.amount);
                  }
              });

              setTotalDeposits(deposits);
              setTotalWithdrawals(withdrawals);
              setTotalAmount1(deposits - withdrawals);
          } catch (error) {
              console.log(error);
              setLoading1(false);
          }
      };

      fetchTransactions();
      const interval = setInterval(fetchTransactions, 5000);
      return () => clearInterval(interval);
  }, [user?.access, navigate]);


  return (
    <div style={{
      width: '83%'
    }} className='primary small wrap margin w-full mt-12 ml-20 mr-32'>

      <div>
        <Modal
          className="rounded-lg border-slate-700"
          open={open1}
          onClose={handleClose1}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
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
      <div className="">
        <Modal
          className="no-border"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="primary border no-border mr-20 flex flex-col items-center justify-center g 0" sx={style}>
            <Typography className='flex flex-row items-center gap-1' id="modal-modal-title" variant="h6" component="h2">
              <img src="https://res.cloudinary.com/pitz/image/upload/v1725821568/alert-circle_dzpzh8.png" alt="" /> Verify Account
            </Typography>
            <p className="text-xs g">
              You need to submit your identity documents in order to perform transaction. KYC is available in the settings section
            </p>
            <div className='flex flex-row items-center justify-between  ml-4 mr-4'>
              <div style={{
                // width:'16rem'
              }} className="w-full ">
                {loadingKy ? 'Account will be verified soon!, It may take upto 24 hrs' : (
                  <button onClick={handleOpen1} className="flex p-1 text-white items-center justify-center mt-3 w-32 greenbg rounded-lg">
                    Verify Now
                  </button>
                )}
              </div>
              <button onClick={() => setOpen(false)} className="flex p-1 w-36 items-center justify-center mt-3  border border-slate-700 rounded-lg">Cancel</button>
            </div>
          </Box>
        </Modal>
      </div>


      <div style={{
        width:'100%'
      }} className="secondary border  small rounded-2xl border-gray-700 w-full p-2 flex flex-col sm:flex-row justify-between  gap-4">
        {/* User Information Section */}
        <div className="flex flex-col small sm:flex-row gap-6 ">
          <div className="flex flex-row  gap-2">
            <RxAvatar className="text-slate-500" size={40} />
            <div className='small'>
              <p className="text-white capitalize text-lg">Hello, {user?.user?.first_name}!</p>
              <p className="text-sm flex flex-row  gap-1">
                {kyc.is_verified ? (
                  <span className="text-green-500">Verified</span>
                ) : (
                  <span className="text-red-500">Unverified account</span>
                )}
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                  alt="Verification Icon"
                />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1  sm:text-left">
            <p className="text-sm text-gray-400">User ID</p>
            <p className="text-white cursor-pointer flex flex-row items-center gap-1">
              {user?.user?.id} <Copy size={16} style={{ color: "#F79330" }} />
            </p>
          </div>
          <div className="flex flex-col gap-1  sm:text-left">
            <p className="text-sm text-gray-400">User Type</p>
            <p className="text-white">{user?.user?.user_type}</p>
          </div>
        </div>

        <div className="relative inline-block">
          <Link to='/notifications'
            state={show}
          >
            <p
              className="absolute bottom-7 left-6 bg-red-700 h-6 w-6 flex text-white p-2 items-center justify-center rounded-full text-xs cursor-pointer">
              {show.length}
            </p>
            <img
              className="h-10"
              src="https://res.cloudinary.com/pitz/image/upload/v1721371733/Frame_34833_xr45hu.png"
              alt=""
            />
          </Link>
        </div>
      </div>

      <TopCards />
      {
        bal.map((i) => {
          return (
            <Stats bal={i.balance} amount={amount} widthamount={widthamount} totalDeposits={totalDeposits} totalWithdrawals={totalWithdrawals} />
          )
        })
      }



      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <ExchangeOverView   totalDeposits={totalDeposits} totalWithdrawals={totalWithdrawals}  />
        <P2PoOverview   totalDeposits={totalDeposits} totalWithdrawals={totalWithdrawals}/>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mt-8">
        <OverView  totalDeposits={totalDeposits} totalWithdrawals={totalWithdrawals} />
        <Referral  totalDeposits={totalDeposits} totalWithdrawals={totalWithdrawals} />
      </div>


      <TransactionCard />
    </div>

  );
};


export default UserDashboard;


