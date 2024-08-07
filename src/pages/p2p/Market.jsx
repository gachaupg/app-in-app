/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BlogCard } from "../../components";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

import BuyTable from "./BuyTable";
import { Minus, Plus } from "lucide-react";
import SellAsset from "./SellAsset";
import BuyAsset from "./BuyAsset";
import { Link } from "react-router-dom";
import MarketPage from "../Dashboard/Trade/Market";

const Market = () => {
  const [view, setView] = useState("P2P"); // Default to "P2P"

  const handleToggle = (newView) => {
    setView(newView);
  };

  return (
    <div
      
      className="flex primary dashTop flex-col p-6 pl-20 pr-32"
    >
     <MarketPage/>
    </div>
  );
};

export default Market;
