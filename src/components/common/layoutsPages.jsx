import property from '@/property'
import getUser from '@/hooks/getUser'
import Header from '@/components/header'
import fetchData from '@/utils/fetchData'
import Input from '@/components/common/input'
import { useNavigate, Navigate } from 'react-router-dom'
import EachUtils, { itemsPerViews } from '@/utils/eachUtils'
import InputButton from '@/components/common/buttonInput'
import { LoaderDots } from '@/components/loader'
import { Surah } from '@/components/common/cardsTemplate'
import ComponentImages from '@/components/common/componentImages'
import React, { useEffect, useState } from 'react'

const handleClick = (props) => {
  const { items, selectedItems, limitNumber, setSelectedItems } = props;
  const nameItems = items.target.getAttribute('info')
  
  if (!selectedItems.includes(nameItems) && selectedItems.length < limitNumber) {
   setSelectedItems((prevItems) => [...prevItems, nameItems])
  } else {
   setSelectedItems((prevItems) => prevItems.filter(items => items !== nameItems))
  }
 }

const ItemsActivity = ({ datas, selectedItems, setSelectedItems, limitNumber }) => {
  return (
   <div className='container-activity' data-aos='zoom-in'>
    <EachUtils 
     of={datas}
     render={(nama, index) => {
      const removeHtmlTags = (text) => { return text.replace(/<\/?[^>]+(>|$)/g, "").trimStart() }
      const cleanNama = removeHtmlTags(nama)
      const isActive = selectedItems.includes(cleanNama)
      
      return (
       <div 
        key={index}
        className={`box-activity ${isActive ? 'active' : ''}`}>
         <p className='name'
          info={cleanNama}
          onClick={(items) => handleClick({
           items: items,
           limitNumber: limitNumber,
           selectedItems: selectedItems,
           setSelectedItems: setSelectedItems,
          })}
          dangerouslySetInnerHTML={{ __html: nama}}/>
       </div>
      )}}/>
    </div>
   )
}

const SelectedActivity = ({ datas, selectedItems, setSelectedItems, limitNumber, info }) => {
  return (
   <div className='container-selected-activity' data-info={info}>
    <EachUtils
     of={datas}
     render={(selected, index) => {
     return (
      <div key={index} className='box-activity isSelected'>
       <p
        className='name'
        info={selected}
        onClick={(items) => handleClick({
         items: items,
         limitNumber: limitNumber,
         selectedItems: selectedItems,
         setSelectedItems: setSelectedItems,
        })}
       dangerouslySetInnerHTML={{ __html: selected.replace(/\d+/g, '').trim()}}/>
      <ion-icon name='close-circle'></ion-icon>
     </div>
    )}}/>
   </div>
  )
}

export const pagesMotivation = ({ functions, index }) => {
  const userData = getUser();
  const { nama, email, kelas } = userData
  const [valueTrigger, setValueTrigger] = useState('')
  
  return (
   <section data-aos='fade-left'>
    <ComponentImages pages='login' getting='images' img='lantern' />
    <Header 
     quote='Apa janji dan motivasi kamu untuk diri kamu sendiri agar menjadi pribadi yang lebih baik?'
     title={`Welcome to Reminder App, ${nama?.split(' ')[0]}`}
    />
    <div className='box-content'>
     <Input 
      set='janji' 
      index={index} 
      minLength={40}
      functions={functions}
      trigger={valueTrigger}
     />
     <div className='wrapper-button-input' data-info={`Langkah ${index} dari 3`}>
      <InputButton 
       trigger='back'
       form='custom-input'
       setTrigger={setValueTrigger}
       title="<ion-icon name='arrow-back'></ion-icon>" />
      <InputButton 
       disable={false}
       form='custom-input' 
       title='Selanjutnya' 
       setTrigger={setValueTrigger} />
     </div>
    </div>
   </section>
  )
}

export const pagesPersonalize = ({ functions, index }) => {
  const userData = getUser();
  const { nama, email, kelas } = userData
  const [loading, setLoading] = useState(true)
  const [selectedItems, setSelectedItems] = useState([]);
  const [valueTrigger, setValueTrigger] = useState('')
  const limitSelectedItems = 1;
  const listOfActivity = property.datas.activity
  const disableButton = selectedItems.length < limitSelectedItems;
  
  useEffect(() => {
   if (limitSelectedItems) {
    setTimeout(() => {
     setLoading(false);
    }, 1000)
   }
  }, [])
  
  return (
   <section data-aos='fade-left'>
    <ComponentImages pages='login' getting='images' img='lantern' />
    <Header 
     quote='Kegiatan apa yang paling kamu sukai ketika kamu mempunyai waktu luang?'
     title={`${nama?.split(' ')[0]}, Lets personalize your experience`}
    />
    <div className='box-content'>
     <SelectedActivity
      datas={selectedItems}
      selectedItems={selectedItems}
      limitNumber={limitSelectedItems}
      setSelectedItems={setSelectedItems}
      info='Pilihlah kegiatan di bawah ini yang relevan untuk kamu lakukan atau sukai.'
     />
     {!loading ? (<ItemsActivity 
      datas={listOfActivity} 
      selectedItems={selectedItems}
      limitNumber={limitSelectedItems}
      setSelectedItems={setSelectedItems}
     />) : (
       <div className='container-activity'>
         <LoaderDots />
       </div>
      )}
     <Input 
      set='hobby' 
      index={index}
      minLength={40}
      functions={functions} 
      trigger={valueTrigger}
      attribute={`${selectedItems.length}/${limitSelectedItems} Terpilih`}
     />
     <div className='wrapper-button-input' data-info={`Langkah ${index} dari 4`}>
      <InputButton 
       trigger='back'
       form='custom-input'
       setTrigger={setValueTrigger}
       title="<ion-icon name='arrow-back'></ion-icon>" />
      <InputButton 
       form='custom-input' 
       title='Selanjutnya' 
       disable={disableButton}
       setTrigger={setValueTrigger} />
     </div>
    </div>
   </section>
  )
}

