import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoMdPeople } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  AccountCircle,
  Cancel,
  Logout,
  PrivacyTip,
  RefreshRounded,
  Verified,
} from "@mui/icons-material";
import { Wallet } from "lucide-react";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setLogout } from "../redux/features/authSlice";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showSideDash, setShowSideDash] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const langRef = useRef(null);

  const toggleDropdown = (dropdownType) => {
    if (dropdownType === "profile") {
      setShowProfileOptions(!showProfileOptions);
      setShowDropdown(false);
      setShowLangDropdown(false);
    } else if (dropdownType === "lang") {
      setShowLangDropdown(!showLangDropdown);
      setShowProfileOptions(false);
      setShowDropdown(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      (dropdownRef.current && !dropdownRef.current.contains(event.target)) ||
      (profileRef.current && !profileRef.current.contains(event.target)) ||
      (langRef.current && !langRef.current.contains(event.target))
    ) {
      setShowDropdown(false);
      setShowProfileOptions(false);
      setShowLangDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(setLogout(null));
    toast.warning("Logged out!", { position: "top-right" });
    navigate("/");
  };

  const checkUser = (path) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="navbar flex flex-row justify-between pl-24 pr-16">
      <div className="lo">
        <Link to="/">
          <img
            className="mt-2 mr-28"
            style={{ height: "2.6rem", width: "9rem" }}
            src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="side p-4">
        <div className="links">
          <Link
            onClick={() => setShowDropdown(false)}
            className="flex items-center cursor-pointer"
            to="/dashboard"
          >
            <p className="cursor-pointer">Dashboard</p>
          </Link>
          <p
            className="cursor-pointer"
            onClick={() => {
              setShowDropdown(false);
              checkUser("/market");
            }}
          >
            Market
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setShowDropdown(false);
              checkUser("/rates");
            }}
          >
            Rates
          </p>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </div>
      </div>

      <div className="nav-btns nav-text p-6">
        {user ? (
          <>
            <button
              style={{ background: "#1D8751", fontSize: "12px" }}
              onClick={() => {
                setShowDropdown(false);
                setShowSideDash(!showSideDash);
              }}
              className="rounded-lg p-1 w-24 h-8 flex flex-row items-center gap-1"
            >
              <img
                className="o object-contain"
                src="https://res.cloudinary.com/pitz/image/upload/v1721377298/deposit-new-f_qjiizt.png"
                alt=""
              />
              Deposit
            </button>
            <div
              onClick={() => toggleDropdown("profile")}
              className="relative flex flex-row items-center"
              ref={profileRef}
            >
              <RxAvatar className="g" size={40} />
              <img
                className="h-3 absolute top-0 left-6"
                src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                alt=""
              />
            </div>
            {showProfileOptions && (
              <div className="lang mt-3 p-2 w-64 border-slate-700 primary border rounded-lg absolute top-12">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div onClick={() => setShowProfileOptions(false)}>
                    <Cancel className="items-left float-left ml-44" />
                  </div>
                  <Link
                    onClick={() => setShowProfileOptions(false)}
                    className="w-full"
                    to="/account"
                  >
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700 border rounded-lg">
                      <AccountCircle />
                      <button>Profile</button>
                    </div>
                  </Link>
                  <Link
                    onClick={() => setShowProfileOptions(false)}
                    className="w-full"
                    to="/wallet"
                  >
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700 border rounded-lg">
                      <Wallet />
                      <button>Wallet</button>
                    </div>
                  </Link>
                  <Link
                    onClick={() => setShowProfileOptions(false)}
                    className="w-full"
                    to="/kyc"
                  >
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700 border rounded-lg">
                      <Verified />
                      <button>KYC</button>
                    </div>
                  </Link>
                  <Link
                    onClick={() => setShowProfileOptions(false)}
                    className="w-full"
                    to="/privacy"
                  >
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700 border rounded-lg">
                      <PrivacyTip />
                      <button>Privacy and Security</button>
                    </div>
                  </Link>
                  <Link
                    onClick={() => setShowProfileOptions(false)}
                    className="w-full"
                    to="/referral"
                  >
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700 border rounded-lg">
                      <RefreshRounded />
                      <button>Referral</button>
                    </div>
                  </Link>
                  <div
                    onClick={handleLogout}
                    className="flex justify-between w-full p-1 cursor-pointer gap-3 border-slate-700 border rounded-lg"
                  >
                    <Logout />
                    <button>Logout</button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="greenbg p-1 rounded-lg flex items-center justify-center w-24 h-9">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="primary p-1 rounded-lg flex items-center justify-center w-24 h-9">
                Login
              </button>
            </Link>
          </>
        )}

        <div className="image-nav relative" onClick={() => toggleDropdown("lang")} ref={langRef}>
          <img
            style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
            src="https://media.istockphoto.com/id/1217765834/photo/flag-of-united-kingdom-blowing-in-the-wind.jpg?s=2048x2048&w=is&k=20&c=W2rAsO5-YNL2o-9i8aqKr6QW3Mqi_lnxmSNPSJxVPaw="
            alt="UK Flag"
          />
          <TiArrowSortedDown color="green" />

          {showLangDropdown && (
            <div className="lang mt-3 p-2 w-48 right-0 absolute border border-slate-700 rounded-lg top-8 secondary">
              <p className="flex items-center justify-start gap-2 p-2">
                <img
                  className="flex h-5"
                  src="path_to_english_flag"
                  alt="English"
                />
                <span>English</span>
              </p>
              <p className="flex items-center justify-start gap-2 p-2">
                <img
                  className="flex h-5"
                  src="path_to_french_flag"
                  alt="French"
                />
                <span>Français</span>
              </p>
              <p className="flex items-center justify-start gap-2 p-2">
                <img
                  className="flex h-5"
                  src="path_to_spanish_flag"
                  alt="Spanish"
                />
                <span>Español</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
