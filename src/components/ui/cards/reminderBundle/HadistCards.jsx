import React, { useState } from 'react';
import { Image } from '@/components/shared';


 const HadistCards = ({ hadits, riwayat }) => {
  const { name, number, id } = riwayat;
  const [isActive, setIsActive] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
    setIsActive(!isActive);
  };

  const isLongText = hadits.length < 350;

  return (
    <div className='reminder'>
      <div className='ribbon ribbon-hadits'>Id : {id}</div>
      <p className='hadits-surah'>{name} {number}</p>
      
      <div 
        className='wrapper-reminder' 
        style={{ 
          justifyContent: isLongText ? 'center' : 'flex-start',
          textAlign: isLongText ? 'center' : 'start' 
        }}
      >
        <p className='tny-txt'>{hadits}</p>
      </div>

      <button className='box-icons' onClick={toggleFullscreen}>
        <p className='text'>Detail</p>
        <ion-icon name='search' class='icons'></ion-icon>
      </button>

      <div className={`full-hadits ${isActive ? 'active' : ''}`}>
        <p className='text'>{hadits}</p>
      </div>
    </div>
  );
};

export default HadistCards;