import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Eye } from "lucide-react";
import { MoreHoriz } from "@mui/icons-material";

function Table() {
  const data = [
    {
      id: 16657,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 100,
      status: "Complete",
    },
    {
      id: 26767,
      type: "P2P Sell",
      date: "12-Jun-2023",
      amount: 200,
      status: "Pending",
    },
    {
      id: 37766,
      type: "P2p Sell",
      date: "12-Jun-2023",
      amount: 300,
      status: "Complete",
    },
    {
      id: 48888,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 400,
      status: "Pending",
    },
    {
      id: 57878,
      type: "P2P Buy",
      date: "12-Jun-2023",
      amount: 500,
      status: "Complete",
    },
  ];

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      <div className="p-1 flex flex-row gap-10 mb-2 justify-between items-center">
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
      </div>
      <div style={{ overflowX: "auto" }}>
        <table
          className="styled-table rounded-2xl  border secondary"
          style={{ minWidth: "600px" }}
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
                  ID <TiArrowUnsorted />
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
                  Date <TiArrowUnsorted />{" "}
                </th>
              </th>
              <th>
                <th
                  style={{
                    color: "#788099",
                  }}
                  className="flex items-center grey"
                >
                  Amount <TiArrowUnsorted />{" "}
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
                }}
              >
                Receipt
              </th>
              <th
                style={{
                  color: "#788099",
                }}
              >
                More
              </th>
            </tr>
          </thead>
          <tbody className="primary ">
            {data.map((row) => (
              <tr style={{ fontSize: "14px" }} key={row.id}>
                <td className="flex flex-row items-center gap-1">
                  <img
                    className="h-8"
                    src={
                      row.type === "P2P Buy"
                        ? "https://res.cloudinary.com/pitz/image/upload/v1721374749/Vector_349_yf15jj.png"
                        : "https://res.cloudinary.com/pitz/image/upload/v1721381935/Vector_349_1_s2dd2x.png"
                    }
                    alt=""
                  />

                  <img
                    className="h-10"
                    src="https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png"
                    alt=""
                  />
                </td>
                <td className="grey">{row.id}</td>
                <td>{row.type}</td>
                <td className="grey"> {row.date}</td>
                <td className="grey">
                  {" "}
                  <span
                    className={`${
                      row.type === "P2P Buy" ? "green" : "text-red-600"
                    }`}
                  >
                    {" "}
                    {row.type === "P2P Buy" ? "+" : "-"} {row.amount}
                  </span>{" "}
                  USD
                </td>
                <td className="grey">New</td>
                <td>
                  <Eye color="green" />
                </td>
                <td>
                  <MoreHoriz color="white" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
