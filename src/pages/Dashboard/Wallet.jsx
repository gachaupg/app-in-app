/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { Home } from '@mui/icons-material';
import Form from '../../components/Form'
import Profile from '../../components/Profile'
import { Bitcoin, DotSquareIcon } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { updateTour } from '../../redux/features/productSlice';
import { Slider, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import DonutChart from '../../components/Pichart';
const Wallet = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
const navigate=useNavigate()
   const dispatch = useDispatch();
    const[usdter,setUsdter]=useState('')
    const[btc,setBtc]=useState('')
    const[usdttr,setUsdttr]=useState('')
    const [form, setForm] = useState();
    const placeholderTitles = [user?.result?.usdter, user?.result?.usdttr, user?.result?.btc];
    const label = [<Home />, <Home />, <Bitcoin />];
    const title = ["USDT ERC20", 'USDT ERC20', 'BTC'];
   console.log('hello',form);
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    useEffect(() => {
        setForm({
          ...form,
          usdter,
          btc,
          usdttr,
        });
      }, [usdter, btc, usdttr]);
      
    const handleSubmit = (e) => {
        console.log('hello',form);
        e.preventDefault();
        if (form) {
          dispatch(updateTour({ form, navigate, toast ,id:user?.result._id}));
          toast.success('updated')
        }
      };

      const data1 = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
    ];
    const data2 = [
        { label: '1', value: 100 },
        { label: '2', value: 300 },
        { label: '3', value: 100 },
        { label: '4', value: 80 },
        { label: '5', value: 40 },
        { label: '6', value: 30 },
        { label: '7', value: 50 },
        { label: '8', value: 100 },
        { label: '9', value: 200 },
        { label: '10', value: 150 },
        { label: '11', value: 50 },
    ];

    const [radius, setRadius] = useState(50);
    const [itemNb, setItemNb] = useState(5);
    const [skipAnimation, setSkipAnimation] = useState(false);

    const handleItemNbChange = (event) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setItemNb(newValue);
    };
    const handleRadius = (event) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setRadius(newValue);
    };
    return (
        <div className='w-full flex pro  flex-wrap gap-7'>

            <div className='factor' style={{
                width: '100%'
            }}>
                <div className="flex items-center w-full p-5 justify-between">
                    <h2>Wallet Address</h2>
                    <FaPlus onClick={handleShow} className="text-2xl cursor-pointer text-green-500" />
                    {show && <div className="flex flex-col gap-3 absolute top-32 right-48  left-2/3  bg-slate-950 p-5 rounded-lg shadow-lg">
                
                    <p className="text-gray-500">Bank Account</p>
                    <p className="text-gray-500">Forex Wallet</p>
                    <p className="text-gray-500">Crypto Wallet</p>
                    <p className="text-gray-500">Mobile Wallet</p>
                    </div>
                        }
                </div>
                <div className='flex  w-full p-3  mt-3 rounded-lg border-grey-500'>
                    <Form form="3" className="w-full" placeholderTitles={placeholderTitles} title={title} icon={label} handleSubmit={handleSubmit} usdter={usdter} setUsdter={setUsdter}
                    btc={btc} setBtc={setBtc} usdttr={usdttr} setUsdttr={setUsdttr}
                    />
                   
                </div>
            </div>
            <hr />
                 </div>
    )
}

export default Wallet