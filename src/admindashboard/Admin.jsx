import React from 'react';
import './Admin.css';
import { Link ,NavLink} from 'react-router-dom';
import { FaHome, FaUserShield, FaUsers, FaUsersCog, FaWallet, FaCashRegister, FaExclamationCircle, FaLifeRing } from 'react-icons/fa';



const Admin = () => {
  return (
    <div className="container  p-0 m-0">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <nav className="w-full md:w-1/4 lg:w-1/6  text-white h-150 p-0 m-0"style={{ backgroundColor: '#1D1D23' }}>
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
    <p>9 Users</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-4  border-green-400 border-[0.5px]">
    <h5 className="mb-2">Exchange Deposits</h5>
    <p>9 Exchange Deposits</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-4  border-green-400 border-[0.5px]">
    <h5 className="  mb-2">Exchange Withdrawals</h5>
    <p>5 Exchange Withdrawals</p>
  </div>
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white shadow-md rounded-lg p-4 border-green-400 border-[0.5px]">
              <h5 className=" mb-2">P2P Deposits</h5>
              <p>9 Deposits</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 border-green-400 border-[0.5px]">
              <h5 className="  mb-2">P2P Withdrawals</h5>
              <p>9 Withdrawals</p>
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
              <tbody className="bg-white divide-y divide-gray-700">
                <tr className='text-black'>
                  <td className="px-6 py-4">
                    <img src="profile-pic-url" alt="Profile" className="w-8 h-8 rounded-full" />
                  </td>
                  <td >denns124534@gmail.com</td>
                  <td>Dennis</td>
                  <td >Buyer</td>
                  <td >KSH0</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500">Approve</button>
                    <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500">Reject</button>
                  </td>
                </tr>
                <tr className='text-black'>
                  <td className="px-6 py-4">
                    <img src="profile-pic-url" alt="Profile" className="w-8 h-8 rounded-full" />
                  </td>
                  <td >denns124534@gmail.com</td>
                  <td>Dennis</td>
                  <td >Buyer</td>
                  <td >KSH0</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500">Approve</button>
                    <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500">Reject</button>
                  </td>
                </tr>
                <tr className='text-black'>
                  <td className="px-6 py-4">
                    <img src="profile-pic-url" alt="Profile" className="w-8 h-8 rounded-full" />
                  </td>
                  <td >denns124534@gmail.com</td>
                  <td>Dennis</td>
                  <td >Buyer</td>
                  <td >KSH0</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500">Approve</button>
                    <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500">Reject</button>
                  </td>
                </tr>
                {/* More rows */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
