import React from 'react'
import AllOrdersTableBody from './AllOrdersTableBody'

const AllOrdersTableData = () => {
    const data = {
        currency_type: "USDT",
        buy_action: "Buy",
        amount: "120",
        rate: "0.89",
        currency: "USD",
        date: "12-Jun-2023",
        status: "completed",
        // image: "/src/assets/landing-page/salaam.svg",
        payment: "Salam Bank"
    }

    const data2 = {
        currency_type: "USDT",
        buy_action: "Sell",
        amount: "120",
        rate: "0.89",
        currency: "USD",
        date: "12-Jun-2023",
        status: "completed",
        // image: "/src/assets/landing-page/salaam.svg",
        payment: "Salam Bank"
    }

  return (
    <>
        <AllOrdersTableBody {...data} />
        <AllOrdersTableBody {...data2} />
    </>
  )
}

export default AllOrdersTableData