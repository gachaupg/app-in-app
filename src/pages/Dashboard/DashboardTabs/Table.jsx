/* eslint-disable no-unused-vars */
import { MoreHoriz } from "@mui/icons-material";
import axios from "axios";
import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoint } from "../../../utils/APIRoutes";

function OrdersTable() {
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  console.log('deposits', payments);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    fetchData()
  }, [user?.access])
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
        `${endpoint}/trading_engine/p2p/deposit/`,
        { headers }
      );
      setPayments(res.data);
      setLoading1(false);
      console.log('payments', res.data);

    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedPayments = payments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(payments.length / rowsPerPage);

  return (
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
                Asset{" "}
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Id <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Type <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Amount <TiArrowUnsorted />{" "}
                </th>
              </th>
              {/* <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Rate <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Date <TiArrowUnsorted />{" "}
                </th>
              </th> */}
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Status <TiArrowUnsorted />{" "}
                </th>
              </th>

              <th
                style={{
                  color: "#788099",
                }}
              >
                Receipt
              </th>
              <th
                style={{
                  color: "#788099",
                }}
              >
                More
              </th>
            </tr>
          </thead>
          {loading1 ? (
            <tbody className="primary">
              {Array(5)
                .fill({})
                .map((_, index) => (
                  <tr style={{ fontSize: "14px" }} key={index}>
                    <td className="flex flex-row items-center gap-1">
                      <Skeleton
                        className="secondary"
                        circle
                        height={40}
                        width={40}
                      />
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
          ) : payments.length === 0 ? (
            <tbody className="flex w-full items-center justify-center">
              <tr>
                <td colSpan="7 w-full">
                  <p className="white w-full">No orders yetddd</p>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="primary">
              {paginatedPayments.map((row) => (
                <tr
                  className="order-bottom"
                  style={{ fontSize: "14px" }}
                  key={row.id}
                >
                  <td className="flex flex-row items-center gap-1">
                    <img
                      className="h-10"
                      src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                      alt=""
                    />{" "}
                    {row.asset}
                  </td>
                  <td
                    className={`${row.order_type === "sell"
                        ? "text-red-700"
                        : "text-green-700"
                      } ml-4 pl-6`}
                  >
                    {row.id}
                  </td>
                  <td
                    className={`${row.order_type === "sell"
                        ? "text-red-700"
                        : "text-green-700"
                      }`}
                  >
                    {row.order_type === "sell" ? "P2P Sell" : "P2P Buy"}
                  </td>
                  <td className="grey">
                    <span
                      className={`${row.type === "P2P Buy" ? "green" : "text-red-600"
                        }`}
                    >
                      {row.type === "P2P Buy" ? "+" : "-"} {Number(row.amount).toFixed(2)}
                    </span>{" "}
                    USD
                  </td>

                  {/* <td className="grey">{row.commission_rate}</td>
                  <td className="grey">
                    {new Date(row.created_on).toLocaleDateString()}
                  </td> */}
                  <td className="grey">{row.approved?'Complete':'Pending'}</td>
                  <td className="flex flex-row items-center gap-2">
                    <Eye color="green" />
                  </td>
                  <td>
                    <MoreHoriz />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn mx-2 white"
        >
          <IoIosArrowBack />

        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-btn g mx-1 ${currentPage === index + 1 ? "active" : ""
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn mx-2 g"
        >
          <IoIosArrowForward />

        </button>
      </div>
    </div>
  );
}

export default OrdersTable;
