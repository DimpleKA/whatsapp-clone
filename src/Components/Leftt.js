import React from 'react';
import './Left.css';
import Leftnavtop from './Leftnavtop';
import Leftnavmid from './Leftnavmid';
import Leftnavbottom from './Leftnavbottom';

const Left = () => {
  return (
    <div className='left'>
      <Leftnavtop />
      <Leftnavmid />
      <Leftnavbottom />
    </div>
  );
};

export default Left;
