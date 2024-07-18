import React from 'react'
import Input from '@mui/joy/Input';
import { Button } from '@mui/material';
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Modal = () => {
    return (
        <div className='flex justify-center' style={{ background: '#18181D' }}>

            <div className='w-1/2 border border-green-800 rounded-2xl p-4 my-6'>

                <div className='my-2'>
                    <p className='text-white text-lg font-medium mb-2'>To</p>
                    <Input
                        placeholder='Support@broker.com'
                        style={{ background: '#18181D', color: ' #1D8751', padding:'10px', border: '2px solid #35353E' }}
                        endDecorator={<IoCopyOutline style={{ color: '#1D8751' }} />}
                    />
                </div>

                <div className='my-4'>
                    <p className='text-white text-lg mb-2 font-medium'>Copy (CC)</p>
                    <Input
                        placeholder='Omayaexpress@omaya.com'
                        style={{ background: '#18181D', color: ' #1D8751', padding:'10px', border: '2px solid #35353E' }}
                        endDecorator={<IoCopyOutline style={{ color: '#1D8751' }} />}
                    />
                </div>

                <div className='my-4'>
                    <p className='text-white text-lg mb-2 font-medium'>Subject</p>
                    <Input
                        placeholder='Withdrawal request for 100$, from (MT4)'
                        style={{ background: '#18181D', color: ' #1D8751', padding:'15px', border: '2px solid #35353E' }}
                        endDecorator={<IoCopyOutline style={{ color: '#1D8751'  }} />}
                    />
                </div>

                <div className='my-4'>
                    <p className='text-white text-lg mb-2 font-medium'>Message</p>
                    <Input
                        placeholder='I Full name  want to withdraw the amount $xxx from my MT4 Account xxxxxx.Please transfer the amount to Omar Ali Omar (OMAYA Express) MT4 Account 329098. '
                        style={{ background: '#18181D', color: ' #1D8751', padding:'20px', border: '2px solid #35353E' }}
                        endDecorator={<IoCopyOutline style={{ color: '#1D8751' }} />}
                    />
                </div>

                <div className='flex items-center my-4'>
                    <AiOutlineExclamationCircle style={{ color: 'orangered' }} />
                    <p className='text-white text-lg font-semibold ml-2'>Please send the above email to the Broker from your registered email within the broker.</p>
                </div>

                <div>
                    <Button variant='contained' fullWidth style={{ background: '#1D8751', padding: '15px', borderRadius: '24px', fontSize:'14px' }}>Close</Button>
                </div>

            </div>

        </div>
    )
}

export default Modal