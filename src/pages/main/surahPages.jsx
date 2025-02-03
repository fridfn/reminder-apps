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
import MotivasiCards, { AyatList, Surah } from '@/components/common/cardsTemplate';
import { FixedSizeList as List } from 'react-window';

const SurahPages = () => {
  const userData = getUser();
  const [ayat, setAyat] = useState([])
  const [surah, setSurah] = useState([])
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [animate, setAnimate] = useState(false)
  
  const ATTRIBUTE = property.pages.surah.data.attribute;
  const CLASSES = property.pages.surah.data.classes;
  const BUTTON = property.pages.surah.button;
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(surah.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSurah = surah.slice(indexOfFirstItem, indexOfLastItem);
  
  const handleButtonSurah = (type) => {
   AOS.refresh()
   setLoading(true);
   switch (type) {
    case 'next':
     if (currentPage < totalPages){
       setCurrentPage(currentPage + 1)
      }
     break;
     case 'prev':
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
     break;
     default:
     return alert('please set type');
   }
  }
  
  useEffect(() => {
   if (surah) {
    setTimeout(() => {
     setLoading(false);
    }, 1000)
   }
  }, [currentSurah])
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const resultAyat = await fetchData('https://api.npoint.io/99c279bb173a6e28359c/surat/1')
    const resultSurah = await fetchData('https://api.npoint.io/99c279bb173a6e28359c/data')
    setAyat(resultAyat)
    setSurah(resultSurah)
   }
   AOS.refresh();
   handlerFetchData()
  }, [])
  
  return (
   <div className='container' id='surah-pages'>
    <Sidebar active='surah' />
    <Navbar />
    <Header title={`${userData?.nama?.split(' ')[0]}, Surah - Surah Al Qur'an`} quote='Selalu sempatkan sedikit waktu untuk tadarus setiap harinya ya.' />
    <div className='section-reminder' id='wrapper-surah'>
     {!loading ? (
      <Surah surah={currentSurah} classes={CLASSES} attr={ATTRIBUTE} />) : (<p>loading</p>
      )}
    </div>
    <div className='section-reminder' id='wrapper-button-pagination'>
      <ButtonPagination
       endpoint={'/motivasi.json'} 
       func={handleButtonSurah}
       props={BUTTON}
       values='motivasi'
     />
    </div>
   </div>
  )
}

export default SurahPages;