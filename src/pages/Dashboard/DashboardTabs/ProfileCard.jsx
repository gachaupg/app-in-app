import { FiEdit } from "react-icons/fi";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../../../redux/features/authSlice";

Chart.register(...registerables);

const ProfileCard = () => {
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
  return (
    <div
      style={{ width: "100%" }}
      className="text-white flex small  flex-col items-center mt-3 mr-10"
    >
      <div
        style={{ width: "50%" }}
        className="p-2 rounded-lg small  secondary flex flex-col"
      >
        <div className="flex flex-row small items-center justify-between">
          <img
            className="w-32 h-32 rounded-full object-contain"
            src="https://res.cloudinary.com/pitz/image/upload/v1720372695/771187_man_512x512_zcuk3l.png"
            alt=""
          />
          <button className="p-1 flex flex-row gap-1 rounded-2xl items-center pl-2 pr-2 bg-black">
            <FiEdit /> Edit
          </button>
        </div>
        <p className="text-xs text-green-600 ml-7 mb-3"> @{user?.user.username}Verified profile</p>

        <button className="p-1 flex text-center flex-row gap-1 rounded-lg mt-1 items-center justify-center pl-2 pr-2 border border-slate-300">
          Notifications
        </button>
        <div className="p-1 flex flex-row gap-1 justify-between rounded-2xl items-center">
          <button className="p-1 flex text-center flex-row gap-1 w-36 bg-green-600 rounded-2xl mt-1 items-center justify-center pl-2 pr-2">
            Deposit
          </button>
          <button className="p-1 flex text-center flex-row w-36 gap-1 bg-red-600 rounded-2xl mt-1 items-center justify-center pl-2 pr-2">
            Withdraw
          </button>
        </div>
      </div>
      <div
        style={{ width: "50%" }}
        className="App border mt-2 mb-2 small rounded-lg secondary border-slate-700"
      >
        <div className="mb-3 small "  style={{ width: "100%" }}>
          <Doughnut
            style={{ width: "100%" }}
            className="w-full small"
            data={{
              // Name of the variables on the chart
              labels: [
                "25-01-2024",
                "25-01-2024",
                "25-01-2024",
                "25-01-2024",
                "25-01-2024",
                "25-01-2024",
              ],
              datasets: [
                {
                  // Label for the dataset
                  label: "total count/value",
                  // Data or value of each variable
                  data: [10000, 15000, 20000, 25000, 3000, 35000],
                  // Background color for each segment
                  backgroundColor: [
                    "aqua",
                    "green",
                    "red",
                    "yellow",
                    "blue",
                    "orange",
                  ],
                  // Border color for each segment
                  borderColor: [
                    "aqua",
                    "green",
                    "red",
                    "yellow",
                    "blue",
                    "orange",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            // Options for the chart
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: {
                    fontSize: 10,
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <p className="text-start">P2P buys</p>

      <div
        style={{ width: "50%" }}
        className="flex small flex-col p-3 border rounded-lg border-slate-700 secondary w-full"
       >
        <div className="flex flex-row items-center mb-3 justify-between ">
          <p>30000 USD</p>
          <button className="flex items-center rounded-2xl p-1  border border-slate-500">
            month <ArrowDown size={15} />
          </button>
        </div>
        <div className="progress-bar">
          <div className="filler " style={{ width: `60%` }} />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-green-800 h-3 w-7 rounded-lg"></p>
              <p>Completed</p>
            </div>
            <p>4000 </p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-white h-3 w-7 rounded-lg"></p>
              <p>Inscrow</p>
            </div>
            <p>1000 </p>
          </div>
        </div>
        
      </div>
      <div
        style={{ width: "50%" }}
        className="flex flex-col p-3 small border mt-3 rounded-lg border-slate-700 secondary w-full"
       >
        <div className="flex flex-row items-center mb-3 justify-between ">
          <p>30000 USD</p>
          <button className="flex items-center rounded-2xl p-1  border border-slate-500">
            month <ArrowDown size={15} />
          </button>
        </div>
        <div className="progress-bar">
          <div className="filler " style={{ width: `60%` }} />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-green-800 h-3 w-7 rounded-lg"></p>
              <p>Completed</p>
            </div>
            <p>4000 </p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="bg-white h-3 w-7 rounded-lg"></p>
              <p>Inscrow</p>
            </div>
            <p>1000 </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileCard;
