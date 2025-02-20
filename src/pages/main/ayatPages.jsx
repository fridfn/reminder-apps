import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import MotivasiCards, { AyatList, Surah } from '@/components/common/cardsTemplate';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import property from '@/property';
import getUser from '@/hooks/getUser';
import Header from '@/components/header';
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import TextSpeech from '@/utils/textSpeech';
import ButtonPagination from '@/components/common/buttonPagination';
import useAudioPlayer from '@/utils/audioPlayer'

const AyatPages = () => {
  const userData = getUser()
  const { nomor } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [ayat, setAyat] = useState([])
  const [latin, setLatin] = useState([])
  const { isSurah } = location.state || {}
  const [loading, setLoading] = useState(true)
  const [dataSurah, setDataSurah] = useState([])
  const [currentAyat, setCurrentAyat] = useState(1);
  const { playAudio, stopAudio, currentIndex } = useAudioPlayer();
  
  const ayatPerList = 20;
  const totalAyatList = Math.ceil(ayat.length / ayatPerList);
  const lastIndexAyat = currentAyat * ayatPerList;
  const firstIndexAyat = lastIndexAyat - ayatPerList;
  const currentListAyat = ayat.slice(firstIndexAyat, lastIndexAyat);
  const currentListLatin = latin.slice(firstIndexAyat, lastIndexAyat);
  
  const ATTRIBUTE = property.pages.surah.data.attribute;
  const CLASSES = property.pages.surah.data.classes;
  const BUTTON = property.pages.surah.button;
  
  useEffect(() => {
   if (nomor) {
    const handlerFetchData = async () => {
     const resultAyat = await fetchData(`/quran.json`)
     const resultLatin = await fetchData(`https://api.npoint.io/99c279bb173a6e28359c/surat/${Number(nomor) + 1}`)
     const getAyat = resultAyat[nomor].ayahs;
     
     setAyat(getAyat)
     setLatin(resultLatin)
     setDataSurah(resultAyat[nomor])
    }
    handlerFetchData()
   } else {
    navigate('/home/surah/');
   }
  }, [nomor])
  
  useEffect(() => {
   if (ayat) {
    setTimeout(() => {
     setLoading(false);
    }, 300)
   }
  }, [currentAyat, loading])
  
  const handlePlayAudio = (index) => {
    const allAudio = dataSurah?.ayahs?.map(items => items.audio.alafasy);
    
    index === 'stop' ? stopAudio() : playAudio(allAudio, index);
  };
  
  const handleButtonSurah = (type) => {
   AOS.refresh()
   setLoading(true);
   switch (type) {
    case 'next':
     if (currentAyat < totalAyatList) {
       setCurrentAyat(currentAyat + 1)
      }
     break;
     case 'prev':
      if (currentAyat > 1) {
        setCurrentAyat(currentAyat - 1);
      }
     break;
     default:
     return alert('please set type');
   }
  }
  
  return (
   <div className='container' id='ayat-pages'>
    <Sidebar active='surah' />
    <Navbar />
    <Header
     action='surah'
     icons='arrow-back'
     currentIndex={currentIndex}
     onPlayAudio={handlePlayAudio}
     quote={`Arti : ${isSurah.arti}`}
     title={`${userData?.nama?.split(' ')[0]}, Surah ${isSurah.nama}`}
    />
    <div
    className='section-reminder' id='wrapper-ayat'>
     {!loading ? (
     <AyatList
      attr={ATTRIBUTE}
      classes={CLASSES}
      pages={currentAyat}
      isSurah={dataSurah}
      ayats={currentListAyat}
      latin={currentListLatin}
      currentIndex={currentIndex}
     />) : (<p>Loading</p>)}
    </div>
    <div data-info={'Lembar : ' + currentAyat} className='section-reminder' id='wrapper-button-pagination'>
      <ButtonPagination
       values='surah'
       props={BUTTON}
       func={handleButtonSurah}
       endpoint={'/motivasi.json'} 
      />
    </div>
   </div>
  )
}

export default AyatPages;