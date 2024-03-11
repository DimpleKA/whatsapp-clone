import React from 'react'
import './Right.css'
import Rightnavtop from './Rightnavtop'
import Rightnavbottom from './Rightnavbottom'
import RIghtnavmiddle from './RIghtnavmiddle'

const Right = () => {
  return (
    <div className='right'>
        <Rightnavtop/>
        <RIghtnavmiddle/>
        <Rightnavbottom/>
    </div>
  )
}

export default Right