/* eslint-disable no-unused-vars */
import { Refresh } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Buy from "./Buy";
import Sell from "./Sell";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { endpoint } from "../../../utils/APIRoutes";
import { CircularProgress } from "@mui/material";

const MarketPage = () => {
  const [show, setShow] = useState("Buy");
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  // console.log("payments", payments);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate("");
  useEffect(() => {
    fetchData();
  }, [user]);
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
        `${endpoint}/trading_engine/p2p/all-orders/`,
        { headers }
      );
      setLoading1(false);
      setPayments(res.data); // Assuming the response data is what you need to set
      // console.log("hello", res);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }
  fetchData();

  return (
    <div className="flex primary rounded-lg flex-col gap-2 wi-full">
      <div
        className={`primary small border rounded-lg flex flex-row gap-2 ${
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
            <Buy payments={payments} show={show} isLoading={loading1} />
          </>
        )}
        
        {show === "Sell" && (
          <>
         
       
            <Sell payments={payments} show={show} isLoading={loading1} />
       
       
          </>
        )}
      </>
      {/* )} */}
    </div>
  );
};

export default MarketPage;
