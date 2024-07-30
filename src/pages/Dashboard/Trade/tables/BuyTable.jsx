/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Clock, Eye } from "lucide-react";
import { MoreHoriz } from "@mui/icons-material";
import { SlLike } from "react-icons/sl";

function Table({show}) {
  const data = [
    {
      advertiser: "Omar Ali",
      commision: "0.6",
      Available: "1,200 USDT",
      payment: "Salam Bank",
      trade:"Buy USDT",
    },
  ];

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
     
      <div style={{ overflowX: "auto" }}>
        <table
          className="styled-table rounded-2xl  border b secondary"
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
            {data.map((row) => (
              <tr style={{ fontSize: "14px" }} key={row.advertiser}>
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
                        className=" h-7 text-center flex items-center justify-center w-8 p-1 bg-green-600 rounded-lg"
                      >
                        OA
                      </span>{" "}
                      Advertiser User Name{" "}
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
                    <span className="green">90.2%</span> Completion
                  </p>
                  <p className="flex flex-row items-center gap-1 green">
                    <SlLike /> 95%{" "}
                    <span
                      className="h-5 bg-slate-600"
                      style={{ width: "1px" }}
                    ></span>{" "}
                    <Clock size={14} /> 20 min
                  </p>
                </td>
                <td>{row.commision} %</td>
                <td className="flex flex-col gap-1">
                  {row.Available}
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
                    {row.payment}
                  </div>
                  <div className="flex w-32 flex-row gap-1">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721732255/Dahabshiil-International-Bank_1_noogfv.png"
                      alt=""
                    />{" "}
                    {row.payment}
                  </div>
                  
                  </div>
                 
                  <div className="flex gap-10 flex-row mb-6">
                  <div className="flex w-36 flex-row gap-1">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721732255/Dahabshiil-International-Bank_1_noogfv.png"
                      alt=""
                    />{" "}
                    {row.payment}
                  </div>
                  <div className="flex w-36 flex-row gap-1">
                    <img
                      src="https://res.cloudinary.com/pitz/image/upload/v1721732255/Dahabshiil-International-Bank_1_noogfv.png"
                      alt=""
                    />{" "}
                    Dahabshiil Bank
                  </div>
                  
                  </div>
                  
                </div>
               </td>
                <td>
                  <button className={`p-1 ${show==="Buy"?"bg-green-600":"bg-red-600"} rounded-lg w-32 `}>
                    {row.trade}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
