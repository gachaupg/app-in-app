/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Checkbox } from "@mui/material";
import axios from "axios";
import { Clock } from "lucide-react";
import { useEffect, useState } from 'react';
import { GoThumbsup } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../../utils/APIRoutes";
import SellForm from "./SellForm";

function Table({ show, payments, isLoading, verified, setOpen }) {
  const [buy, setBuy] = useState(false);
  const [showTop, setShowTop] = useState("");
  const [id, setId] = useState("");
  const { user } = useSelector((state) => ({ ...state.auth }));

  // State for filters
  const [amount, setAmount] = useState('');
  const [paymentTypeFilter, setPaymentTypeFilter] = useState('');
  const [bankFilter, setBankFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = payments.filter(payment => {
    const amountMatch = !amount || payment.amount.toString().includes(amount);
    const paymentTypeMatch = !paymentTypeFilter || payment.payment_method_name === paymentTypeFilter;
    const bankMatch = !bankFilter || payment.payment_provider_name === bankFilter;

    return amountMatch && paymentTypeMatch && bankMatch;
  });


  const rowsPerPage = 14; // Each page has 8 rows

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedPayments = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const [depo, setdepo] = useState([]);
  const navigate = useNavigate('')
  const [loading1, setLoading1] = useState(false);
  const [payments1, setPayments] = useState([]);

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
          `${endpoint}/trading_engine/wallets/`,
          { headers }
        );
        setPayments(res.data);
        setLoading1(false);
        console.log('paymentsaagaggagag', res.data);
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [user?.access, navigate]);


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
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      {/* Filter UI */}
      <div style={{ overflowX: "auto" }}>
        <div className="flex mt-3 wrap mb-2 small flex-row gap-2 w-full justify-between p-1">
          <div style={{ width: "100%" }} className="w-full wrap small flex wrap small gap-12 flex-row p-1">
            <div className="secondary small w-56 flex h-9 border border-slate-700 p-2 rounded-lg">
              <input
                className="secondary no-border w-32 gfocus"
                type="text"
                placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
              <p style={{ width: "1px" }} className="g bg-slate-600 text-sm flex items-center h-full">
                <span style={{ fontSize: '12px' }} className="pl-1  g">USDT</span>
              </p>
            </div>

            <div className="secondary small w-64 flex h-9 border border-slate-700 p-2 rounded-lg">
              <select
                className="secondary no-border w-full g"
                onChange={(e) => setPaymentTypeFilter(e.target.value)}
                value={paymentTypeFilter}
              >
                <option value="">Select Payment Type</option>
                <option value="Bank">Bank Payment</option>
                <option value="Mobile">Mobile money</option>
                <option value="Merchant">Merchant</option>
              </select>
            </div>
            <div className="secondary small w-56 flex h-9 border border-slate-700 p-2 rounded-lg">
              <select
                className="secondary no-border w-full g"
                onChange={(e) => setBankFilter(e.target.value)}
                value={bankFilter}
              >
                <option value="">Select Bank</option>
                <option value="Salam">Salam Bank</option>
                <option value="Primier">Primier money</option>
                <option value="Amal">Amal Bank</option>
                <option value="EVC">EVC Bank</option>
              </select>
            </div>
            <div className="flex-col w-20  relative">
              <div
                onClick={() => setShowTop(showTop === "items" ? "" : "items")}
                className="flex items-center"
              >
                <img
                  alt=""
                  className="no-border h-10 w-10 text-slate-400 flex items-center justify-between cursor-pointer"
                  src="https://res.cloudinary.com/pitz/image/upload/v1723190415/Frame_35728_lllzyb.png"
                />
              </div>
              {showTop === "items" && (
                <div className="absolute top-full left-0 w-64 z-10">
                  <h2 className="secondary border border-green-700 rounded-lg p-3 items-center justify-center">
                    <p className="white flex items-center gap-1">
                      <Checkbox
                        className="border-2 check border-green-600 greenbg text-white"
                        {...label}
                      />
                      Show only Merchant ads
                    </p>
                    <p className="white flex items-center gap-1">
                      <Checkbox
                        className="border-2 check border-green-600 greenbg text-white"
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
              className="greenbg rounded-lg text-center h-9 flex items-center justify-center w-32 text-white"
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



        <div>
          {filteredData.length === 0 ? (
            <p className="g">No data found </p>
          ) : (
            <>
              <div style={{ width: "100%", overflowX: "auto" }} className="Table">
                <div style={{ overflowX: "auto" }}>
                  <table
                    className="styled-table rounded-2xl border secondary"
                    style={{ minWidth: "600px" }}
                  >          <thead style={{ background: "#35353E", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", overflow: "hidden" }} className="greybg">
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
                        : paginatedPayments.map((row, index) => (
                          <>
                            {row.order_type === 'sell' && (
                              <>
                                <tr key={row.id} className="border-bottom" style={{ fontSize: "14px" }}>
                                  <td className="flex flex-col i gap-1">
                                    <div className="flex flex-row items-center gap-1">
                                      <p className=" greenbg h-8 w-8 rounded-lg flex text-center justify-center items-center p-1 text-white">
                                        <span
                                          style={{
                                            fontSize: "14px",
                                          }}
                                          className="h-7 text-center flex items-center capitalize justify-center w-8 p-1 bg-green-600 rounded-lg"
                                        >
                                          {row?.advertiser_name?.substring(0, 2).toUpperCase()}
                                        </span>
                                      </p>
                                      <p style={{ fontSize: "16px" }} className="flex flex-row items-center gap-1">
                                        {row?.advertiser_name?.split('@')[0]}
                                        <p className="capitalize"> {row.advertiser_name.username}</p>
                                        <img src="https://res.cloudinary.com/pitz/image/upload/v1721730938/Frame_34214_gjn30n.png" alt="" />
                                      </p>
                                    </div>
                                    <p className="flex flex-row gap-1 g">
                                      <span className="green">120</span> Orders
                                      <span className="h-5 bg-slate-600" style={{ width: "1px" }}></span>
                                      <span className="green">98%</span> completion
                                    </p>
                                    <p className="flex flex-row gap-1 g">
                                      <p className="flex flex-row items-center">
                                        <span className="green flex flex-row items-center"><GoThumbsup /> 98%</span>

                                      </p> <span className="h-5 bg-slate-600" style={{ width: "1px" }}></span>
                                      <p className="flex flex-row items-center">
                                        <span className="green flex flex-row items-center"><Clock size={12} />20</span> Min</p>
                                    </p>
                                  </td>
                                  <td>{row?.commission_rate}</td>
                                  <td>
                                    <div className="flex flex-col gap-2">
                                      <p className="white">{Number(row.amount).toFixed(2)}</p>
                                      <p className=""><span className="g">{Number(row.min_order_amount).toFixed(2)}-{Number(row.max_order_amount).toFixed(2)}</span> USD</p>
                                    </div>
                                  </td>
                                  <td className="green capitalize">
                                    <p>{row.payment_provider_name}</p>
                                    <p className="secondary">{row.bank}</p>
                                  </td>
                                  <td>
                                    {
                                      payments1.map((balance) => {
                                        return (
                                          <>
                                            <button
                                              disabled={typeof balance.balance === 'string' ? formatBalance(balance.balance) < 1 : false}
                                              // onClick={() => {
                                              //   setBuy((prevBuy) => (prevBuy === row.id ? false : row.id));
                                              //   setId(row.id);
                                              // }}
                                              onClick={() => {
                                                if (row?.advertiser_name === user.user.email) {
                                                  toast.error('You cant trade your own USDT')
                                                } else {
                                                  setBuy((prevBuy) => prevBuy === row.id ? false : row.id);
                                                  setId(row.id);
                                                }
                                              }}
                                              className={`w-36 p-2 rounded-lg text-white border-none ${formatBalance(balance.balance) < 1 ? 'secondary' : 'bg-red-700'
                                                }`}
                                            >
                                              SELL USDT
                                            </button>
                                          </>
                                        )
                                      })
                                    }

                                  </td>
                                </tr>
                              </>
                            )}

                            {buy === row.id && (
                              <tr>
                                <td colSpan="5">
                                  <SellForm id={id} buy={buy} setBuy={setBuy} payments1={payments1} setId={setId} setOpen={setOpen} verified={verified} />
                                </td>
                              </tr>
                            )}
                          </>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex gap-5 items-center justify-center g p-2">
          <button
            className="bg-green-600 rounded-lg text-white p-2"
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}>
            <IoIosArrowBack className='white' />
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className="bg-green-600 rounded-lg text-white p-2"
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
          >
            <IoIosArrowForward className='white' />

          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
