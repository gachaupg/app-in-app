import React, { useEffect, useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Checkbox, CircularProgress, Skeleton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { endpoint } from "../../../../utils/APIRoutes";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddTable() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [payments, setPayments] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
console.log(payments);

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
      const data = res.data.filter((data) => data.advertiser_name.id?.split('-')[1] === user.user.username);
      setPayments(res.data);
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
        await axios.delete(
          `${endpoint}/trading_engine/p2p/all-orders/${id}/`,
          { headers }
        );
        setPayments(payments.filter(payment => payment.id !== id));
      } catch (error) {
        console.error(`Failed to delete item with id ${id}:`, error);
      }
    }
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      <div style={{ overflowX: "auto" }}>
        {loading1 ? (
          <table className="styled-table rounded-2xl border secondary" style={{ minWidth: "600px", border: "2px solid #e0e0e0", borderRadius: "12px", overflow: "hidden" }}>
          
            <tbody className="secondary">
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="border-bottom" style={{ fontSize: "14px" }}>
                  <td><Skeleton className="g" width={100} /></td>
                  <td><Skeleton className="g" width={50} /></td>
                  <td><Skeleton className="g" width={80} /></td>
                  <td><Skeleton className="g" width={60} /></td>
                  <td><Skeleton className="g" width={60} /></td>
                  <td><Skeleton className="g" width={60} /></td>
                  <td><Skeleton className="g" width={80} /></td>
                  <td><Skeleton className="g" width={100} /></td>
                  <td><Skeleton className="g" width={60} /></td>
                  <td><Skeleton className="g" width={60} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            {payments.length === 0 ? (
              <p className="white">You Have no posts</p>
            ) : (
              <table className="styled-table rounded-2xl border secondary" style={{ minWidth: "600px", border: "2px solid #e0e0e0", borderRadius: "12px", overflow: "hidden" }}>
                <thead style={{ background: "#35353E" }} className="greybg">
                  <tr>
                    <th style={{ color: "#788099", borderTopLeftRadius: "12px" }} className="grey">Asset</th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center w-20 grey">Add ID</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center grey">Type</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center grey">Limit</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center grey">Price</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center grey">Commission</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center grey">Payment</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center w-32 grey">Last Updated</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099" }} className="flex items-center grey">Status</th>

                        </th>
                        <th>
                        <th style={{ color: "#788099", borderTopRightRadius: "12px" }}>Action</th>

                        </th>
                       
                  </tr>
                </thead>
                <tbody className="primary">
                  {payments.map((row) => (
                    <tr key={row.id} className="border-bottom" style={{ fontSize: "14px" }}>
                      <td className="flex flex-row items-center gap-1">
                        <img className="h-6" src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png" alt="" />
                        {row.asset}
                      </td>
                      <td className="grey pl-12">{row.id}</td>
                      <td className="g pl-5">{row.order_type}</td>
                      <td className="g pr-4">{row.limit ? row.limit : "00.00"}</td>
                      <td className="grey">{row.amount != null ? Number(row.amount).toFixed(2) : "0.00"}</td>
                      <td className="grey pl-8">{row.commission_rate}</td>
                      <td className="flex flex-row items-center gap-2">
                        <img className="h-5 rounded-full" src="https://res.cloudinary.com/pitz/image/upload/v1721925032/492x0w_1_rw99fe.png" alt="" />
                        {row?.payment_provider_name} 
                      </td>
                      <td className="grey pl-7">{new Date(row.created_on).toLocaleDateString()}</td>
                      <td className="text-green-700">{row.status}</td>
                      <td className="pl-6" style={{ position: "relative" }}>
                          <p className="p-1 h-7 w-7  rounded-lg greenbg flex items-center justify-center">
                          <MoreVert onClick={() => toggleDropdown(row.id)} />
                        </p>
                        {activeDropdown === row.id && (
                          <div className="primary border border-green-600 rounded-lg" style={{ position: "absolute", top: "100%", right: 0, background: "white", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", zIndex: 1000, width: "10rem" }}>
                            <ul style={{ listStyle: "none", padding: "10px", margin: 0 }}>
                              <li className="flex flex-row gap-3 items-center" style={{ padding: "5px 10px", cursor: "pointer" }}>
                                <img className="o object-contain" src="https://res.cloudinary.com/pitz/image/upload/v1722240736/bx_duplicate_zhpgvx.png" alt="" /> Duplicate
                              </li>
                              <li className="flex flex-row gap-3 items-center" style={{ padding: "5px 10px", cursor: "pointer" }}>
                                <img className="o object-contain" src="https://res.cloudinary.com/pitz/image/upload/v1722240737/Icon_5_ipnsdw.png" alt="" /> Publish
                              </li>
                              <li className="flex flex-row gap-3 items-center" style={{ padding: "5px 10px", cursor: "pointer" }}>
                                <img className="o object-contain" src="https://res.cloudinary.com/pitz/image/upload/v1722240733/Icon_4_jklbdh.png" alt="" /> Edit
                              </li>
                              <li onClick={() => handleDelete(row.id)} className="flex flex-row gap-3 items-center" style={{ padding: "5px 10px", cursor: "pointer" }}>
                                <img className="o object-contain" src="https://res.cloudinary.com/pitz/image/upload/v1722240734/Icon_3_ahflka.png" alt="" /> Delete
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AddTable;
