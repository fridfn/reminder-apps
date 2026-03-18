import property from '@/property'
import useUser from '@/hooks/useUser'
import { Header, Sidebar, Navbar } from '@/components/layout'
import fetchData from '@/utils/fetchData'
import EachUtils from '@/utils/eachUtils'
import { Input, InputButton } from '@/components/ui/forms'
import { StackedCards } from '@/components/ui/cards'
import generateRandomValue from '@/utils/generateRandomValue'
import { ButtonPagination } from '@/components/shared';
import { BubbleMessageCards, MotivationCards } from '@/components/ui/cards';
import React, { useState, useEffect, useRef } from 'react';

const Odos = () => {
  const [odos, setOdos] = useState([])
  const { userData } = useUser()
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
      <MotivationCards data={selectedValues} title={"Nabi Muhammad ﷺ Berfirman :"} attr={ATTRIBUTE} classes={CLASSES} />
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

export default Odos;