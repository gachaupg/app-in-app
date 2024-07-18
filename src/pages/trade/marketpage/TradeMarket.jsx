import React from 'react'
import TradeTable from './TradeTable'
import BuySellButton from './BuySellButton'
import { Button } from '@mui/material'
import { BiRefresh } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';
import { IoFilterSharp } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";

const TradeMarket = () => {

    const outerBorderStyle = {
        border: '2px solid #35353E', // Adjust the color and thickness as needed
        borderRadius: '12px', // Ensure it's a circle
        padding: '10px', // Adjust the padding as needed
    };

    return (
        <>
            <BuySellButton />
            {/* <div className="flex flex-row w-fit mb-4">
        <button className="rounded-l-full px-4 py-1 border">Buy</button>
        <button className="rounded-r-full px-4 border">Sell</button>
        </div> */}
            {/* <div className="mb-4 border border-gray-200 rounded-full p-1 px-2 w-fit flex flex-row gap-4">
        <div className="flex-1 flex items-center justify-center">Buy</div>
        <div className="border-r border-gray-200 h-6"></div>
        <div className="flex-1 flex items-center justify-center">Sell</div>
        </div> */}
            <div className="mr-8 mb-4 flex flex-row justify-between flex-wrap gap-4 mt-3">
                <div className='flex gap-12'>
                    <form className="flex flex-row gap-4 flex-wrap text-sm text-gray-400 space-x-14">


                        <select
                            className="border border-gray-600 rounded-full py-2 px-6 bg-transparent size-fit bg-dark"
                            defaultValue=""
                        >
                            <option value="" disabled>Enter Amount</option>
                            <option value="option1">USD</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>

                        <select
                            className="border border-gray-600 rounded-full py-2 px-6 bg-transparent size-fit bg-dark"
                            defaultValue=""
                        >
                            <option value="" disabled>Payment Type</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>


                        <select
                            className="border border-gray-600 rounded-full py-2 px-6 bg-transparent size-fit bg-dark"
                            defaultValue=""
                        >
                            <option value="" disabled>Select a Provider</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>

                        <IconButton style={outerBorderStyle}>
                            <IoFilterSharp style={{ color: '#1D8751' }} />
                        </IconButton>

                    </form>

                </div>



                <div className='flex justify-end'>
                    <Button variant='contained' startIcon={<BiRefresh />} style={{ background: '#1D8751', borderRadius: '24px', padding: '12px, 20px, 12px, 20px' }}>Refresh</Button>
                </div>


                {/* <button className="border border-gray-600 rounded-lg p-1 px-2"></button>
            <button className="rounded-full p-1 px-2 bg-green-700">Refresh</button> */}
            </div>
            {/* <div className="mb-4 flex flex-row gap-4">
        <ul className="flex flex-row list-none gap-4">
            <li className="border border-gray-200 rounded-full p-1 px-2">
            <span>Enter Amount</span>
            <span>USD</span>
            <span></span>
            </li>
            <li className="border border-gray-200 rounded-full p-1 px-2">
            <span></span>
            <span>Payment Type</span>
            <span></span>
            </li>
            <li className="border border-gray-200 rounded-full p-1 px-2">
            <span></span>
            <span>Select Provider</span>
            <span></span>
            </li>
        </ul>
        <button className="border border-gray-200 rounded-lg p-1 px-2"></button>
        <button className="border border-gray-200 rounded-full p-1 px-2">Refresh</button>
        </div> */}
            <div className="mr-8">


                <table className=" w-full text-xs divide-y divide-gray-700 border border-gray-700">
                    <thead className="text-gray-400 bg-gray-700">
                        <tr >
                            <th className="p-3 text-left">Advertiser</th>
                            <th className='text-left'>Rate</th>
                            <th className='text-left'>Limit/Available</th>
                            <th className='text-left'>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        <TradeTable />
                        <TradeTable />
                        <TradeTable />
                        <TradeTable />
                        <TradeTable />
                        <TradeTable />
                        <TradeTable />
                        <TradeTable />
                        <TradeTable />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TradeMarket