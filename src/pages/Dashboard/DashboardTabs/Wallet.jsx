/* eslint-disable no-unused-vars */
import { Delete } from "@mui/icons-material";
import { CircularProgress } from "@mui/joy";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
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


const Wallet = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate("");
  const [show, setShow] = useState(false);
  const [wallet, setWallet] = useState('Bank');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initialState = {
    provider_name: "",
    account_name: "",
    account_number: "",
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
console.log(form);

  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);

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
         `${endpoint}/trading_engine/user-payment-details/`,        ); // Debugging line
        const response = await fetch(
          `${endpoint}/trading_engine/user-payment-details/`,              {
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


  return (
    <div className="flex flex-wrap justify-center pl-10 pt-5 gap-2">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
        <Box className="primary white" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
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
      <div style={{ width: "100%" }}>
        <div className="flex flex-row justify-between text-slate-300 mb-2 relative">
          <p>Wallet</p>
          <div className="relative">
            <Plus onClick={() => setShow(!show)} color="green" />
            {show && (
              <div className="absolute right-0 mt-2 w-48 primary border   border-slate-700 rounded-md shadow-lg">
                <div className="p-2 gap-3 flex flex-col ">
                <p className="white cursor-pointer" onClick={handleOpen}>Bank Account</p>
                <p className="white">Forex  Wallet</p>
                <p className="white">Crypto Wallet</p>
                <p className="white">Mobile  Wallet</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full border secondary border-slate-700 rounded-lg p-2">
          <p className="text-slate-400 text-xm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <p className="text-slate-400 mt-5 text-xm">Crypto Wallets</p>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-white bg-green-900 p-2 rounded-full h-7 w-7 mt-5 flex items-center justify-center text-center">
              T
            </p>
            <p className="text-slate-400 mt-4">USDT ERc20</p>
          </div>
          <div className="flex border-slate-700 mt-4 rounded-3xl pl-5 items-center flex-row w-full">
            <input
              placeholder="Type in here your wallet address"
              className="flex p-1 secondary border border-slate-700 mt-4 rounded-3xl pl-5 flex-row w-full"
              type="text"
            />
            <Delete className="text-green-600" color="red" />
          </div>

          <p className="text-slate-400 mt-5 text-xm">Crypto Wallets</p>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-white bg-green-900 p-2 rounded-full h-7 w-7 mt-5 flex items-center justify-center text-center">
              T
            </p>
            <p className="text-slate-400 mt-4">USDT TRC20</p>
          </div>
          <div className="flex border-slate-700 mt-4 rounded-3xl pl-5 items-center flex-row w-full">
            <input
              placeholder="Type in here your wallet address"
              className="flex p-1 secondary border border-slate-700 mt-4 rounded-3xl pl-5 flex-row w-full"
              type="text"
            />
            <Delete className="text-green-600" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
