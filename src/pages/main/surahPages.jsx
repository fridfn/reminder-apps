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
import { useLocation } from 'react-router-dom';
import MotivasiCards, { AyatList, Surah, SurahPendek } from '@/components/common/cardsTemplate';
import { FixedSizeList as List } from 'react-window';

const SurahPages = () => {
  const userData = getUser()
  const location = useLocation()
  const [ayat, setAyat] = useState([])
  const [asma, setAsma] = useState([])
  const { pages } = location.state || {}
  const [surah, setSurah] = useState([])
  const [image, setImage] = useState('')
  const [visible, setVisible] = useState('al_quran')
  const [surahPendek, setSurahPendek] = useState([]);
  const [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1)
  const [animate, setAnimate] = useState(false)
  const [reminder, setReminder] = useState('Selalu sempatkan sedikit waktu untuk tadarus setiap harinya ya.')
  
  const ATTRIBUTE = property.pages.surah.data.attribute;
  const CLASSES = property.pages.surah.data.classes;
  const BUTTON = property.pages.surah.button;
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(surah.length / itemsPerPage);
  const totalPagesSurahPendek = Math.ceil(surahPendek.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSurah = surah.slice(indexOfFirstItem, indexOfLastItem);
  const currentSurahPendek = surahPendek.slice(indexOfFirstItem, indexOfLastItem);
 
  const handleButtonSurah = (type) => {
   AOS.refresh()
   setLoading(true);
   const setTotalPages = visible === 'surah_pendek' ? totalPagesSurahPendek : totalPages;
   
   switch (type) {
    case 'next':
     if (currentPage < setTotalPages) {
       setCurrentPage(currentPage + 1)
      }
     break;
     case 'prev':
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
     break;
     case 'al_quran':
      setVisible('al_quran')
      setReminder('Selalu sempatkan sedikit waktu untuk tadarus setiap harinya ya.')
     break;
     case 'surah_pendek':
      setVisible('surah_pendek')
      setReminder('Jangan lupa untuk berdoa ya di setiap hal yang ingin kamu lakukan.')
      if (currentPage > 8) {
       setCurrentPage(1);
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
    const resultAsma = await fetchData('https://api.npoint.io/99c279bb173a6e28359c/data');
    const resultSurah = await fetchData('/quran.json')
    const resultSurahPendek = await fetchData('/surah_pendek.json')
    
    setAyat(resultAyat)
    setAsma(resultAsma)
    setSurah(resultSurah)
    setSurahPendek(resultSurahPendek)
    pages ? setCurrentPage(pages) : null;
   }
   handlerFetchData()
  }, [])
  
  return (
   <div className='container' id='surah-pages'>
    <Sidebar active='surah' />
    <Navbar />
    <Header title={`${userData?.nama?.split(' ')[0]}, Surah - Surah Al Qur'an`} quote={reminder} />
    <div className='section-reminder' id='wrapper-box-category'>
     <ButtonPagination
      endpoint={'/motivasi.json'}
      func={handleButtonSurah}
      props={{title: ["Al - Qur'an", 'Surah Pendek'], icons: null }}
      values='alquran'
     />
     </div>
    <div className='section-reminder' id='wrapper-surah'>
     {!loading ?
      visible === 'al_quran' ? (
      <Surah surah={currentSurah} classes={CLASSES} attr={ATTRIBUTE} pages={currentPage} asma={asma} />)
      : (
       <SurahPendek surah={currentSurahPendek} classes={CLASSES} attr={ATTRIBUTE} />
      ) : (<p>loading</p>)
     }
    </div>
    <div data-info={!loading ? `${'Halaman : ' + currentPage}` : 'Halaman : ?'} className='section-reminder' id='wrapper-button-pagination number-pages'>
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

export default SurahPages;