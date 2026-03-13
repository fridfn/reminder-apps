import getUser from '@/hooks/getUser'
import Input from '@/components/common/input'
import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

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
   navigate('/login', {
    state: { 
     dataLogin: formData
    }
   });
  }
  
  const isAuthenticated = localStorage.getItem('TOKEN');
  if (isAuthenticated) {
   return <Navigate to='/home' />;
  }
  
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
           maxLength='15'
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