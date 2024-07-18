import React from 'react'

const PersonalCard = () => {
  return (
    <section className="flex flex-row gap-8">
        <div className="flex flex-col gap-2">
            <p className="text-lg text-gray-400">Profile Info</p>
            <div className="flex flex-col justify-around p-4 border border-green-700 rounded-2xl w-auto h-36">
                <p className="text-gray-400">Name</p>
                <div>
                    {/* icon */}
                    <p className="text-sm">Advertiser User Name</p>
                </div>
                <p className="text-gray-400">Country</p>
                <div>
                    {/* icon */}
                    <p className="text-sm">Somalia</p>
                </div>
                <hr />
                <p className="text-sm">Available currencies: USD</p>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-lg text-gray-400">Requirements</p>
            <div className="flex flex-col text-sm items-center justify-around px-4 border border-green-700 rounded-2xl w-auto h-36">
                <div>
                    {/* icon */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
                </div>
                <div>
                    {/* icon */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
                </div>
                <div>
                    {/* icon */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PersonalCard