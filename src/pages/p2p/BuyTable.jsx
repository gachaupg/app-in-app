import { Check } from "@mui/icons-material";
import { Clock, Dot } from "lucide-react";
import { BiLike } from "react-icons/bi";

const BuyTable = () => {
  return (
    <div>
      <table className="styled-table rounded-lg secondary w-full border-collapse">
        <thead className="bg-slate-800">
          <tr>
            <th className="p-2">Advertise</th>
            <th className="p-2">Commission</th>
            <th className="p-2">Limit</th>
            <th className="p-2">Payment</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody className="secondary">
          <tr>
            <td className="p-2">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <p
                    style={{
                      fontSize: '10px'
                    }}
                    className="h-5 w-5 flex p-1 bg-green-800 text-xs items-center justify-center rounded-full"
                  >
                    OA
                  </p>
                  <p
                    style={{ fontSize: "12px" }}
                    className="flex gap-1 flex-row items-center"
                  >
                    Username
                    <span className="h-5 w-5 flex bg-yellow-600 items-center justify-center rounded-full">
                      <Check fontSize="small" />
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center mt-1 gap-1">
                  <p style={{ fontSize: "12px" }} className="text-slate-600">
                    <span className="text-green-700">120</span> Orders
                  </p>
                </div>
                <div style={{fontSize:'12px'}} className="flex flex-row items-center mt-1 gap-1">
                  <p className="text-green-600 flex flex-row items-center gap-1">
                    <BiLike /> 95%
                  </p>
                  <button
                    style={{ fontSize: "12px" }}
                    className="p-1 flex flex-row items-center text-xs rounded-2xl bg-yellow-600"
                  >
                    <Dot size={20} /> Merchant Pro
                  </button>
                  <p
                    style={{ fontSize: "12px" }}
                    className="text-green-600 flex flex-row items-center gap-1"
                  >
                    <Clock /> 20 min
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2">0.5%</td>
            <td style={{fontSize:'12px'}}  className="p-2 flex flex-col gap-1 items-center justify-center mt-4">
              <p>1200 USDT</p>
              <p>limit: 100-1000 USDT</p>
            </td>
            <td className="p-2 ">
              <button   style={{fontSize:'12px'}}  className="p-1 bg0 rounded-3xl text-green-700 flex flex-row items-center"><Dot/> Salma bank</button>
            </td>
            <td>
              <button  style={{fontSize:'12px'}}  className="p-2 bg-green-600 rounded-3xl text-white">Buy Usdt</button>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <p
                    style={{
                      fontSize: '10px'
                    }}
                    className="h-5 w-5 flex p-1 bg-green-800 text-xs items-center justify-center rounded-full"
                  >
                    OA
                  </p>
                  <p
                    style={{ fontSize: "12px" }}
                    className="flex gap-1 flex-row items-center"
                  >
                    Username
                    <span className="h-5 w-5 flex bg-yellow-600 items-center justify-center rounded-full">
                      <Check fontSize="small" />
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center mt-1 gap-1">
                  <p style={{ fontSize: "12px" }} className="text-slate-600">
                    <span className="text-green-700">120</span> Orders
                  </p>
                </div>
                <div style={{fontSize:'12px'}} className="flex flex-row items-center mt-1 gap-1">
                  <p className="text-green-600 flex flex-row items-center gap-1">
                    <BiLike /> 95%
                  </p>
                  <button
                    style={{ fontSize: "12px" }}
                    className="p-1 flex flex-row items-center text-xs rounded-2xl bg-yellow-600"
                  >
                    <Dot size={20} /> Merchant Pro
                  </button>
                  <p
                    style={{ fontSize: "12px" }}
                    className="text-green-600 flex flex-row items-center gap-1"
                  >
                    <Clock /> 20 min
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2">0.5%</td>
            <td style={{fontSize:'12px'}}  className="p-2 flex flex-col gap-1 items-center justify-center mt-4">
              <p>1200 USDT</p>
              <p>limit: 100-1000 USDT</p>
            </td>
            <td className="p-2 ">
              <button   style={{fontSize:'12px'}}  className="p-1 bg0 rounded-3xl text-green-700 flex flex-row items-center"><Dot/> Salma bank</button>
            </td>
            <td>
              <button  style={{fontSize:'12px'}}  className="p-2 bg-green-600 rounded-3xl text-white">Buy Usdt</button>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <p
                    style={{
                      fontSize: '10px'
                    }}
                    className="h-5 w-5 flex p-1 bg-green-800 text-xs items-center justify-center rounded-full"
                  >
                    OA
                  </p>
                  <p
                    style={{ fontSize: "12px" }}
                    className="flex gap-1 flex-row items-center"
                  >
                    Username
                    <span className="h-5 w-5 flex bg-yellow-600 items-center justify-center rounded-full">
                      <Check fontSize="small" />
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center mt-1 gap-1">
                  <p style={{ fontSize: "12px" }} className="text-slate-600">
                    <span className="text-green-700">120</span> Orders
                  </p>
                </div>
                <div style={{fontSize:'12px'}} className="flex flex-row items-center mt-1 gap-1">
                  <p className="text-green-600 flex flex-row items-center gap-1">
                    <BiLike /> 95%
                  </p>
                  <button
                    style={{ fontSize: "12px" }}
                    className="p-1 flex flex-row items-center text-xs rounded-2xl bg-yellow-600"
                  >
                    <Dot size={20} /> Merchant Pro
                  </button>
                  <p
                    style={{ fontSize: "12px" }}
                    className="text-green-600 flex flex-row items-center gap-1"
                  >
                    <Clock /> 20 min
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2">0.5%</td>
            <td style={{fontSize:'12px'}}  className="p-2 flex flex-col gap-1 items-center justify-center mt-4">
              <p>1200 USDT</p>
              <p>limit: 100-1000 USDT</p>
            </td>
            <td className="p-2 ">
              <button   style={{fontSize:'12px'}}  className="p-1 bg0 rounded-3xl text-green-700 flex flex-row items-center"><Dot/> Salma bank</button>
            </td>
            <td>
              <button  style={{fontSize:'12px'}}  className="p-2 bg-green-600 rounded-3xl text-white">Buy Usdt</button>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <p
                    style={{
                      fontSize: '10px'
                    }}
                    className="h-5 w-5 flex p-1 bg-green-800 text-xs items-center justify-center rounded-full"
                  >
                    OA
                  </p>
                  <p
                    style={{ fontSize: "12px" }}
                    className="flex gap-1 flex-row items-center"
                  >
                    Username
                    <span className="h-5 w-5 flex bg-yellow-600 items-center justify-center rounded-full">
                      <Check fontSize="small" />
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center mt-1 gap-1">
                  <p style={{ fontSize: "12px" }} className="text-slate-600">
                    <span className="text-green-700">120</span> Orders
                  </p>
                </div>
                <div style={{fontSize:'12px'}} className="flex flex-row items-center mt-1 gap-1">
                  <p className="text-green-600 flex flex-row items-center gap-1">
                    <BiLike /> 95%
                  </p>
                  <button
                    style={{ fontSize: "12px" }}
                    className="p-1 flex flex-row items-center text-xs rounded-2xl bg-yellow-600"
                  >
                    <Dot size={20} /> Merchant Pro
                  </button>
                  <p
                    style={{ fontSize: "12px" }}
                    className="text-green-600 flex flex-row items-center gap-1"
                  >
                    <Clock /> 20 min
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2">0.5%</td>
            <td style={{fontSize:'12px'}}  className="p-2 flex flex-col gap-1 items-center justify-center mt-4">
              <p>1200 USDT</p>
              <p>limit: 100-1000 USDT</p>
            </td>
            <td className="p-2 ">
              <button   style={{fontSize:'12px'}}  className="p-1 bg0 rounded-3xl text-green-700 flex flex-row items-center"><Dot/> Salma bank</button>
            </td>
            <td>
              <button  style={{fontSize:'12px'}}  className="p-2 bg-green-600 rounded-3xl text-white">Buy Usdt</button>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <p
                    style={{
                      fontSize: '10px'
                    }}
                    className="h-5 w-5 flex p-1 bg-green-800 text-xs items-center justify-center rounded-full"
                  >
                    OA
                  </p>
                  <p
                    style={{ fontSize: "12px" }}
                    className="flex gap-1 flex-row items-center"
                  >
                    Username
                    <span className="h-5 w-5 flex bg-yellow-600 items-center justify-center rounded-full">
                      <Check fontSize="small" />
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center mt-1 gap-1">
                  <p style={{ fontSize: "12px" }} className="text-slate-600">
                    <span className="text-green-700">120</span> Orders
                  </p>
                </div>
                <div style={{fontSize:'12px'}} className="flex flex-row items-center mt-1 gap-1">
                  <p className="text-green-600 flex flex-row items-center gap-1">
                    <BiLike /> 95%
                  </p>
                  <button
                    style={{ fontSize: "12px" }}
                    className="p-1 flex flex-row items-center text-xs rounded-2xl bg-yellow-600"
                  >
                    <Dot size={20} /> Merchant Pro
                  </button>
                  <p
                    style={{ fontSize: "12px" }}
                    className="text-green-600 flex flex-row items-center gap-1"
                  >
                    <Clock /> 20 min
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2">0.5%</td>
            <td style={{fontSize:'12px'}}  className="p-2 flex flex-col gap-1 items-center justify-center mt-4">
              <p>1200 USDT</p>
              <p>limit: 100-1000 USDT</p>
            </td>
            <td className="p-2 ">
              <button   style={{fontSize:'12px'}}  className="p-1 bg0 rounded-3xl text-green-700 flex flex-row items-center"><Dot/> Salma bank</button>
            </td>
            <td>
              <button  style={{fontSize:'12px'}}  className="p-2 bg-green-600 rounded-3xl text-white">Buy Usdt</button>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <p
                    style={{
                      fontSize: '10px'
                    }}
                    className="h-5 w-5 flex p-1 bg-green-800 text-xs items-center justify-center rounded-full"
                  >
                    OA
                  </p>
                  <p
                    style={{ fontSize: "12px" }}
                    className="flex gap-1 flex-row items-center"
                  >
                    Username
                    <span className="h-5 w-5 flex bg-yellow-600 items-center justify-center rounded-full">
                      <Check fontSize="small" />
                    </span>
                  </p>
                </div>
                <div className="flex flex-row items-center mt-1 gap-1">
                  <p style={{ fontSize: "12px" }} className="text-slate-600">
                    <span className="text-green-700">120</span> Orders
                  </p>
                </div>
                <div style={{fontSize:'12px'}} className="flex flex-row items-center mt-1 gap-1">
                  <p className="text-green-600 flex flex-row items-center gap-1">
                    <BiLike /> 95%
                  </p>
                  <button
                    style={{ fontSize: "12px" }}
                    className="p-1 flex flex-row items-center text-xs rounded-2xl bg-yellow-600"
                  >
                    <Dot size={20} /> Merchant Pro
                  </button>
                  <p
                    style={{ fontSize: "12px" }}
                    className="text-green-600 flex flex-row items-center gap-1"
                  >
                    <Clock /> 20 min
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2">0.5%</td>
            <td style={{fontSize:'12px'}}  className="p-2 flex flex-col gap-1 items-center justify-center mt-4">
              <p>1200 USDT</p>
              <p>limit: 100-1000 USDT</p>
            </td>
            <td className="p-2 ">
              <button   style={{fontSize:'12px'}}  className="p-1 bg0 rounded-3xl text-green-700 flex flex-row items-center"><Dot/> Salma bank</button>
            </td>
            <td>
              <button  style={{fontSize:'12px'}}  className="p-2 bg-green-600 rounded-3xl text-white">Buy Usdt</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BuyTable;
