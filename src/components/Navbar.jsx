/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoMdPeople } from "react-icons/io";
import { WiMoonWaningCrescent4 } from "react-icons/wi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

import {
  AccountCircle,
  ArrowBack,
  Cancel,
  Logout,
  LogoutOutlined,
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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [tabs, setTabs] = React.useState(false);
  const [ProPro, setProPro] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [showLog, setShowLog] = React.useState(false);

  const showTabs = () => {
    setTabs(!tabs);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowLog = () => {
    setShowLog(!showLog);
    setProPro(false);
    setShow1(false);
    setShow(false);
  };
  const handleShowLog1 = () => {
    setShowLog(false);
    setShowLog(false);
    setProPro(false);
    setShow1(false);
  };
  //const [showLog, setShowLog] = React.useState(false);
  //const dispatch = useDispatch();
  //const navigate = useNavigate();

  // const handleShowLog = () => {
  //   setShowLog(!showLog);
  // };

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

  const handleShow1 = () => {
    setProPro(!ProPro);
    setShowLog(false);
    setShow(false);
    setShow1(false);
  };
  const handleShow = () => {
    setShow(!show);
    setProPro(false);
    setShowLog(false);
    setShow1(false);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showLang = () => {
    setShow1(!show1);
    setShowLog(false);
    setProPro(false);
    setShow(false);
  };
  const showLang1 = () => {
    setShow1(false);
    setShowLog(false);
    setProPro(false);
    setShow(false);
  };
  const noUser = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/trade");
    }
  };

  const noUser1 = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/market");
    }
  };
  const noUser2 = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/rates");
    }
  };

  // setShow1(!show1);
  const [activeTab, setActiveTab] = useState("P2P Trading");
  const [activeTab1, setActiveTab1] = useState("Dashboard");
  const tab = [
    {
      name: "Dashboard",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721367990/svgexport-54_1_ww7fdx.png",
    },
    {
      name: "Exchange",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368341/uil_exchange_craxj9.png",
    },
    {
      name: "P2P Trading",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721678697/users-profiles-left_1_nypmot.png",
    },
    {
      name: "Swap Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368339/Group_164002_jqrdb5.png",
    },
    {
      name: "Buy Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368332/Group_164004_ddibmc.png",
    },
    {
      name: "Account",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368328/key-01_njdjyg.png",
    },
    {
      name: "Settings",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    },
  ];
  return (
    <div className="navbar w-full p flex justify-around items-center sm:p-1  ">
      <div className="lo">
        <Link to="/">
          <img
            className="mt-2 pl-6"
            style={{
              height: "2.6rem",
              width: "9rem",
              // marginLeft: "2rem",
            }}
            src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="side p-4 pr-48">
        <div className="links">
          {/* <NavLink
            exact
            to="/"
            onClick={() => {
              setShow(false);
              showLang1();
              handleShowLog1();egist
            }}
            activeClassName="active"
          >
            Home
          </NavLink> */}
          {/* {!user ? (
            ""
          ) : ( */}
          <Link
            onClick={() => setShow(false)}
            className="flex items-center cursor-pointer"
            to="/dashboard"
            // activeClassName="active"
          >
            <p>Dashboard</p>{" "}
          </Link>
          {/* )} */}
          {/*  */}
          <p
            className="cursor-pointer"
            onClick={() => {
              setShow(false);
              noUser1();
            }}
          >
            Market
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              setShow(false);
              noUser2();
            }}
          >
            Rates
          </p>

          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </div>
        {/* {show && (
          
        )} */}
      </div>

      {/* <div>
        {show && (
          <div className="dashboard-links">
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2   "
                to="/"
              >
                <FaExchangeAlt color="green" />
                <p className="text-white">Exchange</p>
              </NavLink>
            </p>
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2 pt-3 "
                to="/"
              >
                <IoMdPeople color="green" />
                <p className="text-white">P2P</p>
              </NavLink>
            </p>
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2 pt-3 "
                to="/"
              >
                <PiSwap color="green" />
                <p className="text-white">Swap</p>
              </NavLink>
            </p>
            <p>
              <NavLink
                activeClassName="active-link"
                onClick={handleShow}
                className="flex items-center gap-2 pt-3 "
                to="/"
              >
                <CiMoneyCheck1 color="green" />
                <p className="text-white">Buy</p>
              </NavLink>
            </p>
          </div>
        )}
      </div> */}
      <div className="nav-btns nav-text p-6 pr-24 ">
        {/* {user ? ( */}
        {user ? (
          <>
            <button
              style={{
                background: "#1D8751",
                fontSize: "12px",
              }}
              onClick={() => setShow(false)}
              className=" rounded-lg p-1 w-24 h-8 flex flex-row items-center gap-1"
            >
              <img
                className="o object-contain"
                src="https://res.cloudinary.com/pitz/image/upload/v1721377298/deposit-new-f_qjiizt.png"
                alt=""
              />
              Deposit
            </button>
            <div
              onClick={handleShow1}
              className="relative flex flex-row items-center"
            >
              <img
                width={30}
                height={30}
                className="cover relative rounded-full"
                src="https://res.cloudinary.com/pitz/image/upload/v1721370108/Ellipse_858_1_frdc61.png"
                alt=""
              />
              <img
                className="h-3 absolute top-0 left-6"
                src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                alt=""
              />
              {/* <RiDashboardLine onClick={handleShowLog} className="text-green-500 absolute top-10" /> */}
            </div>
            {ProPro && (
              <div
                // onClick={() => {
                //   dispatch(setLogout(null));
                //   toast.warning('Logged out!', { position: 'top-right' });
                //   navigate('/');
                // }}
                className="lang mt-3 p-2 lang  w-64 border-slate-700  primary border rounded-lg absolute top-12  "
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <div onClick={handleShow1} >
                    <Cancel className="items-left float-left ml-44" />
                  </div>
                  <Link onClick={handleShow} className="w-full" to="/account">
                    <div  className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                      <AccountCircle />
                      <button>Profile</button>
                    </div>
                  </Link>
                  <Link onClick={handleShow} className="w-full" to="/wallet">
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                      <Wallet />
                      <button>Wallet</button>
                    </div>
                  </Link>
                 <Link onClick={handleShow} className="w-full" to="/kyc">
                 <div className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                    <Verified />
                    <button>KYC</button>
                  </div>
                 </Link>
                  <div onClick={handleShow} className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                    <PrivacyTip />
                    <button>Privacy and Security</button>
                  </div>
                  <div onClick={handleShow} className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                    <RefreshRounded />
                    <button>Referral</button>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(setLogout(null));
                      toast.warning("Logged out!", { position: "top-right" });
                      navigate("/");
                      handleShow();
                    }}
                    className="flex justify-between w-full p-1 cursor-pointer gap-3 border-slate-700  border rounded-lg"
                  >
                    <Logout />
                    <button
                      onClick={() => {
                        dispatch(setLogout(null));
                        toast.warning("Logged out!", { position: "top-left" });
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          ""
        )}
        <>
          {user ? (
            ""
          ) : (
            <>
              <Link to="/register">
                <button className=" greenbg p-1 rounded-lg flex items-center justify-center w-24 h-9">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className=" primary p-1 rounded-lg flex items-center justify-center w-24 h-9">
                  Login
                </button>
              </Link>
            </>
          )}
        </>
        {/* )} */}

        <div className="image-nav relative " onClick={showLang} ref={langRef}>
          <img
            style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
            src="https://media.istockphoto.com/id/1217765834/photo/flag-of-united-kingdom-blowing-in-the-wind.jpg?s=2048x2048&w=is&k=20&c=W2rAsO5-YNL2o-9i8aqKr6QW3Mqi_lnxmSNPSJxVPaw="
            alt=""
          />
          <TiArrowSortedDown color="green" onClick={showLang} />

          {show1 && (
            <div className="lang mt-3 p-2  w-48 right-0  absolute  border border-slate-700 rounded-lg top-8 secondary">
              <p className="flex items-center justify-start gap-2 p-2">
                <img
                  className="flex h-5"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p>English</p>
              </p>
              <p className="flex items-center justify-start gap-2 p-2">
                <img
                  className="flex h-5"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAY1BMVEVBj97///9NluAsh9w3i90viNwmhds9jd41it3j7fnq8vtZm+GixO3e6viHtOj8/f9Hkt+ZvuvR4fa/1vJ6reasyu/N3vWCsedupuRYmuGlxu31+f2QuerV5PbI2/Styu5nouN9fFmgAAADJklEQVR4nO3a63aiMBSGYQIhwVPBQ621tvb+r3IUETnV4Ng1MDvv87d2rbAXH4TsHQQAAAAAAAAAAAAAAAAAAAAAAACANO9DL2B8okU09BLGxs7UzA69iJFJXtUxGXoRI2OmamqGXsS4nKKjCE9dsj/VZE94qszkVJMJ4akK1Vk49DLGJJnnNZkTnps8OoSn5hIdwlOh50VN5nropYxGtChqwjdPKVNX2dBLGQu9LGuyJDwX0WdZE8JTsOqGT56cPlRqciA8Z5XoKPVJeHKqaujFjEItOoQnF61qNVkRnsBaVWd59diXRk1eqEm8bdRkGw+9pMHFqsn7mti3Vk3efA9P/NWqyZfnN4qN01ZN0lj4jRLOwnuy5lsnf/Nkd/9n9t+fUDZfK8/bDn1JTzPth+hzXgQc7uts8osVmWQyekDm9ddK8irgJrmIdx+/UpF0J+gD0eqV+4qdVsI+D83Sfc0OSzG5uYrfp09VZDqT8XCtsWb9REnWkazcXJlNeyPf05u43FzpYOG+/A6LTPIhrdn/RUn2Ym+Si/j70a3Kx7f4swObPPZVuNUyH6411hzclSgdhOfmKum9VZm+i8/NVd+tytp4kJtS1GOrkm4EffH1oQPXqcokkLwp6WScNfHk6VoROkri4bBsMnfWxLtJc2d0PAyPOzrehUf3OXbzbFg26nNo4NmwbOauiPJs0rxXdDwLT20k9md+Dcv2KolXw7K66wSl61TSo2HZjuhMwihsb+N8Ck/r4o/nkxJz9Dc8reh8FL3xqNVr9yY8caOh/ln2xq1t/Gnlydmj1fXrrvXGm712H07tg+Y0ebM33ui1ezJpXpsmX7cGP21cPcD2ZNI8qVxyZ2/cbCq/8OJgqTJN/lNvXGe3z2YvJs1v0+R3BvZuvXYvJs2TorNzvzde9tpTD8Jji4eFa2DP6uJRvJEfnuQSnR698aLX/iX/RonO0enXG7/02lPx34F217kp+eHH+VZlJz08yVqlm/6Nm/NY4Fp6eKIHB/bOWxXh4bGb46PdPXMU/+Z5PAjSowMAAAAAAAAAAAAAAAAAAAAAAAAAAAD8M38A1vocG38lu5gAAAAASUVORK5CYII="
                  alt=""
                />
                Somali
              </p>
            </div>
          )}
        </div>
        <div className=" flex items-center mr-16">
          <p className="flex items-center relative" onClick={handleShowLog}>
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721377629/Frame_35160_bm8nbr.png"
              alt=""
            />
          </p>
        </div>
      </div>
      <div className="sidebar h-full p-3">
        <Box
          className="sidebar"
          sx={{ display: "flex", background: "#1D1D23" }}
        >
          <CssBaseline />
          <AppBar
            position="fixed"
            style={{
              background: "#1D1D23",
              height: "4rem",
              width: "100%",
            }}
            open={open}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                <img
                  style={{
                    height: "3.1rem",
                    width: "5rem",
                    marginLeft: "2rem",
                  }}
                  src="https://res.cloudinary.com/pitz/image/upload/v1707497590/logo-hiXpVEuB-removebg-preview_jnnrfa.png"
                  alt="logo"
                />
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="bg-black">
            <Drawer
              className="primary"
              sx={{
                background: "black",
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  background: "#1D1D23",
                  color: "white",
                  marginRight: 5,
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <div className="sidebar">
                <IconButton
                  onClick={handleDrawerClose}
                  style={{ color: "white" }}
                >
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider className="bg-slate-700" style={{ backgroundColor: "" }} />
              <List className="sidebar">
                <div className="flex sidebar ml-10 flex-col justify-center gap-5">
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                  <NavLink to="/trade" activeClassName="active">
                    Trade
                  </NavLink>
                  <NavLink to="/market" activeClassName="active">
                    Market
                  </NavLink>
                  <NavLink to="/rates" activeClassName="active">
                    Rates
                  </NavLink>
                  <NavLink to="/contact" activeClassName="active">
                    Contact us
                  </NavLink>
                  {!user ? (
                    ""
                  ) : (
                    <>
                      <NavLink
                        onClick={showTabs}
                        className="flex items-center cursor-pointer "
                        to="/dashboard"
                        activeClassName="active"
                      >
                        <p>Dashboard</p> <IoIosArrowDropdownCircle />
                      </NavLink>
                    </>
                  )}

                  {tabs && (
                    <>
                      <div className="border border-slate-700 p-1  w-48 rounded-lg">
                        <div
                          style={{ color: "#727272", fontSize: "15px" }}
                          className="small flex flex-col gap-6 pt-12"
                        >
                          {tab.map((tab) => (
                            <div
                              key={tab.name}
                              className={`flex w-full flex-row   items-center rounded-tr-lg rounded-br-lg gap-4 p-2 `}
                              style={{
                                cursor: "pointer",
                                background:
                                  activeTab === tab.name ? "#303038" : "",
                              }}
                              onClick={() => setActiveTab(tab.name)}
                            >
                              <img
                                className={`${
                                  tab.name === "Buy Crypto" ? "h-5" : "h-6"
                                }`}
                                src={tab.icon}
                                alt={tab.name}
                              />
                              <div
                                style={{
                                  fontSize:
                                    tab.name === "Buy Crypto"
                                      ? "15.5px"
                                      : "h-6",
                                }}
                                className={`flex items-center ${
                                  activeTab === tab.name ? "white" : ""
                                } justify-between ml-5 w-full`}
                              >
                                {tab.name}
                                {tab.name === "Account" && (
                                  <MdOutlineKeyboardArrowDown className="ml-2" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </List>
              <Divider className="bg-slate-700" style={{ backgroundColor: "" }} />
              <List className="sidebar">
                {user ? (
                  <>
                    <div
                      onClick={() => {
                        dispatch(setLogout(null));
                        toast.warning("Logged out!", { position: "top-left" });
                        navigate("/");
                      }}
                      className="lang mt-3 w-32 text-center p-1 secondary text-white border rounded-lg absolute ml-7"
                    >
                      Log out <LogoutOutlined />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex ml-10 flex-col justify-center gap-5">
                      <Link to="/register">
                        <button className="nav-reg p-1 w-32">Register</button>
                      </Link>
                      <Link to="/login">
                        <button className="nav-reg p-1 w-32">Login</button>
                      </Link>
                    </div>
                  </>
                )}
              </List>
            </Drawer>
          </div>
        </Box>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Navbar;
