import React from 'react'
import './Rightnavbottom.css'
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';

const Rightnavbottom = () => {
  return (
    <div className='rightnavbotttom'>
          <div className='rightnavbotttom-left'>
              <div>
                    <AddIcon/>
              </div>
          </div>
          <div className='rightnavbotttom-center'>
                    <input type='text' placeholder='Type a message'/>
          </div>
          <div className='rightnavbotttom-right'>
                <div>
                    <MicIcon/>
               </div>
          </div>
    </div>
  )
}

export default Rightnavbottom