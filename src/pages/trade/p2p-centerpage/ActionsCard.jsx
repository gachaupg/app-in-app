import React from 'react'
import { FiThumbsUp } from "react-icons/fi";
import { PiThumbsDown } from "react-icons/pi";


const ActionsCard = () => {
  return (
    <section className="mr-8 flex flex-wrap gap-2 flex-row justify-between p-2 text-xs">
        <div className="text-green-600 p-1 flex flex-wrap gap-6 ">
            <button className="border border-green-600 rounded-full py-2 px-5 mr-3 hover:bg-green-600 hover:text-white">Payment Methods</button>
            <button className="border border-green-600 rounded-full py-2 px-5 mr-3 hover:bg-green-600 hover:text-white">Orders (12)</button>
            <button className="border hover: border-green-600 rounded-full py-2 px-5 mr-3 bg-green-600 text-white">Feedback (8)</button>
            <button className="border border-green-600 rounded-full py-2 px-5 mr-3 hover:bg-green-600 hover:text-white">Ads Settings</button>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                {/* icon */}
                <FiThumbsUp style={{color: '#1D8751', width:'24px', height:'24px'}} />
                <span className="bg-gray-700 w-48 h-2 rounded-r-full relative"><span className="bg-green-400 w-36 h-2 rounded-r-full absolute"></span></span>
                <span>(7)</span>
            </div>
            <div className="flex flex-row gap-2">
                {/* icon */}
                <PiThumbsDown style={{color: '#FA615F', width:'24px', height:'24px'}} />
                <span className="bg-gray-700 w-48 h-2 rounded-r-full relative"><span className="bg-red-400 w-10 h-2 rounded-r-full absolute"></span></span>
                <span>(1)</span>
            </div>
        </div>
    </section>
  )
}

export default ActionsCard