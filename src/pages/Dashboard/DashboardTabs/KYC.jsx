import { Cancel } from "@mui/icons-material";
import Profile from "../../../components/Profile";

const KYC = () => {
  return (
    <div className="flex p-3 main  items-  justify-between">
     <div>
        <h2 className="text-slate-400 ml-52 mb-3">KYC</h2>

     <div className="flex flex-col items-center p-3">
        <div style={{width:"70%"}} className="flex flex-col gap-10 border border-slate-600 bg-gray-900 p-2 rounded-lg">
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur.
          </p>
          <div className="flex flex-row gap-6">
           <img src="" width={50} height={50} className="rounded-full" alt="" />
           <div className="flex flex-col gap-2">
            <p>Omar Ali</p>
            <p className="text-yellow-700  flex flex-row items-center gap-1"> Unverified Profile <Cancel fontSize="20" color="yellow"/></p>
           </div>
          </div>
          <button className="bg-green-500 p-1 text-white rounded-2xl">Update now</button>
        </div>
      </div>
     </div>
      <Profile />
    </div>
  );
};

export default KYC;
