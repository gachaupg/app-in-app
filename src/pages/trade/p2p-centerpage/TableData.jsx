import React from 'react'
import TableBody from './TableBody'

const TableData = () => {
    const data = {
        id: "1234567890",
        buy_action: "Buy",
        currency: "USDT",
        image: "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",
        user_name: "****Ali@gmail.com",
        price: "148.56",
        payment: "Salam Bank",
        date: "12-Jun-2023",
        rating: "positive",
        comment: "View"
    }

  return (
    <>
        <TableBody {...data} />
    </>
  )
}

export default TableData