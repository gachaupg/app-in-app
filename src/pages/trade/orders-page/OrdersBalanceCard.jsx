import React from 'react'
import Avatar from '@mui/material/Avatar';
import { LuPencil } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";

const BalanceCard = () => {

    return (
        <section className="mr-8 flex flex-row flex-wrap justify-between border border-gray-700 rounded-xl p-4 text-xs bg-gray-900">
            <div className="flex flex-col gap-3">
                <div className='flex items-center gap-3'>
                    {/* icon implementation */}
                    <Avatar sx={{ bgcolor: '#1D8751' }}>OA</Avatar>
                    <p className='text-lg'>User Name</p>
                    <Avatar sx={{ bgcolor: '#1D8751', width: '24px', height: '24px' }}>
                        <LuPencil style={{ color: 'white', width: '12px' }} />
                    </Avatar>
                    {/* icon implementation */}
                </div>
                <div className="flex flex-col md:flex-row gap-2 ">
                    <div className="flex items-center py-1 px-3 border border-transparent rounded-full text-orange-700 p-1 bg-slate-600">
                        {/* icon implementation */}
                        <MdOutlineCancel style={{ color: '#F79009' }} />
                        <p className='pl-1'>Unverified Merchant</p>
                    </div>
                    <a href="/p2p-application"><button className="rounded-full bg-green-700 py-2.5 px-4">Become P2P Merchant</button></a>
                    <button className=" rounded-full bg-gray-600 py 2.5 px-4 text-gray-300">Become Merchant PRO</button>
                </div>
            </div>
            <div className="flex flex-col gap-3 sm:ml-auto md:ml-0">
                <p className="text-green-600 text-xl">P2P Balance</p>
                <p className='text-xl'>1900.8648 USDT <span className="text-gray-400 text-xl">= 1,900 USD</span></p>
                <p className='ml-auto md:ml-0'><span className="text-gray-400 text-base">in escrow:</span> 800 USD</p>
            </div>

        </section>
    )
}

export default BalanceCard