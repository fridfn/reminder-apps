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
      <div className='box-image'>
        <Image image={muslimWoman5}/>
      </div>
     </div>
    </div>
   </div>
  )
}

export const ReminderThird = () => {
  return (
   <div className='container-reminder'>
    <div className='wrapper'>
     <div className='wrapper-text' id='wrapped-reminder'>
       <p className='text-title'>Rasulullah ﷺ bersabda :</p>
       <p className='text-arab'>حَدَّثَنَا أَبُوْ بَكْرِ بْنُ أَبِيْ شَيْبَةَ حَدَّثَنَا حَفْصُ بْنُ غِيَاثٍ عَنْ دَاوُدَ عَنِ الشَّعْبِيِّ عَنْ جَرِيْرٍ قَالَ قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَ سَلَّمَ أَيُّمَا عَبْدٍ أَبَقَ فَقَدْ بَرِئَتْ مِنْهُ الذِّمَّ</p>
       <div className='box'>
        <p className='text-arti'>"Siapa pun hamba sahaya yang melarikan diri dari tuannya, maka jaminan Islam telah terlepas darinya."</p>
        <p className='text-arti'>(HR. Muslim No. 102)</p>
      </div>
     </div>
    </div>
   </div>
  )
}

export default Reminder;