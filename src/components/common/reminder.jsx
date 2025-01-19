import React, { useEffect, useRef } from 'react';

const Reminder = ({ hadits, riwayat }) => {
  const { name, number } = riwayat;
  const fullHaditsRef = useRef([]);
  
  const handlerFullHadits = () => {
   document.documentElement.requestFullscreen();
   
   const isAlreadyActive = fullHaditsRef.current.classList.contains('active');
   const allActiveHadits = document.querySelectorAll('.full-hadits.active');
    allActiveHadits.forEach((item) => {
      item.classList.remove('active');
    });
    
   if (!isAlreadyActive && fullHaditsRef.current) {
    fullHaditsRef.current.classList.toggle('active');
   }
  }
  
  return (
   <div className='reminder'>
    <p className='hadits-surah'>{name} {number}</p>
     <div
      className='wrapper-reminder'
      style={hadits.length < 350 ? { justifyContent: 'center' } : {textAlign: 'start'}}>
       <p className='tny-txt'>{hadits}</p>
     </div>
     <button className='box-icons' onClick={() => handlerFullHadits()}>
       <p className='text'>Detail</p>
       <ion-icon name='search' class='icons'></ion-icon>
     </button>
     <div className='full-hadits' ref={fullHaditsRef}>
       <p className='text'>{hadits}</p>
     </div>
   </div>
  )
}

export default Reminder;