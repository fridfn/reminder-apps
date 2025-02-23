import getUser from '@/hooks/getUser'
import Cards from '@/components/cards'
import Navbar from '@/components/navbar'
import Header from '@/components/header'
import fetchData from '@/utils/fetchData'
import Sidebar from '@/components/sidebar'
import { useLocation } from 'react-router-dom'
import { LoaderDots } from '@/components/loader'
import React, { useState, useEffect } from 'react'

const endpoint = `https://api.hadith.gading.dev/books/muslim?range=100-180`

const HaditsPages = () => {
  const { userData } = getUser()
  const location = useLocation()
  const [ dataHadits, setDataHadits ] = useState([])
  const { nama } = userData
  const { id, name, hadiths } = dataHadits
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const data = await fetchData(endpoint)
    setDataHadits(data.data)
   }
   handlerFetchData()
  }, [])
  
  return (
   <div className='container'>
    <Sidebar active='hadits'/>
    <section className='section-reminder'>
    <Header title={`Hello, ${nama}`} />
     <div className='section-cards'>
     <img style={{zIndex: '20', position: 'absolute', top: '20px'}} src="https://render.gitanimals.org/lines/fridfn?pet-id=671615300271345171" width="600" height="150"/>
     {userData.nama ? (
       hadiths && hadiths.length > 0 ? (
        <Cards data={hadiths} detail={dataHadits} />
       ) : ( <LoaderDots /> )
     ): (null)}
     </div>
    </section>
    <Navbar />
   </div>
  )
}

export default HaditsPages