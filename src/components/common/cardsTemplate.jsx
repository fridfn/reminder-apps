import React, { useRef, useEffect } from 'react'
import EachUtils from '@/utils/eachUtils';
import TextSpeech from '@/utils/textSpeech';
import useAudioPlayer from '@/utils/audioPlayer'
import { useNavigate } from 'react-router-dom'
import Image from '@/components/common/image';
import muslimWoman5 from '@/assets/muslim_woman_1.webp';
import ObserveElement from '@/utils/observeElement'

const setDataInfo = ({ index, classes }) => {
 return classes[index] || classes;
};

const removeHtmlTags = (text) => {
 return text.replace(/<\/?[^>]+(>|$)/g, "");
}

const convertToArabicNumbers = (number) => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return number.toString().split('').map(digit => arabicNumbers[digit]).join('');
}

const MotivasiCards = ({ data, title, attr, classes }) => {
  const objectToArray = Object.entries(data);
  
  return (
   <div className='container-motivasi-cards'>
    <div className='box-motivasi-cards'>
     <p className='text' id='title-motivasi'>{title}</p>
    <EachUtils
     of={data}
     render={(items, index) => (
      <p key={index}
       className={setDataInfo({ index: index, classes: classes })}
       data-info={setDataInfo({ index: index, classes: attr })}>
       {items}
      </p>
     )}/>
    </div>
   </div>
  )
}

export const AyatList = ({ ayats, attr, classes, latin, isSurah, currentIndex }) => {
  const { itemRef, observeItems } = ObserveElement({
   element: '#ayat-pages #wrapper-ayat .box-ayat',
   classes: 'active',
   threshold: 0.9
  });
  
  const { playAudio, stopAudio } = useAudioPlayer();
  const { name, numberOfAyahs, ayahs } = isSurah
  
  useEffect(() => {
   if (itemRef.current.length === ayats.length && ayats.length !== 0) {
    observeItems();
   }
  }, [ayats.length])
  
  return (
   <EachUtils of={ayats}
    render={(ayat, index) => (
     <div
      className={`box-ayat ${currentIndex === ayat.number.inSurah - 1 ? 'in-audio': ''}`}
      ref={(el) => (itemRef.current[index] = el)}
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
        <button className='player-audio' onClick={() => playAudio(ayat.audio.alafasy, index)}>
          <ion-icon name='mic' class='md-txt'></ion-icon>
          Putar Ayat
        </button>
        <button className='player-audio' onClick={() => stopAudio()}>
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

export const Surah = ({ surah, attr, classes, pages, asma }) => {
  const navigate = useNavigate();
  const handleOpenSurah = ( surah ) => {
   navigate(`/home/surah/${surah.number - 1}`, { state: { isSurah: {
    nama: surah.name,
    arti: surah.translation
   },
   pages: pages } });
  }
  
  return (
  <EachUtils of={surah}
    render={(surah, index) => (
     <div
      key={index}
      data-aos='zoom-in'
      className='box-surah'
      data-aos-delay={`${(index + 1) * 300}`}>
      <div className="ribbon ribbon-surah">&nbsp;&nbsp;Juz {surah?.ayahs[index]?.meta?.juz}&nbsp;&nbsp;</div>
      <div 
       className='wrapper-surah'
       onClick={() => handleOpenSurah(surah)}>
       <span className='name-surah'>
        <p 
         className={setDataInfo({ index: 3, classes: classes })}>
          {surah.name}
        </p>
        <p 
         className={setDataInfo({ index: 2, classes: classes })}>
          {surah.revelation} - {surah.numberOfAyahs} Ayat
        </p>
        </span>
        <p
         id='number-surah'
         className={setDataInfo({ index: 1, classes: classes })}>
         {convertToArabicNumbers(surah.number)}
        </p>
       </div>
       <p 
        onClick={() => TextSpeech(`surat ${surah.name}`)}
        className={setDataInfo({ index: 0, classes: classes })}>
         {asma[index].asma}
       </p>
     </div>
   )}/>
  )
}

export const SurahPendek = ({ surah, attr, classes }) => {
 
  return (
   <EachUtils
    of={surah}
    render={(surah, index) => (
     <div
      key={index}
      className='box-surah'
      id='wrapper-surah-pendek'>
      <div className='wrapper-surah'>
       <p 
        className={setDataInfo({ index: 3, classes: classes })}>
        {surah.doa}
       </p>
       <p
        id='number-surah'
        className={setDataInfo({ index: 1, classes: classes })}>
        {convertToArabicNumbers(surah.id)}
       </p>
      </div>
      <p
       className={setDataInfo({ index: 0, classes: classes })}>
       {surah.ayat}
      </p>
      <div className='box-text'>
       <p
        className={setDataInfo({ index: 1, classes: classes })}>
        {surah.latin}
       </p>
       <p
        className={setDataInfo({ index: 1, classes: classes })}
        data-info={setDataInfo({ index: 2, classes: attr })}>
        {surah.artinya}
       </p>
      </div>
     </div>
   )}/>
  )
}

export default MotivasiCards;