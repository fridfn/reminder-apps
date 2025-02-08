import React, { useState } from 'react';
import EachUtils from '@/utils/eachUtils';
import TextSpeech from '@/utils/textSpeech';
import useAudioPlayer from '@/utils/audioPlayer';
import { useNavigate } from 'react-router-dom'
import Image from '@/components/common/image';
import muslimWoman5 from '@/assets/muslim_woman_1.webp';

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

export const AyatList = ({ ayats, attr, classes, latin }) => {
  const { playAudio, stopAudio } = useAudioPlayer();
  let regex = /بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ/g;
  const allAudio = ayats.map(items => items.audio.alafasy)
  
  return (
   <EachUtils of={ayats}
    render={(ayat, index) => (
     <div className='box-ayat' key={ayat.number.inSurah}>
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
        dangerouslySetInnerHTML={{ __html: removeHtmlTags(ayat.translation)}}/>
      <div className='box-text'>
       <p
        className={setDataInfo({ index: 1, classes: classes })}
        data-info={setDataInfo({ index: 2, classes: attr })}>
        {ayat.translation}
       </p>
      </div>
      <button className='player-audio' onClick={() => playAudio(allAudio, index)}>
       play surah
      </button>
     </div>
   )}/>
  )
 }

export const Surah = ({ surah, attr, classes, pages }) => {
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
      className='box-surah'>
     <div className="ribbon ribbon-surah">&nbsp;&nbsp;Juz {surah?.ayahs[index]?.meta?.juz}&nbsp;&nbsp;</div>
      <div 
       className='wrapper-surah'
        onClick={() => handleOpenSurah(surah)}
        data-aos-delay={`${(index + 1) * 350 }`}>
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
         className={setDataInfo({ index: 1, classes: classes })}>
          'arab'
        </p>
       <p 
        className={setDataInfo({ index: 4, classes: classes })}>
         {surah.asma}
       </p>
     </div>
   )}/>
  )
}

export const SurahPendek = ({ surah, attr, classes }) => {
 //console.log(surah, attr, classes)
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
    )
   }/>
  )
}

export default MotivasiCards;