export const pagesPersonality = ({ functions, index }) => {
  const userData = getUser();
  const { nama, email, kelas } = userData
  const [loading, setLoading] = useState(true)
  const [selectedItems, setSelectedItems] = useState([]);
  const [valueTrigger, setValueTrigger] = useState('')
  const limitSelectedItems = 1;
  const listOfPersonality = property.datas.personality
  const disableButton = selectedItems.length < limitSelectedItems;
  
  useEffect(() => {
   if (limitSelectedItems) {
    setTimeout(() => {
     setLoading(false);
    }, 1000)
   }
  }, [])
  
  return (
   <section data-aos='fade-left'>
    <ComponentImages pages='login' getting='images' img='lantern' />
    <Header 
     quote='Bagaimana dengan personality kamu?'
     title={`${nama?.split(' ')[0]}, Lets personalize your experience`}
    />
    <div className='box-content'>
     <SelectedActivity
      datas={selectedItems}
      selectedItems={selectedItems}
      limitNumber={limitSelectedItems}
      setSelectedItems={setSelectedItems}
      info='Manakah kepribadian di bawah ini yang relate menggambarkan kepribadian diri kamu.'
     />
     {!loading ? (<ItemsActivity 
      datas={listOfPersonality} 
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
      set='personality' 
      functions={functions} 
      trigger={valueTrigger}
      attribute={`${selectedItems.length}/${limitSelectedItems} Terpilih`}
     />
     <div className='wrapper-button-input' data-info={`Langkah ${index} dari 4`}>
      <InputButton 
       trigger='back'
       form='custom-input'
       setTrigger={setValueTrigger}
       title="<ion-icon name='arrow-back'></ion-icon>" />
      <InputButton 
       form='custom-input' 
       title='Selanjutnya' 
       disable={disableButton}
       setTrigger={setValueTrigger} />
     </div>
    </div>
   </section>
  )
}

export const pagesFavorite = ({ functions, index }) => {
  const userData = getUser();
  const { nama, email, kelas } = userData
  const [selectedItems, setSelectedItems] = useState([]);
  const [valueTrigger, setValueTrigger] = useState('')
  const [redirect, setRedirect] = useState({
   routes: '',
   isRedirect: false
  })
  const limitSelectedItems = 1;
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
      set='surat' 
      index={index} 
      minLength={30}
      redirect={redirect}
      functions={functions}
      trigger={valueTrigger}
     />
     <div className='wrapper-button-input' data-info={`Langkah ${index} dari 4`}>
      <InputButton 
       trigger='back'
       form='custom-input'
       setTrigger={setValueTrigger}
       title="<ion-icon name='arrow-back'></ion-icon>" />
      <InputButton 
       trigger={{
        routes: '/home/odos',
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

export const pagesLogin = ({ functions }) => {
  const userData = getUser()
  const navigate = useNavigate()
  const [ formData, setFormData ] = useState({
   nama: '',
   kelas: '',
   email: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = () => {
   functions(1)
   navigate('/login', { state: { dataLogin: formData } });
  }
  // 
//   const isAuthenticated = localStorage.getItem('user');
//   if (isAuthenticated) {
//    return <Navigate to='/home' />;
//   }
  
  return (
   <div className='pages-loading'>
    <div className='container-form'>
    <div className='heading-login'>
     <div className='wrapper-text'>
     <p className='text-greting'>Hello, Welcome to Reminder Apps</p>
     <p className='text-description'>Sebuah web apps yang di kembangkan untuk pengembangan diri untuk menjadi pribadi yang lebih baik.</p>
     </div>
    </div>
     <div className='wrapper-form'>
       <form onSubmit={handleSubmit}>
        <div className='wrapper'>
         <label htmlFor='nama'>Nama Pengguna</label>
         <input 
           required
           type='text'
           id='nama'
           name='nama'
           tabIndex='1'
           minLength='4'
           value={formData.nama || userData?.nama || ''}
           onChange={handleChange}
         />
        </div>
        <div className='wrapper'>
         <label htmlFor='kelas'>Kelas</label>
         <input
           required
           type='text'
           id='kelas'
           name='kelas'
           tabIndex='2'
           minLength='4'
           value={formData.kelas || userData?.kelas || ''}
           onChange={handleChange}
         />
        </div>
        <div className='wrapper'>
         <label htmlFor='email'>Alamat Email</label>
         <input
           required
           type='email'
           id='email'
           name='email'
           tabIndex='3'
           minLength='10'
           value={formData.email || userData?.email || ''}
           onChange={handleChange}
         />
        </div>
         <button className='button'>Masuk</button>
       </form>
     </div>
    <div className='name-apps'>
      <p className='text'>Reminder Apps</p>
      <p className='copyright'>Copyright 2025 All Right Reserved</p>
    </div>
    </div>
   </div>
  )
}