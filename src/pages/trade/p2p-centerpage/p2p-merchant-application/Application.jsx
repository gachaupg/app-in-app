import React from 'react'
import DetailsCard from './DetailsCard'
import PersonalCard from './PersonalCard'
import UploadCard from './UploadCard'

const Application = () => {
  return (
    <main className="flex flex-col flex-shrink bg-dark gap-6 text-xs text-white">
        <section className="flex flex-col items-center justify-center h-10 py-12 bg-cover bg-center"
            style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYXJ0fGVufDB8fDB8fHww')",
            }}
        >
            <h1 className="text-white text-2xl">P2P Program</h1>
            <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        </section>
        <section className="flex flex-col gap-6 px-24 pb-12">
            <h1 className='text-lg'>P2P Merchant Application</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p className="text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <DetailsCard />
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <PersonalCard />
            <UploadCard />
            <div className="flex flex-row justify-center items-center gap-2">
                <button className="flex place-content-center border border-gray-600 hover:bg-red-600 rounded-full py-2 px-24">Cancel</button>
                <button className="flex place-content-center border border-green-600 hover:bg-green-600 rounded-full py-2 px-24">Submit</button>
            </div>
        </section>
    </main>
  )
}

export default Application