import React from 'react'

const UploadCard = () => {
  return (
    <section className="flex flex-col border border-gray-700 rounded-2xl p-4 bg-gray-900 gap-2">
        <div className="flex flex-row gap-4">
            <p>Upload Documents</p>
            <button className="bg-white text-black text-sm py-1 px-3 rounded-full">Upload</button>
        </div>
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </section>
  )
}

export default UploadCard