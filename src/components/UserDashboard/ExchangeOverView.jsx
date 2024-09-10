const ExchangeOverView = ({totalWithdrawals,totalDeposits}) => {
    return (
        <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
          <div>
            <p className="text-white font-semibold">Exchange</p>
            <p className="text-white font-semibold">Overview (USD)</p>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button className="text-green-800 border border-green-800 text-xs p-2 rounded-lg font-medium">
              All
            </button>
            <button className="text-white font-medium border border-green-800 p-2 rounded-lg text-xs bg-green-800">
              Deposits
            </button>
            <button className="text-green-800 font-medium border border-green-800 text-xs p-2 rounded-lg">
              Withdrawals
            </button>
          </div>
          <div>
            <p className="text-gray-400 font-medium text-sm">Month</p>
          </div>
        </div>
        <div className="graph">
          <img
            className="mt-2 w-full"
            src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
            alt=""
          />
        </div>
      </div>
    );
}

export default ExchangeOverView;