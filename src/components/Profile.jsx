/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Verified } from "@mui/icons-material"
import { Avatar, Typography } from "@mui/material"
import { useState } from "react";
import { RiMusicFill, RiNotification2Fill } from "react-icons/ri"
import { Input, Slider } from '@mui/material';
import { Dot } from "lucide-react";
const Profile = () => {

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
        <div className="border flex flex-col w-96  mt-4 rounded-lg  border-gray-500 gap-3 justify-center p-4">
            <div className='w-full flex   gap-3 '>
                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '3rem' }} />
                <p className="flex flex-col gap-2 items-center">
                    <p className="text-white">Omar Ali</p>
                    <p className="flex text-green-500 gap-2 items-center">
                        <p className="flex font-si font-size text-xs" >Verified Profile</p>
                        <Verified />
                    </p>
                </p>
                {/* <Typography className='text-white' level="title-lg">Josephine Blanton</Typography> */}
                <div className="flex gap-4 ml-14">
                    <div className="rounded-full border border-green-500 w-9 h-9 flex items-center justify-center">
                        <RiNotification2Fill className="text-white" />
                    </div>
                    <div className="rounded-full border border-green-500  w-9 h-9 flex items-center justify-center">
                        <RiMusicFill className="text-white" />
                    </div>
                </div>
            </div>

            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                Total transactions
            </Typography>
            <p className='text-white'>35,00000 USD</p>
            <div className=" border border-gray-500  w-full" ></div>
            <div>
                <Typography id="input-item-number" gutterBottom>
                    Deposits

                </Typography>
                <p className='text-white'>35,00000 USD</p>
                <Slider
                    style={{
                        color: 'green',
                        // backgroundColor:'green',
                        // height:'1rem'
                    }}
                    value={itemNb}
                    onChange={handleItemNbChange}
                    valueLabelDisplay="auto"
                    min={1}
                    max={10}
                    aria-labelledby="input-item-number" />
                <Typography id="input-radius" gutterBottom>
                    Withdrawals
                </Typography>
                <p className='text-white'>5000 USD</p>
                <Slider
                    style={{
                        color: 'red',
                        // backgroundColor:'green',
                        // height:'1rem'
                    }}
                    value={radius}
                    onChange={handleRadius}
                    valueLabelDisplay="auto"
                    min={15}
                    max={100}
                    aria-labelledby="input-radius" />
            </div>
            <div className=" border border-gray-500  w-full" ></div>
            <h4 className="text-white">Referral</h4>
            <p>Invite friends to earn commission money</p>
            <div className=" border border-gray-500  w-full" ></div>
            <p className="flex p-1 items-center justify-between">
                <p className="">Users Invited</p>
                <p className="text-green-500">24 Users</p>
            </p>
            <p className="flex p-1 items-center justify-between">
                <p className="flex items-center"> <Dot color="green" size={30} /> <p>Income from deposits</p></p>
                <p className="text-white">2600 USD</p>
            </p>
            <p className="flex p-1 items-center justify-between">
                <p className="flex items-center"> <Dot size={30} color="red" /> <p>Income from deposits</p></p>
                <p className="text-white">800 USD</p>
            </p>
            <p className="flex p-1 items-center justify-between">
                <p className="flex items-center"> <Dot size={30} color="blue" /> Total</p>
                <p className="text-white">3400 USD</p>
            </p>
        </div>
    )
}

export default Profile

