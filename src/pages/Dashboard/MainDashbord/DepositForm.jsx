/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import { Copy, Dot, Wallet } from "lucide-react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlQuestion } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

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

  network: "TRON",
  wallet_type: "USDT",
  amount: "",
  currency: "USDT",
  document: null,
};

const DepositForm = ({ setDeposit }) => {


  const [files, setFile] = useState('');
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = user.access;

    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      setLoading(false);
      return;
    }

    if (verify === true) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const formData = new FormData();
      formData.append('network', widthdrwal.network);
      formData.append('wallet_type', widthdrwal.wallet_type);
      formData.append('amount', widthdrwal.amount);
      formData.append('currency', widthdrwal.currency);
      if (widthdrwal.document) {
        formData.append('document', widthdrwal.document);
      }

      try {
        const response = await fetch(
          `${endpoint}/trading_engine/p2p/deposit/`,
          {
            method: "POST",
            headers: headers,
            body: formData, // Use FormData instead of JSON
          }
        );

        const data = await response.json();
        if (response.ok) {
        setOpen2(true)
          // setDeposit('P2P')
        } else if (data.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error(`Deposit failed:${data.error} `);
        }
      } catch (error) {
        toast.error(`Error: ${error.error}`);
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Invalid code");
      setLoading(false);
    }
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Value copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
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
          <p className="g">{widthdrwal.amount}USD</p>
          <button
            onClick={() => {
              setDeposit('P2P')
              window.scrollTo(0, 0);
            }}
            className="w-full mt-3 p-1 white greenbg rounded-2xl"
          >
            OK
          </button>
        </Box>
      </Modal>
      <div
        style={{ width: "100%" }}
        className="border small size border-gray-700 wrap secondary w-full rounded-2xl p-3    flex flex-col justify-between"
      >
        <div className="flex w-full flex-row gap-10 wrap items-center ">
          <div
            style={{ width: "50%" }}
            className="flex small flex-col p-1 it gap-2 "
          >
            <p className="grey"> Asset</p>
            <div className="mainGrey p-1 small pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="mainGrey  flex flex-row items-center gap-1 w-full">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />

                <p>
                  USDT <span className="grey">Tether USDT</span>
                </p>
              </div>
              <IoMdArrowDropdown color="white" />
            </div>
          </div>
          <div className="small" style={{ width: "50%" }}>
            <p className="grey"> Network</p>
            <div className="mainGrey p-1 pr-2 mt-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <div className="mainGrey items-center flex flex-row gap-1 w-full">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                  alt=""
                />
                <p>
                  TRC 20{" "}
                  <span
                    style={{
                      fontSize: "12px",
                    }}
                    className="grey"
                  >
                    Tron
                  </span>
                </p>
              </div>
              <IoMdArrowDropdown color="white" />
            </div>
          </div>
        </div>


        <div className="flex w-full flex-row gap-10 wrap items-center ">
          <div
            style={{ width: "100%" }}
            className="flex small flex-col p-1 it gap-2 "
          >
            <div className="mainGrey p-1 pr-2 mt-2 rounded-2xl flex flex-row justify-between w-full items-center">
              <input onChange={(e) => setWidthdrwal({ ...widthdrwal, amount: e.target.value })} placeholder="Amount to deposit" className="p-1 mainGrey w-full no-border" type="number" />
            </div>
          </div>

        </div>

        <div className="mainGrey border border-green-600 mt-2 mb-1  p-1 pr-2 rounded-2xl flex flex-row justify-between w-full items-center">
          <div className="flex flex-row gap-2 items-center">
            <img
              className="bg-white border border-gray-300 h-16  ml-1 m-1"
              src="https://res.cloudinary.com/pitz/image/upload/v1721644117/Group_1_kkktku.png"
              alt=""
            />
            <p className="flex flex-col gap-2">
              <p className="grey">USDT Address</p>
              <p className="green flex flex-row items-center justify-center">
                <Wallet size={16} /> 1543634364353553
              </p>
            </p>
          </div>
          <p onClick={() => copyToClipboard('1543634364353553')} className="text-green-600 cursor-pointer flex flex-row items-center gap-1">
            {" "}
            Copy <Copy size={14} className="h-15 cursor-pointer" color="green" />
          </p>
        </div>

        <p className="grey flex m-1 mt-2 flex-row items-center gap-1">
          Transfer Details <SlQuestion color="green" />
        </p>
        <div
          style={{
            background: "#18181D",
            fontSize: "14px",
          }}
          className=" p-1 pr-2 rounded-2xl w-full flex  flex-row gap-3 justify-between border border-green-700 items-center"
        >
          <ul>
            <li className="flex items-center gap-1">
              <Dot size={30} color="green" /> Please send the money from your
              own account Only
            </li>
            <li className="flex items-center gap-1">
              <Dot size={30} color="green" /> Put transaction ID in the
              description field of the bank
            </li>
            <li className="flex items-center gap-1">
              <Dot size={30} color="green" /> Please note, If you do not follow
              above conditions, we will reject your transaction and send you
              back your money.
            </li>
          </ul>
        </div>
        <div className="p-2 pr-2 small rounded-2xl w-full flex mt-3 flex-col gap-3 border border-yellow-700">
          <div className="flex flex-row items-center gap-2">
            <p style={{ fontSize: "14px" }}>Upload Documents</p>
            <label htmlFor="file-upload" className="cursor-pointer flex  items-center gap-1">
              <button
                className="bg-slate-100 p-1 w-12 flex justify-center items-center text-center rounded-lg"
                onClick={() => {
                  document.getElementById("file-upload").click();
                }}
              >
                <FiUpload className="text-yellow-700" />
              </button>
              <p>{widthdrwal.document?.name}</p>
            </label>
            <input
              id="file-upload"
              type="file"
             
              className="hidden"
              onChange={(e) => {
                setWidthdrwal({ ...widthdrwal, document: e.target.files[0] });
                toast.success('Document picked successfully');
              }

              }
            />
          </div>
          <p style={{ fontSize: "14px", color: "#788099" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5 appearance-none rounded-md border-2 border-green-600 bg-white checked:bg-green-600 checked:border-green-600 cursor-pointer relative"
            style={{
              WebkitAppearance: "none", // Ensures that the custom styles are applied across browsers
            }}
          />
          <label className="text-white">
            I confirm that I sent the payment
          </label>
        </div>

        <div className="flex mt-4 mb-4 flex-row items-center justify-center gap-20">
          <button
              onClick={() => {
                setDeposit('P2P')
                window.scrollTo(0, 0);
            
            }}
            className="border p-1 w-32 rounded-lg border-slate-700"
          >
            Cancel
          </button>
          {loading ? <CircularProgress /> :
            <button onClick={handleSubmit} className=" p-1 w-32 rounded-lg bg-green-600">Deposit</button>

          }
        </div>
      </div>
    </div>
  );
};

export default DepositForm;
