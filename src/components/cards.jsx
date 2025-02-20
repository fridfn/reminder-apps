import React, { useEffect, useState, useRef } from 'react';
import property from '@/property';
import generateRandomValue from '@/utils/generateRandomValue';
import Reminder from '@/components/common/reminder';
import ObserveElement from '@/utils/observeElement'

const Cards = ({ data, detail }) => {
  const { itemRef, observeItems } = ObserveElement({
   element: '.cards .reminder .full-hadits',
   classes: 'scale'
  });
  
  const { name } = detail;
  const handleMenu = (e) => { e.preventDefault() };
  
  const Description = ({ quote }) => {
   return (
    <div className='description-cards'>
      <div className='description'>
         <p className='text'>{quote}</p>
      </div>
      <div className='box-icons'>
        <ion-icon name='heart' class='icons'></ion-icon>
      </div>
    </div>
   )
  }
  
  const images = property.pages.home.data.image
  useEffect(() => {
   observeItems();
  }, [itemRef])
  
  return (
   <>
    {data.map((item, index) => {
     const randomImage = generateRandomValue(images);
     
     const { id, arab, number } = item;
     let cleanHadits = id.replace(/^.*?(Rasulullah shallallahu 'alaihi wasallam)/i, (match, p1) => {
       return / bersabda:/i.test(id) ? p1 : p1 + ' bersabda :'
     });
     
     cleanHadits = cleanHadits.replace(/Telah menceritakan kepada kami.*/i, '');
     cleanHadits = cleanHadits.replace(/Dan telah menceritakan kepadaku.*/i, '');
     
    if (cleanHadits.length >= 70 && cleanHadits.length <= 285) {
     return (
      <div key={index} className='container-cards' ref={(el) => (itemRef.current[index] = el)}>
       <div className='cards'>
         <div className='box-cards'>
          <div className='box-image-cards'>
            <img src={randomImage} className='image-cards' onContextMenu={handleMenu} />
          </div>
          <Description quote={arab} />
         </div>
        <Reminder hadits={cleanHadits} riwayat={{ name, number, id: detail.id }} />
       </div>
      </div>
     )}})}
   </>
  )
}

export default Cards;