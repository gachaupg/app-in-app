import { Link, useLocation } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import ProfileTab from "../../Auth/ProfileTab";
import { Divider } from "@mui/joy";

const Notifications = () => {
    const location = useLocation()
    const fromDashboard = location.state;
    console.log('====================================');
    console.log(fromDashboard);
    console.log('====================================');
    return (
        <div className="primary size w-full pr-48 pl-48">
            <p className="g">Notifications center</p>
            <div className="flex flex-row small wrap gap-6 justify-between  small wrap">
                <div className="small w-full flex flex-col secondary rounded-lg p-2 border border-slate-700 ">

                    {fromDashboard.map((i) => {
                        return (
                            <>
                            <div key={i.id} className="g flex small wrap w-full justify-between gap-2">
                                <div className="g flex  gap-2">
                                    <RxAvatar size={34} />
                                    <div>
                                        <p>{i.buyer}</p>
                                        <p>{i.amount} USD</p>
                                    </div>
                                </div><div>
                                    <p className="g">Order Id {i.buy_order || i.sell_order}</p>
                                </div>
                                <div>

                                    <Link to={`/rates/${i.buy_order || i.sell_order}`}
                                        state={i}
                                    >
                                        <button className="flex white p-1 greenbg rounded-lg">
                                            View Order
                                        </button>
                                    </Link>
                                </div>
                                
                            </div>
                      <div className="mt-1 mb-1">
                      <Divider className='mt-1 mb-1'/>
                      </div>
                        </>    
                        )
                    })}
                </div>
                <div style={
                    {
                        width: '38%'
                    }
                } className="small w-full">
                    <ProfileTab />
                </div>

            </div>
        </div>
    )
}

export default Notifications