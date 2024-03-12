import React from 'react'
import './Leftnavmid.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Leftnavmid = () => {
  return (
    <div className='leftnavmid'>
        <div className='leftnavmid-logo-search'>
          
        </div>
        <div className='leftnavmid-input'>
            <input type='text' placeholder='Search or start new chat'/>
        </div>
        <div className='leftnavmid-logo-pyramid'>
            <AcUnitIcon/>
        </div>
    </div>
  )
}

export default Leftnavmid