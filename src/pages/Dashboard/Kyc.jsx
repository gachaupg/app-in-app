/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { RiMusicFill, RiNotification2Fill } from 'react-icons/ri';
import { useState } from 'react';
import { DotSquareIcon, MoonIcon, Sun } from 'lucide-react';
import DonutChart from '../../components/Pichart';
import { IoIosArrowDown } from 'react-icons/io';
import YourComponent from '../../components/Deposits';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Input, Slider, styled } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function Kyc() {



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
    const [Verify, setVerify] = useState(false)
    const handleVerify = () => {
        setVerify(true)
            .then(() => {
                setTimeout(() => {
                    setVerify(false)
                }, 3000)
            })
    }
    return (
        <>
            {Verify && (
                <YourComponent />

            )}

            <div className='flex kyc pb-32 pt-16 flex-wrap-reverse w-full p-5 pro justify-between text-white bg-[#18181d] g-7'>
                <Box
                    className='pro-box'
                    sx={{


                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: 2,
                    }}
                >
                    <Card className='pro-card' style={{
                        height: '19rem',
                        backgroundColor: '#18181d',
                        border: "1px solid grey"
                    }} variant="soft">
                        <p className='text-white'>Heroes of Mavia launched for both Apple and Android devices less than a week ago and already has more than 230,000 daily active users, the company said. Besides the mobile game shooting to the number one slot as the top free mobile game available on Android devices in China, it has dominated on the Google Play store in Nigeria. "Heroes of Mavia" is also ranked high on the Apple's App Store in Poland, Finland and Canada, according to the company..</p>
                        <div className='w-full flex g-4 flex-col justify-between '>
                            <div className="flex gap-4">
                                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '3rem' }} />
                                <p className='text-white flex flex-col'>
                                    <p>Josephine</p>
                                    <p className='text-yellow-500'>unverified account</p>
                                </p>
                            </div>
                            {/* <Typography className='text-white' level="title-lg">Josephine Blanton</Typography> */}
                            <div className="flex gap-4">
                                <button onClick={handleVerify} className='border bg-green-500 rounded-2xl m-3 flex items-center justify-center border-green-600 text-white h-9 w-full w-96'> <Sun /> Verify now</button>

                            </div>
                        </div>
                    </Card>

                </Box>
             
            </div>
        </>

    );
}