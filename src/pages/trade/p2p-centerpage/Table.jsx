import React from 'react'
import TableData from './TableData'

const Table = () => {
  return (
    <div className="mr-8">
        <table className="text-xs  w-full divide-y divide-gray-700 border border-gray-700 rounded-t-3xl">
        <thead className="text-gray-400 bg-gray-700">
            <tr>
                <th className="p-3 text-left">Transaction ID <br /> Type</th>
                <th className='text-left'>User name</th>
                <th className='text-left'>Price</th>
                <th className='text-left'>Payment</th>
                <th className='text-left'>Date</th>
                <th className='text-left'>Rating</th>
                <th className='text-left'>Comment</th>
            </tr>
        </thead>
        <TableData />
        <TableData />
        <TableData />
        <TableData />
        <TableData />
        <TableData />
    </table>
    </div>
  
  )
}

export default Table