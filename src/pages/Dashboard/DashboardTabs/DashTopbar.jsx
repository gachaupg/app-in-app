import { useState } from "react";
import { Link } from "react-router-dom";

function DashTopbar() {
  const [color, setColor] = useState("p2p");
  return (
    <div className="flex secondary  flex-col pr-3 pl-20 p-2">
      <div className="flex flex-row secondary gap-14">
        <div
          className={`rounded-tl-lg rounded-tr-lg p-4 ${
            color === "p2p" ? "secondary" : ""
          }`}
        >
          <button
            onClick={() => setColor("p2p")}
            className="secondary"
          >
            P2P
          </button>
        </div>
        <div
          className={`rounded-tl-lg rounded-tr-lg p-4 ${
            color === "exchange" ? "secondary" : ""
          }`}
        >
          <Link to='/exchange'>
            <button
              onClick={() => setColor("exchange")}
              className={`text-white w-20 p-1 ${
                color === "exchange" ? "bg-green-600 rounded-lg" : ""
              }`}
            >
              Exchange
            </button>
          </Link>
        </div>
        <div
          className={`rounded-tl-lg rounded-tr-lg p-4 ${
            color === "swap" ? "secondary" : ""
          }`}
        >
          <button
            onClick={() => setColor("swap")}
            className={`text-white w-20 p-1 ${
              color === "swap" ? "bg-green-600 rounded-lg" : ""
            }`}
          >
            Swap
          </button>
        </div>
        <div
          className={`rounded-tl-lg rounded-tr-lg p-4 ${
            color === "buy" ? "secondary" : ""
          }`}
        >
          <button
            onClick={() => setColor("buy")}
            className={`text-white w-20 p-1 ${
              color === "buy" ? "bg-green-600 rounded-lg" : ""
            }`}
          >
            Buy
          </button>
        </div>
      </div>
      <div
        style={{
          width: "90%",
        }}
        // className="flex  rounded-bl-lg rounded-br-lg rounded-tr-lg  secondary p-3 gap-14"
       >
        {color === "p2p" && (
          <>
            <div>
              <button
                onClick={() => setColor("market")}
                className={`text-white p-1 ${
                  color === "market" ? "bg-green-800" : "bg-slate-800"
                } rounded-lg w-24`}
              >
                Market
              </button>
            </div>
            <div>
              <button className="text-white p-1 secondary rounded-lg w-24">
                My orders
              </button>
            </div>
            <div>
              <button className="text-white p-1 secondary rounded-lg w-24">
                P2P center
              </button>
            </div>
            <div>
              <button className="text-white p-1 secondary rounded-lg w-20">
                History
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashTopbar;
