import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCashRegister, FaExclamationCircle, FaHome, FaLifeRing, FaUserShield, FaUsers, FaUsersCog, FaWallet } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Admin.css';
import { endpoint } from '../utils/APIRoutes';

const P2pDeposit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [match, setMatch] = useState([]);
  const [loadingStates, setLoadingStates] = useState({}); // Track loading states by transaction ID
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [transactions, setTransactions] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    fetchData();
  }, [user?.access]);
  
  async function fetchData() {
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
        `${endpoint}/trading_engine/all-transactions/`,
        { headers }
      );
  
      // Filter transactions by "withdrawal"
      const filteredData = res.data.transactions.filter(transaction => transaction.transaction_type === "withdrawal");
  
      setMatch(filteredData);
      console.log('Filtered Transactions:', filteredData);
  
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch transactions. Please try again.');
    }
  }
  
  const handleSubmit = async (transactionId) => {
    setLoadingStates(prevState => ({ ...prevState, [transactionId]: true }));

    try {
      const token = user?.access;

      if (!token) {
        toast.error("Authentication token is missing. Please log in again.");
        navigate("/login");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(`${endpoint}/trading_engine/approve-transaction/${transactionId}/`, {
        method: "POST",
        headers: headers,
      });

      const result = await response.json();

      if (response.ok) {
        fetchData();
        toast.success("Approved successfully!");
      } else {
        if (result.code === "token_not_valid") {
          toast.error("Your session has expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error(`Approval failed: ${result.error || "Unknown error"}`);
        }
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "An unknown error occurred."}`);
      console.error("Error:", error);
    } finally {
      setLoadingStates(prevState => ({ ...prevState, [transactionId]: false }));
    }
  };

  return (
    <div className="container p-0 m-0">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <nav className="w-full md:w-1/4 lg:w-1/6 text-white h-screen p-0 m-0" style={{ backgroundColor: '#1D1D23' }}>
          <div className="sticky top-0 h-full">
            <h4 className="text-center text-lg mb-4">Omaya Admin</h4>
            <Link to="/admin" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaHome className="inline-block mr-2" /> Withdrawal
            </Link>
            <Link to="/kyc" className="block mb-4 px-3 py-2 rounded hover:bg-green-600">
              <FaUserShield className="inline-block mr-2" /> KYC
            </Link>
            <NavLink
              to="/p2pdeposit"
              className={({ isActive }) =>
                `block mb-4 px-3 py-2 rounded ${isActive ? 'bg-green-700' : ''} hover:bg-green-600`
              }
            >
              <FaUsers className="inline-block mr-2" /> P2P Deposit Approval
            </NavLink>
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
            <div className="bg-white shadow-md rounded-lg p-4 border-green-400 border-[0.5px]">
              <h5 className="mb-2">Total Withdrawal</h5>
              <p>{match.length} Withdrawal</p>
            </div>
          </div>
          <h2 className="mt-8">Users Within a Week</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-800">
              <thead className="bg-black-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Profile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Currency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-700">
                {match.map((deposit) => (
                  <tr className="text-black" key={deposit.transaction_id}>
                    <td className="px-6 py-4">
                      <img src="profile-pic-url" alt="Profile" className="w-8 h-8 rounded-full" />
                    </td>
                    <td>{deposit.transaction_id}</td>
                    <td>{deposit.currency}</td>
                    <td>{deposit.user}</td>
                    <td>{deposit.amount}</td>
                    <td className="space-x-2">
                      <button 
                        onClick={() => handleSubmit(deposit.transaction_id)}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 disabled:opacity-50"
                        disabled={loadingStates[deposit.transaction_id]}
                      >
                        {loadingStates[deposit.transaction_id] ? 'Approving...' : 'Approve'}
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default P2pDeposit;
