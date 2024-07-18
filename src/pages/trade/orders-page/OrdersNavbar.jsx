import React, {useState} from 'react'
import AllOrders from './AllOrders';
import Processing from './Processing';

const OrdersNavbar = () => {
    const [activePage, setActivePage] = useState('all-orders'); // Default active page is 'all-orders'

    const handleListItemClick = (page) => {
        setActivePage(page);
    };

  return (
    <section className="flex flex-col flex-grow">
        <ul className="flex flex-row list-none mb-4 gap-4">
        <li className='text-xl'>
            <button
            onClick={() => handleListItemClick('all-orders')}
            className={`${
                activePage === 'all-orders' ? 'underline decoration-green-500 font-semibold' : 'font-thin'
            }`}
            >
            All Orders
            </button>
        </li>
        <li className='text-xl'>
            <button
            onClick={() => handleListItemClick('processing')}
            className={`${
                activePage === 'processing' ? 'underline decoration-green-500 font-semibold' : 'font-thin'
            }`}
            >
            Processing (2)
            </button>
        </li>
        </ul>
        {activePage === 'all-orders' && <AllOrders />}
        {activePage === 'market' && <Processing />}
    </section>
)
}

export default OrdersNavbar