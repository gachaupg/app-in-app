import { ArrowDown } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";

const ProfileTab = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));

  return (
      <div  className="  small wrap  flex border p-2  rounded-lg border-slate-700 flex-col ">
          <div className="flex small wrap flex-row items-center justify-between">
              <div className="flex flex-row w-full items-center gap-1">
              <RxAvatar className="h-20 g  w-10" color="" height={70} />
              <p className="flex flex-col items- justify-center  ">
                  <p className="capitalize white">{user?.user?.username}</p>
                  <p className="text-yellow-300">
                      unverified profile
                  </p>
              </p>
             </div>
              <img className="h-7" src="https://res.cloudinary.com/pitz/image/upload/v1723195329/Frame_34659_usv08x.png" alt="" />
          </div> 
          <p className="g">
              Total Trannsactios
          </p>
          <p className="white">
              00.00 USD
          </p>
          <p style={{
              height:'1px'
          }} className="w-full mt-2 mb-2 bg-slate-700"></p>
           <p className="text-start white">Deposits</p>

<div
  style={{ width: "100%" }}
  className="flex small white  flex-col p-3  w-full"
 >
  <div className="flex flex-row  g items-center mb-3 justify-between ">
    <p>00.00 USD</p>
    <button className="flex items-center rounded-2xl p-1  ">
      month <IoIosArrowDown size={15} />
    </button>
  </div>
  <div className="progress-bar">
    <div className="filler " style={{ width: `0%` }} />
  </div>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center gap-1">
        <p className="bg-green-800 h-3 w-7 rounded-lg"></p>
        <p>Deposits</p>
      </div>
      <p>000 </p>
    </div>
    
  </div>
  
</div>
<div
  style={{ width: "" }}
  className="flex flex-col p-3 small white border mt-3 rounded-lg border-slate-700 secondary w-full"
 >
  <div className="flex flex-row g items-center mb-3 justify-between ">
    <p>00.00 USD</p>
    <button className="flex items-center rounded-2xl p-1  ">
      month <IoIosArrowDown size={15} />
    </button>
  </div>
              <div style={{
      background:'white'
  }} className="progress-bar ">
    <div className="filler " style={{ width: `100%` }} />
  </div>
  <div className="mt-2">
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center gap-1">
        <p className="bg-red-800 h-3 w-7 rounded-lg"></p>
        <p>Withdrawals</p>
      </div>
      <p>00.00 </p>
    </div>
    
  </div>
  
</div>
    </div>
  )
}

export default ProfileTab