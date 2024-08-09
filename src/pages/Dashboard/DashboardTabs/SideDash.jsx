/* eslint-disable no-unused-vars */
import { ArrowDown } from "lucide-react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SideDash = () => {
  return (
    <div className="w-full flex flex-col gap-4 small wrap ">
      <div className="border border-gray-700 w-full secondary small wrap  rounded-2xl p-2  mt-1  justify-center items-center  flex flex-col justify-between">
      <div className="relative w-64 h-64 flex items-center justify-center">
  <img
    className="w-full h-full"
    src="https://res.cloudinary.com/pitz/image/upload/v1721369888/Group_34205_w3htkn.png"
    alt=""
  />
  <div className="absolute flex flex-col items-center">
    <p className="white text-center">00.00 USD</p>
    <p style={{ fontSize: "12px" }} className="grey text-center">
      Transactions
    </p>
  </div>
</div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-green-600"></p>
              <p className="grey">Deposits</p>
            </div>
            <p className="white">00.00 USD</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-red-600"></p>
              <p className="grey">Withdrawals</p>
            </div>
            <p className="white">00.00 USD</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-yellow-400"></p>
              <p className="grey">In Progress</p>
            </div>
            <p className="white">00.00 USD</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row items-center justify-between  p-1">
            <div className="flex flex-row items-center gap-1">
              <p className="h-3 w-3 rounded-sm bg-blue-600"></p>
              <p className="grey">P2P</p>
            </div>
            <p className="white">00.00 USD</p>
          </div>
        </div>
      </div>
      <p className="text-start white">P2P buys</p>

      <div
        style={{ width: "100%" }}
        className="flex small flex-col p-3 border rounded-lg border-gray-700 secondary w-full"
      >
        <div className="flex white flex-row items-center mb-3 justify-between ">
          <p>00.00 USD</p>
          <button className="flex items-center  p-1 grey   border-slate-500">
            month <MdOutlineKeyboardArrowDown size={15} />
          </button>
        </div>
        <div className="progress-bar">
          <div
            className="filler "
            style={{ width: `60%`, background: "#32A86C" }}
          />
        </div>
        <div className="mt-2">
          <div className="flex flex-row grey items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-green-800 h-3 w-3 roo rounded-sm"></p>
              <p className="white">Completed</p>
            </div>
            <p>00.00 USD </p>
          </div>
          <div className="flex  greyflex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-yellow-400 h-3 w-3 roo rounded-sm"></p>
              <p className="white">Inscrow</p>
            </div>
            <p className="grey">00.00 USD</p>
          </div>
        </div>
      </div>
      <p className="white">P2P sells</p>
      <div
        style={{ width: "100%" }}
        className="flex flex-col p-3 small border  rounded-lg border-slate-700 secondary w-full"
      >
        <div className="flex white flex-row items-center mb-3 justify-between ">
          <p>00.00 USD</p>
          <button className="flex items-center  p-1  grey  border-slate-500">
            month <MdOutlineKeyboardArrowDown size={15} />
          </button>
        </div>

        <div className="progress-bar">
          <div
            className="filler "
            style={{ width: `60%`, background: "#FA615F" }}
          />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-green-800 h-3 w-3 roo rounded-sm"></p>
              <p className="white">Completed</p>
            </div>
            <p className="grey">00.00 USD</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-yellow-400 h-3 w-3 roo rounded-sm"></p>
              <p className="white ml-1">Inscrow</p>
            </div>
            <p className="grey">00.00 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDash;
