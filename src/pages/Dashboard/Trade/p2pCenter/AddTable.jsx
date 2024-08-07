/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Eye } from "lucide-react";
import { MoreVert } from "@mui/icons-material";
import { endpoint } from "../../../../utils/APIRoutes";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

function AddTable() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const data = [
    {
      id: 16657,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 100,
      status: "Published",
    },
    {
      id: 26767,
      type: "P2P Sell",
      date: "12-Jun-2023",
      amount: 200,
      status: "Failed",
    },
    {
      id: 37766,
      type: "P2p Sell",
      date: "12-Jun-2023",
      amount: 300,
      status: "Published",
    },
    {
      id: 48888,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 400,
      status: "Failed",
    },
    {
      id: 57878,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 500,
      status: "Published",
    },
  ];

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  // console.log("payments", payments);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate("");

  useEffect(() => {
    fetchData();
  }, [user]);

  async function fetchData() {
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
        `${endpoint}/trading_engine/p2p/all-orders/`,
        { headers }
      );
      setLoading1(false);
      const data = res.data.filter((data) => data.advertiser_name.id === user.user.id);
      setPayments(data);
      console.log("hello", data);
    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
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

    if (confirmed) {
      try {
        const res = await axios.delete(
          `${endpoint}/trading_engine/p2p/all-orders/${id}/`, // Assuming the URL for deleting an item by ID
          { headers }
        );
        console.log(`Item with id ${id} deleted`);
      } catch (error) {
        console.error(`Failed to delete item with id ${id}:`, error);
      }
    }
  };
  

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      {/* <div className="p-1 flex flex-row gap-10 mb-2 justify-between items-center">
        <h2 className="white flex flex-row gap-1">
          Transaction History{" "}
          <p className="grey flex flex-row gap-1  items-center">
            month <MdOutlineKeyboardArrowDown />
          </p>
        </h2>

        <img
          src="https://res.cloudinary.com/pitz/image/upload/v1721374921/Group_164057_uqm3f1.png"
          alt=""
        />
      </div> */}
      <div style={{ overflowX: "auto" }}>
        {payments.length === 0 ? (
          <p className="white">You Have no posts</p>
        ) : (
          <>
            {loading1 ? (
              <div>
                <CircularProgress className="text-green-600" />
              </div>
            ) : (
              <>
                <table
                  className="styled-table rounded-2xl border secondary"
                  style={{
                    minWidth: "600px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
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
                          borderTopLeftRadius: "12px",
                        }}
                        className="grey"
                      >
                        Asset{" "}
                      </th>
                      <th>
                        <th
                          style={{
                                color: "#788099",
                            fontSize:'12px'
                          }}
                          className="flex flex-row w-20 ml-2 items-center grey"
                        >
                          Add ID <TiArrowUnsorted />
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
                          Limit <TiArrowUnsorted />{" "}
                        </th>
                      </th>
                      <th>
                        <th
                          style={{
                            color: "#788099",
                          }}
                          className="flex items-center grey"
                        >
                          Price <TiArrowUnsorted />{" "}
                        </th>
                      </th>
                      <th>
                        <th
                          style={{
                            color: "#788099",
                          }}
                          className="flex items-center grey"
                        >
                          Commission <TiArrowUnsorted />{" "}
                        </th>
                      </th>
                      <th>
                        <th
                          style={{
                            color: "#788099",
                          }}
                          className="flex items-center grey"
                        >
                          Payment <TiArrowUnsorted />{" "}
                        </th>
                      </th>
                     
                        <th
                          style={{
                            color: "#788099",
                          }}
                          className="flex  w-24 items-center grey"
                        >
                          Last Updated <TiArrowUnsorted />{" "}
                        </th>
                    
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
                          borderTopRightRadius: "12px",
                        }}
                      >
                        Action
                      </th>
                      <th
                        className="proimary w-20"
                        style={{
                          borderTopRightRadius: "12px",
                        }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="primary">
                    {payments.map((row) => (
                      <tr
                        key={row.id}
                        className="border-bottom"
                        style={{ fontSize: "14px" }}
                      >
                        <td className="flex flex-row items-center gap-1">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                            alt=""
                          />
                          {row.asset}
                        </td>
                        <td className="grey pl-5">{row.id}</td>
                        <td className="g pl-5">{row.order_type}</td>
                        <td className="g pr-4">
                          {row.limit ? row.limit : "00.00"}
                        </td>
                        <td className="grey">
                          {row.amount != null
                            ? Number(row.amount).toFixed(2)
                            : "0.00"}
                        </td>

                        <td className="grey pl-8">{row.commission_rate}</td>
                        <td className="flex flex-row items-center gap-2">
                          <img
                            className="h-5 rounded-full"
                            src="https://res.cloudinary.com/pitz/image/upload/v1721925032/492x0w_1_rw99fe.png"
                            alt=""
                          />
                          {row.payment_provider.provider_name}
                        </td>
                        <td className="grey pl-7">
                          {new Date(row.created_on).toLocaleDateString()}
                        </td>

                        <td className="text-green-700">{row.status}</td>
                        <td style={{ position: "relative" }}>
                          <p className="p-1 h-7 w-7 rounded-lg bg-green-600 flex items-center justify-center">
                            {" "}
                            <MoreVert onClick={() => toggleDropdown(row.id)} />
                          </p>
                          {activeDropdown === row.id && (
                            <div
                              className="primary border border-green-600 rounded-lg"
                              style={{
                                position: "absolute",
                                top: "100%",
                                right: 0,
                                background: "white",
                                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                                zIndex: 1000,
                                width: "10rem",
                              }}
                            >
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: "10px",
                                  margin: 0,
                                }}
                              >
                                <li
                                  className="flex flex-row gap-3 items-center"
                                  style={{
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                  }}
                                >
                                  {" "}
                                  <img
                                    className="o object-contain"
                                    src="https://res.cloudinary.com/pitz/image/upload/v1722240736/bx_duplicate_zhpgvx.png"
                                    alt=""
                                  />{" "}
                                  Duplicate
                                </li>
                                <li
                                  className="flex flex-row gap-3 items-center"
                                  style={{
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <img
                                    className="o object-contain"
                                    src="https://res.cloudinary.com/pitz/image/upload/v1722240737/Icon_5_ipnsdw.png"
                                    alt=""
                                  />
                                  Publish
                                </li>
                                <li
                                  className="flex flex-row gap-3 items-center"
                                  style={{
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <img
                                    className="o object-contain"
                                    src="https://res.cloudinary.com/pitz/image/upload/v1722240733/Icon_4_jklbdh.png"
                                    alt=""
                                  />
                                  Edit
                                </li>
                                <li
                                  // onClick={handleDelete(row.id)}
                                  className="flex flex-row gap-3 items-center"
                                  style={{
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <img
                                    className="o object-contain"
                                    src="https://res.cloudinary.com/pitz/image/upload/v1722240734/Icon_3_ahflka.png"
                                    alt=""
                                  />
                                  Delete
                                </li>
                              </ul>
                            </div>
                          )}
                        </td>
                        <td>
                          <input
                            className="h-8 w-8 border border-green-700 primary rounded-lg checkbox-custom"
                            type="checkbox"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AddTable;
