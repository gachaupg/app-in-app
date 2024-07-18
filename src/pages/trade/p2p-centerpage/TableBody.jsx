import React from 'react'
import { LuDot } from "react-icons/lu";
import { SiTether } from "react-icons/si";


const TableBody = (props) => {
    const {id, buy_action, currency, user_name, price, payment, date, rating, comment} = props

  return (
    <tbody>
        <tr>
            <td className="text-gray-400 p-3">
                <p className='font-medium'>{id}</p>
                <p className="text-green-600">{buy_action}</p>
                <p> <span style={{color: '#1D8751'}}> <SiTether /> </span> {currency}</p>
            </td>
            <td>
                <p>{user_name}</p>
            </td>
            <td>
                <p>{price}</p>
            </td>
            <td>
                <div className="flex flex-row p-1 gap-1 bg-slate-600 w-fit rounded-full">
                    <span className="text-purple-400 w-2 h-2 font-bold"> <LuDot/> </span>
                    <p className="text-green-400">{payment}</p>
                </div>
            </td>
            <td className="text-gray-400">
                <p>{date}</p>
            </td>
            <td className="text-gray-400">
                <p>{rating}</p>
            </td>
            <td className="text-green-600">
                <p>{comment}</p>
            </td>
        </tr>
    </tbody>
  )
}

export default TableBody