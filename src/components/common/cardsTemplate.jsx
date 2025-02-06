import React from 'react';
import EachUtils from '@/utils/eachUtils';
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

export const AyatList = ({ ayats, attr, classes }) => {
  let regex = /بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ/g;
  
  return (
   <EachUtils of={ayats}
    render={(ayat, index) => (
     <div className='box-ayat' key={index}>
      <div className='wrapper-ayat'>
        <p 
         className={setDataInfo({ index: 0, classes: classes })}
         data-info={setDataInfo({ index: 0, classes: attr })}>
          {ayats.id == 'bismi  awz,' ?
           regex : ayat.ar.replace(regex, '')}
         </p>
        <p
         id='number-ayat'
         className={setDataInfo({ index: 0, classes: classes })}>
         {convertToArabicNumbers(ayat.nomor)}
        </p>
       </div>
      <p 
       className={setDataInfo({ index: 1, classes: classes })}
        dangerouslySetInnerHTML={{ __html: removeHtmlTags(ayat.tr)}}/>
       
      <div className='box-text'>
       <p
        className={setDataInfo({ index: 1, classes: classes })}
        data-info={setDataInfo({ index: 2, classes: attr })}>
        {ayat.id}
       </p>
      </div>
     </div>
   )}/>
  )
 }

export const Surah = ({ surah, attr, classes, pages }) => {
  const navigate = useNavigate();
  const handleOpenSurah = ( surah ) => {
   navigate(`/home/surah/${surah.nomor}`, { state: { isSurah: surah, pages: pages } });
  }
  
  return (
  <EachUtils of={surah}
    render={(surah, index) => (
     <div 
      key={index}
      data-aos="zoom-in"
      className='box-surah'
      onClick={() => handleOpenSurah(surah)}
      data-aos-delay={`${(index + 1) * 350 }`}>
     <div className="ribbon ribbon-surah">&nbsp;&nbsp;{surah.urut}&nbsp;&nbsp;</div>
      <div className='wrapper-surah'>
       <span className='name-surah'>
        <p 
         className={setDataInfo({ index: 3, classes: classes })}>
          {surah.nama}
        </p>
        <p 
         className={setDataInfo({ index: 2, classes: classes })}>
          {surah.type} - {surah.ayat} Ayat
        </p>
        </span>
        <p
         id='number-surah'
         className={setDataInfo({ index: 1, classes: classes })}>
         {convertToArabicNumbers(surah.nomor)}
        </p>
       </div>
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