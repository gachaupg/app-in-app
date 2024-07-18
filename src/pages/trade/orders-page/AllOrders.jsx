import React from 'react'
import OrdersInput from './OrdersInput'
import AllOrdersTable from './AllOrdersTable'

const AllOrders = () => {
  return (
    <section className="flex flex-col gap-4">
      <OrdersInput />
      <AllOrdersTable />      
    </section>
  )
}

export default AllOrders