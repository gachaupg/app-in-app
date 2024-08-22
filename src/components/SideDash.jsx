/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Tabs } from './Tabs'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SideDash = () => {
    const [activeTab, setActiveTab] = useState("P2P Trading");
    const [Verified, setVerified] = useState(false);
    const [activeTab1, setActiveTab1] = useState("Dashboard");
  return (
    <div>
         <div
          style={{ width:'100%' ,color: "#727272", fontSize: "15px" }}
          className="small   flex flex-col gap-6 pt-12"
         >
          {Tabs.map((tab) => (
            <NavLink activeClassName="active" className="gg" key={tab.name} to={`/${tab.link}`}>
              <div
                className={`flex w-60 flex-row pl-14 items-center rounded-tr-lg rounded-br-lg gap-4 p-2 transition-all duration-300 
          ${activeTab === tab.name ? "bg-[#303038]" : "hover:bg-[#404048]"}
           `}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setActiveTab(tab.name)}
              >
                <img
                  className={`${tab.name === "Buy Crypto" ? "h-5" : "h-6"}`}
                  src={tab.icon}
                  alt={tab.name}
                />
                <div
                  style={{
                    fontSize: tab.name === "Buy Crypto" ? "15.5px" : "h-6",
                  }}
                  className={`flex items-center justify-between ml-5 w-full 
            ${activeTab === tab.name ? "text-white" : "hover:text-white"}
          `}
                >
                  {tab.name}
                  {tab.name === "Account" && (
                    <MdOutlineKeyboardArrowDown className="ml-2" />
                  )}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
    </div>
  )
}

export default SideDash