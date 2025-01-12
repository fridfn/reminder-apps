import '@/App.scss';
import '@/styles/pseudo.scss';
import Cards from '@/components/cards';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Sidebar />
        <Cards />
      <Navbar />
    </div>
  )
}

export default App
