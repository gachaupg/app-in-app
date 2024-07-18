import { FaBitcoin } from "react-icons/fa";

function Table() {
  const data = [
    { id: 1, type: 'Type1', date: '2024-07-07', amount: 100, status: 'Complete' },
    { id: 2, type: 'Type2', date: '2024-07-08', amount: 200, status: 'Pending' },
    { id: 3, type: 'Type3', date: '2024-07-09', amount: 300, status: 'Complete' },
    { id: 4, type: 'Type4', date: '2024-07-10', amount: 400, status: 'Pending' },
    { id: 5, type: 'Type5', date: '2024-07-11', amount: 500, status: 'Complete' },
  ];

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="Table">
      <h2>Transaction History</h2>
      <div className="p-1 flex flex-row gap-10 mb-2">
        <button className="p-1 bg-green-600 rounded-lg w-32 text-white">All</button>
        <button className="p-1 secondary rounded-lg w-32 text-white">Deposits</button>
        <button className="p-1 secondary rounded-lg w-32 text-white">Withdraw</button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="styled-table rounded-lg secondary" style={{ minWidth: "600px" }}>
          <thead className="primary">
            <tr>
              <th>Asset ID</th>
              <th>ID</th>
              <th>Type</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td><FaBitcoin color="yellow" size={34} /></td>
                <td>{row.id}</td>
                <td>{row.type}</td>
                <td>{row.date}</td>
                <td>${row.amount} USD</td>
                <td className={`${row.status === "Complete" ? "text-green-600" : "text-red-600"}`}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
