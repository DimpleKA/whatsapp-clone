import React from 'react'
import './Person.css'

const Person = () => {
  return (
    <div className='person'>
            <div className='person-left'>
                <img src='https://media.licdn.com/dms/image/C4D03AQFj3p3aNK0F8w/profile-displayphoto-shrink_800_800/0/1644213438758?e=2147483647&v=beta&t=4P0mtjoOJQHqnpTrR-pUpL4hQgScNdQEGRRxEX8DYXc' alt='dp'/>
            </div>
            <div className='person-right'>
                <div className='person-right-top'>
                    <div>Venkatesh 40k</div>
                    <div>yesterday</div>
                </div>
                <div className='person-right-top'>
                    <div>I will pay you by night brother pakka</div>
                </div>
            </div>
    </div>
  )
}

export default Person