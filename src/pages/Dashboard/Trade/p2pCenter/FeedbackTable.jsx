/* eslint-disable no-unused-vars */
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Eye } from "lucide-react";
import { MoreHoriz, MoreVert } from "@mui/icons-material";

function FeedbackTable() {
  const data = [
    {
      id: 16657,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 100,
      status: "Published",
    },
    {
      id: 26767,
      type: "P2P Sell",
      date: "12-Jun-2023",
      amount: 200,
      status: "Failed",
    },
    {
      id: 37766,
      type: "P2p Sell",
      date: "12-Jun-2023",
      amount: 300,
      status: "Published",
    },
    {
      id: 48888,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 400,
      status: "Failed",
    },
    {
      id: 57878,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 500,
      status: "Published",
    },
  ];

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      {/* <div className="p-1 flex flex-row gap-10 mb-2 justify-between items-center">
        <h2 className="white flex flex-row gap-1">
          Transaction History{" "}
          <p className="grey flex flex-row gap-1  items-center">
            month <MdOutlineKeyboardArrowDown />
          </p>
        </h2>

        <img
          src="https://res.cloudinary.com/pitz/image/upload/v1721374921/Group_164057_uqm3f1.png"
          alt=""
        />
      </div> */}
      <div style={{ overflowX: "auto" }}>
        <table
          className="styled-table rounded-2xl  border secondary"
          style={{
            minWidth: "600px",
            border: "2px solid #e0e0e0",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              background: "#35353E",
            }}
            className="greybg"
          >
            <tr>
              <th
                style={{
                  color: "#788099",
                  borderTopLeftRadius: "12px",
                }}
                className="grey"
              >
                Asset{" "}
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Add ID <TiArrowUnsorted />
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Type <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Limit <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Price <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Commission <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Payment <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Last Updated <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Status <TiArrowUnsorted />{" "}
                </th>
              </th>

              <th
                style={{
                  color: "#788099",
                  borderTopRightRadius: "12px",
                }}
              >
                Action
              </th>
              <th
                style={{
                  color: "#788099",
                  borderTopRightRadius: "12px",
                }}
              >
                Comment
              </th>
            </tr>
          </thead>
          <tbody className="primary">
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-bottom"
                style={{ fontSize: "14px" }}
              >
                <td className="flex flex-row items-center gap-1">
                  <img
                    className="h-6"
                    src="https://res.cloudinary.com/pitz/image/upload/v1721628786/Group_20782_ktva9z.png"
                    alt=""
                  />
                  USDT
                </td>
                <td className="grey pl-5">{row.id}</td>
                <td className="g pl-5">Buy</td>
                <td className="g pr-4">100-10,000</td>
                <td className="grey">148.56</td>
                <td className="grey pl-8">0.67</td>
                <td className="flex flex-row items-center gap-2">
                  <img
                    className="h-5 rounded-full"
                    src="https://res.cloudinary.com/pitz/image/upload/v1721925032/492x0w_1_rw99fe.png"
                    alt=""
                  />
                  Primear bank
                </td>
                <td className="grey pl-7">{row.date}</td>
                <td className="text-green-700">{row.status}</td>
                <td>
                  <MoreVert />
                </td>
                <td>
                  <input
                    className="h-8 w-8 border border-green-700 primary rounded-lg checkbox-custom"
                    type="checkbox"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedbackTable;
