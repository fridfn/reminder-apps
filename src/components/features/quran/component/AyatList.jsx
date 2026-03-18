import React, { useEffect } from 'react'
import EachUtils from '@/utils/eachUtils';
import { setDataInfo, convertToArabicNumbers } from '@/components/features/quran/service'
import ObserveElement from '@/utils/observeElement'
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { useSurahAudio } from "@/components/features/quran/hooks";

const AyatList = ({ attr, classes }) => {
  const { itemRef, observeItems } = ObserveElement({
    element: '#ayat-pages #wrapper-ayat .box-ayat',
    classes: 'active',
    threshold: 0.9
  });
  
  const { playAudio, pauseAudio, registerAyatRef } = useAudioPlayer();
  const { loading, ayat, currentAyat, currentListLatin, currentListAyat, currentIndex, dataSurah } = useSurahAudio();
  
  const { name, numberOfAyahs } = dataSurah;
  const removeHtmlTags = (text) => {
   return text.replace(/<\/?[^>]+(>|$)/g, "");
  }
  
  useEffect(() => {
   if (itemRef.current.length === currentListAyat.length && currentListAyat.length !== 0) {
    observeItems();
   }
  }, [ayat.length])
  
  return (
   <EachUtils of={ayat}
    render={(ayats, index) => (
     <div
      data-aos='zoom-in'
      data-aos-duration='500'
      ref={(el) => registerAyatRef(index, el)}
      className={`box-ayat ${currentIndex === ayats.number.inSurah - 1 ? 'in-audio': ''}`}
      key={ayats.number.inSurah}>
      <div className='wrapper-ayat'>
       <p 
        className={setDataInfo({ index: 0, classes: classes })}
        data-info={setDataInfo({ index: 0, classes: attr })}>
         {ayats.arab}
        </p>
        <p
         id='number-ayat'
         className={setDataInfo({ index: 0, classes: classes })}>
         {convertToArabicNumbers(ayats.number.inSurah)}
        </p>
       </div>
      <p 
       className={setDataInfo({ index: 1, classes: classes })}
       dangerouslySetInnerHTML={{ __html: removeHtmlTags(currentListLatin[index].tr)}}/>
      <div className='box-text'>
       <p
        className={setDataInfo({ index: 1, classes: classes })}
        data-info={setDataInfo({ index: 2, classes: attr })}>
        {ayats.translation}
       </p>
      </div>
      <div className='wrapper-button-ayat'>
       <span>
        <button className='player-audio' onClick={() => {
           const arr = []
           arr[index] = ayats.audio.alafasy;
           playAudio(arr, index, dataSurah)
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
        {`${name} ${ayats.number.inSurah} : ${numberOfAyahs}`}
       </p>
      </div>
     </div>
   )}/>
  )
 }
 
 export default AyatList;