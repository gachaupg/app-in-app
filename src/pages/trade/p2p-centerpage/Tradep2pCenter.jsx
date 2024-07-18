import BalanceCard from './BalanceCard'
import InfoCard from './InfoCard'
import ActionsCard from './ActionsCard'
import Table from './Table'
import { BsExclamationCircle } from "react-icons/bs";

const Tradep2pCenter = () => {
  return (
    <main className="flex flex-col text-sm gap-4">
      <p className="text-gray-400">OMAYA platform fee<span className="text-white"> = 0.5%</span></p>
      <BalanceCard />
      <div className='flex items-center gap-2'>
        {/* icon implementation*/}
        <BsExclamationCircle style={{color: 'green', width: '24px', height: '24px'}}/>
        <p className="text-gray-400 font-medium">in order to become verified advertiser, you need to have at least 1,000USD available on your P2P account</p>
      </div>
      <InfoCard />
      <ActionsCard />
      <p className='text-xl font-medium'>Feedback</p>
      <Table />
    </main>
  )
}

export default Tradep2pCenter