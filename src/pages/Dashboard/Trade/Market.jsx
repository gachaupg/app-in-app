/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";
import Buy from "./Buy";
import Sell from "./Sell";
import { Button, CircularProgress } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
const MarketPage = () => {
  const [show, setShow] = useState("Buy");
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  console.log("payments", payments);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate("");
  useEffect(() => {
    const fetchData1 = async () => {
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
          `${endpoint}/trading_engine/p2p/all-orders/`,
          {
          headers,
        });

        const sortedData = res.data.sort(
          (a, b) => new Date(b.created_on) - new Date(a.created_on)
        );
        const filteredData = sortedData.filter(order => order.status === "pending");
        console.log("Filtered pending orders:", filteredData);
        setPayments(filteredData);
        setLoading1(false);
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };
    fetchData1();
    const interval = setInterval(fetchData1, 5000);
    return () => clearInterval(interval);
  }, [user?.access, navigate]);
  const [kyc, setKyc] = useState([])

  console.log('kyc', kyc);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  
  const initialState = {
    document_type: "",
    document_number: "",
    document_image: ""
  }

  const [data, setdata] = useState(initialState)
  console.log('data', data);

  // https://omayaexchangebackend.onrender.com/api/kyc/status/
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [match, setMatch] = useState([]);
  const [loadingKy, setLoadingKyc] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
 

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading1(true);

    try {
      const token = user?.access;

      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        navigate("/login");
        return;
      }

      if (!data.document_type || !data.document_number) {
        toast.error("Invalid code");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const formData = new FormData();
      formData.append('document_type', data.document_type);
      formData.append('document_number', data.document_number);
      if (data.document_image) {
        formData.append('document_image', data.document_image);
      }
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      const response = await fetch(`${endpoint}/api/kyc/submit/`, {
        method: "PATCH",
        headers: headers,
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log(response);

        toast.success("Request sent successfully!");
        // fetchData();  // Assuming fetchData is defined and fetches the necessary data
        setLoadingKyc(true);
        setOpen1(false);
      } else {
        if (result.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error(`Verification failed: ${result.error || "Unknown error"}`);
        }
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "An unknown error occurred."}`);
      console.error("Error:", error);
    } finally {
      setLoading1(false);
    }
  };



  return (
    <div className="flex primary rounded-lg flex-col gap-2 w-full">
       <div>
          <Modal
            className="rounded-lg border-slate-700"
            open={open1}
            onClose={handleClose1}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            {/* <h2 className="text-slate-400  mb-3">KYC Verification</h2> */}

            <Box
              sx={{ ...style, width: "38%" }}
              className="rounded-lg small primary white border-slate-700"
            >
              <h2 className="text-center mb-4" id="child-modal-title">
                KYC Verification Form
              </h2>
              <div className="p-1">
                <div className="flex flex-row items-center justify-between p-2 w-full gap-6 wrap small">
                  <div className="flex flex-col items-center no-border w-full gap-7">
                    <select
                      onChange={(e) => setdata({ ...data, document_type: e.target.value })}
                      placeholder="Full Name"
                      required
                      type="text"
                      className="flex border border-slate-700  p-2 w-full primary text-white rounded-3xl"
                    >
                      <option value="">Select the type</option>
                      <option value="ID">ID</option>
                      <option value="Passport">Passport</option>
                    </select>
                    <input
                      onChange={(e) => setdata({ ...data, document_number: e.target.value })}

                      placeholder="Document Number"
                      required
                      type="number"
                      className="flex border border-slate-700  p-2 w-full primary text-white rounded-3xl"
                    />
                    <input
                      onChange={(e) => {
                        setdata({ ...data, document_image: e.target.files[0] });
                        toast.success('document picked successfully')
                      }
                      }

                      placeholder="Date of birth"
                      required
                      type="file"
                      className="flex border border-slate-700  p-2 w-full primary text-white rounded-3xl"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center mt-10 justify-between p-2 w-full gap-6 wrap small">
                  <Button
                    className="white txt border p-1 border-slate"
                    onClick={handleClose1}
                  >
                    Close
                  </Button>
                  {
                    loading1 ?
                      <div className="flex items-center justify-center">
                        <CircularProgress />
                      </div>
                      : <Button
                        onClick={handleSubmit}
                        className="white txt1 border p-1 border-slate"
                      >
                        Submit
                      </Button>
                  }
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      <div
        className={`primary  border rounded-lg flex flex-row gap-2 ${
          show === "Buy" ? "border-green-600" : "border-red-600"
        } w-36 p-1`}
      >
        <button
          onClick={() => setShow("Buy")}
          className={`p-1 ${
            show === "Buy" ? "bg-green-600" : ""
          } rounded-lg text-center flex items-center justify-center w-16 text-white`}
        >
          Buy
        </button>
        <button
          onClick={() => setShow("Sell")}
          className={`p-1 ${
            show === "Sell" ? "bg-red-600" : ""
          } rounded-lg text-center flex items-center justify-center w-16 text-white`}
        >
          Sell
        </button>
      </div>
      {/* {loading1 ? (
        <div className="flex items-center justify-center mt-20">
           <CircularProgress className="green" />
       </div>
      ) : ( */}
      <>
        {show === "Buy" && (
          <>
            <Buy setIsloading={setLoading1} payments={payments} show={show} isLoading={loading1} verified={kyc.is_verified} setOpen={setOpen} />
          </>
        )}
        {show === "Sell" && (
          <>
            <Sell setIsloading={setLoading1} payments={payments} show={show} isLoading={loading1} verified={kyc.is_verified} setOpen={setOpen} />
          </>
        )}
      </>
      {/* )} */}
    </div>
  );
};

export default MarketPage;
