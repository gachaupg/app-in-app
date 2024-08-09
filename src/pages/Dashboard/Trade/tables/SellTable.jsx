/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Clock, Eye } from "lucide-react";
import { MoreHoriz } from "@mui/icons-material";
import { SlLike } from "react-icons/sl";
import { useState } from "react";
import SellForm from "./SellForm";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BuyForm from "./BuyForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Checkbox } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
function SellTable({ show, payments, isLoading }) {
  const [buy, setBuy] = useState(false);
  const [id, setId] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '60%',
    bgcolor: "background.paper",
    marginLeft: '5rem',
    marginTop:"6rem",
    // border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showTop, setShowTop] = useState("");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      
      <div style={{ overflowX: "auto" }}>
      <div className="flex mt-3 wrap mb-2 small flex-row gap-2 w-full justify-between p-1">
         
      <div
            style={{ width: "100%" }}
            className="w-full wrap small flex wrap small gap-20 flex-row p-1"
          >
            <div className="secondary  w-56 flex h-12 border border-slate-700 p-2 rounded-lg">
              <input
                className="secondary w-32 text-white focus"
                type="text"
                placeholder="Enter amount"
                // value={amountFilter}
                // onChange={(e) => setAmountFilter(e.target.value)}
              />
              <p
                style={{ width: "1px" }}
                className="grey bg-slate-600 h-full"
              ></p>
              <select className="secondary text-white" name="" id="">
                <option value="usdt">USDT</option>
              </select>
              </div>

              <div className="w-56 h-12 flex flex-col border border-slate-700 p-2 rounded-lg relative">
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
                <div className="absolute top-full left-0 w-full z-10">
                  <h2 className="secondary border border-green-700 rounded-lg p-3 items-center justify-center">
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
             <div className="w-56 h-12 flex flex-col border border-slate-700 p-2 rounded-lg relative">
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
              // setAmountFilter("");
              // setPaymentTypeFilter("");
              // setBankFilter("");
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
          </div>

              {buy && (
        < div className="mb-8 mt-4">
          <SellForm id={id} buy={buy} />
        </div>
      )}
        <table
          className="styled-table rounded-2xl border border-gray-700"
          style={{ minWidth: "600px", borderCollapse: "separate", borderSpacing: "0" }}
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
            <tr>
              <th
                style={{
                  color: "#788099",
                }}
                className="flex items-center g"
              >
                Advertiser <TiArrowUnsorted />{" "}
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Commission <TiArrowUnsorted />
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Available/Order Limit <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Payment <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center g"
                >
                  Trade <TiArrowUnsorted />{" "}
                </th>
              </th>
            </tr>
          </thead>
          <tbody className="primary ">
            {isLoading ? (
              // Render skeletons while loading
              [...Array(5)].map((_, index) => (
                <tr key={index} style={{ fontSize: "14px" }}>
                  <td><Skeleton className="secondary" width={100} /></td>
                  <td><Skeleton className="secondary" width={50} /></td>
                  <td><Skeleton className="secondary" width={100} /></td>
                  <td><Skeleton className="secondary" width={150} /></td>
                  <td><Skeleton className="secondary" width={80} /></td>
                </tr>
              ))
            ) : (
              payments.map((row) => (
                <>
                  {row.order_type === 'sell' && (
                    <tr
                      style={{
                        fontSize: "14px",
                        borderBottom: "1px solid #E0E0E0",
                      }}
                      key={row.id}
                    >
                      <td className="flex flex-col i gap-1">
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
                              {row.advertiser_name.username.substring(0, 2)}
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
                          <span className="green">{row.completion_rate}%</span>{" "}
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
                        <div className="flex flex-col flex-wrap  ">
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
                          className= "p-2 bg-red-600 rounded-lg w-32"
                        >
                          Sell USDT
                        </button>
                      </td>
                     
                    </tr>
                  )}
                </>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SellTable;
