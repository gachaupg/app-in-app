import { useEffect, useState } from "react";
import P2PBalance from "./DashboardTabs/P2PBalance";
import ProfileCard from "./DashboardTabs/ProfileCard";
import MainExchange from "../exchange/MainExchange";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/authSlice";

function Dashboard() {
  const [color, setColor] = useState("p2p");
  const [tabs, settabs] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(users));
  }, []);
  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log('====================================');
  console.log('logged in uss',user);
  console.log('====================================');
  useEffect(() => {
    if (user?.access) {
      navigate("/dashboard");
    }else{
      navigate("/")
    }
  }, [user]);
  return (
    <div
      style={{
        background: "#0c0c0f",
      }}
      className="w-full "
    >
      <div className="flex dashTop flex-col  pr-3 pl-20 p-2">
        <div className="flex flex-row  tt just gap-14">
          <div
            className={`rounded-tl-lg rounded-tr-lg p-4 ${
              color === "p2p" ? "secondary" : ""
            }`}
          >
            <button
              onClick={() => setColor("p2p")}
              className={`text-white w-20 p-1 ${
                color === "p2p" ? "bg-green-600 rounded-lg" : ""
              }`}
            >
              P2P
            </button>
          </div>
          <div
            className={`rounded-tl-lg rounded-tr-lg p-4 tt${
              color === "exchange" ? "secondary" : ""
            }`}
          >
            <button
              onClick={() => setColor("exchange")}
              className={`text-white w-20 p-1 ${
                color === "exchange" ? "bg-green-600 rounded-lg" : ""
              }`}
            >
              Exchange
            </button>
          </div>
          <div
            className={`rounded-tl-lg rounded-tr-lg p-4 tt to-teal-600 ${
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
            className={`rounded-tl-lg rounded-tr-lg p-4 tt ${
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
            width: "91.5%",
          }}
          className="flex dashTop tt rounded-bl-lg  rounded-br-lg rounded-tr-lg flex-row   secondary p-3 gap-14"
        >
          {color === "p2p" && (
            <>
              <div>
                <Link to="/market">
                <button
                  onClick={() => settabs("market")}
                  className={`text-white p-1 m-2 ${tabs==='market'?"bg-green-800" :"bg-slate-800 "} rounded-lg w-24`}
                >
                  Market
                </button>
                </Link>
              </div>
              <div>
                <button className="text-white p-1 m-2  bg-slate-800 rounded-lg w-24">
                  My orders
                </button>
              </div>
              <div>
                <button className="text-white p-1 m-2  bg-slate-800 rounded-lg w-24">
                  P2P center
                </button>
              </div>
              <div>
                <button className="text-white p-1 m-2  bg-slate-800 rounded-lg w-20">
                  History
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {color === "p2p" && (
        <div className="flex flex-row  wrap justify-between">
          <div className="small" style={{ width: "100%" }}>
            <P2PBalance />
          </div>
          <div style={{ width: "100%" }}>
            <ProfileCard />
          </div>
        </div>
      )}
      {color === "exchange" && (
        <div
          style={{ width: "100%" }}
          className="flex dashTop flex-col rounded-lg pb-1 pl-20 text-white"
        >
          <MainExchange />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
