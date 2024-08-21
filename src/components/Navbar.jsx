/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  AccountCircle,
  Cancel,
  Logout,
  LogoutOutlined,
  PrivacyTip,
  RefreshRounded,
  Verified
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Wallet } from "lucide-react";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setLogout } from "../redux/features/authSlice";

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
  const [showSideDash, setSideDash] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const langRef = useRef(null);
  const sideDashRef = useRef(null);
  const handleShowSide = () => {
    setSideDash(!showSideDash);
  };
  const showTabs = () => {
    setTabs(!tabs);
  };
  const handleClickOutside = (event) => {
    if (
      (dropdownRef.current && !dropdownRef.current.contains(event.target)) ||
      (profileRef.current && !profileRef.current.contains(event.target)) ||
      (langRef.current && !langRef.current.contains(event.target))||
      (sideDashRef.current && !sideDashRef.current.contains(event.target))
    ) {
      setSideDash(false);
      setShowLog(false);
      setShow1(false);
      setProPro(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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

 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
      // if (profileRef.current && !profileRef.current.contains(event.target)) {
      //   setProPro(false);
      // }
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

  const [newShow,setNew]=useState(false);
  const HandNew=()=>{
   setNew(!newShow);
  }

  return (
    <div className="navbar flex flex-row justify-between pl-24 pr-16 ">
      <div className="lo">
        <Link to="/">
          <img
            className="mt-2 mr-28"
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
      <div className="side p-4 ">
        <div className="links">
          <Link
            onClick={() => setShow(false)}
            className="flex items-center cursor-pointer"
            to="/dashboard"
            activeClassName="active"
          >
            <p className="cursor-pointer">Dashboard</p>{" "}
          </Link>

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
      </div>

      <div className="nav-btns nav-text p-6   ">
        {/* {user ? ( */}
        {user ? (
          <>
            <button
              style={{
                background: "#1D8751",
                fontSize: "12px",
              }}
              onClick={() => {
                setShow(false);
                handleShowSide();
                
              }}
              ref={sideDashRef}
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
              onClick={HandNew}
              className="relative flex flex-row items-center"
              ref={profileRef}
            >
              <RxAvatar className="g cursor-pointer" size={40}/>
              {/* <img
                width={30}
                height={30}
                className="cover relative rounded-full"
                src="https://res.cloudinary.com/pitz/image/upload/v1721370108/Ellipse_858_1_frdc61.png"
                alt=""
              /> */}
              <img
                className="h-3 absolute top-0 left-6"
                src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                alt=""
              />
            </div>
            {newShow && (
              <div className="lang mt-3 p-2 lang  w-64 border-slate-700  primary border rounded-lg absolute top-12  ">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div onClick={HandNew}>
                    <Cancel className="items-left float-left ml-44" />
                  </div>
                  <Link onClick={()=>{
                    navigate('/account')
                    HandNew();

                    }}  className="w-full" to="/account">
                    <div onClick={()=>{
                    navigate('/account')
                    HandNew();

                    }}  className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                      <AccountCircle />
                      <button>Profile</button>
                    </div>
                  </Link>
                  <Link onClick={()=>{
                    navigate('/account')
                    HandNew();

                    }}  className="w-full" to="/account">
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                      <Wallet />
                      <button>Wallet</button>
                    </div>
                  </Link>
                  <Link onClick={()=>{
                    navigate('/account')
                    HandNew();

                    }}  className="w-full" to="/account">
                    <div className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg">
                      <Verified />
                      <button>KYC</button>
                    </div>
                  </Link>
                  <Link
                  onClick={()=>{
                    navigate('/account')
                    HandNew();

                    }} 
                    to='/acount'
                    
                    className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg"
                  >
                    <PrivacyTip />
                    <button>Privacy and Security</button>
                  </Link>
                <div className="w-full">
               
                <Link onClick={()=>{
                    navigate('/account')
                    HandNew();

                    }}  to="/account"
                   
                   className="flex justify-between w-full p-1 gap-3 border-slate-700  border rounded-lg"
                 >
                   <RefreshRounded />
                   <button>Referral</button>
                 </Link >
                </div>
                  <div
                    onClick={() => {
                      dispatch(setLogout(null));
                      toast.warning("Logged out!", { position: "top-right" });
                      navigate("/");
                      handleShow();
                      HandNew()

                    }}
                    className="flex justify-between w-full p-1 cursor-pointer gap-3 border-slate-700  border rounded-lg"
                  >
                    <Logout />
                    <button
                      onClick={() => {
                        dispatch(setLogout(null));
                        toast.warning("Logged out!", { position: "top-left" });
                        navigate("/");
                        HandNew()
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

        <div className="image-nav relative cursor-pointer " onClick={showLang}  ref={langRef}>
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
                  src="https://res.cloudinary.com/pitz/image/upload/v1723275375/download_17_t9k8ce.jpg"
                  className="flex h-5"
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
          {showSideDash && (
            <>
              <div className="sideDash flex cursor-pointer flex-col gap-5 p-3">
                <Link onClick={handleShowSide} to="/exchange" className="flex  hover cursor-pointer flex-row  items-center  gap-10 w-full">
                  <img className="h-6" src="https://res.cloudinary.com/pitz/image/upload/v1723104409/uil_exchange_1_tjzevh.png" alt="" />
                  <div className="cursor-pointer">
                    <p className="white cursor-pointer mr-5">Exchange</p>
                    <p style={{
                      fontSize:'12px'
                    }} className="g cursor-pointer">
                      Trade cryptocurrencies on the exchange with advanced tools
                      and features for optimal transactions{" "}
                    </p>
                  </div>
                  <MdKeyboardArrowRight size={30}/>
                </Link>
                <Link onClick={handleShowSide} to="/dashboard" className="flex hover cursor-pointer flex-row  items-center  gap-10 w-full">
                  <img src="https://res.cloudinary.com/pitz/image/upload/v1723104921/users-profiles-left_2_bunnsy.png" alt="" />
                  <div>
                    <p className="white cursor-pointer mr-5">P2P</p>
                    <p style={{
                      fontSize:'12px'
                    }} className="g cursor-pointer">
                      Trade cryptocurrencies on the exchange with advanced tools
                      and features for optimal transactions{" "}
                    </p>
                  </div>
                  <MdKeyboardArrowRight size={30}/>
                </Link>
                <Link onClick={handleShowSide} to="/dashboard" className="flex hover cursor-pointer flex-row  items-center  gap-10 w-full">
                  <img src="https://res.cloudinary.com/pitz/image/upload/v1723104988/Group_164002_1_oovexn.png" alt="" />
                  <div>
                    <p className="white cursor-pointer mr-5">Swap</p>
                    <p style={{
                      fontSize:'12px'
                    }} className="g cursor-pointer">
                      Trade cryptocurrencies on the exchange with advanced tools
                      and features for optimal transactions{" "}
                    </p>
                  </div>
                  <MdKeyboardArrowRight size={30}/>
                </Link>
                <Link onClick={handleShowSide} to="/dashboard" className="flex flex-row hover cursor-pointer items-center  gap-10 w-full">
                  <img src="https://res.cloudinary.com/pitz/image/upload/v1723105029/Group_164004_1_urbeen.png" alt="" />
                  <div>
                    <p className="white mr-5 cursor-pointer">Buy</p>
                    <p style={{
                      fontSize:'12px'
                    }} className="g cursor-pointer">
                      Trade cryptocurrencies on the exchange with advanced tools
                      and features for optimal transactions{" "}
                    </p>
                  </div>
                  <MdKeyboardArrowRight size={30}/>
                </Link>
              </div>
            </>
          )}
        </div>
        <div className=" flex items-center cursor-pointer mr-16">
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
               
                    width: "5rem",
                    marginLeft: "2rem",
                  }}
                  src="https://res.cloudinary.com/pitz/image/upload/v1721366723/Frame_rmtgyx.png"

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
              <Divider
                className="bg-slate-700"
                style={{ backgroundColor: "" }}
              />
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
              <Divider
                className="bg-slate-700"
                style={{ backgroundColor: "" }}
              />
              <List className="sidebar">
                {user ? (
                  <>
                    <div
                      onClick={() => {
                        dispatch(setLogout(null));
                        toast.warning("Logged out!", { position: "top-left" });
                        navigate("/");
                      }}
                      className="lang mt-3 w-32 cursor-pointer text-center p-1 secondary text-white border rounded-lg absolute ml-7"
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
