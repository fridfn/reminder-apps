import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import ComponentImages from '@/components/common/componentImages';
import Image from '@/components/common/image';

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
   
   navigate('/personal', { state: { dataLogin: formData } });
  }
  
  if (isAuthenticated) {
   return <Navigate to='/home' />;
  }
  
  return (
   <div className='pages-loading'>
     <ComponentImages pages='login' getting='images' img='lantern' />
    <div className='container-form'>
    <div className='heading-login'>
     <div className='wrapper-text'>
     <p className='text-greting'>Hello, Welcome to Reminder Apps</p>
     <p className='text-description'>Sebuah web apps yang di kembangkan untuk pengembangan diri untuk menjadi pribadi yang lebih baik.</p>
     </div>
    </div>
     <ComponentImages pages='login' getting='images' img='background_cloud' />
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
           value={formData.nama}
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
           value={formData.kelas}
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
   </div>
  )
}

export default Loading;