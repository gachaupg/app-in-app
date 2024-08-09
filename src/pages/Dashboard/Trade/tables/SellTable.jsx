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

function SellTable({ show, payments, isLoading }) {
  const [buy, setBuy] = useState(false);
  const [id, setId] = useState("");

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      {buy && (
        <>
          <SellForm id={id} buy={buy} />
        </>
      )}
      <div style={{ overflowX: "auto" }}>
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
