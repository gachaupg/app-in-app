import { Headphones, Notifications } from "@mui/icons-material";
import {  Check } from "lucide-react";
import Favouriteassets from "../Dashboard/DashboardTabs/Favouriteassets";
import ProfileCard from "../Dashboard/DashboardTabs/ProfileCard";
import LineGraph from "../Dashboard/DashboardTabs/BarGraph";
import { IoIosArrowDown } from "react-icons/io";
import Table from "../Dashboard/DashboardTabs/Table";

const MainExchange = () => {
  return (
    <div className="flex  flex-col">
      <h2 className="text-slate-400">Exchange Dashboard</h2>

      <div className="">
        <div className=" flex  flex-col  justify-between">
          <div
            style={{ width: "92%" }}
            className="border dashTop  border-slate-700 small wrap  tp-ex  secondary rounded-lg flex  flex-row items-center justify-between p-2"
           >
            <div className="flex flex-row small wrap items-center justify- gap-1">
              <img
                height={50}
                width={50}
                className="rounded-full"
                src="https://res.cloudinary.com/pitz/image/upload/v1720372695/771187_man_512x512_zcuk3l.png"
                alt=""
              />
              <div>
                Hello Omar!
                <p
                  style={{ fontSize: "10px" }}
                  className="text-green-700 tex text-xs flex flex-row items-center gap-1"
                >
                  Verified account{" "}
                  <p className="h-3 w-3 p-1  bg-green-600  flex  items-center justify-center rounded-full">
                    <Check color="white" />
                  </p>{" "}
                </p>
              </div>
            </div>
            <div  className="flex justify  flex-row items-center wrap small justify-center gap-2 ">
              <button className="p-1 w-24 bg-green-600 text-white rounded-2xl ">
                Buy
              </button>
              <button className="p-1 w-24 bg-red-700 text-white rounded-2xl ">
                Sell
              </button>
            </div>
            <div className="flex flex-row items-center justify-center justify gap-2 ">
              <div className=" border p-1 border-slate-700 rounded-full">
                <Notifications className="text-green-600" color="green" />
              </div>
              <div className=" border p-1 border-slate-700  rounded-full">
                <Headphones className="text-green-600" color="green" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex small wrap dashTop flex-row ">
            <div style={{ width: "100%" }} className="mt-3 flex-row dashTop">
              <Favouriteassets />
             <div className="flex flex-row wrap gap-5 mb-1 mt-1 justify-between"> 
             <div className="flex  flex-row  wrap small gap-5"> 
              <h2>Transaction overview(USD)</h2>
              <button className="p-1 h-7 border border-green-600 rounded-full w-10 text-xs">All</button>
              <button className="p-1 border border-green-600 rounded-full h-7  text-xs">Deposits</button>
              <button className="p-1 border border-green-600 h-7  bg-green-600 rounded-full  text-xs">Withdraw</button>
              </div>
              <p className="flex flex-row items-center justify-center">month <IoIosArrowDown/></p>
             </div>
              {/* <LineGraph/>
              <div style={{ width: "100%", overflowX: "auto" }} className="Table">
                              <Table/>

              </div> */}
 
       
      <LineGraph />
        <Table />

      
      
            </div>
            <div className="small" style={{width:"70%"}}>
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainExchange;
