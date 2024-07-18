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

const Market = () => {
  const [view, setView] = useState("P2P"); // Default to "P2P"

  const handleToggle = (newView) => {
    setView(newView);
  };

  return (
    <div
      
      className="flex primary dashTop flex-col p-6 pl-20 pr-32"
    >
      <div className="flex flex-row gap-4 flex-wrap justify-between">
        {/* ( */}
        <div style={{ width: "70rem" }} className="flex small flex-col gap-4">
          <div className="flex flex-row gap-4">
           <Link to="/dashboard">
           <p className="text-slate-500">P2P Dashboard</p>
           </Link>
            <p className="text-slate-100 underline">Market</p>
            <p className="text-slate-500">Orders</p>
            <p className="text-slate-500">P2P Center</p>
          </div>
          <div className="text-slate-400">
            <div className="border border-slate-700 rounded-2xl flex flex-row w-32">
              <div
                className={`flex flex-row cursor-pointer items-center w-16 gap-1 p-1 ${
                  view === "Buy" ? "bg-green-600" : ""
                } rounded-tl-2xl rounded-bl-2xl`}
                onClick={() => handleToggle("Buy")}
              >
                <input
                  type="radio"
                  checked={view === "Buy"}
                  onChange={() => handleToggle("Buy")}
                  className="p-1"
                />
                <p className="text-white">Buy</p>
              </div>
              <div
                className={`flex flex-row cursor-pointer gap-1 items-center w-16 p-1 ${
                  view === "Sell" ? "bg-green-600" : ""
                } rounded-tr-2xl rounded-br-2xl`}
                onClick={() => handleToggle("Sell")}
              >
                <input
                  type="radio"
                  checked={view === "Sell"}
                  onChange={() => handleToggle("Sell")}
                  className="p-1"
                />
                <p className="text-white">Sell</p>
              </div>
            </div>
          </div>
          {view === "Buy" && <BuyAsset/>}
          {view === "Sell" && (
           <SellAsset/>
          )}
          {view === "P2P" && (
            <>
              <div className="w-full flex flex-row  items-center flex-wrap justify-between">
                {/* {view === "P2P" &&  */}
                <div className="flex flex-wrap flex-row items-center gap-10">
                  <div  className="border border-slate-600 secondary rounded-2xl">
                    <input
                      className="secondary p-1 rounded-2xl"
                      type="text"
                      placeholder="enter amount"
                    />
                  </div>

                  <div className="border pl-1 w-56 h-8 input-witd  border-slate-600 flex items-center justify-between secondary rounded-2xl">
                    {/* <select
                      className="border p-1 border-slate-600 rounded-2xl bg-gray-200"
                      name=""
                      id=""
                    >
                      <option className="bg-slate-800" value="">
                        Payment Type
                      </option>
                    </select> */}
                    <p className="text-slate-400">Payment Type</p>
                  </div>
                  <div className="border pl-1 w-56 h-8 border-slate-600 flex items-center justify-between secondary rounded-2xl">
                    {/* <select
                      className="border p-1 border-slate-600 rounded-2xl bg-gray-200"
                      name=""
                      id=""
                    >
                      <option className="bg-slate-800" value="">
                        Payment Type
                      </option>
                    </select> */}
                    <p className="text-slate-400">Select a Provider</p>
                  </div>
                  {/* <div className="border border-slate-600 rounded-2xl">
                    <select
                      className="border p-1 border-slate-600 rounded-2xl bg-gray-200"
                      name=""
                      id=""
                    >
                      <option value="">Select a provider</option>
                    </select>
                  </div> */}

                  <div className="p-1 border rounded-lg flex items-center justify-center border-slate-700">
                    <IoFilterSharp size={30} className="text-green-600" />
                  </div>
                </div>
                <button className="text-slate-300 p-1 bg-green-600 w-20 rounded-2xl">Refresh</button>
              </div>
              <div>
                <BuyTable />
              </div>
            </>
          )}
        </div>

        <div style={{ width: "20rem" }} className="text-slate-300 small">
          News
          <div>
            <BlogCard />
            <p className="flex text-xm w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="border border-green-700 p-1 rounded-3xl mt-2 text-green-600">
              Read Article
            </button>
          </div>
          <div>
            <BlogCard />
            <p className="flex text-xm w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="border border-green-700 p-1 rounded-3xl mt-2 text-green-600">
              Read Article
            </button>
          </div>
          <div>
            <BlogCard />
            <p className="flex text-xm w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="border border-green-700 p-1 rounded-3xl mt-2 text-green-600">
              Read Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
