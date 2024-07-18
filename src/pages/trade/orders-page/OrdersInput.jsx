import React from 'react'

const OrdersInput = () => {
  return (
    <section className="mr-8 flex flex-row gap-10">
        <select
            className="border border-gray-700 rounded-full py-2.5 px-4 bg-dark text-gray-400"
            defaultValue="tether"
        >
            <option value="tether">Tether</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
        </select>
        <select
            className="border border-gray-700 rounded-full py-2.5 px-4 bg-dark text-gray-400"
            defaultValue="type"
        >
            <option value="type">Type</option>
        </select>
        <select
            className="border border-gray-700 rounded-full py-2.5 px-4 bg-dark text-gray-400"
            defaultValue="status"
        >
            <option value="status">Status</option>
        </select>
        <select
            className="border border-gray-700 rounded-full py-2.5 px-4 bg-dark text-gray-400"
            defaultValue="date"
        >
            <option value="date">Date</option>
        </select>     
        {/* <input
            className="border border-gray-700 rounded-full p-2 bg-dark text-grey-400" 
            type="text" 
            placeholder="Tether"
        />
        <input
            className="border border-gray-700 rounded-full p-2 bg-dark text-grey-400" 
            type="text" 
            placeholder="Type"
        />
        <input
            className="border border-gray-700 rounded-full p-2 bg-dark text-grey-400" 
            type="text" 
            placeholder="Status"
        />
        <input
            className="border border-gray-700 rounded-full p-2 bg-dark text-grey-400" 
            type="text" 
            placeholder="Date"
        /> */}
    </section>
  )
}

export default OrdersInput