/* eslint-disable no-unused-vars */
import React from 'react'
import { BsQrCode } from 'react-icons/bs'
import { CiLight } from 'react-icons/ci'
import { FaRegCopy } from 'react-icons/fa'
import ProfileCard from '../Dashboard/DashboardTabs/ProfileCard'
import { useSelector } from 'react-redux'

const Test = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
console.log('====================================');
console.log(user);
console.log('====================================');
  return (
    <div className='flex flex-col w-full primary small '>
       <div  style={{
    }} className="">
      <div className="justify-around ">
        <div style={{
          width:"100%"
        }} className="flex flex-col  width-change gap-5">
          <div className="border border-slate-700 secondary secondary pro-div rounded-lg p-4  flex flex-col   justify-center">
            <h2 className="text-white">Your Client Id</h2>
            <div className="flex flex-row items-center  justify-between gap-3">
              <div className="border border-green-600 rounded-2xl p-1 w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-1">
                  <p className="h-3 w-3 rounded-full bg-green-600"></p>
                  <p className="text-green-600">{user.user.id}</p>
                </div>
                <div className="pr-2">
                  <BsQrCode color="green" />
                </div>
              </div>
              <button className="text-green-600 w-32 rounded-2xl p-1 flex flex-row items-center justify-between pl-2 pr-2 primary">
                copy <FaRegCopy />
              </button>
            </div>
          </div>
          <h2 className="text-white ">Basic Info</h2>
          <div className="border secondary pro-div border-slate-800 rounded-lg p-4  flex flex-col   justify-center">
            <h2 className="text-white">Your Client Id</h2>
            <div className="gap-6 items-center  secondary rounded-lg p-4 w-full  flex flex-crow   justify-center">
            <div className="flex w-full flex-col ">
                <label className="text-white mt-1" htmlFor="">
                  Full name
                </label>
                <input
                value={user.user.username}
                  placeholder="Enter Full name"
                  className="p-1 pl-2 w-full input-text  rounded-2xl border secondary text-white border-slate-500"
                  type="text"
                />
              </div>
              <div className="flex flex-col ">
                <label className="text-white mt-1" htmlFor="">
                  Email
                </label>
                <input
                value={user.user.email}
                  placeholder="Enter Email"
                  className="p-1 pl-2 w-full input-text  rounded-2xl border secondary text-white border-slate-500"
                  type="email"
                />
              </div>
            </div>
            <button className="text-green-600 w-full mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 secondary border border-slate-700">
              update
            </button>
          </div>
          <h2 className="text-white ">Password</h2>
          <div className="  secondary  items-centerrounded-lg p-4 w-full  flex flex-col   justify-center">
            <h2 className="text-white">Password</h2>
            <div className="flex flex-row justify-between w-full ">
              <div className="w-full flex flex-col">
                <label className="text-white mt-1" htmlFor="">
                  {" "}
                  Enter Password
                </label>
                <input
                  placeholder="Enter Password"
                  className="p-1 pl-2 w-full input-text  rounded-2xl border secondary text-white border-slate-500"
                  type="password"
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="">
                  Confirm Password
                </label>
                <input
                  placeholder="Email"
                  className="p-1 pl-2 input-text rounded-2xl border secondary text-white border-slate-500 w-full"
                  type="password"
                />
              </div>
            </div>
            <button className="text-green-600 w-full mt-6 text-center secondary border-slate-700 border rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
              update
            </button>
          </div>
          <h2 className="text-white ">System Theme</h2>
          <div className="border secondary border-slate-800 rounded-lg p-4  flex flex-col   justify-center">
            <div className="flex flex-row items-center gap-2  jus justify-between">
              <button className="text-white w-full md:w-1/2 p-2 lg:w-1/3 mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-green-600">
                {" "}
                <CiLight /> Light
              </button>
              <button className="text-green-600 border p-2 border-green-600 w-full md:w-1/2 primary lg:w-1/3 mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 bg-slate-600">
                <CiLight /> Dark
              </button>
            </div>
            <button className="text-green-600  w-full mt-6 text-center rounded-2xl p-1 flex flex-row items-center justify-center pl-2 pr-2 primary">
              Update
            </button>
          </div>
        </div>

        {/* <ProfileCard /> */}
      </div>
    </div>
    </div>
  )
}

export default Test