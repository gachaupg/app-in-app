/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCashRegister, FaExclamationCircle, FaHome, FaLifeRing, FaUserShield, FaUsers, FaUsersCog, FaWallet } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Admin.css';


const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [match, setMatch] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [transactions, setTransactions] = useState([])
  //  https://omayaexchangebackend.onrender.com/trading_engine/all-transactions/
  console.log(match);
  const user_id = user.user.id


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
        ` https://omayaexchangebackend.onrender.com/api/users/`,
        { headers }
      );
      setMatch(res.data);
      setLoading1(false);
      console.log('payments', res.data);

    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }


  const [id, setId] = useState('')
  const [kyc, setKyc] = useState([])
  console.log('kyc data', kyc);


  useEffect(() => {
    fetchKyc()
  }, [user])
  async function fetchKyc() {
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
        `https://omayaexchangebackend.onrender.com/api/kyc/status/`,
        { headers }
      );
      setKyc(res.data);
      console.log(res.data);

      setLoading1(false);

    } catch (error) {
      console.log(error);
      setLoading1(false);
    }
  }

  const handleSubmit = async () => {
    setLoading1(true);
    console.log(id);
    
    try {
      const token = user?.access;
      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        navigate("/login");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Set content type to JSON
      };

      const response = await fetch(`https://omayaexchangebackend.onrender.com/api/kyc/verify/`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ user_id: id }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(response);
        toast.success("Approved successfully!");
      } else {
        if (result.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error(`Verification failed: ${result.error || "Unknown error"}`);
        }
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "An unknown error occurred."}`);
      console.error("Error:", error);
    } finally {
      setLoading1(false);
    }
  };

const [deposit,setDeposit]=useState([])

  useEffect(() => {
    fetchData1();
  }, [user?.access]);
  console.log(match);
  
  async function fetchData1() {
    const token = user?.access;
  
    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      return;
    }
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    try {
      const res = await axios.get(
        `https://omayaexchangebackend.onrender.com/trading_engine/all-transactions/`,
        { headers }
      );
  
      // Filter transactions by "withdrawal"
      const filteredData = 
      res.data.transactions.filter(transaction => transaction.transaction_type === "deposit");
  
      setDeposit(filteredData);
      console.log('Filtered Transactions:', filteredData);
  
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch transactions. Please try again.');
    }
  }


  const [width,setWidth]=useState([])

  useEffect(() => {
    fetchData2();
  }, [user?.access]);
  console.log(match);
  
  async function fetchData2() {
    const token = user?.access;
  
    if (!token) {
      toast.error("Authentication token is missing. Please log in again.");
      navigate("/login");
      return;
    }
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    try {
      const res = await axios.get(
        `https://omayaexchangebackend.onrender.com/trading_engine/all-transactions/`,
        { headers }
      );
  
      // Filter transactions by "withdrawal"
      const filteredData = 
      res.data.transactions.filter(transaction => transaction.transaction_type === "withdrawal");
  
      setWidth(filteredData);
      console.log('Filtered Transactions:', filteredData);
  
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch transactions. Please try again.');
    }
  }


const [P2pDeposit,setp2pdeposit]=useState([])
useEffect(() => {
  fetchData5()
}, [user?.access])
async function fetchData5() {
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
      `https://omayaexchangebackend.onrender.com/trading_engine/p2p/deposit/`,
      { headers }
    );
    setp2pdeposit(res.data);
    setLoading1(false);
    console.log('payments', res.data);

  } catch (error) {
    console.log(error);
    setLoading1(false);
  }
}

