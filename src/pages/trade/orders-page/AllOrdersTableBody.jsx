import React from 'react'

const AllOrdersTableBody = (props) => {
    // const {id, buy_action, currency, user_name, price, payment, date, rating, comment} = props
    const {currency_type, buy_action, amount, rate, currency, date, status, image, payment} = props

    return (
      <tbody>
          <tr>
              <td className="text-white p-4">
                  {/* icon */}
                  <p>{currency_type}</p>
              </td>
              <td className="text-white">
                  <p>{buy_action}</p>
              </td>
              <td>
              <p className={buy_action === "Buy" ? "text-green-600" : "text-red-600"}>
                {amount} <span className="text-gray-400">{currency}</span>
                </p>
              </td>
              <td>
                  <p className="text-white">{rate} <span className="text-gray-400">{currency}</span> </p>
              </td>
              <td className="text-gray-400">
                  <p>{date}</p>
              </td>
              <td className="text-white">
                  <p>{status}</p>
              </td>
              <td className="text-white">
                    {/* icon */}
                  <p> <span>{image}</span>{payment}</p>
              </td>
          </tr>
      </tbody>
    )
}

export default AllOrdersTableBody