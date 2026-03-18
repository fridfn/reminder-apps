import property from '@/property';
import useUser from '@/hooks/useUser';
import { useAOS } from "@/hooks/useAos";
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import { WaveDots } from '@/components/effects'
import { ButtonPagination } from '@/components/shared';
import React, { useEffect, useState, useRef } from 'react';
import { Header, Sidebar, Navbar } from '@/components/layout';
import { useSurahAudio } from "@/components/features/quran/hooks";
import { AyatList } from '@/components/features/quran/component';
import { TextSpeech, getMurrotalStats, handlePaginationSurah } from '@/components/features/quran/service';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


const Ayat = () => {
  const { userData } = useUser()
  const scrollRef = useAOS({ duration: 1000 });
  
  const { isSurah, loading, currentAyat, currentListAyat, currentListLatin, currentIndex, handlePlayAudio, stopIfDifferentSurah, currentSurah, dataSurah } = useSurahAudio();
  
  const ATTRIBUTE = property.pages.surah.data.attribute;
  const CLASSES = property.pages.surah.data.classes;
  const BUTTON = property.pages.surah.button;
  
  
  
  useEffect(() => {
    if (isSurah?.nama !== currentSurah?.nama) {
      stopIfDifferentSurah(isSurah.nama);
    }
  }, [currentIndex])
  
  return (
   <div className='container' id='ayat-pages'>
    <Sidebar active='surah' />
    <Navbar active='home' />
    <div className='section-reminder'>
    <Header
      action='surah'
      icons='arrow-back'
      quote={`Arti : ${isSurah?.arti}`}
      title={`${userData?.nama?.split(' ')[0]}, Surah ${isSurah?.nama}`}
    />
    </div>
    <div
    ref={scrollRef}
    className='section-reminder' id='wrapper-ayat'>
     {!loading ? (
       <AyatList
         attr={ATTRIBUTE}
         classes={CLASSES}
       />
     ) : (<WaveDots />)}
    </div>
    <div data-info={'Lembar : ' + currentAyat} className='section-reminder' id='wrapper-button-pagination'>
      <ButtonPagination
        values='surah'
        props={BUTTON}
        func={handlePaginationSurah}
        endpoint={'/motivasi.json'} 
      />
    </div>
   </div>
  )
}

export default Ayat;