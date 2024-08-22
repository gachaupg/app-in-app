import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { TiArrowUnsorted } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
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
        `https://omayaexchangebackend.onrender.com/trading_engine/p2p/all-orders/`,
        { headers }
      );
      setLoading1(false);
      const data = res.data.filter(
        (data) => data.advertiser_name.id === user.user.id
      );
      setPayments(res.data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(payments.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          ) : payments.length === 0 ? (
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
                    Primear bank
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
  );
}

export default OrdersTable;
