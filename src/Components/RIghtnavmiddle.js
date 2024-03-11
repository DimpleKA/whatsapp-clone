import React from 'react';
import './Rightnavmiddle.css';
import backgro from '../Assets/wbackg.jpg';

const Rightnavmiddle = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgro})`, // Use backgro here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className='rightnavmiddle' style={backgroundStyle}>
      RIghtnavmiddle
    </div>
  );
};

export default Rightnavmiddle;
