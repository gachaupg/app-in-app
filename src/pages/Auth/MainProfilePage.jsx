/* eslint-disable no-unused-vars */
import { Key, Settings, Wallet2 } from "lucide-react";
import { useState } from "react";
import Test from "./ProfileSetings";
import ProfileTab from "./ProfileTab";
import KYC from "../Dashboard/DashboardTabs/KYC";
import Profile from "../../components/Profile";
import Privacy from "./Privacy";
import Wallet from "../Dashboard/DashboardTabs/Wallet";
import Referal from "./Referal";
import SideDash from "../../components/SideDash";

const MainProfilePage = () => {
  const [active, setActive] = useState("settings");
  
  return (

<div style={{
        width:'82%'
    }} className='primary pl-20 mt-16'>
  
    
  
    <div className="primary  small wrap flex flex-col items-center justify-center gap-5 small  pr-40">
      <div className="flex small wrap flex-roe justify-between w-full items-center secondary border  border-slate-700 rounded-lg p-2">
        <div
          onClick={() => setActive("settings")}
          className={`flex cursor-pointer flex-row items-center g gap-2 ${
            active === "settings" ? "green" : "g"
          }`}
        >
          <Settings /> Profile Setting
        </div>
        <div
          onClick={() => setActive("kyc")}
          className={`flex cursor-pointer flex-row items-center g gap-2 ${
            active === "kyc" ? "green" : "g"
          }`}
        >
          <img
            src="https://res.cloudinary.com/pitz/image/upload/v1723197241/file-lock-02_ftwlxo.png"
            alt=""
          />{" "}
          KYC
        </div>
        <div
          onClick={() => setActive("key")}
          className={`flex cursor-pointer flex-row items-center g gap-2 ${
            active === "key" ? "green" : "g"
          }`}
        >
          <Key height={40} /> Privacy and Security
        </div>
        <div
          onClick={() => setActive("wallet")}
          className={`flex cursor-pointer flex-row items-center g gap-2 ${
            active === "wallet" ? "green" : "g"
          }`}
        >
          <Wallet2 height={40} /> Wallet Address
              </div>
              <div
          onClick={() => setActive("refer")}
          className={`flex cursor-pointer flex-row items-center g gap-2 ${
            active === "refer" ? "green" : "g"
          }`}
        >
          <Wallet2 height={40} /> Referral
        </div>
      </div>
      <div className="w-full flex flex-row small wrap  gap-16">
        <div
          style={{
            width: "70%",
          }}
          className="w-full small"
        >
          {active === "settings" && (
            <>
              <Test />
            </>
          )}
          {active === "kyc" && (
            <>
              <KYC />
            </>
          )}
          {active === "key" && (
            <div className="">
              <Privacy />
            </div>
          )}
          {active === "wallet" && (
            <>
              <Wallet />
            </>
                  )}
                  {active === "refer" && (
            <>
              <Referal />
            </>
          )}
        </div>
        <div
          style={{
            width: "33%",
          }}
          className="w-full small"
        >
          <ProfileTab />
        </div>
      </div>
      {/* <ProfileDetail/> */}
      {/* <ProfileTab/> */}
    </div>
      </div>
  );
};

export default MainProfilePage;
