import React, { useState, useEffect } from 'react';
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Copy } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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



const UserDashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [kyc, setKyc] = useState([]);
  const [match, setMatch] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 



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

  console.log('kyc', kyc);


  const iconsStyles = {
    color: "white",
  }
  return (
    <div style={{
      width: '83%'
    }} className='primary w-full mt-12 ml-20 mr-32'>
      <div className="secondary border rounded-2xl border-gray-700 w-full p-2 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* User Information Section */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex flex-row items-center gap-2">
            <RxAvatar className="text-slate-500" size={40} />
            <div>
              <p className="text-white capitalize text-lg">Hello, {user?.user?.first_name}!</p>
              <p className="text-sm flex flex-row items-center gap-1">
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
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-sm text-gray-400">User ID</p>
            <p className="text-white cursor-pointer flex flex-row items-center gap-1">
              {user?.user?.id} <Copy size={16} style={{ color: "#F79330" }} />
            </p>
          </div>
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-sm text-gray-400">User Type</p>
            <p className="text-white">{user?.user?.user_type}</p>
          </div>
        </div>

        {/* Notification Icon Section */}
        <div className="flex flex-row items-center gap-5">
          <div className="relative inline-block">
            <Link to="/notifications" state={match}>
              <img
                className="h-10"
                src="https://res.cloudinary.com/pitz/image/upload/v1721371733/Frame_34833_xr45hu.png"
                alt="Notifications Icon"
              />
            </Link>
          </div>
        </div>
      </div>

      <TopCards />
      <Stats />


      <div className="flex flex-col lg:flex-row gap-4 justify-between">
       <ExchangeOverView/>
       <P2PoOverview/>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mt-8">
        <OverView />
        <Referral />
      </div>


      <TransactionCard />
    </div>

  );
};


export default UserDashboard;


