/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Table from "./tables/BuyTable";
import { SlLike } from "react-icons/sl";
import { DollarSign } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Buy = ({ show ,payments,isLoading}) => {
  return (
    <>
     
      <Table show={show} payments={payments} isLoading={isLoading}/>
    </>
  );
};

export default Buy;
