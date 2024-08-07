/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/landing-page/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
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
import Adds from "./pages/Dashboard/Trade/p2pCenter/adds";
import HomePage from "./pages/landing-page/Home";
import Test from "./pages/Auth/Test";
import DoughnutChart from "./components/Pichart";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(users));
  }, []);
  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log('====================================');
  console.log('logged in uss',user);
  console.log('====================================');

  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index path="/" element={<HomePage/>}/>
        <Route path="/exchange" element={<MainExchange/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/profile" element={<MainProfile />} />
        <Route path="/dashboard" element={<MainDash/>}/> 
        <Route path="/kyc" element={<KYC/>}/> 
        <Route path="/wallet" element={<Wallet/>}/> 
        <Route path="/blog" element={<Blog/>}/> 
        <Route path="/orders" element={<Orders/>}/> 
        <Route path="/reset-password" element={<ForgotPasswordButton />} />
        <Route path="/buy/:id" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/adds" element={<Adds />} />
        <Route  path="/account" element={<Test />} />
        <Route  path="/chats" element={<DoughnutChart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
