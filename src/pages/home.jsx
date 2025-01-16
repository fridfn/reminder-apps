import Cards from '@/components/cards';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);

const Home = () => {
  const location = useLocation();
  const [ userData, setUserData ] = useState({});
  
  useEffect(() => { setUserData(user) }, [userData])
  
  const { dataLogin } = location.state || {};
  const { name, kelas, email } = userData || dataLogin;
  
  useEffect(() => {
   localStorage.setItem('user', JSON.stringify(dataLogin));
  }, [dataLogin])
  
  const data = [
    { description: 'Deskripsi 1', hadits: 'Hadits 1' },
    { description: 'Deskripsi 2', hadits: 'Hadits 2' },
    { description: 'Deskripsi 3', hadits: 'Hadits 3' },
    { description: 'Deskripsi 4', hadits: 'Hadits 4' },
  ];
  
  
  return (
   <div className='container'>
     <Sidebar />
     <Header title={name} />
     <section className='section-cards'>
       <Cards data={data} />
     </section>
     <Navbar />
   </div>
  )
}

export default Home;