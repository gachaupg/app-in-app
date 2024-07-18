import React from 'react'
import TradeTableRow from './TradeTableRow'

const TradeTable = () => {
    const data = {
        advertiser_username: "Advertiser User Name",
        orders: "120",
        completion: "90.20%",
        account_rate: "95%",
        account_type: "Merchant PRO",
        rate: "1.04",
        available: "1,200 USDT",
        limit: "100-1000 USD",
        payment: "Salam Bank"
    }

  return (
    <>
        <TradeTableRow {...data} />
    </>   
  )
}

export default TradeTable