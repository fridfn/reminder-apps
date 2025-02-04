import getUser from '@/hooks/getUser'
import Cards from '@/components/cards'
import Navbar from '@/components/navbar'
import Header from '@/components/header'
import fetchData from '@/utils/fetchData'
import Sidebar from '@/components/sidebar'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const endpoint = `https://api.hadith.gading.dev/books/muslim?range=100-180`

const HaditsPages = () => {
  const getUsers = getUser()
  const location = useLocation()
  const [ dataHadits, setDataHadits ] = useState([])
  const [ userData, setUserData ] = useState({})
  
  const { nama } = getUsers
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
    <Header title={`Hello, ${nama}`} />
    <section className='section-cards'>
    {getUsers.nama ? (
      hadiths && hadiths.length > 0 ? (
       <Cards data={hadiths} detail={dataHadits} />
      ) : (
       <p>loading</p>
     )
    ): (null)}
    </section>
    <Navbar />
   </div>
  )
}

export default HaditsPages