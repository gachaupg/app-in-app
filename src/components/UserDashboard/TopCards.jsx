

const TopCards = () => {
    const topCards = [
        {
          title: "Bitcoin",
          value: "20,305",
          icon: "/src/assets/img/bitcoin.png",
          margin: "4.3",
          color: "red"
        },
        {
          title: "Usdt",
          value: "1.05",
          icon: "/src/assets/img/bitcoin.png",
          color: "blue",
          margin: "0.2"
        },
        {
          title: "Ethereum",
          value: "1,950",
          icon: "/src/assets/img/bitcoin.png",
          color: "green",
          margin: "1.2"
        },
        {
          title: "Ripple",
          value: "1,950",
          icon: "/src/assets/img/bitcoin.png",
          color: "blue",
          margin: "0.4"
        },
        {
          title: "Solana",
          value: "0.25",
          icon: "/src/assets/img/bitcoin.png",
          color: "yellow",
          margin: "0.87"
        },
        {
          title: "Uniswap",
          value: "6.64",
          icon: "/src/assets/img/bitcoin.png",
          color: "yellow",
          margin: "3.3"
        },
      ]
    
  return (
    <div className='flex flex-row wrap small-gap items-center gap-2 mt-8'>
        {topCards.map((card, index) => {
          return (
            <div key={index} className="card flex flex-col border border-gray-400 rounded-2xl w-40 h-44 p-4  text-white">
              <div className="head flex flex-row justify-between items-center mb-4">
                <div className="flex flex-row items-center gap-1">
                  <img src="/src/assets/img/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6" />
                  <p className="text-xs">{card.title}</p>
                </div>
                <span className="text-sm bg-white rounded-lg px-2 py-1" style={
                  { color: '#000' }
                }>24h</span>
              </div>
              <div className="currency flex flex-row justify-between items-center  mb-4">
                <p className="">${card.value}</p>
                <p className="text-sm text-green-800 bg-green-500 p-1 rounded">+{card.margin}%</p>
              </div>
              <div className="graph h-16 rounded-lg overflow-hidden" style={{ color: card.color }}>
                <img
                  className="mt-2 small wrap "
                  src="https://res.cloudinary.com/pitz/image/upload/v1721372970/Frame_34605_r1ruic.png"
                  alt=""
                />
              </div>
            </div>)
        })}

      </div>
  );
}

export default TopCards;