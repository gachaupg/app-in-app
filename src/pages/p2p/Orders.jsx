/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BlogCard } from "../../components";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

import BuyTable from "./BuyTable";
import { Edit, Minus, Plus } from "lucide-react";
import SellAsset from "./SellAsset";
import BuyAsset from "./BuyAsset";
import { Link } from "react-router-dom";

const Market = () => {
  const [view, setView] = useState("P2P"); // Default to "P2P"

  const handleToggle = (newView) => {
    setView(newView);
  };

  return (
    <div className="flex primary dashTop flex-col p-6 pl-20 pr-32">
      <div className="flex flex-row gap-4 flex-wrap justify-between">
        {/* ( */}
        <div style={{ width: "100%" }} className="flex small flex-col gap-4">
          <div className="flex flex-row gap-4">
            <Link to="/dashboard">
              <p className="text-slate-500">P2P Dashboard</p>
            </Link>
            <p className="text-slate-100 ">Market</p>
            <p className="text-slate-500 underline">Orders</p>
            <p className="text-slate-500">P2P Center</p>
          </div>
          <div className="flex flex-row w-full  wrap justify-between">
           <div               className="w-full text-white pr-10 flex flex-col  gap-10"
>
           <div
              style={{ width: "100%" }}
              className="w-full text-white pr-10 flex flex-row  items-center flex-wrap justify-between"
            >
              <div className="border p-1 flex flex-row items-center w-full justify-between wrap   rounded-2xl secondary border-slate-800">
                <div className=" p-1 flex flex-row items-center w-full justify-between  wrap  rounded-2xl secondary">
                  <div className="flex  flex-col gap-2 w-full">
                    <div className="flex flex-row gap-2 items-center wrap">
                      <p className="p-1 h-8 w-8 rounded-full flex items-center  bg-green-600">
                        OA
                      </p>
                      <p>User Name</p>
                      <Edit />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <button>Verified merchant</button>
                      <button>Become Merchant PRO</button>
                    </div>
                  </div>
                  <div className=" flex flex-col ">
                    <p>P2P Balance</p>
                    <p className=" w-64">1900.8426=1,900 USD</p>
                    <p>Inescrow : 800 USD</p>
                  </div>
                </div>
              </div>
              
            </div>
            {/* two */}
            <div
              style={{ width: "100%" }}
              className="w-full text-white pr-10 flex flex-row  items-center flex-wrap justify-between"
            >
              <div className="border p-1 pl-6 flex flex-row items-center w-full justify-between   rounded-2xl secondary border-slate-800">
               <div className="flex flex-col gap-2 mb-1 mt-1">
                <p>120</p>
                <p className="text-slate-500 text-xs">Trades</p>
               </div>
               <div className="flex flex-col gap-2 mb-1 mt-1">
                <p>98%</p>
                <p className="text-slate-500 text-xs">Completion Rate</p>
               </div>
               <div className="flex flex-col gap-2 mb-1 mt-1">
                <p>1:22 Min</p>
                <p className="text-slate-500 text-xs">Avg.release time</p>
               </div>
               <div className="flex flex-col gap-2 mb-1 mt-1">
                <p>2:56 Min</p>
                <p className="text-slate-500 text-xs">Avg.pay time</p>
               </div>
               <div className="flex flex-col gap-2 mb-1 mt-1">
                <p>99%</p>
                <p className="text-slate-500 text-xs">Rating</p>
               </div>
               <div className="flex flex-col gap-2 mb-1 mt-1">
                <p>1200 USD</p>
                <p className="text-slate-500 text-xs">Total Volume</p>
               </div>
              </div>
              
            </div>
           </div>

            <div style={{ width: "20rem" }} className="text-slate-300 small">
              News
              <div>
                <BlogCard />
                <p className="flex text-xm w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <button className="border border-green-700 p-1 rounded-3xl mt-2 text-green-600">
                  Read Article
                </button>
              </div>
              <div>
                <BlogCard />
                <p className="flex text-xm w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <button className="border border-green-700 p-1 rounded-3xl mt-2 text-green-600">
                  Read Article
                </button>
              </div>
              <div>
                <BlogCard />
                <p className="flex text-xm w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <button className="border border-green-700 p-1 rounded-3xl mt-2 text-green-600">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
