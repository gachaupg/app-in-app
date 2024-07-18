/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { RiMusicFill, RiNotification2Fill } from 'react-icons/ri';
import { Input, Slider } from '@mui/material';
import { useState } from 'react';
import { Dot, DotSquareIcon, MoonIcon, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import DonutChart from '../../components/Pichart';

export default function BioCard() {

    const { user } = useSelector((state) => ({ ...state.auth }));

    const initialState = {
        name: "",
        email: '',

    }

    const [form, setForm] = useState(initialState)

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

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        console.log('hello', form);
        e.preventDefault();
        if (form) {
            dispatch(updateTour({ form, navigate, toast, id: user?.result._id }));
        }
    };


    return (

        <div className='flex  flex-wrap-reverse w-full p-5 justify-between pro text-white bg-[#18181d] g-5'>
            <Box
                className='pro-box'
                sx={{


                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: 2,
                }}
            >
                <div className='flex w-full gap-5 justify-center items-center'>
                    <button className='border bg-green-500 rounded-2xl m-3 flex items-center justify-center border-green-600 text-white h-9 w-98 w-96'> <Sun /> Light</button>
                    <button className='border rounded-2xl m-3 border-green-600 text-white h-9 flex items-center justify-center w-96'> <MoonIcon /> Update</button>

                </div>
            </Box>
            <Box
                className='pro-box h-96'
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: 2,
                }}
            >
                <Card className='pro-card ' style={{

                    backgroundColor: '#18181d',
                    border: "1px solid grey"
                }} variant="soft">
                    <h3 className='text-white'>Password</h3>

                    <CardContent className='border inputss text-white rounded-md p-5'>
                        <label htmlFor="">Password</label>
                        <Input className='border rounded-2xl m-3 inputsss border-green-600 text-white ' type='password' placeholder='1234567' />
                    </CardContent>
                    <Link className='w-full' to='/reset-password'>
                        <button className='border rounded-2xl m-3 w-full inputss border-green-600 text-white h-9'>Update</button>

                    </Link>

                </Card>

            </Box>
            <Box
                className='pro-box'
                sx={{


                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: 2,
                }}
            >
                <Card className='pro-card' style={{

                    backgroundColor: '#18181d',
                    border: "1px solid grey"
                }} variant="soft">
                    <h3 className='text-white'>Basic info</h3>

                    <CardContent className='border inputss text-white w-full  rounded-md '>
                        <label htmlFor="">Your unique id</label>
                        <Input
                            className='border inputsss rounded-2xl h-10 m-3 border-green-600 bg-slate-400 text-white'
                            type='number'
                            placeholder={user?.result?._id}
                            style={{ '::placeholder': { color: 'white' } }}
                        />
                    </CardContent>
                    <CardContent className='border inputss text-white rounded-md p-5'>
                        <label htmlFor="">Your Name </label>
                        <Input onChange={(e) => setForm({ ...form, name: e.target.value })} className='border inputsss  rounded-2xl h-10 m-3 border-green-600 bg-slate-400 text-white ' type='name' placeholder={user?.result?.name} />
                    </CardContent>
                    <CardContent className='border inputss text-white rounded-md p-5'>
                        <label htmlFor="">Your email </label>
                        <Input onChange={(e) => setForm({ ...form, email: e.target.value })} className='border v rounded-2xl m-3 h-10 border-green-600 text-white bg-slate-400' type='Email' placeholder={user?.result?.email}
                            style={{ '::placeholder': { color: 'white' } }} />
                    </CardContent>
                    <button className='border rounded-2xl inputss m-3 border-green-600 text-white h-9'>Update</button>

                    {/* </Link> */}
                </Card>

            </Box>


        </div>


    );
}