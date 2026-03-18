import useUser from '@/hooks/useUser'
import fetchData from '@/utils/fetchData'
import { useLocation } from 'react-router-dom'
import { WaveDots } from '@/components/effects'
import { Header, Sidebar, Navbar } from '@/components/layout';
import { HadistContent } from '@/components/ui/cards'
import React, { useState, useEffect } from 'react'

const endpoint = `https://api.hadith.gading.dev/books/muslim?range=100-180`

const Hadist = () => {
  const { userData } = useUser()
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
     {userData.nama ? (
       hadiths && hadiths.length > 0 ? (
        <HadistContent 
          data={hadiths}
          detail={dataHadits}
        />
       ) : ( <WaveDots /> )
     ): (null)}
     </div>
    </section>
    <Navbar active='home' />
   </div>
  )
}

export default Hadist;