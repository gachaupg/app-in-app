/* eslint-disable no-unused-vars */
import React from 'react'
import SideDash from '../../../components/SideDash'

const Settings = () => {
  return (
   <div className="flex primary flex-row gap-10">
<SideDash/>
<div style={{
        width:'80%'
    }} className='primary mt-14  flex flex-row gap-3'>
        <h2 className='white'>Settings</h2>
    </div>
   </div>
  )
}

export default Settings