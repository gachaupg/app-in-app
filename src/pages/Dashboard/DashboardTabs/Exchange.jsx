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

function ExchangeTable() {
  const [payments, setPayments] = useState([]);
  const [payments1, setPayments1] = useState([]);
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
        `${endpoint}/trading_engine/all-transactions/`,
        { headers }
      );
      const filteredData =
        res.data.transactions.filter(transaction => transaction.transaction_type === "deposit");

      setPayments1(res.data);
      setLoading1(false);
      console.log('payments exchange', res.data);

    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }
  console.log('hello', payments1);

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
        console.log('payments', res.data);
      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [user?.access, navigate]);






  const [match, setMatch] = useState([]);
  const [loadingStates, setLoadingStates] = useState({}); // Track loading states by transaction ID
  const [transactions, setTransactions] = useState([]);
  const [id, setId] = useState('');

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
          `${endpoint}/trading_engine/all-transactions/`,
          { headers }
        );

        const filteredData = res.data.transactions.filter(transaction => transaction.user_email === user.user.email);

        setMatch(filteredData);
        console.log('Filtered Transactions:', res.data);

      } catch (error) {
        console.log(error);
        setLoading1(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [user?.access, navigate]);

  console.log('match', match);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedPayments = match.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(match.length / rowsPerPage);


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
          ) : match.length === 0 ? (
            <tbody className="flex w-full items-center justify-center">
              <tr>
                <td colSpan="7 w-full">
                  <p className="white w-full">No orders yet</p>
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
                      className="h-7"
                      src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                      alt=""
                    />{" "}
                    {row.asset}
                  </td>
                  <td
                    className={`g
                      } `}
                  >
                    {row.transaction_id.substring(0, 20)}
                  </td>
                  <td
                    className={`${row.transaction_type === "deposit"
                      ? "text-green-700"
                      : "text-red-700"
                      }`}
                  >
                    {row.transaction_type === "deposit" ? "Deposit" : "Withdrawal"}
                  </td>
                  <td className="grey">
                    <span
                      className={`${row.transaction_type === "deposit" ? "green" : "text-red-600"
                        }`}
                    >
                      {row.transaction_type === "deposit" ? "+" : "-"} {Number(row.amount).toFixed(2)}
                    </span>{" "}
                    USD
                  </td>

                  {/* <td className="grey">{row.commission_rate}</td>
                  <td className="grey">
                    {new Date(row.created_on).toLocaleDateString()}
                  </td> */}
                  <td className="grey">{row.status}</td>
                  <td className="flex flex-row mt-2 items-center gap-2">
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

export default ExchangeTable;
