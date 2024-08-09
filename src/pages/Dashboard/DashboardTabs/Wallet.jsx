import { Delete } from "@mui/icons-material";
import ProfileCard from "./ProfileCard";
import { Plus } from "lucide-react";

const Wallet = () => {
  return (
    <div className="flex  flex-row items-  flex-wrap justify-center pl-10  pt-5 gap-2">
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="flex flex-row justify-between text-slate-300 mb-2">
          <p>Wallet</p>
          <Plus color="green" />
        </div>
        <div className="w-full border secondary border-slate-700 rounded-lg  p-2">
          <p className="text-slate-400 text-xm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <p className="text-slate-400 mt-5 text-xm">Crypto Wallets</p>
          <div className="flex  flex-row gap-3 items-center j">
            <p className="text-white bg-green-900 p-2 rounded-full h-7 w-7 mt-5 flex items-center justify-center text-center">
              T
            </p>
            <p className="text-slate-400 mt-4">USDT ERc20</p>
          </div>
          <div className=" flex  border-slate-700 mt-4 rounded-3xl pl-5  items-center flex-row w-full">
            <input
              placeholder="Type in here your wallet address"
              className=" flex p-1 secondary  border border-slate-700 mt-4 rounded-3xl pl-5  flex-row w-full"
              type="text"
            />
            <Delete className="text-green-600" color="red" />
          </div>

          <p className="text-slate-400 mt-5 text-xm">Crypto Wallets</p>
          <div className="flex  flex-row gap-3 items-center j">
            <p className="text-white bg-green-900 p-2 rounded-full h-7 w-7 mt-5 flex items-center justify-center text-center">
              T
            </p>
            <p className="text-slate-400 mt-4">USDT TRC20</p>
          </div>
          <div className=" flex  border-slate-700 mt-4 rounded-3xl pl-5  items-center flex-row w-full">
            <input
              placeholder="Type in here your wallet address"
              className=" flex p-1 secondary  border border-slate-700 mt-4 rounded-3xl pl-5  flex-row w-full"
              type="text"
            />
            <Delete className="text-green-600" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
