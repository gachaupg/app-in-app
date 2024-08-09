/* eslint-disable react/prop-types */
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Clock, Eye } from "lucide-react";
import { CheckBox, MoreHoriz } from "@mui/icons-material";
import { SlLike } from "react-icons/sl";
import { useState } from "react";
import BuyForm from "./BuyForm";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IoIosArrowDown } from "react-icons/io";
import { Checkbox } from "@mui/material";

function Table({ show, payments, isLoading }) {
  const [buy, setBuy] = useState(false);
  const [showTop, setShowTop] = useState("");
  const [id, setId] = useState("");

  // State for filters
  const [amountFilter, setAmountFilter] = useState("");
  const [paymentTypeFilter, setPaymentTypeFilter] = useState("");
  const [bankFilter, setBankFilter] = useState("");

  // Filter payments based on selected filters
  const filteredPayments = payments.filter((payment) => {
    const matchesAmount = amountFilter ? payment.amount === amountFilter : true;
    const matchesPaymentType = paymentTypeFilter
      ? payment.payment_type === paymentTypeFilter
      : true;
    const matchesBank = bankFilter ? payment.bank === bankFilter : true;
    return matchesAmount && matchesPaymentType && matchesBank;
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      <div style={{ overflowX: "auto" }}>
        <div className="flex mt-3 wrap mb-2 small flex-row gap-2 w-full justify-between p-1">
          <div
            style={{ width: "80%" }}
            className="w-full wrap small flex wrap small gap-20 flex-row p-1"
          >
            <div className="secondary small w-56 flex h-12 border border-slate-700 p-2 rounded-lg">
              <input
                className="secondary w-32 text-white focus"
                type="text"
                placeholder="Enter amount"
                value={amountFilter}
                onChange={(e) => setAmountFilter(e.target.value)}
              />
              <p
                style={{ width: "1px" }}
                className="grey bg-slate-600 h-full"
              ></p>
              <select className="secondary text-white" name="" id="">
                <option value="usdt">USDT</option>
              </select>
              </div>

              <div className="w-56 h-12 small flex flex-col border border-slate-700 p-2 rounded-lg relative">
              <div className="flex items-center">
                <img
                  className="mr-1"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721729168/coins-rotate_1_pkc6kn.png"
                  alt=""
                />
                <p
                  className="w-full no-border text-slate-400 flex items-center justify-between cursor-pointer"
                  onClick={() => setShowTop(showTop === "Pay" ? "" : "Pay")}
                >
                  Payment Type <IoIosArrowDown />
                </p>
              </div>
              {showTop === "Pay" && (
                <div className="absolute  small top-full left-0 w-full z-10">
                  <h2 className="secondary small border border-green-700 rounded-lg p-3 items-center justify-center">
                    <p className="white flex items-center gap-3">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Bank Payment
                    </p>
                    <p className="white flex items-center gap-3">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Mobile money
                    </p>
                    <p className="white flex items-center gap-3">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Merchant
                    </p>
                    <p className="white flex items-center gap-3">
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
             <div className="w-56 h-12 flex flex-col small  border border-slate-700 p-2 rounded-lg relative">
              <div className="flex items-center">
                <img
                  className="mr-1"
                  src="https://res.cloudinary.com/pitz/image/upload/v1723190431/tdesign_undertake-transaction_1_ioowqv.png"
                  alt=""
                />
                <p
                  className="w-full no-border text-slate-400 flex items-center justify-between cursor-pointer"
                  onClick={() => setShowTop(showTop === "Bank" ? "" : "Bank")}
                >
                  Select Bank <IoIosArrowDown />
                </p>
              </div>
              {showTop === "Bank" && (
                <div className="absolute top-full left-0 w-full z-10">
                  <h2 className="secondary border border-green-700 rounded-lg p-3 items-center justify-center">
                    <p className="white flex items-center gap-3">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Salam Bank
                    </p>
                    <p className="white flex items-center gap-3">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Primier money
                    </p>
                    <p className="white flex items-center gap-3">
                      <Checkbox
                        className="border-2 check border-green-600 bg-green-600 text-white"
                        {...label}
                      />
                      Amal Bank
                    </p>
                    <p className="white flex items-center gap-3">
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
             {/* <div className="secondary border border-slate-700 p-2 rounded-lg mt-2">
              <select
                className="secondary no-border w-full text-slate-400"
                name=""
                id=""
                value={bankFilter}
                onChange={(e) => setBankFilter(e.target.value)}
              >
                <option value="">Select Bank</option>
                <option value="Salaam Bank">Salaam Bank</option>
                <option value="Premier Bank">Premier Bank</option>
                <option value="Dahabshiil Bank">Dahabshiil Bank</option>
                <option value="Amal Bank">Amal Bank</option>
                <option value="All">All</option>
              </select>
             </div> */}
              </div>

          <div className=" flex-col w-32 p-2 relative">
            <div
              onClick={() => setShowTop(showTop === "items" ? "" : "items")}
              className="flex items-center"
            >
              <img
                alt=""
                className=" no-border h-10 w-10 text-slate-400 flex items-center justify-between cursor-pointer"
                onClick={() => setShowTop(showTop === "ty" ? "" : "ty")}
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
            className="
      bg-green-600
      rounded-lg text-center h-12 flex items-center justify-center w-32 text-white"
            onClick={() => {
              setAmountFilter("");
              setPaymentTypeFilter("");
              setBankFilter("");
              window.location.reload();
            }}
          >
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721729606/arrow-refresh-01_f760kl.png"
              alt=""
            />
            Refresh
          </button>
        </div>

        {buy && (
          <div className="mb-9 mt-7">
            <BuyForm id={id} buy={buy} />
          </div>
        )}
        <table
          className="styled-table rounded-2xl border border-gray-700"
          style={{
            minWidth: "600px",
            borderCollapse: "separate",
            borderSpacing: "0",
          }}
        >
          <thead
            style={{
              background: "#35353E",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              overflow: "hidden",
            }}
            className="greybg"
          >
            <tr className="p-3">
              <th>
                <div
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g p-3"
                >
                  Advertiser <TiArrowUnsorted />
                </div>
              </th>
              <th>
                <div
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Commission <TiArrowUnsorted />
                </div>
              </th>
              <th>
                <div
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Available/Order Limit <TiArrowUnsorted />
                </div>
              </th>
              <th>
                <div
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Payment <TiArrowUnsorted />
                </div>
              </th>
              <th>
                <div
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Trade <TiArrowUnsorted />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="primary ">
            {isLoading
              ? // Render skeletons while loading
                [...Array(5)].map((_, index) => (
                  <tr
                    key={index}
                    className="border-bottom"
                    style={{ fontSize: "14px" }}
                  >
                    <td>
                      <Skeleton className="secondary" width={100} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={50} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={100} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={150} />
                    </td>
                    <td>
                      <Skeleton className="secondary" width={80} />
                    </td>
                  </tr>
                ))
              : filteredPayments.map(
                  (row) =>
                    row.order_type === "buy" && (
                      <tr
                        key={row.id}
                        className="border-bottom"
                        style={{ fontSize: "14px" }}
                      >
                        <td className="flex flex-col i  gap-1">
                          <div className="flex flex-row items-center gap-1">
                            <p
                              style={{
                                fontSize: "16px",
                              }}
                              className="flex flex-row items-center gap-1"
                            >
                              <span
                                style={{
                                  fontSize: "16px",
                                }}
                                className="h-7 text-center flex items-center capitalize justify-center w-8 p-1 bg-green-600 rounded-lg"
                              >
                                {row.advertiser_name.username
                                  .substring(0, 1)
                                  .toUpperCase() +
                                  row.advertiser_name.username
                                    .substring(1, 2)
                                    .toUpperCase()}
                              </span>{" "}
                              <p className="capitalize">
                                {" "}
                                {row.advertiser_name.username}
                              </p>
                              <img
                                src="https://res.cloudinary.com/pitz/image/upload/v1721730938/Frame_34214_gjn30n.png"
                                alt=""
                              />
                            </p>
                          </div>
                          <p className="flex flex-row gap-1 g">
                            {" "}
                            <span className="green">120</span> Orders{" "}
                            <span
                              className="h-5 bg-slate-600"
                              style={{ width: "1px" }}
                            ></span>{" "}
                            <span className="green">
                              {row.completion_rate}%
                            </span>{" "}
                            Completion
                          </p>
                          <p className="flex flex-row items-center gap-1 green">
                            <SlLike /> 95%{" "}
                            <span
                              className="h-5 bg-slate-600"
                              style={{ width: "1px" }}
                            ></span>{" "}
                            <Clock size={14} /> {row.completion_time} min
                          </p>
                        </td>
                        <td>{row.commission_rate} %</td>
                        <td className="flex flex-col gap-1">
                          {row.amount} USDT
                          <p>
                            <span className="g">Limit </span> : 100-1000 USD
                          </p>
                        </td>
                        <td>
                          <div className="flex flex-col flex-wrap">
                            <div className="flex gap-10 flex-row mb-6">
                              <div className="flex w-32 flex-row gap-1">
                                <img
                                  src="https://res.cloudinary.com/pitz/image/upload/v1721732255/Dahabshiil-International-Bank_1_noogfv.png"
                                  alt=""
                                />{" "}
                                Salaam Bank
                              </div>
                            </div>

                            <div className="flex gap-10 flex-row mb-6">
                              <div className="flex w-36 flex-row gap-1">
                                <img
                                  src="https://res.cloudinary.com/pitz/image/upload/v1721732255/Dahabshiil-International-Bank_1_noogfv.png"
                                  alt=""
                                />{" "}
                                Salaam Bank
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
                            className={`p-2 ${
                              show === "Buy" ? "bg-green-600" : "bg-red-600"
                            } rounded-lg w-32 `}
                          >
                            Buy USDT
                          </button>
                        </td>
                      </tr>
                    )
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
