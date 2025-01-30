import '@/App.scss';
import AOS from 'aos';
import '@/styles/pseudo.scss';
import HaditsPages from '@/pages/main/haditsPages';
import OdosPages from '@/pages/main/odosPages'
import ReminderPages from '@/pages/main/reminderPages';
import SurahPages from '@/pages/main/surahPages';
import MotivasiPages from '@/pages/main/motivasiPages';
import Loading from '@/pages/loading';
import NotFound from '@/pages/notFound';
import React, { useState } from 'react';
import ProtectedRoute from '@/protectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  AOS.init({ duration: '1200', once: true});
  
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route path='/home' element={<HaditsPages />} />
            <Route path='/home/hadits' element={<HaditsPages />} />
            <Route path='/home/odos' element={<OdosPages />} />
            <Route path='/home/surah' element={<SurahPages />} />
            <Route path='/home/reminder' element={<ReminderPages />} />
            <Route path='/home/motivasi' element={<MotivasiPages />} />
          </Route>
          <Route path='/login' element={<Loading />} />
          <Route path='*' element={ <NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
