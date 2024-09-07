

const Stats = () => {
    const stats = [
        {
          title: "My Total Volume",
          value: "10 M",
        }
        ,
        {
          title: "Exchange",
          value: "1 M",
        }
        ,
        {
          title: "P2P Volume",
          value: "1 M",
        },
        {
          title: "Swap",
          value: "20 K",
        },
        {
          title: "Buy",
          value: "20 K",
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