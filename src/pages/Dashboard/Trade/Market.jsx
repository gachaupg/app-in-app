/* eslint-disable no-unused-vars */
import { Refresh } from "@mui/icons-material";
import { useState } from "react";
import Buy from "./Buy";
import Sell from "./Sell";

const Market = () => {
  const [show, setShow] = useState("Buy");

  return (
    <div className="flex rounded-lg flex-col gap-2 wi-full">
      <div className={`primary small border rounded-lg flex flex-row gap-2 ${show==="Buy"?"border-green-600":"border-red-600"} w-36 p-1`}>
        <button
          onClick={() => setShow("Buy")}
          className={`p-1 ${
            show === "Buy" ? "bg-green-600" : ""
          } rounded-lg text-center flex items-center justify-center w-16 text-white`}
        >
          Buy
        </button>
        <button
          onClick={() => setShow("Sell")}
          className={`p-1 ${
            show === "Sell" ? "bg-red-600" : ""
          } rounded-lg text-center flex items-center justify-center w-16 text-white`}
        >
          Sell
        </button>
      </div>
      {show==="Buy"?<>
      <Buy  show={show}/>
      </>:(
        <>
        <Sell show={show}/>
        </>
      )}
     
    </div>
  );
};

export default Market;
