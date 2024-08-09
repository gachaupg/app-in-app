import { FaRegCopy } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import ProfileCard from "../Dashboard/DashboardTabs/ProfileCard";

const MainProfile = () => {
  return (
    <div style={{
      background: "#0c0c0f",
     }} className="small wrap ">
      <h2 className="text-white txt ml-40 pt-6">Client Id</h2>
      <div className="flex p-2 flex-row wrap pro2 pro-div justify-around pb-10 pt-5">
        <div style={{
          width:"100%"
        }} className="flex flex-col  width-change gap-5">
          <div className="border border-slate-800 secondary pro-div rounded-lg p-4  flex flex-col   justify-center">
            <h2 className="text-white">Your Client Id</h2>
            <div className="flex flex-row items-center  justify-between gap-3">
              <div className="border border-green-600 rounded-2xl p-1 w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-1">
                  <p className="h-3 w-3 rounded-full bg-green-600"></p>
                  <p className="text-green-600">12345678</p>
                </div>
                <div className="pr-2">
                  <BsQrCode color="green" />
                </div>
              </div>
              <button className="text-green-600 w-32 rounded-2xl p-1 flex flex-row items-center justify-between pl-2 pr-2 bg-slate-600">
                copy <FaRegCopy />
              </button>
            </div>
          </div>
          <h2 className="text-white ">Basic Info</h2>
          <div className="border secondary pro-div border-slate-800 rounded-lg p-4  flex flex-col   justify-center">
            <h2 className="text-white">Your Client Id</h2>
            <div className="flex flex-row items-center  main-pro  jus justify- gap-24 pr-20">
              <div className="flex flex-col ">
                <label className="text-white mt-1" htmlFor="">
                  Full name
                </label>
                <input
                  placeholder="Enter Full name"
                  className="p-1 pl-2 w-full input-text  rounded-2xl border bg-slate-800 text-white border-slate-500"
                  type="text"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-white mt-1" htmlFor="">
                  Email
                </label>
                <input
                  placeholder="Enter Email"
                  className="p-1 pl-2 w-full input-text  rounded-2xl border bg-slate-800 text-white border-slate-500"
                  type="email"
                />
              </div>
            </div>
            <button className="text-green-600 w-full mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
              update
            </button>
          </div>
          <h2 className="text-white ">Password</h2>
          <div className="border secondary border-slate-800 rounded-lg p-4  flex flex-col   justify-center">
            <h2 className="text-white">Password</h2>
            <div className="flex flex-row items-center flex-wrap  main-pro gap-44">
              <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
                <label className="text-white mt-1" htmlFor="">
                  {" "}
                  Enter Password
                </label>
                <input
                  placeholder="Enter Password"
                  className="p-1 pl-2 w-full input-text  rounded-2xl border bg-slate-800 text-white border-slate-500"
                  type="password"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
                <label className="text-white" htmlFor="">
                  Enter Password
                </label>
                <input
                  placeholder="Email"
                  className="p-1 pl-2 input-text rounded-2xl border bg-slate-800 text-white border-slate-500 w-full"
                  type="password"
                />
              </div>
            </div>
            <button className="text-green-600 w-full mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
              update
            </button>
          </div>
          <h2 className="text-white ">System Theme</h2>
          <div className="border secondary border-slate-800 rounded-lg p-4  flex flex-col   justify-center">
            <div className="flex flex-row items-center gap-2  jus justify-between">
              <button className="text-white w-full md:w-1/2 lg:w-1/3 mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-green-600">
                {" "}
                <CiLight /> Light
              </button>
              <button className="text-green-600 border border-green-600 w-full md:w-1/2 lg:w-1/3 mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
                <CiLight /> Dark
              </button>
            </div>
            <button className="text-green-600  w-full mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
              update
            </button>
          </div>
        </div>

        <ProfileCard />
      </div>
    </div>
  );
};

export default MainProfile;
