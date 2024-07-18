import React from 'react'
import OrdersBalancecard from './OrdersBalanceCard'
import OrdersInfocard from './OrdersInfoCard'
import OrdersActionscard from './OrdersActionsCard'
import OrdersNavbar from './OrdersNavbar'

const Orders = () => {
  return (
    <main className="flex flex-col text-sm gap-4">
        <OrdersBalancecard />
        <OrdersInfocard />
        <OrdersActionscard />
        <OrdersNavbar />
    </main>
  )
}

export default Orders