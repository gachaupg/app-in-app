import React, { useState } from 'react';

const YourComponent = () => {
  const [buyClicked, setBuyClicked] = useState(false);
  const [sellClicked, setSellClicked] = useState(false);

  const handleBuyClick = () => {
    setBuyClicked(!buyClicked);
    setSellClicked(false); // Reset the other button state
  };

  const handleSellClick = () => {
    setSellClicked(!sellClicked);
    setBuyClicked(false); // Reset the other button state
  };

  return (
    <div className="flex flex-row w-fit mb-4">
      <button
        className={`rounded-l-full px-4 py-1 border border-gray-600 ${buyClicked ? 'bg-green-700' : ''}`}
        onClick={handleBuyClick}
      >
        Buy
      </button>
      <button
        className={`rounded-r-full px-4 border border-gray-600 ${sellClicked ? 'bg-red-700' : ''}`}
        onClick={handleSellClick}
      >
        Sell
      </button>
    </div>
  );
};

export default YourComponent;
