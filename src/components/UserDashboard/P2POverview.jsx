const P2PoOverview = () => {
    return(
        <div className="bg-[#1D1D23] p-4 rounded-lg w-full max-w-lg border border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
          <div className="flex gap-2">
            <p className="text-white font-semibold">P2P</p>
            <p className="text-white font-semibold">Overview (USD)</p>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">
              All
            </button>
            <button className="p-2 bg-green-800 rounded-2xl text-white text-xs">
              Sells
            </button>
            <button className="text-green-800 border border-green-800 text-xs p-2 rounded-2xl">
              Buys
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
    )
}
export default P2PoOverview;