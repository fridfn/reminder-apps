import React, { useState, useEffect } from 'react';
import getUser from '@/hooks/getUser';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import BubbleMessage from '@/components/common/cards';
import MotivasiCards from '@/components/common/cardsTemplate';
import ButtonPagination from '@/components/common/buttonPagination';
import generateRandomValue from '@/utils/generateRandomValue'
import fetchData from '@/utils/fetchData'
import property from '@/property'

const setFontSize = (length) => {
 let fontSize;
 if (length >= 25) {
  fontSize = 21
 }
 return fontSize;
}

const MotivasiPages = () => {
  const userData = getUser();
  const [image, setImage] = useState('')
  const [animate, setAnimate] = useState(false)
  const [motivasi, setMotivasi] = useState([])
  const title = userData.nama?.split(' ')[0] + ', ' + motivasi.title;
  const BUTTON = property.pages.motivasi.button
  const ATTRIBUTE = property.pages.motivasi.data.attribute;
  const CLASSES = property.pages.motivasi.data.classes;
  
  const selectedValues = [motivasi.quote,  motivasi.latin, motivasi.translation, motivasi.source, motivasi.explanation]
  
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const data = await fetchData('/motivasi.json')
    const getOneDataFetch = generateRandomValue(data.motivasi)
    
    setMotivasi(getOneDataFetch)
   }
   handlerFetchData()
  }, [])
  
  
  const handleGenerateReminder = (data, image) => {
   const element = document.getElementById('tops-reminder');
   const element2 = document.querySelector('.section-reminder');
   [element, element2].forEach((items) => {items.scrollIntoView({behavior: 'auto'})})
   
   setImage(image)
   setAnimate(true)
   setMotivasi(data)
  }
  
  useEffect(() => {
   if (animate) {
   const interval = setInterval(() => {
    setAnimate(prevState => !prevState)
   }, 200)
   
   return () => clearInterval(interval)
   }
  },[animate])
  
  return (
   <div className='container' id='motivasi-pages'>
    <Sidebar active='motivasi' />
    <Navbar />
    <Header size={setFontSize(motivasi?.title?.length)} title={title} quote='Tetap semangat ya, aku tahu kamu pasti bisa melewatinya. Semangatt' />
    <div className='section-reminder' id='wrapper-motivasi'>
     <div id='tops-reminder'></div>
     <BubbleMessage message={motivasi.me} />
     <span>
       <p className='bg-txt'>Tapi...</p>
       <p className='md-txt' style={{textTransform: 'capitalize'}}>{userData.nama?.split(' ')[0]}, harus ingat ayat ini</p>
     </span>
     <MotivasiCards data={selectedValues} title={"Allah SWT Berfirman :"} attr={ATTRIBUTE} classes={CLASSES} />
    </div>
     <div className='section-reminder' id='wrapper-button-pagination'>
      <ButtonPagination
       endpoint={'/motivasi.json'} 
       func={handleGenerateReminder}
       props={BUTTON}
       values='motivasi'
      />
     </div>
   </div>
  )
}

export default MotivasiPages;