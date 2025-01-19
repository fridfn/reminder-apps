import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import ComponentImages from '@/components/common/componentImages';
import Image from '@/components/common/image';
import kids from '@/assets/ornament/kid_muslim.webp';

const Loading = () => {
  const [ formData, setFormData ] = useState({
   nama: '',
   kelas: '',
   email: '',
  });
  
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('authToken');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
   localStorage.setItem('authToken', true);
   e.preventDefault();
   const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   console.log(regexEmail.test(email))
   
   navigate('/home', { state:{ dataLogin: formData } });
   handleFullscreen();
  }
  
  if (isAuthenticated) {
   return <Navigate to='/home' />;
  }
  
  return (
   <div className='pages-loading'>
     <ComponentImages pages='index' getting='images' img='ornament' />
    <div className='wrapper-lantern'>
      <ComponentImages pages='home' getting='images' img='lantern' />
    </div>
    <div className='wrapper-form'>
      <p className='text-login-form'>Login</p>
      <form onSubmit={handleSubmit}>
       <div className='wrapper'>
        <label htmlFor='nama'>Nama Pengguna</label>
        <input 
          type='text'
          id='nama'
          name='nama'
          value={formData.nama}
          onChange={handleChange}
        />
       </div>
       <div className='wrapper'>
        <label htmlFor='kelas'>Kelas</label>
        <input
          type='text'
          id='kelas'
          name='kelas'
          value={formData.kelas}
          onChange={handleChange}
        />
       </div>
       <div className='wrapper'>
        <label htmlFor='email'>Alamat Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
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
  )
}

export default Loading;