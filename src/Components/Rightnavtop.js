import React from 'react'
import './Rightnavtop.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Rightnavtop = () => {
  return (
    <div className='rightnavtop'>
        <div className='rightnavtop-left'>
            <img src='https://qph.cf2.quoracdn.net/main-qimg-dbbb2547e343fdc7b4d8a925625a8e8d' alt='dp'/>
        </div>
        <div className='rightnavtop-center'>
            <div>
              <div>Vatsal Rishabh</div>
              <div>last seen today at 11:50 pm</div>
            </div>
        </div>
        <div className='rightnavtop-right'>
            <div><VideocamIcon/></div>
            <div><SearchIcon/></div>
            <div><MoreVertIcon/></div>
        </div>
    </div>
  )
}

export default Rightnavtop