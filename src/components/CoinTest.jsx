import React, { useEffect, useState } from 'react';
import TradingViewWidget from '../pages/TradeWidget'
import axios from 'axios';
import { TiArrowSortedDown } from "react-icons/ti";
import { CgArrowsScrollV } from "react-icons/cg";
import { BiChart } from 'react-icons/bi';
import { IoIosStarOutline } from "react-icons/io";
import ChartComponent from './Chat';


const CryptoListings = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://omaya-server.onrender.com/api/cryptocurrency/listings/latest');
                const json = response.data;
                const result = json.data?.filter((_, index) => index < 15);
                setData(result);
                console.log('result', data);
            } catch (ex) {
                // error
                console.log(ex);
                setError(ex);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts
    const [show, setShow] = useState(false)
    const [itemId, setItemId] = useState('')
    const [show1, setShow1] = useState(false)
    const handleShow = (id) => {

        setShow(!show)
        setItemId(id)
    }
    const handleShow1 = (id) => {
        setShow1(!show1)
        setItemId(id)

    }
    return (
        <div className='table-test w-full coin bg-slate-900 text-white' style={{ width: '100%' }}>
            {data && (
                <table className="table-auto w-full text-white bg-slate-900 border border-collapse">
                    <thead>
                        <tr>
                            <td className='p-3 border'>Name</td>
                            <td className='p-3 border'>Price</td>
                            <td className='p-3 border flex items-center'> <span className='h-6 w-8 flex items-center bg-black text-white p-1'>24 <TiArrowSortedDown size={24} />
                            </span><p>Change</p> <CgArrowsScrollV size={24} />
                            </td>
                            <td className='p-3 border '>24 Volume </td>

                            <td className='p-3 border' >Market Cap</td>
                            {/* {data.data.map((item) => ( */}
                            <td className='p-3 border' >More</td>
                            {/* ))} */}
                        </tr>
                    </thead>
                    {data?.map((item) => (
                        <>
                            {show && item.id === itemId ?
                                <div className='flex flex-row justify-center items-center gap-16 flex-wrap mt-7 mb-10 bg--500 table1 w-full'>
                                    <button onClick={handleShow1} className="bg-green-500 text-white px-4 border flex items-center border--500 py-2 rounded-3xl w-44  "> <BiChart /><p>
                                        View chart {itemId}
                                    </p></button>
                                    <a href="http://https://changenow.io/currencies/bitcoin" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-black text-white px-4 border border-green-500 py-2 rounded-3xl w-32">Exchange</button>

                                    </a>
                                </div> : null
                            }
                            <div className='w-full'>
                                {show1 && item.id === itemId && (
                                    <div style={{
                                        width: '35rem'
                                    }} className='bg-slate-500 w-full h-96'>
                                        <TradingViewWidget />
                                    </div>
                                )}
                            </div>
                            <tbody key={item.id}>


                                <tr>
                                    <td className='p-3 border'>{item.name}</td>
                                    <td className='p-3 border'>{item.quote.USD.price}</td>
                                    <td className='p-3 border'>{item.quote.USD.percent_change_24h}</td>
                                    <td className='p-3 border'>{item.quote.USD.volume_24h}</td>
                                    <td className='p-3 border'>{item.quote.USD.market_cap}</td>
                                    <td onClick={() => handleShow(item.id)} className='p-3 border flex items-center w-full text-green-500'>
                                        <BiChart size={30} />
                                        <IoIosStarOutline size={30} />
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    ))}
                </table>

            )}
        </div>
    );
};


export default CryptoListings;