const [p2pwidth,setP2PWidth]=useState([])
useEffect(() => {
  fetchData4()
}, [user?.access])
async function fetchData4() {
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
      `https://omayaexchangebackend.onrender.com/trading_engine/p2p-withdraw/`,
      { headers }
    );
    setP2PWidth(res.data);
    setLoading1(false);
    console.log('payments', res.data);

  } catch (error) {
    console.log(error);
    setLoading1(false);
  }
}

  return (
    <div className="container  p-0 m-0">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <nav className="w-full md:w-1/4 lg:w-1/6  text-white h-150 p-0 m-0" style={{ backgroundColor: '#1D1D23' }}>
          <div className="sticky top-0 h-full">
            <h4 className="text-center text-lg mb-4">Omaya Admin</h4>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `block mb-4 px-3 py-2 rounded ${isActive ? 'bg-green-700' : ''} hover:bg-green-600`
              }
            >
              <FaHome className="inline-block mr-2" /> Dashboard
            </NavLink>
            <Link to="/kyc" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaUserShield className="inline-block mr-2" /> KYC
            </Link>
            <Link to="/p2pdeposit" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaUsers className="inline-block mr-2" /> P2P Deposit Approval
            </Link>
            <Link to="/p2pwithdraw" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaUsersCog className="inline-block mr-2" /> P2P Withdrawal Approval
            </Link>
            <Link to="/exchangedeposit" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaWallet className="inline-block mr-2" /> Exchange Deposit
            </Link>
            <Link to="/exchangewithdraw" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaCashRegister className="inline-block mr-2" /> Exchange Withdrawal
            </Link>
            <Link to="/appeal" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaExclamationCircle className="inline-block mr-2" /> Appeals
            </Link>
            <Link to="#" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaLifeRing className="inline-block mr-2" /> Support and Help
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="flex justify-between items-center bg-green-800 p-3 text-white">
            <div className="text-lg font-semibold">Admin</div>
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">Logout</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white shadow-md rounded-lg p-4  border-green-400 border-[0.5px]">
              <h5 className="  mb-2">Total Users</h5>
              <p>{match.length} Users</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4  border-green-400 border-[0.5px]">
              <h5 className="mb-2">Exchange Deposits</h5>
              <p>{deposit.length} Exchange Deposits</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4  border-green-400 border-[0.5px]">
              <h5 className="  mb-2">Exchange Withdrawals</h5>
              <p>{width.length} Exchange Withdrawals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white shadow-md rounded-lg p-4 border-green-400 border-[0.5px]">
              <h5 className=" mb-2">P2P Deposits</h5>
              <p>{P2pDeposit.length} Deposits</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 border-green-400 border-[0.5px]">
              <h5 className="  mb-2">P2P Withdrawals</h5>
              <p>{p2pwidth.length} Withdrawals</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 border-green-400 border-[0.5px]">
              <h5 className="  mb-2">Appeals</h5>
              <p>5 Appeals</p>
            </div>
          </div>
          <h2 className="mt-8">Users Within a Week</h2>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-800">
              <thead className="bg-black-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ">Profile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Seller</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              {
                match.map((user) => {
                  return (
                    <>
                      <tbody className="bg-white divide-y divide-gray-700">
                        <tr className='text-black'>
                          <td className="px-6 py-4">
                            <img src="profile-pic-url" alt="Profile" className="w-8 h-8 rounded-full" />
                          </td>
                          <td >{user.email}</td>
                          <td>{user.username}</td>
                          <td >Buyer</td>
                          <td >KSH0</td>
                          <td className="px-6 py-4 flex space-x-2">
                            {
                              user.kyc_status === 'pending' && (
                                <button
                                  disabled
                                  onClick={
                                    () => {
                                      setId(user.id);
                                      handleSubmit();
                                    }
                                  } className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500">
                                  Pending
                                </button>
                              )
                            }
                            {
                              user.kyc_status === null && (
                                <button
                                  disabled
                                  onClick={
                                    () => {
                                      setId(user.id);
                                      handleSubmit();
                                    }
                                  } className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500">
                                  Pending
                                </button>
                              )
                            }
                            {
                              user.kyc_status === "approved" && (
                                <button onClick={
                                  () => {
                                    setId(user.id);
                                    handleSubmit();
                                  }
                                } className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500">
                                  Approved
                                </button>
                              )
                            }
                            {
                              user.kyc_status === 'waiting_approval' && (
                                <button onClick={
                                  () => {
                                    setId(user.id);
                                    handleSubmit();
                                  }
                                } className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500">
                                 {
                                  loading1?'Approving ...' :'Approve'
                                 }
                                </button>
                              )
                            }
                            {/* <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500">Reject</button> */}
                          </td>
                        </tr>

                        {/* More rows */}
                      </tbody>
                    </>
                  )
                })
              }

            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
