/* eslint-disable no-unused-vars */
import React from 'react'
import { BsQrCode } from 'react-icons/bs'
import { FaRegCopy } from 'react-icons/fa'

const Referal = () => {
  return (
      <div className=" w-full small wrap  flex border p-2  rounded-lg border-slate-700 flex-col ">
      <div className='flex  flex-row small wrap items-center justify-between'>
       <p className='flex text-gray-700'>
       Lorem ipsum dolor sit amet, consectetur
       adipiscing elit, <br/>sed do eiusmod tempor 
       incididunt ut labore et dolore magna aliqua.<br/>
       Ut enim ad minim veniam, quis nostrud.

  
      <br/>Lorem ipsum dolor sit amet, consectetur 
      <br/>adipiscing elit, sed do eiusmod tempor
      <br/>incididunt ut labore et dolore magna aliqua. 
      <br/>Ut enim ad minim veniam, quis nostrud.

       <br/>Do eiusmod tempor incididunt ut labore</p>
   
       <div className='flex'>
        <img src="https://res.cloudinary.com/dkqqg46sx/image/upload/v1723237192/Frame_35102_vnoyzt.png" alt='' />
       </div>
       
      
    
      </div>
      <div className=" flex flex-col justify-center">
            <h2 className="green">Your Referral Code</h2>
            <div className="flex flex-row items-center  justify-between gap-3">
              <div className="border border-green-600 rounded-3xl p-2 w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-1">
                  <p className="h-3 w-3 rounded-full bg-green-600"></p>
                  <p className="text-green-600">123456789</p>
                </div>
                <div className="pr-2">
                  <BsQrCode color="green" />
                </div>
              </div>
              <button className="text-green-600 w-32 rounded-2xl p-2 flex flex-row items-center justify-between pl-2 pr-2 bg-gray-700">
                copy <FaRegCopy />
              </button>
            </div>
          </div>
          <hr className="border-t-4 border-gray-700 mt-5" />
          <h2 className="white pt-4">Users Registered With Your Code</h2>
        
      <div className=" text-gray-300 p-4  flex items-center justify-between ">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center green font-semibold text-lg p-6 ">
          OA
        </div>
        <div>
          <div className="text-sm">Email***@gmail.com</div>
          <div className="text-xs text-gray-400">Profile status: Active</div>
        </div>
      </div>
      <button className="flex  bg-gray-700 justify-between text-green-400 px-4 py-4 rounded-3xl text-sm hover:bg-gray-600 transition duration-300 ">
        Details
      </button>
    </div>
    <hr className="border-t-2 border-gray-700 " />
    <div className=" text-gray-300 p-4  flex items-center justify-between ">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center green font-semibold text-lg p-6 ">
          OA
        </div>
        <div>
          <div className="text-sm">Email***@gmail.com</div>
          <div className="text-xs text-gray-400">Profile status: Active</div>
        </div>
      </div>
      <button className="flex  bg-gray-700 justify-between text-green-400 rounded-3xl px-4 py-4 text-sm hover:bg-gray-600 transition duration-300 ">
        Details
      </button>
    </div>
    <hr className="border-t-2 border-gray-700 " />

    <div className=" text-gray-300 p-4  flex items-center justify-between ">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center green font-semibold text-lg p-6 ">
          OA
        </div>
        <div>
          <div className="text-sm">Email***@gmail.com</div>
          <div className="text-xs text-gray-400">Profile status: Active</div>
        </div>
      </div>
      <button className="flex  bg-gray-700 justify-between text-green-400 rounded-3xl px-4 py-4 text-sm hover:bg-gray-600 transition duration-300 ">
        Details
      </button>
    </div>
    <hr className="border-t-2 border-gray-700 " />
    <div className=" text-gray-300 p-4  flex items-center justify-between ">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center green font-semibold text-lg p-6 ">
          OA
        </div>
        <div>
          <div className="text-sm">Email***@gmail.com</div>
          <div className="text-xs text-gray-400">Profile status: Active</div>
        </div>
      </div>
      <button className="flex  bg-gray-700 justify-between text-green-400 rounded-3xl px-4 py-4 text-sm hover:bg-gray-600 transition duration-300 ">
        Details
      </button>
    </div>
    <hr className="border-t-2 border-gray-700 " />

    </div>
    
  )
}

export default Referal