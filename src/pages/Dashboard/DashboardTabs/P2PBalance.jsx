import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Favouriteassets from "./Favouriteassets";
import BarGraph from "./BarGraph";
import DataTable from "./Table";
import { useEffect, useState } from "react";

import { QrCode } from "@mui/icons-material";
import { BoxIcon, CopyIcon, Upload } from "lucide-react";
import { FaExclamation } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/features/authSlice";

const P2PBalance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(users));
  }, []);
  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log('====================================');
  console.log('logged in uss',user);
  console.log('====================================');
  useEffect(() => {
    if (user?.access) {
      navigate("/dashboard");
    }else{
      navigate("/")
    }
  }, [user]);
  const [open, setOpen] = useState("");
  // const handleOpen = () => setOpen('Deposit');
  // const handleClose = () => setOpen(false);
  console.log(open);
  return (
    <div
      style={{ width: "100%" }}
      className="flex dashTop flex-col rounded-lg pb-1 pl-20 text-white"
    >
      <h2>P2P Balance</h2>
      <div>
        {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-slate-400">Assets</h2>
        </Box>
      </Modal> */}
      </div>
      <div
        style={{ width: "100%" }}
        className="flex flex-col rounded-lg justify-between secondary p-3"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-row flex-wrap gap-1 rounded-lg justify-between primary p-3">
            <div>
            <h6 className="flex text-slate-200"> Welcome ! {user?.user?.username}</h6>

              <h6 className="flex text-slate-200">Balance</h6>
              <h6 className="flex text-white">
                1900.8640USDT <span className="text-slate-500">= 1,900USD</span>
              </h6>
            </div>{" "}
            <div className="flex flex-row gap-6 ">
              <button
                onClick={() => setOpen("Deposit")}
                className="flex flex-row items-center justify-center h-10 rounded-lg  w-28 text-green-600 p-1 border border-green-600"
              >
                {" "}
                <GoArrowUpRight color="green" /> Deposit
              </button>
              <button
                onClick={() => setOpen("Withdraw")}
                className="flex flex-row items-center h-10 rounded-lg text-red-600 border p-1 border-red-600 "
              >
                {" "}
                <GoArrowDownLeft color="red" /> Withdraw
              </button>
            </div>
          </div>

          <h6 className="flex text-slate-500">
            Available Balance =
            <span className="flex text-white mr-1">1900 </span> USDT/Locked
            Amount= <span className="flex text-white">10000USDT</span>{" "}
          </h6>
        </div>
      </div>
      {open === "Withdraw" && (
        <>
          <div className="flex dashTop border border-slate-600 p-3 rounded-lg bg-gray-900  flex-col w-full">
            <div className="flex flex-row items-center gap-3 justify-between">
              <div className="flex  dashTop flex-col w-full  gap-3">
                <p className="text-slate-400">Asset</p>
                <select
                  className="bg-slate-800 p-2 pr-3 w-full rounded-lg dashTop"
                  name="USDT"
                  id=""
                >
                  <option value="USDT">USDT</option>
                </select>
              </div>
              <div className="flex w-full  dashTop flex-col  gap-3">
                <p className="text-slate-400">Network</p>
                <select
                  className="bg-slate-800 p-2 pr-3 w-full rounded-lg dashTop"
                  name="USDT"
                  id=""
                >
                  <option value="USDT">TRC 20 tron</option>
                </select>
              </div>{" "}
            </div>
            <div className="flex flex-col w-full">
              <p>USDT Address</p>
              <div className="flex flex-row w-full  gap-6  justify-between">
                <input
                  className="bg-slate-800 p-2 pr-3 border border-slate-500 w-full rounded-2xl dashTop"
                  placeholder="Type in your wallet address here"
                  id=""
                />
              </div>
              <div className="flex flex-row w-full  gap-6 ">
                <input type="checkbox" />
                <p>
                  I confirm that the above submitted address is USDT Address and
                  not other crypto
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center  w-full gap-2 justify-between">
              <div className="flex   flex-col w-full  gap-3">
                <p className="text-slate-400">Amount</p>
                <input
                  className="bg-slate-800 w-full p-2 pr-3 border flex  border-slate-500 rounded-lg dashTop"
                  placeholder="$ 100"
                  id=""
                />
              </div>
              <div className="flex   flex-col w-full  gap-3">
                <p className="text-slate-400">Amount to receive</p>
                <input
                  className="bg-slate-800 p-2 pr-3 border border-slate-500 w-full rounded-lg dashTop"
                  placeholder="99 USDT"
                  id=""
                />
              </div>{" "}
            </div>
            <div className="flex w-full border border-slate-500 rounded-3xl mt-6 p-2 items-center gap-3 justify-center">
              <button className="bg-slate-600 pr-1 pl-1 rounded-2xl">
                commission 3%
              </button>{" "}
              $3
              <button className="bg-slate-600 pr-1 pl-1 rounded-2xl">
                network fee{" "}
              </button>{" "}
              $3
              <button className="bg-slate-600 pr-1 pl-1 rounded-2xl">
                total fee{" "}
              </button>{" "}
              6
            </div>
            <div className="flex  mt-5 mb-7 flex-row items-center">
              <p className="p-1 border border-green-800 rounded-full">
                <FaExclamation size={15} />
              </p>{" "}
              OMAYA charges 0.5% for every P2P withdrawal and deposit
            </div>
            <div className="flex flex-col w-full gap-2 p-2 border border-green-800 rounded-lg">
              <ul>
                <li className="text-slate-500">
                  Please send money from your own account Only !
                </li>
                <li className="text-slate-500">
                  Put transaction ID in the description field of the bank !
                </li>
                <li className="text-slate-500">
                  Please note, If you do not follow above conditions, we will
                  reject your transaction and send you back your money. !
                </li>
              </ul>
            </div>
            {/* <div className="flex  mt-5 mb-7 flex-row  justify-between pr-10">
              <div className="flex text-slate-500 items-center gap-2">
                <input type="checkbox" placeholder="kk" /> i Confirm i have sent
                the money
              </div>
              <div className="text-slate-500 p-3 flex flex-row border border-slate-800">
                <p>Upload screenshots</p>
                <Upload />
              </div>
            </div> */}
            <div className="flex mt-10 flex-row w-full gap-2 justify-between">
              <button className="border w-full p-1 rounded-2xl  border-slate-700">
                Cancel
              </button>
              <button className=" w-full p-1 rounded-2xl  bg-green-700">
                Withdraw
              </button>
            </div>
          </div>
        </>
      )}
      {open === "Deposit" && (
        <>
          <div className="flex dashTop border border-slate-600 p-3 rounded-lg bg-gray-900  flex-col w-full">
            <div className="flex flex-row items-center gap-3 justify-between">
              <div className="flex  dashTop flex-col w-full  gap-3">
                <p className="text-slate-400">Asset</p>
                <select
                  className="bg-slate-800 p-2 pr-3 w-full rounded-lg dashTop"
                  name="USDT"
                  id=""
                >
                  <option value="USDT">USDT</option>
                </select>
              </div>
              <div className="flex w-full  dashTop flex-col  gap-3">
                <p className="text-slate-400">Network</p>
                <select
                  className="bg-slate-800 p-2 pr-3 w-full rounded-lg dashTop"
                  name="USDT"
                  id=""
                >
                  <option value="USDT">TRC 20 tron</option>
                </select>
              </div>{" "}
            </div>
            <div className="flex flex-col w-full">
              <p>USDT Address</p>
              <div className="flex flex-row  gap-6  justify-between">
                <div
                  className="border p-1 mt-1 border-green-800 rounded-2xl flex flex-row justify-between"
                  style={{ width: "90%" }}
                >
                  <p className="flex flex-row">
                    <BoxIcon /> 633r3r3635536536535
                  </p>{" "}
                  <QrCode className="text-green-800" />
                </div>
                <button className="flex items-center gap-1 rounded-2xl p-2 bg-slate-700">
                  Copy <CopyIcon size={15} />
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center  w-full gap-2 justify-between">
              <div className="flex   flex-col w-full  gap-3">
                <p className="text-slate-400">I want to deposit</p>
                <input
                  className="bg-slate-800 w-full p-2 pr-3 border flex  border-slate-500 rounded-lg dashTop"
                  placeholder="$ 100"
                  id=""
                />
              </div>
              <div className="flex   flex-col w-full  gap-3">
                <p className="text-slate-400">I want to recieve</p>
                <input
                  className="bg-slate-800 p-2 pr-3 border border-slate-500 w-full rounded-lg dashTop"
                  placeholder="99 USDT"
                  id=""
                />
              </div>{" "}
            </div>
            <div className="flex w-full border border-slate-500 rounded-3xl mt-6 p-2 items-center gap-3 justify-center">
              <button className="bg-slate-600 pr-1 pl-1 rounded-2xl">
                commission 3%
              </button>{" "}
              $3
              <button className="bg-slate-600 pr-1 pl-1 rounded-2xl">
                network fee{" "}
              </button>{" "}
              $3
              <button className="bg-slate-600 pr-1 pl-1 rounded-2xl">
                total fee{" "}
              </button>{" "}
              6
            </div>
            <div className="flex  mt-5 mb-7 flex-row items-center">
              <p className="p-1 border border-green-800 rounded-full">
                <FaExclamation size={15} />
              </p>{" "}
              OMAYA charges 0.5% for every P2P withdrawal and deposit
            </div>
            <div className="flex flex-col w-full gap-2 p-2 border border-green-800 rounded-lg">
              <ul>
                <li className="text-slate-500">
                  Please send money from your own account Only !
                </li>
                <li className="text-slate-500">
                  Put transaction ID in the description field of the bank !
                </li>
                <li className="text-slate-500">
                  Please note, If you do not follow above conditions, we will
                  reject your transaction and send you back your money. !
                </li>
              </ul>
            </div>
            <div className="flex  mt-5 mb-7 flex-row  justify-between pr-10">
              <div className="flex text-slate-500 items-center gap-2">
                <input type="checkbox" placeholder="kk" /> i Confirm i have sent
                the money
              </div>
              <div className="text-slate-500 p-3 flex flex-row border border-slate-800">
                <p>Upload screenshots</p>
                <Upload />
              </div>
            </div>
            <div className="flex -flex-row w-full gap-2 justify-between">
              <button className="border w-full p-1 rounded-2xl  border-slate-700">
                Cancel
              </button>
              <button className=" w-full p-1 rounded-2xl  bg-green-700">
                Deposit
              </button>
            </div>
          </div>
        </>
      )}
      <div
        style={{
          width: "100%",
        }}
        className="flex flex-row dashTop items-center justify-between"
      >
        <p>Favorite Assets</p>
        <div className="flex flex-row items-center justify-between p-1">
          <IoIosArrowDropleftCircle size={24} className="text-slate-700" />
          <IoIosArrowDroprightCircle size={24} color="green" />
        </div>
      </div>
      <Favouriteassets />
      <p>P2P Transaction Overview (USD)</p>
      <BarGraph />
      <DataTable />
    </div>
  );
};

export default P2PBalance;
