/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { PieChart } from '@mui/x-charts/PieChart';

import { Home } from '@mui/icons-material';
import Form from '../../components/Form'
import Profile from '../../components/Profile'
import { Bitcoin, DotSquareIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import DonutChart from '../../components/Pichart';
import { Slider, Typography } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';


const Referral = ({ id }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            })
            .catch(err => console.error('Error copying to clipboard:', err));
    };
    useEffect(() => {
        setTimeout(() => setIsCopied(false), 2000);
    }, [isCopied])


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
        <div className='w-full  pro flex  flex-wrap gap-7'>

            <div className='factor flex flex-wrap' style={{
                width: '65%'
            }}>                    <h2>Referral</h2>

                <div className="flex items-center w-full p-5 justify-between">
                    <div className="flex items-center  gap-48 justify-between flex-wrap">
                        <p className='ref' style={{
                            width:'65%'
                        }}>
                          It's a document written by someone who has a relationship with the applicant, and who can attest to the skills and characteristics that make them a great choice for a professional position or an academic institution.
                        </p>
                        <div className="flex items-center border border-slate-400 rounded-lg justify-center">

                            

                        </div>

                    </div>

                </div>
                <h4 className="text-green-500 pb-5">
                    Your Referral Code
                </h4>
                <button className=" border border-green-600 text-green-500 flex justify-between items-center gap-2 w-full  px-4 py-2 rounded-2xl">
                    <p>{id ? id : '252525525'}</p>
                    <div>
                        <button onClick={handleCopyClick(id || 25252525)}>Copy to Clipboard</button>
                        {isCopied && <span style={{ color: 'green' }}>Copied!</span>}
                    </div>
                </button>

                <div className='pt-5'>
                </div><h2 className="text-white">
                    Users Registered With Your Code
                </h2>
                <div className='flex items-center justify-between w-full p-3  mt-3 rounded-lg '>

                    <div className='flex items-center justify-between p-3'>
                        <div className='flex gap-1 items-center'>
                            
                            <h1 className="text-green-500 flex items-center justify-center text-center h-16 w-16 bg-slate-600 rounded-lg">
                                OA
                            </h1>
                            <p className='flex gap-1 flex-col'>
                                <p>Email**@gmail.com</p>
                                <p>Profile status : Active</p>
                            </p>
                        </div>

                    </div>
                    <button className=" border border-green-600 text-green-500 flex justify-center gap-2   px-4 py-2 rounded-3xl">
                        Details
                    </button>

                </div>
                <hr />
                <div className='flex items-center justify-between w-full p-3  mt-3 rounded-lg '>

                    <div className='flex items-center justify-between p-3'>
                        <div className='flex gap-1 items-center'>
                            <h1 className="text-green-500 flex items-center justify-center text-center h-16 w-16 bg-slate-600 rounded-lg">
                                OA
                            </h1>
                            <p className='flex gap-1 flex-col'>
                                <p>Email**@gmail.com</p>
                                <p>Profile status : Active</p>
                            </p>
                        </div>

                    </div>
                    <button className=" border border-green-600 text-green-500 flex justify-center gap-2   px-4 py-2 rounded-3xl">
                        Details
                    </button>

                </div>
                <hr />
                <div className='flex items-center justify-between w-full p-3  mt-3 rounded-lg '>

                    <div className='flex items-center justify-between p-3'>
                        <div className='flex gap-1 items-center'>
                            <h1 className="text-green-500 flex items-center justify-center text-center h-16 w-16 bg-slate-600 rounded-lg">
                                OA
                            </h1>
                            <p className='flex gap-1 flex-col'>
                                <p>Email**@gmail.com</p>
                                <p>Profile status : Active</p>
                            </p>
                        </div>

                    </div>
                    <button className=" border border-green-600 text-green-500 flex justify-center gap-2   px-4 py-2 rounded-3xl">
                        Details
                    </button>

                </div>
                <hr />
                <div className='flex items-center justify-between w-full p-3  mt-3 rounded-lg '>

                    <div className='flex items-center justify-between p-3'>
                        <div className='flex gap-1 items-center'>
                            <h1 className="text-green-500 flex items-center justify-center text-center h-16 w-16 bg-slate-600 rounded-lg">
                                OA
                            </h1>
                            <p className='flex gap-1 flex-col'>
                                <p>Email**@gmail.com</p>
                                <p>Profile status : Active</p>
                            </p>
                        </div>
                    </div>
                    <button className=" border border-green-600 text-green-500 flex justify-center gap-2   px-4 py-2 rounded-3xl">
                        Details
                    </button>
                </div>
                <hr />
            </div>
            <hr />
           
        </div>
    )
}

export default Referral