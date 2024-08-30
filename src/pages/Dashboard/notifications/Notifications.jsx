import { Divider } from "@mui/joy";
import { format } from 'date-fns'; // Import the date-fns format function
import { RxAvatar } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import ProfileTab from "../../Auth/ProfileTab";

const Notifications = () => {
    const location = useLocation();
    const fromDashboard = location.state;
    console.log('====================================');
    console.log(fromDashboard);
    console.log('====================================');

    // Helper function to format amount
    const formatAmount = (amount) => parseFloat(amount).toFixed(2);

    // Helper function to truncate buyer name
    const truncateBuyer = (buyer) => buyer.length > 10 ? buyer.substring(0, 10) + '...' : buyer;

    // Helper function to format timestamp
    const formatTimestamp = (timestamp) => format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss');

    return (
        <div style={{
            fontSize:'12px'
        }} className="primary size w-full pr-48 pl-48">
            <p className="g">Notifications center</p>
            <div className="flex flex-row small wrap gap-6 justify-between small wrap">
                <div className="small w-full flex flex-col secondary rounded-lg p-2 border border-slate-700">
                    {
                        fromDashboard.length === 0 ? <p className="text-white">No Notifications</p> :
                            <>
                                {fromDashboard.map((i) => {
                                    return (
                                        <>
                                            <div key={i.id} className="g flex small wrap w-full justify-between gap-2">
                                                <div className="g flex gap-2">
                                                    <RxAvatar size={34} />
                                                    <div>
                                                   { i.order_type==='sell'?<p>{truncateBuyer(i.seller)} </p>:<p>{truncateBuyer(i.buyer)} </p>}   
                                                        <p>{formatAmount(i.amount)} USD</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="capitalize">
                                                        Order Type: {i.order_type}
                                                    </p>
                                                    <p className="capitalize">
                                                        Time: {formatTimestamp(i.timestamp)}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="g">Associate Id: {i.buy_order || i.sell_order}</p>
                                                    <p className="g">Order Id: {i.id}</p>
                                                </div>
                                                <div>
                                                    <Link to={`/${i.order_type==='buy'?'rates':'buysell'}/${i.id}`} state={i}>
                                                        <button className="flex white p-1 greenbg rounded-lg">
                                                            View Order
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="mt-1 mb-1">
                                                <Divider className='mt-1 mb-1' />
                                            </div>
                                        </>
                                    )
                                })}
                            </>
                    }
                </div>
                <div style={{ width: '38%' }} className="small w-full">
                    <ProfileTab />
                </div>
            </div>
        </div>
    );
}

export default Notifications;
