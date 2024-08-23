/* eslint-disable no-unused-vars */
import { Message } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
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

  // Fetch data and apply filters when the component mounts
  useEffect(() => {
    const fetchedData = fetchData(activeButton);
    setOrdersData(fetchedData);
    applyFilters(fetchedData, filters);
  }, []);

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
      filtered = filtered.filter((order) => order.order_type === filters.type);
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
    <div className="flex rounded-lg small flex-col gap-2  w-full">
      

      {filteredData.length === 0 ? (
        <div className="flex items-center justify-center w-full">
          <p className="g">No Data Found</p>
        </div>
      ) : (
        <>
          {activeButton === "All Orders" && <OrdersTable data={filteredData} />}
        </>
      )}

      {/* <div className="flex items-center justify-center w-full">
        <img
          className="w-64 flex items-center justify-center"
          src="https://res.cloudinary.com/pitz/image/upload/v1721386689/Group_164058_cybkz7.png"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Orders;
