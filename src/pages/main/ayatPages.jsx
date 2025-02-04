import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import property from '@/property';
import getUser from '@/hooks/getUser';
import Header from '@/components/header';
import EachUtils from '@/utils/eachUtils';
import fetchData from '@/utils/fetchData';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import ButtonPagination from '@/components/common/buttonPagination';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MotivasiCards, { AyatList, Surah } from '@/components/common/cardsTemplate';

const AyatPages = () => {
  const userData = getUser();
  const { nomor } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [ayat, setAyat] = useState([])
  const { isSurah } = location.state || {}
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false)
  const [currentAyat, setCurrentAyat] = useState(1);
  
  
  const ayatPerList = 20;
  const totalAyatList = Math.ceil(ayat.length / ayatPerList);
  const lastIndexAyat = currentAyat * ayatPerList;
  const firstIndexAyat = lastIndexAyat - ayatPerList;
  const currentListAyat = ayat.slice(firstIndexAyat, lastIndexAyat);
  
  const ATTRIBUTE = property.pages.surah.data.attribute;
  const CLASSES = property.pages.surah.data.classes;
  const BUTTON = property.pages.surah.button;
  
  useEffect(() => {
   if (nomor) {
    const handlerFetchData = async () => {
     const resultAyat = await fetchData(`https://api.npoint.io/99c279bb173a6e28359c/surat/${nomor}`)
     
     setAyat(resultAyat)
    }
    handlerFetchData()
   } else {
    navigate('/home/surah');
   }
  }, [])
  
  const handleButtonSurah = (type) => {
   AOS.refresh()
   //setLoading(true);
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
    <Header title={`${userData?.nama?.split(' ')[0]}, Surah ${isSurah.nama}`} quote={`Arti : ${isSurah.arti}`} />
    <div className='section-reminder' id='wrapper-ayat'>
      <AyatList ayats={currentListAyat} attr={ATTRIBUTE} classes={CLASSES} />
    </div>
    <div data-info={'Pages : ' + currentAyat} className='section-reminder' id='wrapper-button-pagination'>
      <ButtonPagination
       endpoint={'/motivasi.json'} 
       func={handleButtonSurah}
       props={BUTTON}
       values='surah'
      />
    </div>
   </div>
  )
}

export default AyatPages;