import '@/App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/styles/pseudo.scss';
import { Hadist, Ayat, Motivation, Odos, Surah, Reminder }  from '@/pages/dashboard';
import { Activity, Entry, Inspiration, Personality, Surahs }  from '@/pages/auth/register/onboarding';
import ProtectedRoute from '@/protectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  AOS.init({ duration: '700', mirror: true, once: false });
  return (
    <>
     <div className='info'>
       MAAF WEB INI TIDAK TERSEDIA DALAM VERSI DESKTOP !!!
     </div>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
             <Route path='/' element={<Hadist />} />
             <Route path='/home/hadits' element={<Hadist />} />
             <Route path='/home/odos' element={<Odos />} />
             <Route path='/home/surah' element={<Surah />} />
             <Route path='/home/surah/:nomor' element={<Ayat />} />
             <Route path='/home/reminder' element={<Reminder />} />
             <Route path='/home/motivasi' element={<Motivasi />} />
             <Route path='/profile' element={<Profile />} />
             <Route path='/settings' element={<Settings />} />
          </Route>
          <Route path='/login' element={<Entry />} />
          <Route path='*' element={ <NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
