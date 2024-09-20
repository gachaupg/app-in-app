

const Stats = ({bal, amount, widthamount,totalWithdrawals,totalDeposits}) => {
console.log(bal);

const total=bal + amount + widthamount + totalDeposits+totalWithdrawals;
function formatBalance(balance) {
  let num = parseFloat(balance);

  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M';
  } else {
    return num.toFixed(2);
  }
}
    const stats = [
        {
          title: "My Total Volume",
          value:formatBalance(total) ,
        }
        ,
        {
          title: "Exchange",
          value:formatBalance(totalWithdrawals+totalDeposits),
        }
        ,
        {
          title: "P2P Volume",
          value: formatBalance(bal+widthamount+amount),
        },
        {
          title: "Swap",
          value: "00",
        },
        {
          title: "Buy",
          value: "00",
        }
      ]
    
    return (
        <div className="mt-8 mb-8">
            <h1 className="text-white">My Volume</h1>
            <div className="cards flex flex-wrap justify-between gap-4 mt-4">
            {stats.map((volume, index) => (
                <div
                key={index}
                className="card flex flex-col gap-2 justify-around items-center border border-gray-700 rounded-2xl w-full sm:w-40 h-32 p-4 text-white bg-[#1D1D23]"
                >
                <h1 className="text-white">{volume.title}</h1>
                <p className="text-[#F79330]">{volume.value} +</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Stats;