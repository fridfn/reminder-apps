import React, { useEffect, useRef } from 'react';
import muslimWoman5 from '@/assets/muslim_woman_5.webp';
import Image from '@/components/common/image';

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


export const ReminderSec = ({ text, data }) => {
  return (
   <div className='container-reminder'>
   <div className='wrapper'>
    <div className='content-first'>
     {text ? (
      <div className='wrapper-text'>
        <p className='text'>Jangan Asal Dalam Beramal</p>
      </div>) : (null)}
      {data ? (
      <div className='box-image'>
        <Image image={muslimWoman5}/>
      </div>) : (
       <div className='wrapper-info'>
        <p className='text'>Post : 21 Januari 2025</p>
        <p className='text'>Sumber : faridfathoni.com</p>
       </div>
       )}
     </div>
    </div>
   </div>
  )
}

export default Reminder;