import React, { useState, useEffect } from "react";
import { Copy } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxAvatar } from "rx-avatar";
import { toast } from "react-toastify";
import axios from "axios";

const ProfileSection = () => {  
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
    );
}
export default ProfileSection;