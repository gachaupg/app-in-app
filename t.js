/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoMdPeople } from "react-icons/io";
import { WiMoonWaningCrescent4 } from "react-icons/wi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {
  AccountCircle,
  ArrowBack,
  Cancel,
  Logout,
  People,
  PrivacyTip,
  RefreshRounded,
  Verified,
} from "@mui/icons-material";
import { FaExchangeAlt } from "react-icons/fa";
import { PiSwap } from "react-icons/pi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RiDashboardLine } from "react-icons/ri";
import { setLogout } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { Wallet } from "lucide-react";

const drawerWidth = 240;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [ProPro, setProPro] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [showLog, setShowLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProPro(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShow1(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShow = () => {
    setShow(!show);
    setShow1(false);
    setProPro(false);
  };

  const handleShow1 = () => {
    setProPro(!ProPro);
    setShow(false);
    setShow1(false);
  };

  const showLang = () => {
    setShow1(!show1);
    setShow(false);
    setProPro(false);
  };

  const noUser = (route) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(route);
    }
  };

  return (
    <div className="navbar flex justify-around items-center sm:p-1 pl-4">
      <div className="lo">
        <Link to="/">
          <img
            style={{
              height: "3.1rem",
              width: "5rem",
              marginLeft: "2rem",
            }}
            src="https://res.cloudinary.com/pitz/image/upload/v1707497590/logo-hiXpVEuB-removebg-preview_jnnrfa.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="side">
        <div className="links">
          <NavLink
            exact
            to="/"
            onClick={() => {
              setShow(false);
              setShow1(false);
              setProPro(false);
            }}
            activeClassName="active"
          >
            Home
          </NavLink>

          <p
            className="cursor-pointer"
            onClick={() => noUser("/trade")}
          >
            Trade
          </p>
          <p
            className="cursor-pointer"
            onClick={() => noUser("/market")}
          >
            Market
          </p>
          <p
            className="cursor-pointer"
            onClick={() => noUser("/rates")}
          >
            Rates
          </p>
          <NavLink onClick={() => setShow(false)} to="/contact">
            Contact us
          </NavLink>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
          {user && (
            <NavLink
              onClick={() => setShow(false)}
              className="flex items-center"
              to="/dashboard"
              activeClassName="active"
            >
              <p>Dashboard</p> <IoIosArrowDropdownCircle />
            </NavLink>
          )}
        </div>
        {show && (
          <div ref={dropdownRef} className="dashboard-links">
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2"
                to="/"
              >
                <FaExchangeAlt color="green" />
                <a
                  href="http://https://changenow.io/currencies/bitcoin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-white">Exchange</p>
                </a>
              </NavLink>
            </p>
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2 pt-3"
                to="/"
              >
                <IoMdPeople color="green" />
                <Link to="/deposit">
                  <p className="text-white">P2P</p>
                </Link>
              </NavLink>
            </p>
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2 pt-3"
                to="/"
              >
                <PiSwap color="green" />
                <a
                  href="http://https://changenow.io/exchange?from=usd&to=btc&fiatMode=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-white">Swap</p>
                </a>
              </NavLink>
            </p>
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2 pt-3"
                to="/"
              >
                <CiMoneyCheck1 color="green" />
                <a
                  href="http://https://changenow.io/exchange?from=usd&to=btc&fiatMode=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-white">Buy</p>
                </a>
              </NavLink>
            </p>
          </div>
        )}
      </div>

      <div className="nav-btns nav-text ml-8">
        {user ? (
          <>
            <button
              onClick={() => setShow(false)}
              className="bg-green-700 rounded-2xl p-1 w-24"
            >
              Deposit
            </button>
            <div onClick={handleShow1} className="relative" ref={profileRef}>
              <img
                width={30}
                height={30}
                className="cover relative rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
                alt=""
              />
            </div>
            {ProPro && (
              <div className="lang mt-3 p-2 w-64 border-slate-700 bg-gray-950 border rounded-lg absolute top-12 right-24">
                <p
                  onClick={() => setShow(false)}
                  className="cursor-pointer pt-3 flex items-center gap-2 text-white"
                >
                  <AccountCircle />
                  <NavLink to="/profile" className="text-white">
                    Profile
                  </NavLink>
                </p>
                <p
                  onClick={() => setShow(false)}
                  className="cursor-pointer pt-3 flex items-center gap-2 text-white"
                >
                  <Verified />
                  <NavLink to="/verify" className="text-white">
                    Verification
                  </NavLink>
                </p>
                <p
                  onClick={() => setShow(false)}
                  className="cursor-pointer pt-3 flex items-center gap-2 text-white"
                >
                  <PrivacyTip />
                  <NavLink to="/security" className="text-white">
                    Security
                  </NavLink>
                </p>
                <p
                  onClick={() => {
                    dispatch(setLogout());
                    navigate("/");
                    setShow(false);
                    toast.success("Logged out successfully");
                  }}
                  className="cursor-pointer pt-3 flex items-center gap-2 text-white"
                >
                  <Logout />
                  Logout
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="bg-green-700 rounded-2xl p-1 w-24">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="bg-green-700 rounded-2xl p-1 w-24">
                Register
              </button>
            </NavLink>
          </>
        )}
        <div onClick={showLang} ref={langRef} className="relative cursor-pointer">
          <WiMoonWaningCrescent4 />
        </div>
        {show1 && (
          <div className="lang">
            <p onClick={showLang}>Language 1</p>
            <p onClick={showLang}>Language 2</p>
            <p onClick={showLang}>Language 3</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
