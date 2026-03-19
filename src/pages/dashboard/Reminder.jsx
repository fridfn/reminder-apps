import React, { useState, useEffect, useRef } from 'react';
import property from '@/property'
import getUser from '@/hooks/getUser';
import fetchData from '@/utils/fetchData'
import EachUtils from '@/utils/eachUtils'
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { StackedCards } from '@/components/common/cardsTemplate'
import generateRandomValue from '@/utils/generateRandomValue'
import MotivasiCards from '@/components/common/cardsTemplate';
import ButtonPagination from '@/components/common/buttonPagination';
import BubbleMessage from '@/components/common/cards';

const OdosPages = () => {
  const [odos, setOdos] = useState([])
  const { userData } = getUser()
  const { nama } = userData;
  
  const BUTTON = property.pages.odos.button
  const ATTRIBUTE = property.pages.odos.data.attribute;
  const CLASSES = property.pages.odos.data.classes;
  
  const selectedValues = [odos.arab, odos.latin, odos.translation, odos.source, odos.explanation]
  
  const handleGenerateReminder = (data) => {
   const element = document.getElementById('tops-reminder');
   const element2 = document.querySelector('.section-reminder');
   [element, element2].forEach((items) => {items.scrollIntoView({behavior: 'auto'})})
  
   setOdos(data)
  }
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const data = await fetchData('/odos.json')
    const getOneDataFetch = generateRandomValue(data.odos)
    
    setOdos(getOneDataFetch)
   }
   handlerFetchData()
  }, [])
  
  return (
   <div className='container'>
    <Sidebar active='odos' />
    <Navbar active='home' />
    <section className='section-reminder'>
     <Header title={`${nama?.split(' ')[0]}, One Day One Sunnah`} quote='Selalu amalkan sunnah sunnah nabi yang di sebutkan ini ya.' />
     <div className='wrapper' id='wrapper-surah'>
      <span>
       <p className='bg-txt' style={{fontFamily: "'Russo One', serif"}}>{userData?.nama?.split(' ')[0].charAt(0).toUpperCase() + userData?.nama?.split(' ')[0].slice(1).toLowerCase()}...</p>
       <p className='nm-txt' style={{textTransform: 'capitalize', fontFamily: "'Russo One', serif"}}>Di  Sunnahkan, {odos.title}</p>
      </span>
      <MotivasiCards data={selectedValues} title={"Nabi Muhammad ﷺ Berfirman :"} attr={ATTRIBUTE} classes={CLASSES} />
     </div>
    </section>
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

export default OdosPages;