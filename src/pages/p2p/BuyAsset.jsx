import { Check, DollarSign, Dot } from "lucide-react";
import { BiLike } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";

const BuyAsset = () => {
  return (
    <div>
      <div className="flex primary dashTop flex-col p-6 pl-20 pr-32">
        <div className="flex flex-row gap-4 flex-wrap justify-between">
          {/* ( */}
          <div style={{ width: "70rem" }} className="flex small flex-col gap-4">
            <div className="w-full flex flex-row  items-center flex-wrap justify-between">
              {/* {view === "P2P" &&  */}
              <div className="flex flex-wrap flex-row items-center gap-10">
                <div className="border border-slate-600 rounded-2xl">
                  <input
                    className="bg-gray-900 p-1 rounded-2xl"
                    type="text"
                    placeholder="enter amount"
                  />
                </div>

                <div
                  style={{
                    background: "primary",
                    width: "14rem",
                  }}
                  className=" primary rounded-2xl"
                >
                  <select
                    className="border p-1 w-full border-slate-600  text-white rounded-2xl primary "
                    name=""
                    id=""
                  >
                    <option className="primary text-white" value="">
                      Payment Type
                    </option>
                  </select>
                </div>
                <div
                  style={{
                    background: "primary",
                    width: "14rem",
                  }}
                  className=" primary rounded-2xl"
                >
                  <select
                    className="border p-1 w-full border-slate-600  text-white rounded-2xl primary "
                    name=""
                    id=""
                  >
                    <option value="">Select a provider</option>
                  </select>
                </div>

                <div className="p-1 border rounded-lg flex items-center justify-center border-slate-700">
                  <IoFilterSharp size={30} className="text-green-600" />
                </div>
              </div>
              <button className="text-slate-300 p-1 w-20 bg-green-600 rounded-3xl">
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-700 p-2 border border-slate-700 secondary rounded-lg flex flex-col gap-2">
        <div className="text-slate-700 p-2  secondary rounded-lg flex flex-row gap-2">
          <div
            style={{ width: "70%" }}
            className="flex flex-row justify-between "
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <p className="h-10 w-10 text-white bg-green-600 rounded-full flex items-center justify-center">
                OA
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-1">
                  <p className="text-white">Advertiser User Name</p>
                  <Check
                    className="h-6 w-6 bg-green-600 rounded-full text-slate-50"
                    color="white"
                  />
                  <button
                    style={{ fontSize: "12px" }}
                    className=" pr-1 bg-green-600 flex flex-row text-white rounded-2xl items-center justify-center "
                  >
                    <Dot /> Merchant
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                  className="flex flex-row items-center gap-1"
                >
                  {" "}
                  <span className="text-green-600">120</span> Orders{" "}
                  <span className="flex flex-row items-center gap-1">
                    <span className="text-green-600">90.20%</span> Completion{" "}
                    <BiLike className="text-green-600" />{" "}
                  </span>{" "}
                  <span className="text-green-600"> 95%</span>{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="text-white">
                Rate : <span className="text-green-600">1.22USD</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-between  wrap">
          <div  style={{ width: "100%" }} className="flex flex-col gap-2">
          <div
           
            className="text-white flex flex-row  justify-between"
          >
            <div className="flex flex-col gap-2">
              <p className="text-slate-100 ">10 minutes</p>
              <p className="text-slate-600 text-xs">Time limit</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-slate-100 ">2 minutes</p>
              <p className="text-slate-600 text-xs">Avg realise time</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-slate-100 ">120 USDT minutes</p>
              <p className="text-slate-600 text-xs">Available assets</p>
            </div>
          
          </div>
          <div style={{height:'1px'}} className=" w-full  bg-slate-600"></div>
          <div className="flex flex-row w-full flex-wrap gap-3">
          <button className="p-1 bg-green-400 text-green-700 flex flex-row gap-1 rounded-2xl"> <Dot/> Salam Bank</button>
          <button className="p-1 bg-purple-400 text-purple-700 flex flex-row gap-1 rounded-2xl"> <Dot/> Salam Bank</button>
          <button className="p-1 bg-red-400 text-red-700 flex flex-row gap-1 rounded-2xl"> <Dot/> Salam Bank</button>
          <button className="p-1 bg-orange-400 text-orange-700 flex flex-row gap-1 rounded-2xl"> <Dot/> Salam Bank</button>
          </div >
          <div className="primary p-1 rounded-2xl h-64 w-full border border-slate-700 flex flex-col">
            <div className="flex items-center gap-2">
            <BsExclamationCircle color="red"/> <p>Advitisers Terms <span className="text-red-700">(Please read carefully)</span></p>
            </div>
             <p>Comments</p>
          </div>
          </div>
         <div className="flex flex-col gap-6 w-full">
         <div
            style={{ width: "100%" }}
            className="text-white flex flex-row  justify-between items-center"
           >
            <div className="border primary w-full p-2 rounded-lg gap-3 flex flex-row justify-between items-center border-slate-800">
              <div className="flex flex-col">
                <p>I want to pay</p>
               <div style={{}} className="flex font-xm text text-xs  pt-3 flex-row items-center">
               <p>
                  <DollarSign />{" "}
                </p>
                <input className="primary p-1 f" type="text" placeholder="200 USD" />
               </div>
              </div>
              <p >USD </p>
            </div>
          </div>
          <div
            style={{ width: "100%" }}
            className="text-white flex flex-row  justify-between items-center"
           >
            <div className="border primary w-full p-2 rounded-lg gap-3 flex flex-row justify-between items-center border-slate-800">
              <div className="flex flex-col">
                <p>I want to pay</p>
               <div style={{}} className="flex font-xm text text-xs  pt-3 flex-row items-center">
               <p>
                  <DollarSign />{" "}
                </p>
                <input className="primary p-1 f" type="text" placeholder="200 USD" />
               </div>
              </div>
              <p >USD </p>
            </div>
          </div> <div
            style={{ width: "100%" }}
            className="text-white flex flex-row  justify-between items-center"
           >
            <div className="border primary w-full p-2 rounded-lg gap-3 flex flex-row justify-between items-center border-slate-800">
              <div className="flex flex-col">
                <p>I want to pay</p>
               <div style={{}} className="flex font-xm text text-xs  pt-3 flex-row items-center">
               <p>
                  <DollarSign />{" "}
                </p>
                <input className="primary p-1 f" type="text" placeholder="200 USD" />
               </div>
              </div>
              <p >USD </p>
            </div>
          </div>
          <div className="flex  flex-row items-center wrap gap-1">
          <button className="p-1 text-white border border-slate-600 w-full rounded-2xl">Close</button>
          <button className="p-1 text-white w-full bg-red-600 rounded-2xl">Sell USDT</button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAsset;
