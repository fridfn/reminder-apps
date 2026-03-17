import AOS from 'aos';
import property from '@/property';
import useUser from '@/hooks/useUser';
import { useAOS } from "@/hooks/useAos";
import { Header, Sidebar, Navbar } from '@/components/layout';
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import { TextSpeech } from '@/components/quran/service';
import { WaveDots } from '@/components/effects'
import ButtonPagination from '@/components/shared';
import React, { useEffect, useState, useRef } from 'react';
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { useParams, useNavigate, useLocation } from 'react-router-dom';


const Ayat = () => {
  const { nomor } = useParams()
  const { userData } = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const [ayat, setAyat] = useState([])
  const [latin, setLatin] = useState([])
  const { isSurah } = location.state || {}
  const [loading, setLoading] = useState(true)
  const [dataSurah, setDataSurah] = useState([])
  const [currentAyat, setCurrentAyat] = useState(1);
  const { playAudio, pauseAudio, nextAudio, currentIndex, stopIfDifferentSurah, currentSurah } = useAudioPlayer();
  const scrollRef = useAOS({ duration: 1000 });
  
  useEffect(() => {
    console.log(getMurrotalStats())
  }, [])
  
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
    
    index === 'stop' ? pauseAudio() : playAudio(allAudio, index, isSurah);
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
  
  useEffect(() => {
  if (isSurah?.nama !== currentSurah?.nama) {
    stopIfDifferentSurah(isSurah.nama);
  }
}, [nomor])
  
  return (
   <div className='container' id='ayat-pages'>
    <Sidebar active='surah' />
    <Navbar active='home' />
    <div className='section-reminder'>
    <Header
      action='surah'
      icons='arrow-back'
      currentIndex={currentIndex}
      onPlayAudio={handlePlayAudio}
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
       pages={currentAyat}
       isSurah={dataSurah}
       ayats={currentListAyat}
       latin={currentListLatin}
       currentIndex={currentIndex}
     />) : (<WaveDots />)}
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

export default Ayat;