import Cards from '@/components/cards';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import React, { useState, useEffect } from 'react';

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);

const Home = ({ datas }) => {
  const [ userData, setUserData ] = useState({});
  const { name, kelas, email } = userData;
  
  const data = [
    { description: 'Deskripsi 1', hadits: 'Hadits 1' },
    { description: 'Deskripsi 2', hadits: 'Hadits 2' },
    { description: 'Deskripsi 3', hadits: 'Hadits 3' },
    { description: 'Deskripsi 4', hadits: 'Hadits 4' },
  ];
  
  useEffect(() => { setUserData(user) }, [])
  
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