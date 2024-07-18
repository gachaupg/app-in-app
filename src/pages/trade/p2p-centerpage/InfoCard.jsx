import React from 'react'

const InfoCard = () => {
  return (
    <section className="mr-8 flex flex-row flex-wrap gap-4 justify-between border border-gray-700 rounded-xl p-6 text-xs bg-gray-900 text-gray-400">
        <div>
            <p><span className="text-white text-xl font-medium">120</span></p>
            <p className='text-base font-semibold mt-3'>Trades</p>
        </div>
        <div className=''>
            <p><span className="text-white text-xl font-medium">98%</span></p>
            <p className='text-base font-semibold mt-3'>Completion rate</p>
        </div>
        <div className=''>
            <p><span className="text-white text-xl font-medium sm:items-center">1:22</span> Min</p>
            <p className='text-base font-semibold mt-3'>Avg.Transaction time</p>
        </div>
        <div className=''>
            <p><span className="text-white text-xl font-medium">99%</span></p>
            <p className='text-base font-semibold mt-3'>Rating</p>
        </div>
        <div>
            <p><span className="text-white text-xl font-medium">1,200</span> USD</p>
            <p className='text-base font-semibold mt-3'>Total volume</p>
        </div>
    </section>
  )
}

export default InfoCard