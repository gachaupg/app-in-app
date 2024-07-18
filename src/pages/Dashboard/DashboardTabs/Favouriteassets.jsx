import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function Favouriteassets() {
  return (
    <div
      style={{ width: "100%" }}
      className="flex dashTop dashTop1  flex-row secondary rounded-lg p-2 gap-8 ">
     <div className="border dashTop border-yellow-600 flex flex-row items-center justify-between p-3 pb-4 pt-4 rounded-lg w-64 shadow-yellow-inset">
    <div className="flex flex-row gap-2 items-center">
        <FaBitcoin className="text-yellow-600" size={40} />
        <div className="flex flex-col items-center">
            <p>BTC</p>
            <p className="text text-xs">Bitcoin</p>
        </div>
    </div>
    <div className="flex flex-col items-center">
        <p className="text-yellow-600 text-xs">524243424USD</p>
        <p className="text-white text-xs text-left ml-14">+4.66</p>
    </div>
</div>
<div className="border dashTop border-blue-600 flex flex-row items-center justify-between p-3 pb-4 pt-4 rounded-lg w-64 shadow-yellow-inset1">
    <div className="flex flex-row gap-2 items-center">
        <FaEthereum className="text-blue-600" size={40} />
        <div className="flex flex-col items-center">
            <p>ETH</p>
            <p className="text text-xs">Etherium</p>
        </div>
    </div>
    <div className="flex flex-col items-center">
        <p style={{
            color:"rgba(8, 129, 234, 0.5)"
        }} className="text-xs">524243424USD</p>
        <p className="text-white text-xs text-left ml-14">+4.66</p>
    </div>
</div>
<div className="border dashTop border-red-600 flex flex-row items-center justify-between p-3 pb-4 pt-4 rounded-lg w-64 shadow-yellow-inset2">
    <div className="flex flex-row gap-2 items-center">
        <img height={50} width={50} src="https://res.cloudinary.com/pitz/image/upload/v1720356385/download_3_dbzw7q.png" alt="" />
        <div className="flex flex-col items-center">
            <p>TRX</p>
            <p className="text text-xs">Tron</p>
        </div>
    </div>
    <div className="flex flex-col items-center">
        <p className="text-red-600 text-xs">524243424USD</p>
        <p className="text-white text-xs text-left ml-14">+4.66</p>
    </div>
</div>
<div className="flex  dashTop pt-2 flex-col items-center justify-center primary rounded-lg w-32">
<div className="p-p rounded-full border border-green-600">
<IoMdAdd color="white" size={34}/>
</div>
<p className="text-white text-xs">Add Assets</p>
</div>
    </div>
  );
}

export default Favouriteassets;
