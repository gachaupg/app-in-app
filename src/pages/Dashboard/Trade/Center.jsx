/* eslint-disable no-unused-vars */
import { CheckBox } from "@mui/icons-material";
import { CircularProgress, Modal, Typography } from "@mui/material";
import axios from "axios";
import { Box, Plus, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import Feedback from "./p2pCenter/Feedback";
import MyAdds from "./p2pCenter/MyAdds";
import { getWallets } from "../../../redux/features/answerSlice";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const Center = () => {
  const [show, setShow] = useState("myAds");
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate("");
  const [provider, setProvider] = useState([]);

  // console.log(provider);




  const initialState = {
    provider_name: "",
    account_name: "",
    account_number: "",
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  console.log('data', form);
  const [mombile, setMombile] = useState('')
  useEffect(() => {
    fetchData();
  }, [user.access]);
  async function fetchData() {
    const token = user.access;

    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading(false);
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await axios.get(`${endpoint}/trading_engine/payment-providers/Bank/`, {
        headers,
      });
      setLoading1(false);
      setProvider(res.data); // Assuming the response data is what you need to set
      console.log("hello", res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }
  const [details, setdetails] = useState([]);
  console.log('payments', details);

  useEffect(() => {
    fetchData3();
  }, [user.access]);
  async function fetchData3() {
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
      const res = await axios.get(`${endpoint}/trading_engine/user-payment-details/`, {
        headers,
      });
      setLoading1(false);
      setdetails(res.data); // Assuming the response data is what you need to set
      console.log("hello", res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  // Add token to the dependency array

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Assuming user.user.access is available in your component's state or context
    const token = user.access;

    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading(false);
      return;
    }

    if (form.account_name) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        console.log("Sending request with headers:", headers); // Debugging line
        console.log(
          "Sending request to endpoint:",
          `${endpoint}/trading_engine/user-payment-details/`,); // Debugging line
        const response = await fetch(
          `${endpoint}/trading_engine/user-payment-details/`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(form), // Make sure "withdrawal" is defined in your component
        }
        );
        const data = await response.json();
        if (response.ok) {
          toast.success("Added successful!");
          fetchData();
        } else if (data.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login"); // Redirect to login page or handle re-authentication
        } else {
          toast.error(`Save bank details failed: ${data || data}`);
          console.log(data);
          console.log("====================================");
          console.log(form);
          console.log("====================================");
        }
      } catch (error) {
        toast.error(`Error: ${error.error}`);
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Invalid code");
      setLoading(false); // Ensure loading state is reset in case of invalid code
    }
  };


  const [payments1, setPayments1] = useState([]);
  console.log(payments);
  const initialState1 = {
    provider_name: "",
    account_name: "",
    account_number: "",
  };

  const [form1, setForm1] = useState(initialState1);
  useEffect(() => {
    fetchData1();
  }, [user]);

  async function fetchData1() {
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
        `${endpoint}/trading_engine/p2p/all-orders/?my_orders=true/`,
        { headers }
      );
      setLoading1(false);
      const data = res.data.filter((data) => data.advertiser_name.id?.split('-')[1] === user.user.username);
      setPayments1(res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }



  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Assuming user.user.access is available in your component's state or context
    const token = user.access;

    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading(false);
      return;
    }

    if (form.account_name) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        console.log("Sending request with headers:", headers); // Debugging line
        console.log(
          "Sending request to endpoint:",
          `${endpoint}/trading_engine/user-payment-details/`,); // Debugging line
        const response = await fetch(
          `${endpoint}/trading_engine/user-payment-details/`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(form), // Make sure "withdrawal" is defined in your component
        }
        );
        const data = await response.json();
        if (response.ok) {
          toast.success("Added successful!");
          // fetchData();
        } else if (data.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login"); // Redirect to login page or handle re-authentication
        } else {
          toast.error(`Save bank details failed: ${data || data}`);
          console.log(data);
          console.log("====================================");
          console.log(form);
          console.log("====================================");
        }
      } catch (error) {
        toast.error(`Error: ${error.error}`);
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Invalid code");
      setLoading(false); // Ensure loading state is reset in case of invalid code
    }
  };
  const dispatch = useDispatch();
  const token = user.access
  const { wallet, error } = useSelector((state) => state.deposits);
  // console.log('depositddds',match);
  useEffect(() => {
    if (token) {
      dispatch(getWallets({ token, toast }));
    }
  }, [dispatch, token]);

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
    <div className="flex rounded-lg flex-col  gap-2 w-full">
      <div
        className={`secondary wrap small border border-slate-700 p-2  rounded-lg flex flex-row justify-between `}
      >

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="primary white" sx={style}>
            <Typography o id="modal-modal-title" variant="h6" component="h2">
              Add payment details
            </Typography>
            <div
              className={` small   p-2  rounded-lg flex flex-col justify-between `}
            >
              <p className="white flex flex-row w-64 p-1  rounded-3xl items-center gap-1">
                <img
                  className="rounded-full object-contain"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721925032/492x0w_1_rw99fe.png"
                  alt=""
                />{" "}
                <select
                  onChange={(e) =>
                    setForm({
                      ...form,
                      provider_name: e.target.value,
                    })
                  }
                  className="secondary white p-1  cursor-pointer  w-64   no-border"
                  name=""
                  id=""
                >
                  <option value="">Provider</option>

                  {" "}
                  {/* {provider.map((i) => {
                  return ( */}
                  <>
                    <option value='Salam'>Salam</option>{" "}
                  </>
                  {/* );
                })} */}
                </select>
              </p>
              <div className="w-full small wrap flex flex-col items-center justify-between gap-6">
                <div
                  style={{
                    background: "#35353E                ",
                  }}
                  className="secondary mt-2   rounded-3xl w-full p-2"
                >
                  <input
                    onChange={(e) =>
                      setForm({ ...form, account_name: e.target.value })
                    }
                    style={{
                      background: "#35353E                ",
                    }}
                    className="no-border p-1 secondary white w-full"
                    type="text"
                    placeholder=" Account Holder"
                  />
                  {/* <p className="g">Account Holder</p> */}
                </div>
                <div
                  style={{
                    background: "#35353E                ",
                  }} className=" mt-2  rounded-3xl w-full p-2">
                  <input
                    onChange={(e) =>
                      setForm({ ...form, account_number: e.target.value })
                    }
                    style={{
                      background: "#35353E                ",
                    }}
                    className="no-border text-white p-1  w-full"
                    type="text"
                    placeholder=" Account Number"
                  />
                </div>

              </div>
              <div>
                {loading === true ? (
                  <div className="flex items-center justify-center">
                    <CircularProgress />
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="p-2 w-full mt-3 mb-2 bg-green-700 rounded-lg text-white"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </Box>
        </Modal>
        <div className="flex flex-col gap-2 ">
          <p className="flex flex-row items-center gap-3 r">
            <p className="p-2 bg-green-600 text-white h-10 w-10 rounded-full flex items-center justify-center text-center uppercase">
              {user?.user?.first_name?.substring(0, 2)}            </p>
            <p className="g capitalize">{user.user.first_name}</p>
            <p className="g bg-green-600 text-white h-6 w-6 rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/pitz/image/upload/v1721926700/Icon_2_wrahsk.png"
                alt=""
              />
            </p>
          </p>
          <div className="flex w-full items-center  gap-2">
            <button
              className="p-1 rounded-2xl h-6 flex items-center justify-center text-green-600"
              style={{
                background: "#384B41",
              }}
            >
              unverified merchant
            </button>
            <button
              onClick={() => {
                toast.error('Account not verified')
              }}
              className="p-1 bg-green-600 rounded-3xl h-8 flex items-center justify-center text-white"
              style={{
                fontSize: "14px",
              }}
            >
              Become Merchant PRO{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center mt-5 justify-center float-left">
          <p className="green float-left">P2P Balance</p>
          <p className="g w-full flex">
            <span className="white w-full flex">


              {
                wallet.map((balance) => {
                  return (
                    <p key={balance.id}>
                      {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                    </p>

                  )
                })
              }
              USDT</span> ≈ {
              wallet.map((balance) => {
                return (
                  <p key={balance.id}>
                    {typeof balance.balance === 'string' ? formatBalance(balance.balance) : 'N/A'}
                  </p>

                )
              })
            }  USD
          </p>
          <p className="g">
            In escrow : <span className="white">00 USD</span>
          </p>
        </div>
      </div>

      <div
        className={`secondary small border border-slate-700 p-2 wrap mt-5  rounded-lg flex flex-row justify-between `}
      >
        <div className=" flex white flex-col">
          {payments.length}
          <p style={{ fontSize: "13px" }} className="g">
            Trades
          </p>
        </div>
        <div className=" flex white flex-col">
          98%
          <p style={{ fontSize: "13px" }} className="g">
            Avg.release time
          </p>
        </div>
        <div className=" flex white flex-col">
          2:56 Min
          <p style={{ fontSize: "13px" }} className="g">
            AVg.pay time
          </p>
        </div>
        <div className=" flex white flex-col">
          99%
          <p style={{ fontSize: "13px" }} className="g">
            Rating
          </p>
        </div>
        <div className=" flex white flex-col">
          00.00 USD
          <p style={{ fontSize: "13px" }} className="g">
            Total volume
          </p>
        </div>
      </div>
      <div
        className={`primary small  wrap  p-2  flex flex-row justify-between `}
      >
        <div style={{
          width: '74%'
        }} className={`primary small wrap   p-2  flex flex-row gap-5 `}>
          <button
            onClick={() => setShow("Payments")}
            style={{ fontSize: "13px" }}
            className={`h-10 small w-40 ${show === "Payments" && "bg-green-600"} text-white rounded-3xl`}
          >
            Payment Methods
          </button>
          <button
            onClick={() => setShow("Feedback")}
            style={{ fontSize: "13px" }}
            className={`h-10 w-36 small ${show === "Feedback" && "bg-green-600"} text-white rounded-3xl`}
          >
            Feedback <span className="g">(8)</span>
          </button>
          <button
            onClick={() => setShow("Settings")}

            style={{ fontSize: "13px" }}
            className={`h-10 small w-36 ${show === "Settings" && "bg-green-600"} text-white rounded-3xl`}
          >
            Ad Settings
          </button>
          <button
            onClick={() => setShow("myAds")}
            style={{ fontSize: "13px" }}
            className={`h-10 small w-36 ${show === "myAds" && "bg-green-600"} text-white rounded-3xl`}

          >
            My Ads{" "}
            <span
              style={{
                color: "#F79330            ",
              }}
              className="g"
            >
              ({payments1.length})
            </span>
          </button>
          <button
            style={{ fontSize: "13px" }}
            className="p-2 h-10 small border w-36 border-green-600 text-green-600 rounded-3xl"
          >
            <Link to="/adds">+ Pos New Ad</Link>
          </button>
        </div>
        <div className="flex flex-col  gap-1">
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721930070/Rectangle_115_bwo3u8.png"
              alt=""
            />
            <p className="g">Live Ads Exist</p>
          </div>
          <div className="flex flex-row w-full items-center gap-2">
            {" "}
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721930066/Rectangle_114_lbm9hq.png"
              alt=""
            />
            <p className="g w-full">Offline Ads Exist</p>
          </div>
        </div>
      </div>
      {show === "Feedback" && (
        <>
          <Feedback />
        </>
      )}
      {show === "myAds" && (
        <>
          <MyAdds />
        </>
      )}
      {show === "Payments" && (
        <>
          <div
            className={`secondary small border border-slate-700 p-2  rounded-lg flex flex-col justify-between `}
          >
            <div className="flex flex-row wrap small w-full justify-between items-center p-1">
              <p className="white">Bank</p>
              <div className="border flex items-center  p-1 white border-green-600 rounded-lg">
                <Plus color="green" />{" "}
                <select onChange={(e) => setMombile(e.target.value)} className="secondary w-44 no-border" name="" id="">
                  <option value="">
                    {" "}
                    <Plus color="green" /> Add Method
                  </option>
                  <option value="bank">
                    <CheckBox color="gree" /> Bank Transfer
                  </option>
                  <option value="mobile">
                    <CheckBox /> Mobile Money
                  </option>
                  <option value="merchant">
                    <CheckBox /> Merchant
                  </option>
                </select>
              </div>
            </div>
            <p className="white flex flex-row border w-64 p-1 border-slate-700 rounded-3xl items-center gap-1">
              <img
                className="rounded-full object-contain"
                src="https://res.cloudinary.com/pitz/image/upload/v1721925032/492x0w_1_rw99fe.png"
                alt=""
              />{" "}
              <select
                onChange={(e) =>
                  setForm({
                    ...form,
                    provider_name: e.target.value,
                  })
                }
                className="secondary white  cursor-pointer  w-64   no-border"
                name=""
                id=""
              >
                <option value="">Provider</option>

                {" "}
                {/* {provider.map((i) => {
                  return ( */}
                <>
                  {
                    mombile === 'bank' ?
                      (
                        <>
                          <option value='Salam'>Salam</option>
                          <option value='Salam'>Premiear</option>
                        </>
                      ) : (
                        <>
                          <>
                            <option value='mpesa'>M-mpesa</option>
                          </>
                        </>
                      )
                  }
                </>
              </select>
            </p>
            <div className="w-full small wrap flex flex-row items-center justify-between gap-6">
              <div
                style={{
                  background: "#35353E                ",
                }}
                className="secondary mt-2   rounded-3xl w-full p-2"
              >
                <input
                  onChange={(e) =>
                    setForm({ ...form, account_name: e.target.value })
                  }
                  style={{
                    background: "#35353E                ",
                  }}
                  className="no-border p-1 secondary white w-full"
                  type="text"
                  placeholder=" Account Holder"
                />
                {/* <p className="g">Account Holder</p> */}
              </div>
              <div className="primary mt-2  rounded-3xl w-full p-2">
                <input
                  onChange={(e) =>
                    setForm({ ...form, account_number: e.target.value })
                  }
                  className="no-border text-white p-1 primary w-full"
                  type="text"
                  placeholder=" Account Number"
                />
              </div>
              <div>
                {loading === true ? (
                  <>
                    <CircularProgress />
                  </>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="p-2 w-16 bg-green-700 rounded-lg text-white"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>

            <p
              style={{
                height: "1px",
              }}
              className="w-full bg-slate-700 mt-2 mb-2"
            ></p>
            {details.length === 0 ? (
              <p className="white">No payment methods Added</p>
            ) : (
              <>
                {details.map((payment) => {
                  return (
                    <>
                      <div className="flex small wrap flex-row w-full gap-7 p-3 items-center justify-between">
                        <div className="flex flex-col gap-2">
                          <p className="white">{payment.payment_method_name}</p>
                          <p className="flex flex-row small wrap white items-center gap-2">
                            <img
                              className="rounded-full"
                              src="https://res.cloudinary.com/pitz/image/upload/v1721980076/image_1_dfpk3p.png"
                              alt=""
                            />{" "}
                            {payment.payment_provider_name}
                          </p>
                        </div>
                        <Trash2Icon color="green" />
                      </div>
                      <div className="flex flex-row small wrap gap-6 items-center w-full">
                        <div className="flex flex-col w-full  gap-1">
                          <p className="g">Wallet Name</p>
                          <div className="primary mt-2  rounded-3xl w-full p-2">
                            <p className="green">{payment.account_name}</p>
                          </div>
                        </div>
                        <div className="flex flex-col w-full  gap-1">
                          <p className="g">Wallet Number</p>
                          <div className="primary mt-2  rounded-3xl w-full p-2">
                            <p className="green">{payment.account_number}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}

            <button className="flex border border-green-700 rounded-3xl text-center green  justify-center p-1 mt-4 flex-row gap-6 items-center w-full">
              Update
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Center;
