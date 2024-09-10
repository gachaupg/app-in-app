import React, { useState } from 'react';
import ExchangeTable from '../../pages/Dashboard/DashboardTabs/Exchange';
import Table from "../../pages/Dashboard/DashboardTabs/Table";

const TransactionCard = () => {
  const [tabs,setTabs]=useState('Exchange')
    return (
      <div className="bg-[#1D1D23] text-white p-4 rounded-lg mt-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white">My Transactions</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={()=>setTabs('Exchange')} className={`p-2 ${tabs==='Exchange'?'bg-green-800':'border border-green-700'}  rounded-2xl text-white w-24 text-xs`}>Exchange</button>
            <button onClick={()=>setTabs('P2P')} className={`p-2 ${tabs==='P2P'?'bg-green-800':'border border-green-700'}  rounded-2xl w-24 text-white text-xs`}>P2P</button>
            <button onClick={()=>setTabs('Swap')} className={`p-2 ${tabs==='Swap'?'bg-green-800':'border border-green-700'}  rounded-2xl w-24 text-white text-xs`}>Swap</button>
            <button onClick={()=>setTabs('Buy')} className={`p-2 ${tabs==='Buy'?'bg-green-800':'border border-green-700'}  rounded-2xl w-24 text-white text-xs`}>Buy</button>
          </div>
        </div>
        <div className="overflow-x-auto mt-4">
        {
          tabs=='Exchange' &&(
            <>
              <ExchangeTable/>
            </>
          )
        }
         {
          tabs=='P2P' &&(
            <>
              <Table/>
            </>
          )
        }
         {
          tabs=='Swap' &&(
            <>
              <p className='g'>Swap Table </p>
            </>
          )
        }
         {
          tabs=='Buy' &&(
            <>
              <p className="g">Buy Table</p>
            </>
          )
        }
        </div>
      </div>
    );
  };

export default TransactionCard;