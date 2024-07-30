/* eslint-disable react/no-unescaped-entities */
import { AttachFile } from "@mui/icons-material";
import { Copy, DollarSign, Dot } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { RiOrderPlayLine } from "react-icons/ri";
import { IoMdArrowRoundForward } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { SlLike } from "react-icons/sl";
import { BsExclamationCircle } from "react-icons/bs";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",

  pt: 2,
  px: 4,
  pb: 3,
};
const BuyPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="white primary flex justify-between  pt-10  wrap small pr-40 pl-40 ">
      <div
        style={{
          width: "65%",
        }}
        className="flex flex-col w-full  gap-6"
      >
        <p>Advertisers Info</p>
        <div
          //   style={{
          //     width: "100%",
          //   }}
          className="flex flex-row justify-start gap-2 items-center justify-center  border border-slate-700 rounded-lg secondary p-3  pr-5 pl-5 items-center  "
        >
          <div className="flex w-96 small  flex-row gap-2 items-center">
            <p className=" bg-green-600 h-14 w-14 rounded-lg flex text-center justify-center items-center p-1 text-white">
              OA
            </p>
            <div className="flex flex-col  ">
              <p
                style={{
                  fontSize: "14px",
                }}
                className="flex w-full flex-row items-center  gap-1 text-white"
              >
                Advitisers Username{" "}
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721730938/Frame_34214_gjn30n.png"
                  alt=""
                />
              </p>
              <p>
                <p
                  style={{
                    fontSize: "10px",
                  }}
                  className="flex g flex-row items-center gap-1"
                >
                  <span className="text-green-600">120</span> Orders
                  <span className="text-green-600"> 90.20%</span> Completion
                </p>
                <p
                  style={{
                    fontSize: "10px",
                  }}
                  className="gap-1 g flex  items-center"
                >
                  Rating{" "}
                  <span className="text-green-600 gap-1 flex flex-row items-center">
                    <SlLike /> 95%
                  </span>
                  Commission : <span className="text-green-600">0.5%</span>
                </p>
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 w-full">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">10 minutes</p>
              <p
                style={{
                  fontSize: "13px",
                }}
                className="g"
              >
                Time limit
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">2 minutes</p>
              <p
                style={{
                  fontSize: "13px",
                }}
                className="g"
              >
                Average release time
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="white">1,200 USDT</p>
              <p
                style={{
                  fontSize: "13px",
                }}
                className="g"
              >
                Available assets
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex items-center justify-between">
          <p> order Info</p>
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
            <p className="g">I want to send</p>
            <div className="flex flex-row  justify-between items-center rounded-lg  w-56  gap-1 p-2 border border-slate-700 items-center">
              <p className="green flex justify-around ">
                <DollarSign /> 200
              </p>
              <p className="flex flex-row  items-center">
                USD <IoIosArrowDown className="g" />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">I want to send</p>
            <div className="flex  rounded-lg w-56 flex-col gap-1 p-1 border border-slate-700 items-">
              <p className="green flex items-center gap-1">
                <img
                  src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                  alt=""
                />{" "}
                200.1045 <span className="white">USDT</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1  ">
            <p className="g">Commission</p>
            <div className="flex g  justify-between items-center rounded-lg w-56  gap-1 p-1 border border-slate-700 items-">
              <p className="green flex p-1 justify-center items-center gap-1">
                <DollarSign /> 1%
              </p>
              <p>USD</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg secondary border border-slate-700  p-2 w-full">
          <div className="flex flex-row w-full p-1 items-center gap-10 justify-between">
            <div
              style={{ width: "40%" }}
              className="primary rounded-lg w-full p-2  h-60"
            >
              <p className="flex flex-row items-center  gap-1">
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
              <div className="w-full">
                <p className="g">Account Name</p>
                <div className="flex flex-row gap-2 justify-between  w-full">
                  <p className="border flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot /> <p>Omar Ali</p>
                  </p>
                  <p className="text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="g">Account Name</p>
                <div className="flex flex-row gap-2 justify-between  w-full">
                  <p className="border text-green-600 flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot color="green" /> <p>1324244243</p>
                  </p>
                  <p className="text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="g">Transaction Id</p>
                <div className="flex flex-row gap-2 justify-between  w-full">
                  <p className="border  text-green-6 flex items-center w-full greybg border-green-600 rounded-2xl p-1">
                    <Dot /> <p>132452345234</p>
                  </p>
                  <p className="text-green-600 flex items-center">
                    {" "}
                    Copy <Copy size={16} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: "14px",
            }}
            className="flex rounded-lg mt-8 flex-col gap-2 border border-green-600"
          >
            <p className="   text-green-6 flex items-center w-full p-1">
              <Dot color="green" />{" "}
              <p>Please send the money from your own account Only</p>
            </p>
            <p className="   text-green-6 flex items-center w-full p-1">
              <Dot color="green" />{" "}
              <p>Put transaction ID in the description field of the bank</p>
            </p>
            <p className="   text-green-6 flex items-center w-full p-1">
              <Dot color="green" />{" "}
              <p>
                Please note, If you do not follow above conditions, we will
                reject your transaction and send you back your money.
              </p>
            </p>
          </div>
          <p className="mt-1">
            I have an issue with{" "}
            <span onClick={handleOpen} className="span text-red-600">
              {" "}
              Appeal/Complain
            </span>
          </p>
          <div className="flex flex-row gap-10 justify-between">
            <button className="border w-full border-slate-700  rounded-lg p-2">
              Cancel
            </button>
            <button className=" w-full bg-green-600 rounded-lg p-2">
              Submit
            </button>
          </div>
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
          <p style={{
            fontSize:'14px'
          }} className="g">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
         <div className="flex flex-row items-center gap-20 mt-4 justify-between">
         <Button className="white txt border border-slate" onClick={handleClose}>Close </Button>
          <Button className="white txt1 border border-slate" onClick={handleClose}>Submit</Button>
         </div>
        </Box>
      </Modal>
      <div style={{ width: "30%" }} className="flex small  flex-col ">
        <p>Chat with Advertiser</p>
        <div className="secondary p-1 w-full border rounded-lg mt-2 flex flex-col border-slate-700">
          <p className="flex flex-row items-center gap-2 text-center items-center justify-center">
            {" "}
            <img
              src="https://res.cloudinary.com/pitz/image/upload/v1721844614/Group_34041_rtorm8.png"
              alt=""
            />{" "}
            ADviteriser user name
          </p>
          <p
            style={{ height: "1px" }}
            className=" w-full mt-2 mb-2 bg-slate-700"
          ></p>
          <div className="flex flex-col gap-2">
            <div className="greybg w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="greybg w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="bg-green-600 ml-36 float-left w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="greybg w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <div className="bg-green-600 ml-36 float-left w-64 p-1 rounded-2xl">
              Lorem ipsum dolor sit,
            </div>
            <p
              style={{ height: "1px" }}
              className=" w-full mt-2 mb-2 bg-slate-700"
            ></p>
            <div className="flex flex-row items-center justify-between p-1">
              <input className="secondary g w-full" type="text" />{" "}
              <div className="flex flex-row gap-1">
                <AttachFile color="green" />{" "}
                <p className="h-7 w-7 bg-green-600 flex items-center justify-center  text-center rounded-full">
                  <IoMdArrowRoundForward />
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="flex flex-row items-center gap-1">
          Advertiser's Terms <BsExclamationCircle color="red" />
        </p>
        <img
          className="mt-6"
          src="https://res.cloudinary.com/pitz/image/upload/v1721903537/Input_uuxd8r.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default BuyPage;
