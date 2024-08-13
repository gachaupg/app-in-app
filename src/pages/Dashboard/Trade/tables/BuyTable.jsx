import { useState } from 'react';
import { Checkbox } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BuyForm from "./BuyForm";
import { SlLike } from 'react-icons/sl';
import { Clock } from 'lucide-react';

function Table({ show, payments, isLoading }) {
  const [buy, setBuy] = useState(false);
  const [showTop, setShowTop] = useState("");
  const [id, setId] = useState("");

  // State for filters
  const [amount, setAmount] = useState('');
  const [paymentTypeFilter, setPaymentTypeFilter] = useState('');
  const [bankFilter, setBankFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Filter payments based on selected filters
  const filteredData = payments.filter(payment => {
    const amountMatch = !amount || payment.amount.toString().includes(amount);
    const paymentTypeMatch = !paymentTypeFilter || payment.paymentType === paymentTypeFilter;
    const bankMatch = !bankFilter || payment.bank === bankFilter;
    return amountMatch && paymentTypeMatch && bankMatch;
  });

  const paginatedPayments = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      {/* Filter UI */}
      <div style={{ overflowX: "auto" }}>
        <div className="flex mt-3 wrap mb-2 small flex-row gap-2 w-full justify-between p-1">
          <div style={{ width: "100%" }} className="w-full wrap small flex wrap small gap-16 flex-row p-1">
            <div className="secondary small w-56 flex h-12 border border-slate-700 p-2 rounded-lg">
              <input
                className="secondary w-32 text-white focus"
                type="text"
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
              <p style={{ width: "1px" }} className="g bg-slate-600 flex items-center h-full">
                <span className="pl-1 g">USDT</span>
              </p>
             
             
            </div>
        
            <div className="secondary small w-56 flex h-12 border border-slate-700 p-2 rounded-lg">
             <select
                className="secondary text-white"
                onChange={(e) => setPaymentTypeFilter(e.target.value)}
                value={paymentTypeFilter}
              >
                <option value="">Select Payment Type</option>
                <option value="Bank Payment">Bank Payment</option>
                <option value="Mobile money">Mobile money</option>
                <option value="Merchant">Merchant</option>
              </select>
             </div>
             <div className="secondary small w-56 flex h-12 border border-slate-700 p-2 rounded-lg">
             <select
                className="secondary text-white"
                onChange={(e) => setBankFilter(e.target.value)}
                value={bankFilter}
              >
                <option value="">Select Bank</option>
                <option value="Salaam Bank">Salaam Bank</option>
                <option value="Primier money">Primier money</option>
                <option value="Amal Bank">Amal Bank</option>
              </select>
             </div>
             <div className=" flex-col w-20 p-2 relative">
              <div
                onClick={() => setShowTop(showTop === "items" ? "" : "items")}
                className="flex items-center"
              >
                <img
                  alt=""
                  className=" no-border h-10 w-10 text-slate-400 flex items-center justify-between cursor-pointer"
                  // onClick={() => setShowTop(showTop === "ty" ? "" : "ty")}
                  src="https://res.cloudinary.com/pitz/image/upload/v1723190415/Frame_35728_lllzyb.png"
                />
              </div>
              {showTop === "items" && (
                <div className="absolute top-full left-0 w-64 z-10">
                  <h2 className="secondary border border-green-700 rounded-lg p-3 items-center justify-center">
                    <p className="white flex items-center gap-1">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Show only Merchant ads
                    </p>
                    <p className="white flex items-center gap-1">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Show only Merchant Business ads
                    </p>

                    <p className="white flex items-center gap-1">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Show all{" "}
                    </p>
                  </h2>
                </div>
              )}
            </div>

          <button
            className="bg-green-600 rounded-lg text-center h-12 flex items-center justify-center w-32 text-white"
            onClick={() => {
              setAmount('');
              setPaymentTypeFilter('');
              setBankFilter('');
              setCurrentPage(1); // Reset to the first page after clearing filters
            }}
          >
            <img src="https://res.cloudinary.com/pitz/image/upload/v1721729606/arrow-refresh-01_f760kl.png" alt="Refresh" />
            Refresh
          </button>
        </div>
        </div>
        {buy && (
          <div className="mb-9 mt-7">
            <BuyForm id={id} buy={buy} />
          </div>
        )}

        {/* Table */}
        <table className="styled-table rounded-2xl border border-gray-700" style={{ minWidth: "600px", borderCollapse: "separate", borderSpacing: "0" }}>
          <thead style={{ background: "#35353E", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", overflow: "hidden" }} className="greybg">
            <tr className="p-3">
              <th><div style={{ color: "#788099" }} className="flex items-center g p-3">Advertiser <TiArrowUnsorted /></div></th>
              <th><div style={{ color: "#788099" }} className="flex items-center g">Commission <TiArrowUnsorted /></div></th>
              <th><div style={{ color: "#788099" }} className="flex items-center g">Available/Order Limit <TiArrowUnsorted /></div></th>
              <th><div style={{ color: "#788099" }} className="flex items-center g">Payment <TiArrowUnsorted /></div></th>
              <th><div style={{ color: "#788099" }} className="flex items-center g">Trade <TiArrowUnsorted /></div></th>
            </tr>
          </thead>
          <tbody className="primary">
            {isLoading
              ? [...Array(rowsPerPage)].map((_, index) => (
                <tr key={index} className="border-bottom" style={{ fontSize: "14px" }}>
                  <td><Skeleton className="secondary" width={100} /></td>
                  <td><Skeleton className="secondary" width={50} /></td>
                  <td><Skeleton className="secondary" width={100} /></td>
                  <td><Skeleton className="secondary" width={150} /></td>
                  <td><Skeleton className="secondary" width={80} /></td>
                </tr>
              ))
              : paginatedPayments.map(row => row.order_type === "buy" && (
                <tr key={row.id} className="border-bottom" style={{ fontSize: "14px" }}>
                  <td className="flex flex-col i gap-1">
                    <div className="flex flex-row items-center gap-1">
                      <p style={{ fontSize: "16px" }} className="flex flex-row items-center gap-1">
                        <span style={{ fontSize: "16px" }} className="h-7 text-center flex items-center capitalize justify-center w-8 p-1 bg-green-600 rounded-lg">
                          {row.advertiser_name.username.substring(0, 1).toUpperCase() + row.advertiser_name.username.substring(1, 2).toUpperCase()}
                        </span> 
                        <p className="capitalize"> {row.advertiser_name.username}</p>
                        <img src="https://res.cloudinary.com/pitz/image/upload/v1721730938/Frame_34214_gjn30n.png" alt="" />
                      </p>
                    </div>
                    <p className="flex flex-row gap-1 g">
                      <span className="green">120</span> Orders 
                      <span className="h-5 bg-slate-600" style={{ width: "1px" }}></span> 
                      <span className="green">{row.completion_rate}%</span> Completion
                    </p>
                    <p className="flex flex-row items-center gap-1 green">
                      <SlLike /> 95% 
                      <span className="h-5 bg-slate-600" style={{ width: "1px" }}></span> 
                      <Clock size={14} /> {row.completion_time} min
                    </p>
                  </td>
                  <td>{row.commission_rate} %</td>
                  <td className="flex flex-col gap-1">
                    {row.amount} USDT
                    <p><span className="g">Limit </span> : 100-1000 USD</p>
                  </td>
                  <td>
                    <div className="flex flex-col flex-wrap">
                      <div className="flex gap-10 flex-row mb-6">
                        <div className="flex w-32 flex-row gap-1">
                          <img src="https://res.cloudinary.com/pitz/image/upload/v1721732255/Dahabshiil-International-Bank_1_noogfv.png" alt="" /> Salaam Bank
                        </div>
                      </div>
                      <div className="flex gap-10 flex-row mb-6">
                        <div className="flex w-36 flex-row gap-1">
                          <img src="https://res.cloudinary.com/pitz/image/upload/v1721732255/Dahabshiil-International-Bank_1_noogfv.png" alt="" /> Salaam Bank
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setBuy(true);
                        setId(row.id);
                      }}
                      className="bg-green-600 text-white rounded-lg w-28 flex items-center justify-center p-2"
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-6 flex gap-5 items-center justify-center g p-2">
          <button
            className="bg-green-600 rounded-lg text-white p-2"
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className="bg-green-600 rounded-lg text-white p-2"
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
