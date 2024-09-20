/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaPaste } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { DollarSign, Dot, Wallet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlQuestion } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { ContentPaste } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.black",
  border: "none",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};

const initialState = {
  // sender_id: 1,
  // receiver_id: 2,
  network: "TRON",
  wallet_type: "USDT",
  email_verification_code: "262256",
  amount: "",
  currency: "USDT",
  receiver_wallet: "",
};

const WidthForm = ({payments,setShow }) => {
  const [widthdrwal, setWidthdrwal] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
console.log(widthdrwal);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [widthTap, setWidthTab] = useState("USDT");

  const [codes, setCodes] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [verify, setVerify] = useState(true);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  useEffect(() => {
    if (open) {
      setTimeLeft(60); // Reset the timer when the modal opens
    }
  }, [open]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nixgecg",
        "template_q9azb3r",
        form.current,
        "o7nDrcmpFV59tupaB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(paste)) {
      setCodes(paste.split(""));
      document.getElementById("code-input-5").focus();
    }
    e.preventDefault();
  };

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

    if (verify === true) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      try {
        console.log("Sending request with headers:", headers); // Debugging line
        console.log(
          "Sending request to endpoint:",
          `${endpoint}/trading_engine/p2p-withdraw/`
        ); // Debugging line
        const response = await fetch(
          `${endpoint}/trading_engine/p2p-withdraw/`,
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(widthdrwal), // Make sure "withdrawal" is defined in your component
          }
        );
        const data = await response.json();
        if (response.ok) {
          setOpen2(true)
          
        } else if (data.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login"); // Redirect to login page or handle re-authentication
        } else {
          toast.error(`Withdrawal failed:${data.error} `);
          console.log(data);
          console.log("====================================");
          console.log(widthdrwal);
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
  const [pastedText, setPastedText] = useState('');

  const pasteFromClipboard = () => {
      navigator.clipboard.readText().then((text) => {
          setPastedText(text);
      }).catch((err) => {
          console.error('Failed to read text from clipboard: ', err);
      });
  };
  const handleInputChange1 = (e) => {
      const value = e.target.value;
      setPastedText(value);
      setWidthdrwal({ ...widthdrwal, receiver_wallet: value });
  };
  return (
    <div className="text-white mt-2">
   <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col primary items-center" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <IoCheckmarkCircleSharp className="green" size={40} />
          </Typography>
          <Typography className="white">
            Successfully Submitted
          </Typography>
          <p className="g">You will receive</p>
          <p className="g">{widthdrwal.amount}USDT</p>
          <button
            onClick={() => {
              setShow('P2P')
              window.scrollTo(0, 0);
            }}
            className="w-full mt-3 p-1 white greenbg rounded-2xl"
          >
            OK
          </button>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="border primary white" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Email Verification Code
          </Typography>
          <p style={{ fontSize: "13px" }} className="g">
            Enter Verification code sent to.....
          </p>
          <form ref={form} onSubmit={sendEmail} action="">
          <div className="flex mt-3 flex-row items-center gap-3 w-full">
            {codes.map((code, index) => (
              <input
                style={{
                  background: "#35353E",
                }}
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
            
                onChange={(e) => handleInputChange(e, index)}
                onPaste={handlePaste}
                className=" w-10  text-white text-center p-2 rounded-lg"
              />
            ))}
          </div>
          <p className="g">
            Having trouble? Request a new OTP in{" "}
            <span className="text-red-700">{`00:${timeLeft
              .toString()
              .padStart(2, "0")}`}</span>
          </p>
          <div className="flex flex-row mt-4 w-full items-center gap-10">
            <button
              onClick={handleClose}
              className="border w-32 border-slate-700 p-1 rounded-3xl"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="w-32 bg-red-700 p-1 rounded-3xl"
            >
              {" "}
              {loading ? <CircularProgress className="green h-10" /> : "Submit"}
            </button>
            </div>
            </form>
        </Box>
      </Modal>
      <div
        style={{ width: "100%" }}
        className="border small size border-gray-700 wrap mt-6 secondary w-full rounded-2xl p-3 flex flex-col justify-between"
      >
        <div className="flex w-full flex-row justify-between gap-10 wrap items-center">
          <div
            style={{ width: "50%" }}
            className="flex small flex-col p-1 gap-2"
          >
            <p className="grey">Asset</p>
            <div className="mainGrey p-1 pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <img
                src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                alt=""
              />
              <select
                className="mainGrey p-1 flex flex-row items-center gap-1 w-full no-border"
                name=""
                id=""
                onChange={(e) =>
                  setWidthdrwal({ ...widthdrwal, currency: e.target.value })
                }
              >
                <option value="">
                  <p>
                     <span className="grey">Tether </span>
                  </p>
                </option>
              </select>
            </div>
          </div>
          <div style={{ width: "50%" }} className="small">
            <p className="grey">Network</p>
            <div className="mainGrey p-1 pr-2 mt-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="mainGrey items-center flex flex-row gap-1 w-full">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                  alt=""
                />
                <select
                  className="mainGrey p-1 flex flex-row items-center gap-1 w-full no-border"
                  name=""
                  id=""
                  onChange={(e) =>
                    setWidthdrwal({ ...widthdrwal, currency: e.target.value })
                  }
                >
                  <option value="">
                    <p>
                      TRC 20{" "}
                      <span style={{ fontSize: "12px" }} className="grey">
                        Tron
                      </span>
                    </p>
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <p className="mb-2">Wallet Type</p>
        <div
          style={{
            width: "45%",
          }}
          className="border small wrap ml-1 p-1 flex flex-row border-green-600 gap-6 rounded-lg"
        >
          <button
            onClick={(e) => {
              setWidthTab("USDT");
              setWidthdrwal({...widthdrwal,wallet_type:'USDT'})
            }}
            style={{
              fontSize: "12px",
            }}
            className={` small flex flex-row  w-40 items-center  p-1 ${
              widthTap === "USDT" && "border-green-600 border mainGrey"
            } rounded-lg`}
          >
            <img
              className="h-4"
              src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
              alt=""
            />
            USDT Wallet Address
          </button>
          <button
            onClick={(e) => setWidthTab("Binance")}
            className={` small flex flex-row items-center gap-1 p-1 ${
              widthTap === "Binance" && "border-green-600 border mainGrey"
            } rounded-lg`}
          >
            <img
              className="h-5"
              src="https://res.cloudinary.com/pitz/image/upload/v1721629441/Group_164092_ybnudz.png"
              alt=""
            />
            Binance
          </button>
          <button
            onClick={(e) => setWidthTab("gate")}
            className={` small flex flex-row items-center gap-1 p-1 ${
              widthTap === "gate" && "border-green-600 border mainGrey"
            } rounded-lg`}
          >
            <img
              className="h-5"
              src="https://res.cloudinary.com/pitz/image/upload/v1721629407/open_sesame_night_1_tunfpk.png"
              alt=""
            />
          </button>
        </div>

        <div className="flex w-full flex-row justify-between wrap gap-10 items-center ">
          <div
            style={{ width: "50%" }}
            className="flex small flex-col p-2 gap-2 "
          >
            <p className="grey"> I want to withdrawal</p>

            <div
              className={`border ${
                widthTap === "Binance" ||
                widthTap === "gate" ||
                widthdrwal.amount > 1000
                  ? "border-red-700"
                  : "border-slate-700"
              } p-1 pr-2 h-10 rounded-2xl flex flex-row justify-between w-full items-center`}
            >
              <div className="flex flex-row gap-1 w-full">
                <DollarSign color="green" />
                <input
                  className="w-full no-border secondary"
                  type="number"
                  placeholder="100"
                  value={widthdrwal.amount}
                  name=""
                  id=""
                  onChange={(e) =>
                    setWidthdrwal({ ...widthdrwal, amount: e.target.value })
                  }
                />
              </div>
              <p onClick={()=>{
                setWidthdrwal({...widthdrwal,amount:payments})
              }} className="flex cursor-pointer flex-row items-center">
                <span className="text-green-600">Max</span> USDT{" "}
                <IoMdArrowDropdown color="white" />
              </p>
            </div>
            {widthTap === "Binance" ||
              widthTap === "gate" ||
              (widthdrwal.amount > 10000 && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "red",
                  }}
                >
                  Amount more than 10 000 USDT can only be withdrawn via USDT
                  Wallet Address method
                </p>
              ))}
          </div>
          <div className="small" style={{ width: "50%" }}>
            <div className="flex flex-row mt-2 justify-between">
              <p className="grey"> I want to receive</p>
              {/* <p className="grey">
                {" "}
                Network fee <span className="text-green-600">$ 3</span>
              </p> */}
            </div>
            <div className="mainGrey p-1 pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="mainGrey flex flex-row gap-1 w-full">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                  alt=""
                />
                <p className="flex flex-row gap-1 items-center">
                  <span
                    style={{
                      fontSize: "15px",
                    }}
                    className="grey"
                  >
                    {widthdrwal.amount !== "" ? widthdrwal.amount  : "00.00"}
                  </span>
                  USDT
                </p>
              </div>
              <SlQuestion color="white" />
            </div>
          </div>
        </div>

        <div></div>
        <p className="grey">USDT Address</p>
        <div className="p-1 pr-2 rounded-2xl w-full flex flex-row justify-between border border-slate-700 items-center">
          <div className="flex flex-row gap-1 w-full">
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
              alt=""
            />
            <div className="flex flex-row items-center gap-1 w-full">
              <DollarSign color="green" />
              <input
                className="w-full no-border secondary"
                type="text"
                placeholder="Type in your TRC20 wallet address"
                name=""
                value={pastedText}
                id=""
                onChange={
                  handleInputChange1
                }
              />
            </div>
          </div>
          <FaPaste onClick={pasteFromClipboard}  className="cursor-pointer" color="white" />
        </div>
        <p className="grey flex flex-row items-center mt-2 mb-2 gap-1">
          Transfer Details <SlQuestion color="green" />
        </p>
        <div
          style={{
            background: "#18181D",
            fontSize: "13px",
          }}
          className="p-1 pr-1 rounded-2xl w-full flex flex-row gap-1 justify-between border border-green-700 items-center"
        >
          <ul>
            <li className="flex items-center">
              <Dot size={30} color="green" /> Please send the money from your
              own account Only
            </li>
            <li className="flex items-center">
              <Dot size={30} color="green" /> Put transaction ID in the
              description field of the bank
            </li>
            <li className="flex items-center">
              <Dot size={30} color="green" /> Please note, If you do not follow
              above conditions, we will reject your transaction and send you
              back your money.
            </li>
          </ul>
        </div>
        <div className="flex mt-4 mb-4 flex-row items-center justify-center gap-20">
          <Link to="/dashboard">
            <button
              onClick={() => {
                setShow('P2P')
                window.scrollTo(0, 0);
            
            }}
              className="border p-2 w-32 rounded-lg border-slate-700"
            >
              Cancel
            </button>
          </Link>
          <button
            onClick={handleOpen}
            className="p-2 w-32 rounded-lg bg-red-700"
            disabled={loading}
          >
            {loading ? "Processing..." : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidthForm;
