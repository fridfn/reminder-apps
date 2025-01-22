import React, { useEffect, useState, useRef } from 'react';
import property from '@/property';
import generateRandomValue from '@/utils/generateRandomValue';
import motivasiCore from '/public/quote';
import Reminder from '@/components/common/reminder';

const Cards = ({ data, detail }) => {
  const itemRef = useRef([]);
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale');
          } else {
            entry.target.classList.remove('scale');
            const unactivePreviewHadits = entry.target.querySelector('.cards .reminder .full-hadits')
            unactivePreviewHadits.classList.remove('active')
          }
        });
      },
      {
        threshold: 0.7,
      }
    );
    itemRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  const images = property.pages.home.data.image;
  
  return (
   <>
    {data.map((item, index) => {
     const randomImage = generateRandomValue(images);
     const randomQuote = generateRandomValue(motivasiCore);
     
     const { id, arab, number } = item;
     let cleanHadits = id.replace(/^.*?(Rasulullah shallallahu 'alaihi wasallam)/i, (match, p1) => {
       return / bersabda:/i.test(id) ? p1 : p1 + ' bersabda :'
     });
     
     cleanHadits = cleanHadits.replace(/Telah menceritakan kepada kami.*/i, '');
     cleanHadits = cleanHadits.replace(/Dan telah menceritakan kepadaku.*/i, '');
     
    if (cleanHadits.length >= 70 && cleanHadits.length <= 300) {
     return (
      <div key={index} className='container-cards' ref={(el) => (itemRef.current[index] = el)}>
       <div className='cards'>
         <div className='box-cards'>
          <div className='box-image-cards'>
            <img src={randomImage} className='image-cards' onContextMenu={handleMenu} />
          </div>
          <Description quote={arab} />
         </div>
        <Reminder hadits={cleanHadits} riwayat={{ name, number }} />
       </div>
      </div>
     )}})}
   </>
  )
}

export default Cards;