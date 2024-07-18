import React from 'react'
import AllOrdersTableData from './AllOrdersTableData'

const AllOrdersTable = () => {
  return (
    <div className='mr-8'>
    <table className="text-xs w-full divide-y divide-gray-700 border border-gray-700 rounded-t">
        <thead className="text-gray-400 bg-gray-700">
            <tr>
                <th className="p-3 text-left">Coin</th>
                <th className='text-left'>Type</th>
                <th className='text-left'>Amount</th>
                <th className='text-left'>Rate</th>
                <th className='text-left'>Date</th>
                <th className='text-left'>Status</th>
                <th className='text-left'>Payment</th>
            </tr>
        </thead>
        <AllOrdersTableData />
        <AllOrdersTableData />
        <AllOrdersTableData />
        <AllOrdersTableData />
        <AllOrdersTableData />
        <AllOrdersTableData />
    </table>
    </div>
  )
}

export default AllOrdersTable