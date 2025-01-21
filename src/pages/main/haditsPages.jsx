import Cards from '@/components/cards';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import fetchData from '@/utils/fetchData';
import Sidebar from '@/components/sidebar';
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

const endpoint = `https://api.hadith.gading.dev/books/muslim?range=100-120`;

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);

const HaditsPages = () => {
  const location = useLocation();
  const [ dataHadits, setDataHadits ] = useState([]);
  const [ userData, setUserData ] = useState({});
  
  const { id, name, hadiths } = dataHadits;
  const { dataLogin } = location.state || {};
  
  useEffect(() => {
   const handlerFetchData = async () => {
    const data = await fetchData(endpoint);
    setDataHadits(data.data);
   }
   handlerFetchData();
  }, [])
  
  useEffect(() => {
   if (dataLogin) {
   localStorage.setItem('user', JSON.stringify(dataLogin));
    setUserData(dataLogin)
   } else {
    setUserData(user)
   }
  }, [dataLogin, user]);
  
  const { nama, kelas, email } = userData || dataLogin;
  
  return (
   <div className='container'>
     <Sidebar active='hadits'/>
     <Header title={nama} />
     <section className='section-cards'>
      {hadiths && hadiths.length > 0 ? (
       <Cards data={hadiths} detail={dataHadits} />
       ) : (
        <p>loading</p>
      )}
     </section>
     <Navbar />
   </div>
  )
}

export default HaditsPages;