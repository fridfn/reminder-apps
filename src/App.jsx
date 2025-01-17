import '@/App.scss';
import '@/styles/pseudo.scss';
import Home from '@/pages/home';
import Loading from '@/pages/loading';
import React, { useState } from 'react';
import ProtectedRoute from '@/protectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={
           <Loading />} />
          <Route path='/home' element={
           <ProtectedRoute>
             <Home />
           </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
