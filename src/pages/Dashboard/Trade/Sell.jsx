/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Table from "./tables/SellTable";
import { SlLike } from "react-icons/sl";
import { DollarSign } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Sell = ({ show ,payments,isLoading}) => {
  return (
    <>
      <div className="   flex wrap small flex-row gap-2w-36 justify-between p-1">
        
      </div>
      <Table show={show} payments={payments} isLoading={isLoading}/>
    </>
  );
};

export default Sell;
