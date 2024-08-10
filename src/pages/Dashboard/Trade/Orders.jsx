import React, { useState } from "react";
import { Message } from "@mui/icons-material";
import { IoIosArrowDown } from "react-icons/io";
import OrdersTable from "./tables/OrdersTable";

const Orders = () => {
  const [activeButton, setActiveButton] = useState("All Orders");
  const [ordersData, setOrdersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    date: "",
  });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Fetch data based on the button clicked
    const fetchedData = fetchData(buttonName); // Replace this with your data fetching logic
    setOrdersData(fetchedData);
    applyFilters(fetchedData, filters);
  };

  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    applyFilters(ordersData, newFilters);
  };

  const applyFilters = (data, filters) => {
    let filtered = data;

    if (filters.type) {
      filtered = filtered.filter((order) => order.type === filters.type);
    }

    if (filters.status) {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    if (filters.date) {
      filtered = filtered.filter((order) => order.date === filters.date);
    }

    setFilteredData(filtered);
  };

  const fetchData = (buttonName) => {
    // Replace this with actual data fetching logic
    // Example:
    if (buttonName === "All Orders") {
      return [
        { id: 1, type: "Tether", status: "Completed", date: "2024-08-01" },
        { id: 2, type: "Bitcoin", status: "Processing", date: "2024-08-02" },
        { id: 3, type: "Ethereum", status: "Canceled", date: "2024-08-03" },
      ];
    }
    // Fetch and return other datasets based on buttonName
    return [];
  };

  return (
    <div className="flex rounded-lg flex-col gap-2 pr-32 w-full">
      <div className="primary small wrap small-gap rounded-lg flex flex-row justify-between">
        <div className="flex wrap gap-3 small border rounded-lg p-2 border-green-600">
          <button
            onClick={() => handleButtonClick("All Orders")}
            style={{
              fontSize: "14px",
              background: activeButton === "All Orders" ? "#1D8751" : "",
            }}
            className="w-24 text-white small p-2 rounded-lg"
          >
            All Orders
          </button>
          <button
            onClick={() => handleButtonClick("Completed")}
            style={{
              fontSize: "14px",
              background: activeButton === "Completed" ? "#1D8751" : "",
            }}
            className="text-white p-1 small g rounded-lg"
          >
            Completed
          </button>
          <button
            onClick={() => handleButtonClick("Processing")}
            style={{
              fontSize: "14px",
              background: activeButton === "Processing" ? "#1D8751" : "",
            }}
            className="text-white p-1 g small rounded-lg"
          >
            Processing <span style={{ color: "#F79330" }}>(2)</span>
          </button>
          <button
            onClick={() => handleButtonClick("Canceled")}
            style={{
              fontSize: "14px",
              background: activeButton === "Canceled" ? "#1D8751" : "",
            }}
            className="text-white p-1 g small rounded-lg"
          >
            Canceled
          </button>
        </div>
        <button className="border small-gap flex items-center gap-1 pl-2 pr-2 p-1 rounded-3xl border-green-600 primary h-9 text-green-600">
          <Message style={{ color: "#F79330" }} fontSize="14px" /> Unread
          Messages(s)
        </button>
      </div>

      <div
        style={{ fontSize: "12px" }}
        className="flex flex-row small wrap small-gap g mt-4 mb-4 items-center justify-between"
      >
        <button

          className="border small-gap small border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
          <select className="secondary  no-border w-40" name="" id="">
            <option value="">
              {" "}
              <div className="flex g items-center gap-1">
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628835/TRC20_j1e6si.png"
                  alt=""
                />
                Tether
              </div>
              USDT
            </option>
          </select>
        </button>
        <button
        
          className="border small-gap small border-slate-600 g rounded-2xl w-56 flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
          <select className="secondary no-border  w-40" name="" id="">
            <option value="">
              <div className="flex items-center g gap-1">
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721924291/coins-rotate_2_kaxme7.png"
                  alt=""
                />
                Type
              </div>
            </option>
            <option value="">Buy</option>
            <option value="">Sell</option>
          </select>
        </button>
        <button
          
          className="border small-gap small w-56 border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
           <select className="secondary no-border  w-40" name="" id="">
            <option value="">
              <div className="flex items-center g gap-1">
                <img
                  className="h-4"
                  src="https://res.cloudinary.com/pitz/image/upload/v1721924291/coins-rotate_2_kaxme7.png"
                  alt=""
                />
                Status
              </div>
            </option>
            <option value="">Pending</option>
            <option value="">Complete</option>
          </select>
        </button>
        <button
          onClick={() => handleFilterChange("date", "2024-08-01")}
          className="border w-56 small small-gap border-slate-600 rounded-2xl flex items-center justify-between gap-16 p-1 pl-2 pr-2 secondary h-10 white"
        >
          <div className="flex g items-center gap-1">
            <img
              className="h-4"
              src="https://res.cloudinary.com/pitz/image/upload/v1721924277/calendar-03_didl6t.png"
              alt=""
            />
            Date
          </div>
          <p className="flex flex-row items-center">
            <IoIosArrowDown />
          </p>
        </button>
      </div>

      {filteredData.length === 0 ? (
        <div className="flex items-center justify-center w-full">
          <p>No Data Found</p>
        </div>
      ) : (
        <>
          {activeButton == "All Orders" && <OrdersTable data={filteredData} />}
        </>
      )}

      <div className="flex items-center justify-center w-full">
        <img
          className="w-64 flex items-center justify-center"
          src="https://res.cloudinary.com/pitz/image/upload/v1721386689/Group_164058_cybkz7.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Orders;
