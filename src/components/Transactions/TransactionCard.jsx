import React from 'react';

const TransactionCard = () => {
  const transactions = [
    { id: 1, asset: 'BTC', type: 'Withdrawal', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
    { id: 2, asset: 'BTC', type: 'Deposit', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
    { id: 3, asset: 'BTC', type: 'P2P Buy', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
    { id: 4, asset: 'BTC', type: 'P2P Sell', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
    { id: 5, asset: 'BTC', type: 'Deposit', amount: '529.799', counterparty: 'Solom Bank', time: '1 min ago' },
  
  ];
    return (
      <div className="bg-[#1D1D23] text-white p-4 rounded-lg mt-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white">My Transactions</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="p-2 bg-green-800 rounded-2xl text-white text-xs">Exchange</button>
            <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">P2P</button>
            <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Swap</button>
            <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">Buy</button>
          </div>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-none bg-inherit">
            <thead>
              <tr>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Asset</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Transaction Type</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Amount</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Counterparty</th>
                <th className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-800 transition">
                  <td className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">
                    <div className="flex flex-row items-center gap-2">
                      <img src="/src/assets/img/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6" />
                      <div className="text-xs flex gap-2">
                        <p className="text-white">{transaction.asset}</p>
                        <p className="text-gray-400">Bitcoin</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">{transaction.type}</td>
                  <td className={`border-b border-gray-600 px-4 py-2 text-sm ${transaction.type === 'Deposit' || transaction.type === 'P2P Buy' ? 'text-green-500' : 'text-red-500'}`}>
                    $ {transaction.amount}
                  </td>
                  <td className="border-b border-gray-600 px-4 py-2 text-sm">{transaction.counterparty}</td>
                  <td className="border-b border-gray-600 px-4 py-2 text-sm text-gray-400">{transaction.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default TransactionCard;