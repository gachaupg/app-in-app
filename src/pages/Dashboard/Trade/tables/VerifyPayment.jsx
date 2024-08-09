/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AttachFile } from "@mui/icons-material";
import { Clock, Copy, DollarSign, Dot } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { RiOrderPlayLine } from "react-icons/ri";
import { IoMdArrowRoundForward } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import  TextField  from '@mui/material/TextField';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { SlLike } from "react-icons/sl";
import { BsExclamationCircle } from "react-icons/bs";



const verifyPayment = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [feedback, close1] = useState(true);
  const[comment,setComment]=useState()
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to close the modal
  // const handleCloseModal = (props) => {
  //   setIsModalOpen(false);
      
  // };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.black',
    border: 'none',
    borderRadius:3,
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <div className="white primary flex justify-between  pt-10  wrap small pr-40 pl-40 ">
      <div
        style={{
          width: "65%",
        }}
        className="flex flex-col w-full space-y-2"
      >
       
      
   
     
        <div></div>
        <div className="flex items-center justify-between">
          <p> Order Created</p>
          <p
            className="flex flex-row items-center gap-2
          "
          >
            <img
              className="h-4"
              src="https://res.cloudinary.com/pitz/image/upload/v1721843528/Group_2_iypdkq.png"
              alt=""
            />{" "}
            Order Number :{" "}
            <span className="text-green-600 flex flex-row items-center gap-1 ml-3">
              9346457687345 <Copy size={17} />
            </span>
          </p>
        </div>
        <div className="flex gap-10 justify-around p-1 rounded-lg border border-slate-700 items-center">
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">Fiat USD</p>
            <div className="flex flex-row  justify-between items-center rounded-lg  w-56  gap-1 p-2 border border-slate-700 items-center bg-gray-700">
          
              <p className="green flex p-1 justify-center items-center gap-1">
                <DollarSign /> <span className="text-yellow-400"> 200.1045 </span>
              </p>
              <p className="flex flex-row  items-center text-yellow-400">
                USD 
              </p>
             
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">Commission</p>
            <div className="flex flex-row  justify-between items-center rounded-lg  w-56  gap-1 p-2 border border-slate-700 items-center bg-gray-700">
            <p className="green flex p-1 justify-center items-center gap-1">
                <DollarSign /> 1%
              </p>
              <p className="text-yellow-400">USD</p>


            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g ">Total Quanity</p>
            <div className="flex g  justify-between items-center rounded-lg w-56  gap-1 p-1 border border-slate-700  bg-gray-700">
              

               <p className="green flex items-center gap-1">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />{" "}
                <span className="text-yellow-400"> 200.1045</span> <span className="text-yellow-400 pl-14">USDT</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-6">
          <p className="white ">Confirm that the payment is from Mohamed Ziyad Yousef  (Buyer's name)</p>
         
        </div>
        <div className="flex flex-col rounded-lg secondary border border-slate-700  p-12 w-full">
          <div className=" grid-row w-full p-3 items-center gap-10 justify-between">
            <div
              style={{ width: "30%" , height: "20%",borderRadius: 20}}
              className="primary rounded-lg w-full p-2  border border-slate-700 black h-70 jusitify-start"
            >
              <p className="flex flex-row items-center gap-2">
                {" "}
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721888934/Premier_bank_1_ljsbtx.png"
                  alt=""
                />{" "}
                Premier bank
              </p>
            </div>
            <div
              style={{ width: "100%" }}
              className="flex small flex-col gap-2 items-center gap-2"
            >
             <div className="w-full mt-5">
  <div className="flex items-center gap-6 mb-2 w-full">
    <p className="g block">Account Name</p>
    <div className="flex flex-row gap-2">
      <p className="border flex items-center w-full greybg border-green-600 rounded-2xl p-1 " style={{ width: "80%" }}>
        <Dot /> <span>Omar Ali</span>
      </p>
      <p className="text-green-600 flex items-center">
        Copy <Copy size={16} />
      </p>
    </div>
  </div>
</div>

              <div className="w-full">
                <p className="g">Account Number</p>
                <div className="flex flex-row gap-2  w-full">
                  <p className="border text-green-600 flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot color="green" /> <p>1324244243</p>
                  </p>
                  <p className="text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>


            

            </div>
           
          <div className="flex mt-8 w-full">
          <button className="border w-full border-orange-500 rounded-2xl p-4 flex justify-between items-center ">
            <span className="text-gray-400">Buyer’s Name</span>
           <span className="text-yellow-400 flex"> <Dot color="white" />  Mohammed Zyad Yousef  
                                
            </span>
          </button>
        </div>
          </div>
        
          


        </div>
        <p className="text-sm mb-2">Confirm payment is received.</p>


        <p className="text-xs text-gray-500 mb-4">
  

 
  <span>
    
    After confirming the payment, be sure  to click Payment Received button below  </span>
</p>

          <div className="flex mt-2 flex-row gap-10 justify-between">
            <button className="border w-full border-slate-700  rounded-lg p-2">
              Appeal After 9:45
            </button>
            <button className=" w-full bg-yellow-600 rounded-lg p-2">
              Payment Received
            </button>
          </div>



      </div>
     


      <Modal
        className=" rounded-lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{ ...style, width: "40%" }}
          className="rounded-lg primary white"
        >
          <h2 className="text-center" id="child-modal-title">
            Submit Appeal
          </h2>
          <div>
            <p
              style={{
                color: "#E06542",
              }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedl
            </p>
            <p
              style={{
                color: "#E06542",
              }}
            >
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedl
            </p>
            <p
              style={{
                color: "#E06542",
              }}
            >
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedl
            </p>
          </div>
          <p className="text-center ">Appeal reason</p>
          <div className="secondary border  border-slate-700 w-full rounded-2xl p-1">
            <select className="secondary g  w-full  p-1" name="" id="">
              <option className="g" value="">
                Select the reason for appeal
              </option>
            </select>
          </div>
          <p className="mt-2 mb-2">Upload Documents</p>
          <p
            style={{
              fontSize: "14px",
            }}
            className="g"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <div className="flex flex-row items-center gap-20 mt-4 justify-between">
            <Button
              className="white txt border border-slate"
              onClick={handleClose}
            >
              Close{" "}
            </Button>
            <Button
              className="white txt1 border border-slate"
              onClick={handleClose}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
      <div>
      {/* <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal} 
      /> */}
    </div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="primary border border-slate-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-center text-white text-lg font-semibold mb-6">
          Confirm Transaction
        </h2>

        <div className="flex flex-col gap-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-500 rounded mr-2"
            />
            I Confirm that I received amount to my Bank account from the user
          </label>

          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-500 rounded mr-2"
            />
            I Confirm that money came from{" "}
            <span className="text-green-500">advertiser name</span>
          </label>

          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-500 rounded mr-2"
            />
            I agree to release the USDT from escrow
          </label>
        </div>

        <div className="flex justify-between mt-6">
          <button
            // onClick={onClose}
            className="border border-orange-500 text-white py-2 px-6 rounded-lg"
          >
            Close
          </button>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg">
            Confirm Release
          </button>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default verifyPayment;
