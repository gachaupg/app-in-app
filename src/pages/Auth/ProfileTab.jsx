/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../utils/APIRoutes";

const ProfileTab = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [activeTab, setActiveTab] = useState("P2P Trading");
  const [Verified, setVerified] = useState(false);
  const [activeTab1, setActiveTab1] = useState("Dashboard");
  const [show, setShow] = useState("P2P");
  const tabs = [
    {
      name: "Dashboard",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721367990/svgexport-54_1_ww7fdx.png",
      link: "dashboard"
    },
    {
      name: "Exchange",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368341/uil_exchange_craxj9.png",
      link: "exchange"

    },
    {
      name: "P2P Trading",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721678697/users-profiles-left_1_nypmot.png",
      link: "dashboard"

    },
    {
      name: "Swap Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368339/Group_164002_jqrdb5.png",
      link: "swap"

    },
    {
      name: "Buy Crypto",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368332/Group_164004_ddibmc.png",
      link: "buy"

    },
    {
      name: "Account",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368328/key-01_njdjyg.png",
      link: "account"

    },
    {
      link: "settings",

      name: "Settings",
      icon: "https://res.cloudinary.com/pitz/image/upload/v1721368327/settings_mezmwi.png",
    },
  ];
  const [graph, setGraph] = useState('sells')

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [payments, setPayments] = useState([]);
  const [match, setMatch] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loadingKy, setLoadingKyc] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [kyc, setKyc] = useState([])

  console.log('kyc', kyc);
  useEffect(() => {
    fetchKyc()
  }, [user])
  async function fetchKyc() {
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
        `${endpoint}/api/kyc/status/`,
        { headers }
      );
      setKyc(res.data);
      console.log(res.data);

      setLoading1(false);
      if (res.data.is_verified === false) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [user?.access])
  async function fetchData() {
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
  }
  //  console.log('beauty',match);

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
        `${endpoint}/trading_engine/trades/matched/`,
        { headers }
      );
      setMatch(res.data);
      setLoading1(false);
      console.log('paymentssss', res.data);

    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }







  function formatBalance(balance) {
    let num = parseFloat(balance);

    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M';
    } else {
      return num.toFixed(2);
    }
  }
  return (
    <div className="  small wrap  flex border p-2  rounded-lg border-slate-700 flex-col ">
      <div className="flex small wrap flex-row items-center justify-between">
        <div className="flex flex-row w-full items-center gap-1">
          <RxAvatar className="h-20 g  w-10" color="" height={70} />
          <p className="flex flex-col items- justify-center  ">
            <p className="capitalize white">{user?.user?.first_name}</p>
            <p
              style={{ fontSize: "12px", color: "#F79330" }}
              className=" flex flex-row items-center gap-1 "
            >
              {kyc.is_verified ? <p className="green">Verified</p> : 'Unerified account'} {" "}
              <img
                className="h-4"
                src="https://res.cloudinary.com/pitz/image/upload/v1721370408/Frame_34216_jnzjpy.png"
                alt=""
              />
            </p>
          </p>
        </div>
        <img className="h-7" src="https://res.cloudinary.com/pitz/image/upload/v1723195329/Frame_34659_usv08x.png" alt="" />
      </div>
      <p className="g">
        Total Trannsactios
      </p>
      <p className="white flex flex-row items-center">
        {
          payments.map((balance) => {
            return (
              <p key={balance.id}>
                {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
              </p>
            )
          })
        }  USD
      </p>
      <p style={{
        height: '1px'
      }} className="w-full mt-2 mb-2 bg-slate-700"></p>
      <p className="text-start white">Deposits</p>

      <div
        style={{ width: "100%" }}
        className="flex small white  flex-col p-3  w-full"
      >
        <div className="flex flex-row  g items-center mb-3 justify-between ">
          <p>{
            payments.map((balance) => {
              return (
                <p key={balance.id}>
                  {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                </p>
              )
            })
          }  USD</p>
          <button className="flex items-center rounded-2xl p-1  ">
            month <IoIosArrowDown size={15} />
          </button>
        </div>
        <div className="progress-bar">
          <div className="filler " style={{ width: `0%` }} />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-green-800 h-3 w-7 rounded-lg"></p>
              <p>Deposits</p>
            </div>
            <p>000 </p>
          </div>

        </div>

      </div>
      <div
        style={{ width: "" }}
        className="flex flex-col p-3 small white border mt-3 rounded-lg border-slate-700 secondary w-full"
      >
        <div className="flex flex-row g items-center mb-3 justify-between ">
          <p>00.00 USD</p>
          <button className="flex items-center rounded-2xl p-1  ">
            month <IoIosArrowDown size={15} />
          </button>
        </div>
        <div style={{
          background: 'white'
        }} className="progress-bar ">
          <div className="filler " style={{ width: `100%` }} />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-red-800 h-3 w-7 rounded-lg"></p>
              <p>Withdrawals</p>
            </div>
            <p>00.00 </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProfileTab