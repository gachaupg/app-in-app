/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { DotSquareIcon, PlusCircle } from "lucide-react"
import Profile from "../../components/Profile"
import { FaTimesCircle } from "react-icons/fa"
import DonutChart from "../../components/Pichart"
import { Slider, Typography } from "@mui/material"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { toast } from "react-toastify"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material';

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
const Privacy = () => {
  const [update, setUpdate] = useState(false)

  const handleUpdate = () => {
    toast.success('Update Successful')
  }

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
    <div className='w-full p-5 pro flex flex-wrap gap-7'>

      <div className="boder factor flex flex-col border p-5 rounded-lg border-gray-600" style={{
        width: '65%'
      }}>
        <h2>2 Factor authentication</h2>
        <div className="flex w-full gap-16 rounded-2xl">
          <button className="bg-green-500 w-96 text-white flex items-center gap-2 justify-center px-4 py-2 rounded-2xl">
            <PlusCircle /> Yes
          </button>
          <button className=" border border-green-600 text-green-500 flex items-center justify-center gap-2 w-96  px-4 py-2 rounded-2xl">
            <FaTimesCircle color="green" />
            No </button>


        </div>
        <div className="mt-5 flex flex-col gap-5">
          <button onClick={handleUpdate} className=" border w-full border-green-600 text-green-500 flex items-center justify-center gap-2   px-4 py-2 rounded-2xl">
            Update
          </button>
          <button className=" border border-green-600 text-green-500 flex items-center justify-center gap-2 w-full  px-4 py-2 rounded-2xl">
            Sign out from all devices
          </button>
        </div>
        <div className="mt-5 flex flex-col w-full gap-5">
          <h2 className="text-white">
            Active Browser Session
          </h2>
          <p>These browsers are currently signed in to your account</p>
          <p className="text-white">Signed in</p>
          <p className="text-white">Location</p>
          <p className="text-white">Ip Address</p>
          <p className="text-white">Browser</p>
          <hr />
          <p className="text-white">Less then a minute ago</p>
          <p className="text-white">Lagos, Nigeria</p>
          <p className="text-white">0347345766345862345</p>
          <p className="text-white">Chrome</p>
          <hr />
          <p className="text-white">Less then a minute ago</p>
          <p className="text-white">Waesaw , Poland</p>
          <p className="text-white">0347345766345862345</p>
          <p className="text-white">Chrome</p>
          <hr />
          <p className="text-white">Less then a minute ago</p>
          <p className="text-white">Warsaw, Poland</p>
          <p className="text-white">0347345766345862345</p>
          <p className="text-white">Chrome</p>


        </div>

      </div>


    </div>


  )
}

export default Privacy