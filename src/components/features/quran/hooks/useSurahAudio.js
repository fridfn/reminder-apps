import fetchData from '@/utils/fetchData';
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';

const useSurahAudio = () => {
  const { nomor } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [ayat, setAyat] = useState([])
  const [latin, setLatin] = useState([])
  const { isSurah } = location.state || {}
  const [loading, setLoading] = useState(true)
  const [dataSurah, setDataSurah] = useState([])
  const [currentAyat, setCurrentAyat] = useState(1);
  
  const { 
     playAudio,
     isPlaying,
     nextAudio,
     pauseAudio,
     currentIndex,
     currentSurah,
     stopIfDifferentSurah
  } = useAudioPlayer();
  
  const ayatPerList = 20;
  const totalAyatList = Math.ceil(ayat.length / ayatPerList);
  const lastIndexAyat = currentAyat * ayatPerList
  const firstIndexAyat = lastIndexAyat - ayatPerList;
  const currentListAyat = ayat.slice(firstIndexAyat, lastIndexAyat);
  const currentListLatin = latin.slice(firstIndexAyat, lastIndexAyat);
  
  const handlePlayAudio = (index) => {
    const allAudio = dataSurah?.ayahs?.map(items => items.audio.alafasy);
    
    if (index === 'stop') {
       pauseAudio() 
    } else {
       playAudio(allAudio, index, isSurah);
    }
  };
  
  useEffect(() => {
   if (nomor) {
    const handlerFetchData = async () => {
      const resultAyat = await fetchData(`/quran.json`)
      const resultLatin = await fetchData(`https://api.npoint.io/99c279bb173a6e28359c/surat/${Number(nomor) + 1}`)
      const getAyat = resultAyat[nomor].ayahs;
      
      setAyat(getAyat)
      setLatin(resultLatin)
      setDataSurah(resultAyat[nomor])
      setTimeout(() => setLoading(false), 300);
    }
    handlerFetchData()
   } else {
    navigate('/home/surah/');
   }
  }, [nomor])
  
  return {
    isPlaying,
    isSurah,
    currentIndex,
    dataSurah,
    handlePlayAudio,
    loading,
    stopIfDifferentSurah,
    currentSurah,
    pauseAudio,
    currentAyat,
    currentListAyat,
    currentListLatin
  }
}


export default useSurahAudio;