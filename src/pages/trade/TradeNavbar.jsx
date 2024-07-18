import React, {useState} from 'react'
import TradeMarket from './marketpage/TradeMarket';
import Tradep2pCenter from './p2p-centerpage/Tradep2pCenter';
import Orders from './orders-page/Orders';
import {Link} from 'react-router-dom'
const TradeNavbar = () => {
    const [activePage, setActivePage] = useState('p2p-center'); // Default active page is 'market'

    const handleListItemClick = (page) => {
        setActivePage(page);
    };

  return (
    <section className="flex flex-col flex-grow">
        <div className="test-nav">

       
        <ul className="flex test-nav flex-row list-none mb-4 gap-4">
        <li>
          <Link to='/dashboard'>
          <button
            onClick={() => handleListItemClick('p2p-dashboard')}
            className={`${
                activePage === 'p2p-dashboard' ? 'underline decoration-green-500 font-semibold' : 'font-thin'
            }`}
            >
            P2P Dashboard
            </button>
          </Link>
        </li>
        <li>
            <button
            onClick={() => handleListItemClick('market')}
            className={`${
                activePage === 'market' ? 'underline decoration-green-500 font-semibold' : 'font-thin'
            }`}
            >
            Market
            </button>
        </li>
        <li>
            <button
            onClick={() => handleListItemClick('orders')}
            className={`${
                activePage === 'orders' ? 'underline decoration-green-500 font-semibold' : 'font-thin'
            }`}
            >
            Orders
            </button>
        </li>
        <li>
            <button
            onClick={() => handleListItemClick('p2p-center')}
            className={`${
                activePage === 'p2p-center' ? 'underline decoration-green-500 font-semibold' : 'font-thin'
            }`}
            >
            P2P Center
            </button>
        </li>
        </ul>
        </div>
        {activePage === 'p2p-dashboard' && <Tradep2pDashboard />}
        {activePage === 'market' && <TradeMarket />}
        {activePage === 'orders' && <Orders />}
        {activePage === 'p2p-center' && <Tradep2pCenter />}
    </section>
  )
}

export default TradeNavbar