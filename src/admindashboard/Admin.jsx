import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block  sidebar custom-sidebar">
          <div className="position-sticky">
            <h4 className="text-white text-center mb-4 ">Omaya Admin</h4>
          <a href="/admin" className="active"><i className="bi bi-house-door"></i> Dashboard</a>
         <a href="/kyc"><i className="bi bi-person-badge"></i> KYC</a>
            <a href="#"><i className="bi bi-wallet2"></i> Exchange Deposit</a>
            <a href="#"><i className="bi bi-cash"></i> Exchange Withdrawal</a>
            <a href="#"><i className="bi bi-people"></i> P2P Deposit Approval</a>
            <a href="#"><i className="bi bi-people-fill"></i> P2P Withdrawal Approval</a>
            <a href="#"><i className="bi bi-exclamation-circle"></i> Appeals</a>
            <a href="#"><i className="bi bi-life-preserver"></i> Support and Help</a>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 content">
          <div className="topbar d-flex justify-content-between">
            <div className="logo">Admin</div>
            <button className='b'><a href="#" className="logout">Logout</a></button>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Total Users</h5>
                  <p className="card-text">9 Users</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Exchange Deposits</h5>
                  <p className="card-text">9 Exchange Deposits </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Exchange Withdrawals</h5>
                  <p className="card-text">5 Exchange Withdrawals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card mb-3 shadow-sm ">
                <div className="card-body">
                  <h5 className="card-title" >P2P Deposits</h5>
                  <p className="card-text">9 Deposits</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">P2P Withdrawals</h5>
                  <p className="card-text">9 Withdrawals</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Appeals</h5>
                  <p className="card-text">5 Appeals</p>
                </div>
              </div>
            </div>
          </div>
          <h2> Users Within a Week</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover custom-table">
              <thead className="thead-dark">
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Seller</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td className="table-cell-spacing"><img src="profile-pic-url" alt="Profile" width="30" /></td>
                  <td className="table-cell-spacing">denns124534@gmail.com</td>
                  <td className="table-cell-spacing">Dennis</td>
                  <td className="table-cell-spacing">Buyer</td>
                  <td className="table-cell-spacing">KSH0</td>
                  <td className="table-cell-spacing">
                    <button className="btn btn-success btn-sm mr-5  ">Approve</button>
                    <button className="btn btn-danger btn-sm">Reject</button>
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