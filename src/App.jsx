

/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DoughnutChart from "./components/Pichart";
import Blog from "./pages/blog/Blogs";
import KYC from "./pages/Dashboard/DashboardTabs/KYC";
import Wallet from "./pages/Dashboard/DashboardTabs/Wallet";
import MainDash from "./pages/Dashboard/MainDashbord/MainDash";
import Notifications from "./pages/Dashboard/notifications/Notifications";
import BuyPage from "./pages/Dashboard/Trade/BuyPage";
import Adds from "./pages/Dashboard/Trade/p2pCenter/adds";
import Adds1 from "./pages/Dashboard/Trade/p2pCenter/Adds/BuyAd";
import BuySell from "./pages/Dashboard/Trade/seller/BuySell";
import Seller from "./pages/Dashboard/Trade/seller/Seller";
import SellPage from "./pages/Dashboard/Trade/SellPage";
import Forgot from "./pages/Forgot";
import HomePage from "./pages/landing-page/Home";
import Login from "./pages/Login";
import MainMarket from "./pages/MainMaket";
import Orders from "./pages/p2p/Orders";
import Register from "./pages/Register";
import ForgotPasswordButton from "./pages/ResetPassword";
import { setUser } from "./redux/features/authSlice";
import Swap from './pages/Invisibles/Swap/Swap';
import BuyCrypto from './pages/Invisibles/buyCrypto/BuyCrypto';
import Settings from './pages/Invisibles/Settings/Settings';
import MainProfilePage from './pages/Invisibles/Auth/MainProfilePage';
import MainExchange from './pages/Invisibles/exchange/MainExchange';
//Admin
import Admin from "./admindashboard/Admin"
import Kyc from "./admindashboard/Kyc";
import P2pDeposit from "./admindashboard/P2pDeposit";
import P2pWithdrawal from "./admindashboard/P2pWithdrawal";
import Appeal from "./admindashboard/Appeal";
import ExchangeDeposit from "./admindashboard/ExchangeDeposit";
import ExchangeWithdrawal from "./admindashboard/ExchangeWithdrawal";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(users));
  }, []);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [loading1, setLoading1] = useState(false);
  const [status, setStatus] = useState([])



useEffect(()=>{
if (!user) {
  navigate('login')
}else{
  navigate('dashboard')
}
},[])

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
      `https://omayaexchangebackend.onrender.com/trading_engine/trades/matched/`,
      { headers }
    );
    setStatus(res.data);
    setLoading1(false);
    console.log('paymentssss', res.data);
    if (res.data.length===0) {
      setOpen(false)
     }else{
      setOpen(true)
     }
  } catch (error) {
    console.log(error);
    setLoading1(false);
  }
}




  return (
    <div className="App">
      <Modal
              className="no-border"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
             <Box className="primary border no-border mr-20 flex flex-col items-center justify-center g 0" sx={style}>
                <Typography className="text-red-700" id="modal-modal-title" variant="h6" component="h2">
                  Notification Alert!!
                </Typography>
                <p className="g">You have a new Order</p>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                 <Link to='/notifications' state={status}>
                 <button  className="p-2 greenbg rounded-lg w-full white mt-3">
                    Check out the order
                  </button>
                 </Link>
                </Typography>
              </Box> 
           </Modal> 
      <Navbar />
      <ToastContainer /> 
      <Routes>
     
  //admin
      <Route  path="/admin" element={<Admin />} />
      <Route  path="/kyc" element={<Kyc />} />
      <Route  path="/p2pdeposit" element={<P2pDeposit/>} />
      <Route  path="/p2pwithdraw" element={<P2pWithdrawal/>} />
      <Route  path="/exchangewithdraw" element={<ExchangeWithdrawal/>} />
      <Route  path="/exchangedeposit" element={<ExchangeDeposit/>} />
      <Route  path="/appeal" element={<Appeal/>} />


       <Route path="/login" element={<Login />} />
        <Route index path="/" element={<HomePage />} />

        <Route path="/exchange" element={<MainExchange />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/buy" element={<BuyCrypto />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/market" element={<MainMarket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dashboard" element={<MainDash />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reset-password" element={<ForgotPasswordButton />} />
        <Route path="/buy/:id" element={<BuyPage />} />
        <Route path="/rates/:id" element={<Seller />} />
        <Route path="/sell/:id" element={<SellPage />} />
        <Route path="/adds" element={<Adds />} />
        <Route path="/account" element={<MainProfilePage />} />
        <Route path="/chats" element={<DoughnutChart />} />
        <Route path="/buy-adds" element={<Adds1 />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/buysell/:id" element={<BuySell />} /> 
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
