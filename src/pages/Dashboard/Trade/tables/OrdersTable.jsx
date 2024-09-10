/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Message } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../../utils/APIRoutes";

function OrdersTable() {
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
console.log(payments);

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
        `${endpoint}/trading_engine/p2p/all-orders/?my_orders=true/`,
        { headers }
      );
      setPayments(res.data);
      setLoading1(false);
      console.log('payments', res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  };

  fetchData();

  const interval = setInterval(fetchData, 5000);

  return () => clearInterval(interval);
}, [user?.access, navigate]);

  console.log('payments orders',payments);
  
  const [order_type, setOrder_type] = useState('');
  const [paymentTypeFilter, setPaymentTypeFilter] = useState('');
  const [bankFilter, setBankFilter] = useState('');
  const filteredData = payments.filter(payment => {
    const amountMatch = !order_type || payment.order_type.toString().includes(order_type);
    const selectFilter = !paymentTypeFilter || payment.status.toString().includes(paymentTypeFilter);
    const bankMatch = !bankFilter || payment.asset.toString().includes(bankFilter);
    return amountMatch && selectFilter && bankMatch;
  });
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [activeButton, setActiveButton] = useState("All Orders");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Fetch data based on the button clicked
    const fetchedData = fetchData(buttonName); // Replace this with your data fetching logic
    setOrdersData(fetchedData);
    applyFilters(fetchedData, filters);
  };
  return (
    <div className="flex rounded-lg small flex-col gap-2  w-full">

    <div className="primary small wrap small-gap rounded-lg flex flex-row justify-between">
        <div className="flex wrap gap-3 small border rounded-lg p-2 border-green-600">
          <button
            onClick={() => handleButtonClick("All Orders")}
            style={{
              fontSize: "14px",
              background: activeButton === "All Orders" ? "#1D8751" : "",
            }}
            className="w-24 text-white small p-2 rounded-lg"
          >
            All Orders
          </button>
          <button
            onClick={() => handleButtonClick("Completed")}
            style={{
              fontSize: "14px",
              background: activeButton === "Completed" ? "#1D8751" : "",
            }}
            className="text-white p-1 small text-slate-300 rounded-lg"
          >
            Completed
          </button>
          <button
            onClick={() => handleButtonClick("Processing")}
            style={{
              fontSize: "14px",
              background: activeButton === "Processing" ? "#1D8751" : "",
            }}
            className="text-white p-1 text-slate-300 small rounded-lg"
          >
            Processing <span style={{ color: "#F79330" }}>(2)</span>
          </button>
          <button
            onClick={() => handleButtonClick("Canceled")}
            style={{
              fontSize: "14px",
              background: activeButton === "Canceled" ? "#1D8751" : "",
            }}
            className="text-white p-1 text-slate-300 small rounded-lg"
          >
            Canceled
          </button>
        </div>
        <button className="border small text-center justify-center small-gap flex items-center gap-1 pl-2 pr-2 p-1 rounded-3xl border-green-600 primary h-9 text-green-600">
          <Message style={{ color: "#F79330" }} fontSize="14px" /> Unread
          Messages(s)
        </button>
      </div>

      <div
        style={{ fontSize: "12px" }}
        className="flex flex-row small wrap small-gap just justify-between gap-6 mt-4 mb-4 items-center justify-between"
      >
        <button
          className="border small-gap small border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
          <select onChange={(e)=>setBankFilter(e.target.value)} className="secondary no-border w-full p-1" name="" id="">
            <option value="">Filter by Network</option>
            <option value="TRC20">
              <div className="flex g items-center gap-1">
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                  alt=""
                />
                Tether
              </div>
              USDT
            </option>
          </select>
        </button>
        <button
          className="border small-gap small border-slate-600 g rounded-2xl w-56 flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
          <select onChange={(e)=> setOrder_type(e.target.value)} className="secondary no-border w-full p-1" name="" id="">
            <option value="">
              <div className="flex items-center g gap-1">
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721924291/coins-rotate_2_kaxme7.png"
                  alt=""
                />
                Type
              </div>
            </option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </button>
        <button
          className="border small-gap small w-56 border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
          <select onChange={(e)=> setPaymentTypeFilter(e.target.value)} className="secondary no-border p-1 w-full" name="" id="">
            <option value="">
              <div className="flex items-center g gap-1">
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721924291/coins-rotate_2_kaxme7.png"
                  alt=""
                />
                Status
              </div>
            </option>
            <option value="pending">Pending</option>
            <option value="complete">Complete</option>
            <option value="processing">Complete</option>
          </select>
        </button>
        <button
          onClick={() => handleFilterChange("date", "2024-08-01")}
          className="border w-56 small small-gap border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
          <div className="flex g items-center gap-1">
            <img
              className="h-4"
              src="https://res.cloudinary.com/pitz/image/upload/v1721924277/calendar-03_didl6t.png"
              alt=""
            />
            Date
          </div>
          <p className="flex flex-row items-center">
            <IoIosArrowDown />
          </p>
        </button>
      </div>
      {activeButton==='Completed' && <div className="g text-center">No orders</div>}
      {activeButton==='Canceled' && <div className="g text-center">No orders</div>}
      {activeButton==='processing' && <div className="g text-center">No orders</div>}
      {activeButton==='All Orders' && (

      
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      <div style={{ overflowX: "auto" }}>
        <table
          className="styled-table rounded-2xl border secondary"
          style={{ minWidth: "600px" }}
        >
          <thead
            style={{
              background: "#35353E",
            }}
            className="greybg"
          >
            <tr>
              <th
                style={{
                  color: "#788099",
                }}
                className="grey"
              >
                Asset
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Type <TiArrowUnsorted />
                </th>
              </th>

              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Amount <TiArrowUnsorted />
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Rate <TiArrowUnsorted />
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Date <TiArrowUnsorted />
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Status <TiArrowUnsorted />
                </th>
              </th>

              <th
                style={{
                  color: "#788099",
                }}
              >
                Payment
              </th>
            </tr>
          </thead>
          {loading1 ? (
            <tbody className="primary">
              {Array(itemsPerPage)
                .fill({})
                .map((_, index) => (
                  <tr style={{ fontSize: "14px" }} key={index}>
                    <td className="flex flex-row items-center gap-1">
                      <Skeleton className="secondary" circle height={40} width={40} />
                      <Skeleton className="secondary" width={80} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={80} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={80} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={80} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={80} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={80} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={80} />
                    </td>
                  </tr>
                ))}
            </tbody>
          ) : filteredData.length === 0 ? (
            <tbody className="flex items-center justify-center">
              <tr>
                <td colSpan="7 w-full">
                  <p className="white">No orders yet</p>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="primary">
              {currentItems.map((row) => (
                <tr className="order-bottom" style={{ fontSize: "14px" }} key={row.id}>
                  <td className="flex flex-row items-center gap-1">
                    <img
                      className="h-10"
                      src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                      alt=""
                    />{" "}
                    {row.asset}
                  </td>
                  <td
                    className={`${
                      row.order_type === "sell" ? "text-red-700" : "text-green-700"
                    }`}
                  >
                    {row.order_type}
                  </td>
                  <td className="grey">
                    {" "}
                    <span
                      className={`${
                        row.type === "P2P Buy" ? "green" : "text-red-600"
                      }`}
                    >
                      {" "}
                      {row.type === "P2P Buy" ? "+" : "-"} {row.amount}
                    </span>{" "}
                    USD
                  </td>
                  <td className="grey">{row.commission_rate}</td>
                  <td className="grey">
                    {new Date(row.created_on).toLocaleDateString()}
                  </td>
                  <td className="grey">{row.status}</td>
                  <td className="flex flex-row items-center gap-2">
                    {row.payment_provider_name}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="pagination flex items-end justify-center g gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className={pageNumber + 1 === currentPage ? "active" : ""}
            >
              {pageNumber + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    )}
    </div>
  );
}

export default OrdersTable;
