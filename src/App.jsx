/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/landing-page/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "./redux/features/authSlice";
import ForgotPasswordButton from "./pages/ResetPassword";
import Profile from "./components/Profile";
import MainProfile from "./pages/Auth/MainProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import KYC from "./pages/Dashboard/DashboardTabs/KYC";
import Wallet from "./pages/Dashboard/DashboardTabs/Wallet";
import MainExchange from "./pages/exchange/MainExchange";
import Market from "./pages/p2p/Market";
import Blog from "./pages/blog/Blogs";
import Orders from "./pages/p2p/Orders";
import MainDash from "./pages/Dashboard/MainDashbord/MainDash";
import BuyPage from "./pages/Dashboard/Trade/BuyPage";
import SellPage from "./pages/Dashboard/Trade/SellPage";
import VerifyPayment from "./pages/Dashboard/Trade/tables/VerifyPayment";
import Adds from "./pages/Dashboard/Trade/p2pCenter/adds";
import HomePage from "./pages/landing-page/Home";
import Test from "./pages/Auth/Test";
import DoughnutChart from "./components/Pichart";
import BuyAdds from "./pages/Dashboard/Trade/p2pCenter/BuyAdds";
import BuyASdss from "./pages/Dashboard/Trade/p2pCenter/Adds/BuyAd";
import Adds1 from "./pages/Dashboard/Trade/p2pCenter/Adds/BuyAd";
import MainProfilePage from "./pages/Auth/MainProfilePage";
import MainMarket from "./pages/MainMaket";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Seller from "./pages/Dashboard/Trade/seller/Seller";
import Notifications from "./pages/Dashboard/notifications/Notifications";
import BuySell from "./pages/Dashboard/Trade/seller/BuySell";

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



console.log('main',status);


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
                  <button  className="p-2 greenbg rounded-lg w-full white mt-3">
                    Check out the order
                  </button>
                </Typography>
              </Box>
            </Modal>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index path="/" element={<HomePage />} />
        <Route path="/exchange" element={<MainExchange />} />
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
