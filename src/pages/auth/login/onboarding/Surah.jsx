import property from '@/property'
import getUser from '@/hooks/getUser'
import Header from '@/components/header'
import fetchData from '@/utils/fetchData'
import Input from '@/components/common/input'
import EachUtils, { itemsPerViews } from '@/utils/eachUtils'
import InputButton from '@/components/common/buttonInput'
import { LoaderDots } from '@/components/loader'
import ComponentImages from '@/components/common/componentImages'
import React, { useEffect, useState } from 'react'


export const Surah = ({ functions, index }) => {
  const userData = getUser();
  const { nama, email, kelas } = userData?.dataLogin
  const [selectedItems, setSelectedItems] = useState([]);
  const [valueTrigger, setValueTrigger] = useState('')
  const [redirect, setRedirect] = useState({
   routes: '',
   isRedirect: false
  })
  
  const limitSelectedItems = 4;
  const listOfActivity = property.datas.activity
  const disableButton = selectedItems.length < limitSelectedItems;
  const ATTRIBUTE = property.pages.surah.data.attribute;
  const CLASSES = property.pages.surah.data.classes;
  const BUTTON = property.pages.surah.button;
  
  const [asma, setAsma] = useState([])
  const [surah, setSurah] = useState([])
  const [loading, setLoading] = useState(true)
  const currentSurah = itemsPerViews({numberView: 4, datas: surah, currentPage: 2})
  
  const dataArraySurah = [];
  const dataAyahs = surah?.map(surah => {
   return {
    number: surah.number,
    nameSurah: surah.name,
    numberOfAyahs: surah.numberOfAyahs
   }
  })
  const handlePushSurah = dataAyahs.forEach(items => {
  return dataArraySurah.push(`<div id='number-surah'>${items.number}</div>${items.nameSurah}`)});
  
  useEffect(() => {
   if (surah) {
    setTimeout(() => {
     setLoading(false);
    }, 1000)
   }
  }, [currentSurah])
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const resultAsma = await fetchData('https://api.npoint.io/99c279bb173a6e28359c/data');
    const resultSurah = await fetchData('/quran.json')
    
    setAsma(resultAsma)
    setSurah(resultSurah)
   }
   handlerFetchData()
  }, [])
  
  return (
   <section data-aos='fade-left'>
    <ComponentImages pages='login' getting='images' img='lantern' />
    <Header 
     quote="Surat apa yang kamu sukai atau sering kamu baca ketika membaca Al - Qur'an?"
     title={`${nama?.split(' ')[0]}, Lets personalize your experience`}
    />
    <div className='box-content' id='select-surah'>
      <SelectedActivity
       datas={selectedItems}
       selectedItems={selectedItems}
       limitNumber={limitSelectedItems}
       setSelectedItems={setSelectedItems}
       info="Dibawah ini adalah list dari surah surah Al - Qur'an lengkap."
      />
      {!loading ? (<ItemsActivity 
       datas={dataArraySurah} 
       selectedItems={selectedItems}
       limitNumber={limitSelectedItems}
       setSelectedItems={setSelectedItems}
      />) : (
       <div className='container-activity'>
         <LoaderDots />
       </div>
       )}
     <Input
      index={index} 
      minLength={40}
      redirect={redirect}
      functions={functions}
      trigger={valueTrigger}
      attribute={`${selectedItems.length}/${limitSelectedItems} Terpilih`}
      propData={{ SET: 'surat', DATAS: selectedItems }}
     />
     <div className='wrapper-button-input' data-info={`Langkah ${index} dari 4`}>
      <InputButton 
       trigger='back'
       form='custom-input'
       setTrigger={setValueTrigger}
       title="<ion-icon name='arrow-back'></ion-icon>" />
      <InputButton 
       trigger={{
        routes: '/home/hadits',
        isRedirect: true
       }}
       form='custom-input' 
       title='Selanjutnya' 
       disable={disableButton}
       setRedirect={setRedirect}
       setTrigger={setValueTrigger} />
     </div>
    </div>
   </section>
  )
}