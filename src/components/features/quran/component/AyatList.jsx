import React, { useEffect } from 'react'
import EachUtils from '@/utils/eachUtils';
import { setDataInfo } from '@/utils/setDataInfo'
import { convertToArabicNumbers } from "@/utils/convertToArabicNumbers"
import ObserveElement from '@/utils/observeElement'
import { useAudioPlayer } from "@/context/AudioPlayerContext";


export const AyatList = ({ ayats, attr, classes, latin, isSurah, currentIndex }) => {
  const { itemRef, observeItems } = ObserveElement({
   element: '#ayat-pages #wrapper-ayat .box-ayat',
   classes: 'active',
   threshold: 0.9
  });
  
  const { playAudio, pauseAudio, registerAyatRef } = useAudioPlayer();
  const { name, numberOfAyahs } = isSurah;
  const removeHtmlTags = (text) => {
   return text.replace(/<\/?[^>]+(>|$)/g, "");
  }
  
  useEffect(() => {
   if (itemRef.current.length === ayats.length && ayats.length !== 0) {
    observeItems();
   }
  }, [ayats.length])
  
  return (
   <EachUtils of={ayats}
    render={(ayat, index) => (
     <div
      data-aos='zoom-in'
      data-aos-duration='500'
      ref={(el) => registerAyatRef(index, el)}
      className={`box-ayat ${currentIndex === ayat.number.inSurah - 1 ? 'in-audio': ''}`}
      key={ayat.number.inSurah}>
      <div className='wrapper-ayat'>
       <p 
        className={setDataInfo({ index: 0, classes: classes })}
        data-info={setDataInfo({ index: 0, classes: attr })}>
         {ayat.arab}
        </p>
        <p
         id='number-ayat'
         className={setDataInfo({ index: 0, classes: classes })}>
         {convertToArabicNumbers(ayat.number.inSurah)}
        </p>
       </div>
      <p 
       className={setDataInfo({ index: 1, classes: classes })}
       dangerouslySetInnerHTML={{ __html: removeHtmlTags(latin[index].tr)}}/>
      <div className='box-text'>
       <p
        className={setDataInfo({ index: 1, classes: classes })}
        data-info={setDataInfo({ index: 2, classes: attr })}>
        {ayat.translation}
       </p>
      </div>
      <div className='wrapper-button-ayat'>
       <span>
        <button className='player-audio' onClick={() => {
           const arr = []
           arr[index] = ayat.audio.alafasy;
           playAudio(arr, index, isSurah)
         }}>
          <ion-icon name='mic' class='md-txt'></ion-icon>
          Putar Ayat
        </button>
        <button className='player-audio' onClick={() => pauseAudio()}>
          <ion-icon name='mic-off' class='md-txt'></ion-icon>
        </button>
       </span>
       <p
        className={setDataInfo({ index: 2, classes: classes })}
        data-info={setDataInfo({ index: 2, classes: attr })}>
        {`${name} ${ayat.number.inSurah} : ${numberOfAyahs}`}
       </p>
      </div>
     </div>
   )}/>
  )
 }