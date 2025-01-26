import React, { useEffect, useRef } from 'react';
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


export const ReminderSec = ({ inti, image, animate }) => {
  let fSize;
  
  if (inti) {
   if (inti.length >= 45) {
     fSize = '15px';
   } else if (inti.length >= 30) {
     fSize = '18px';
   } else if (inti.length > 20) {
     fSize = '25px';
   } else if (inti.length < 20) {
     fSize = '28px';
   }
  }
  
  return (
   <div className='container-reminder'>
    <div className='wrapper'>
     <div className='content-first'>
      <div className='wrapper-text' id='parent-inti-reminder'>
        <p className='text' style={{fontSize: fSize }}>{inti}</p>
       </div>
       <div className='box-image'>
        <Image image={image} animate={animate} />
      </div>
     </div>
    </div>
   </div>
  )
}


export const ReminderThird = ({ data }) => {
  const { arab, latin, artinya, nomor_sumber, sumber, pelajaran } = data;
  const sumberNnomor = !nomor_sumber ? sumber : sumber + ' / ' + nomor_sumber;
  const title_text = !nomor_sumber ? 'Allah Swt ﷻ Berfirman :' : 'Rasulullah ﷺ bersabda :';
  
  return (
   <div className='container-reminder' data-aos="fade-up">
    <div className='wrapper' id='wrapper-reminder'>
     <div className='wrapper-text' id='wrapped-reminder' data-aos="zoom-out">
       <p className='text-title'>{title_text}</p>
       <p className='text-arab'>{arab}</p>
       <p className='text-latin'>{latin}</p>
       <div className='box'>
        <p className='text-arti'>{artinya}</p>
        <p className='text-arti'>({sumberNnomor})</p>
      </div>
      <div className='box-icons'>
        <ion-icon name='heart' class='icons'></ion-icon>
      </div>
     </div>
    </div>
   </div>
  )
}

export default Reminder;