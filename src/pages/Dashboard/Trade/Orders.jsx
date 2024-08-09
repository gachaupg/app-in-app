/* eslint-disable no-unused-vars */
import { Message } from "@mui/icons-material";
import { IoIosArrowDown } from "react-icons/io";
import Table from "../DashboardTabs/Table";
import OrdersTable from "./tables/OrdersTable";

const Orders = () => {
  return (
    <div className="flex rounded-lg flex-col gap-2  pr-32 w-full">
      <div
        className={`primary small wrap small-gap rounded-lg flex flex-row justify-between `}
      >
        <div className="flex  wrap gap-3 small border rounded-lg p-2 border-green-600">
          <button style={{
            fontSize:'14px',
            background:"#1D8751"
          }} className=" w-24 text-white small p-2 rounded-lg">
            All Orders
          </button>
          <button  style={{
             fontSize:'14px',
          }} className=" text-white p-1 small g rounded-lg">Completed</button>
          <button style={{
             fontSize:'14px',
          }} className=" text-white p-1 g small rounded-lg">
            Processing  <span style={{
                color:"#F79330"
            }}>(2)</span>
          </button>
          <button  style={{
             fontSize:'14px',
          }} className=" text-white p-1 g small rounded-lg">Canceled</button>
        </div>
        <button className="border small-gap flex  items-center gap-1 pl-2 pr-2 p-1 rounded-3xl border-green-600 primary h-9 text-green-600">
          <Message style={{
            color:"#F79330"
          }} fontSize="14px" /> Unread Messages(s)
        </button>
      </div>
      <div style={{
            fontSize:'12px'
          }} className="flex flex-row small wrap small-gap g mt-4 mb-4 items-center justify-between">
        <button className="border small-gap small border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white ">
          {" "}
         <div className="flex g  items-center gap-1">
         <img
            className="h-4"
            src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
            alt=""
          />
          Tether{" "}
         </div>
          <p style={{
            fontSize:'13px'
          }} className="flex flex-row items-center">
            USDT <IoIosArrowDown className="g" />
          </p>
        </button>
        <button className="border small-gap small  border-slate-600 g rounded-2xl w-56 flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white ">
          {" "}
         <div className="flex items-center g gap-1">
         <img
            className="h-4"
            src="https://res.cloudinary.com/pitz/image/upload/v1721924291/coins-rotate_2_kaxme7.png"
            alt=""
          />
          Type{" "}
         </div>
          <p className="flex flex-row items-center">
             <IoIosArrowDown />
          </p>
        </button>  <button className="border small-gap small w-56 border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white ">
          {" "}
         <div className="flex items-center g gap-1">
         <img
            className="h-4"
            src="https://res.cloudinary.com/pitz/image/upload/v1721924315/annotation-check_kd3vgk.png"
            alt=""
          />
          Status{" "}
         </div>
          <p className="flex flex-row items-center">
          <IoIosArrowDown />
          </p>
        </button>  <button className="border w-56 small small-gap border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white ">
          {" "}
         <div className="flex g items-center gap-1">
         <img
            className="h-4"
            src="https://res.cloudinary.com/pitz/image/upload/v1721924277/calendar-03_didl6t.png"
            alt=""
          />
          Date{" "}
         </div>
          <p className="flex flex-row items-center">
             <IoIosArrowDown />
          </p>
        </button>
      </div>
      <OrdersTable/>
      <div className="flex items-center justify-center w-full">
      <img  className="w-64 flex items-center justify-center" src="https://res.cloudinary.com/pitz/image/upload/v1721386689/Group_164058_cybkz7.png" alt="" />

      </div>
    </div>
  );
};

export default Orders;
