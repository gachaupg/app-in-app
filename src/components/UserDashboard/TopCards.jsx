

const TopCards = () => {
  const topCards = [
      {
        title: "Bitcoin",
        value: "20,305",
        icon: "https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png",
        margin: "4.3",
        color: "red"
      },
      {
        title: "Usdt",
        value: "1.05",
        icon: "https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png",
        color: "blue",
        margin: "0.2"
      },
      {
        title: "Ethereum",
        value: "1,950",
        icon: "https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png",
        color: "green",
        margin: "1.2"
      },
      {
        title: "Ripple",
        value: "1,950",
        icon: "https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png",
        color: "blue",
        margin: "0.4"
      },
      {
        title: "BNB",
        value: "287.87",
        icon: "https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png",
        color: "yellow",
        margin: "2.87"
      },
      {
        title: "Solana",
        value: "0.25",
        icon: "https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png",
        color: "yellow",
        margin: "0.87"
      },
      {
        title: "Uniswap",
        value: "6.64",
        icon: "https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png",
        color: "yellow",
        margin: "3.3"
      },
    ]
  
return (
  <div className='flex flex-row wrap small w-full small-gap items-center gap-2 mt-8 mb-8'>
      {topCards.map((card, index) => {
        return (
          <div key={index} className="card flex flex-col small w-full border border-gray-400 rounded-2xl w-40 h-40 p-1.5  text-white">
            <div className="head flex flex-row justify-between items-center mb-4">
              <div className="flex flex-row items-center gap-1">
                <img src="https://res.cloudinary.com/pitz/image/upload/v1721374473/87496d50-2408-43e1-ad4c-78b47b448a6a.png_aoj8i3.png" alt="Bitcoin Logo" className="w-5 h-5" />
                <p className="text-xs">{card.title}</p>
              </div>
              <span className=" bg-white rounded-lg px-1 py-1" style={
                { color: '#000' ,
                  fontSize:'8px',
                  fontWeight:'600'
                }
              } >24h</span>
            </div>
            <div className="currency flex flex-row justify-between items-center  mb-4">
              <p className="text-xs" style={{fontSize:"10px"}}>${card.value}</p>
              <p className="text-xs text-green-800 bg-green-500 p-1 rounded">+{card.margin}%</p>
            </div>
            <div className="graph h-20 rounded-lg overflow-hidden" style={{ color: card.color }}>
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