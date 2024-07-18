/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const TradeTableRow = (props) => {
    const {advertiser_username, orders, completion, account_rate, account_type, rate, available, limit, payment} = props

  return (
    <>
        <tr >
            <td className="p-4 pr-0">
                <div >
                    {/* <div></div> icon */}
                    <p>{advertiser_username}</p>
                    <div></div>
                </div>
                <div className="flex flex-row flex-wrap">
                    <p className="text-green-700">{orders} <span className="text-gray-400">Orders</span> </p>
                    <div></div>
                    <p className="text-green-700">{completion} <span className="text-gray-400">Completion</span> </p>
                </div>
                <div className="flex flex-row">
                    {/* <div></div> icon */}
                    <p className="text-green-700">{account_rate}</p>
                    <p className="p-0.5 bg-yellow-600 rounded-full">{account_type}</p>
                </div>
            </td>
            <td className="pr-6">
                <div >{rate}</div>
            </td>
            <td >
                <div >{available}</div>
                <div ><span className="text-gray-400 text-xs">Limit:</span>{limit}</div>
            </td>
            <td>
                <div className="flex flex-row p-1 gap-1 bg-slate-600 w-fit rounded-full">
                    <span className="text-purple-400 font-bold">.</span>
                    <p className="text-green-400">{payment}</p>
                </div>
            </td>
            <td>
                <button className="rounded-full bg-green-700 text-white px-4 py-2 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">Buy USDT</button>
            </td>
        </tr>
    </>
  )
}

export default TradeTableRow