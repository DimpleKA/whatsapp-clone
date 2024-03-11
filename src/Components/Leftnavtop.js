import React from 'react'
import './Leftnavtop.css'
import Groups2Icon from '@mui/icons-material/Groups2';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AddCommentIcon from '@mui/icons-material/AddComment';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Leftnavtop = () => {
  return (
    <div className='leftnavtop'>
        <div className='leftnavtop-left'>
          <div className='leftnavtop-left-dp'>
              <img src='https://images.squarespace-cdn.com/content/v1/624a1c23d68c8a3f214fbe39/1649026246865-5TLB0XFR4J4I5VOPYYTU/isaac-olander-peter-parker-tobey-maguire-side-isaac-olander+%281%29.jpg' alt='dp'/>
          </div>
        </div>
        <div className='leftnavtop-right'>
            <div><Groups2Icon/></div>
            <div><TrackChangesIcon/></div>
            <div><WhatshotIcon/></div>
            <div><AddCommentIcon/></div>
            <div><MoreVertIcon/></div>
        </div>
    </div>
  )
}

export default Leftnavtop