import getUser from '@/hooks/getUser'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

const Input = ({ set, functions, index, trigger, redirect }) => {
  const userData = getUser()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  
  const autoResize = (e) => {
   const textarea = e.target;
   
   textarea.style.height = 'auto';
   textarea.style.height = (textarea.scrollHeight) + 'px';
  }
  
  const handleSubmit = (e) => {
   e.preventDefault();
   
   if (trigger === 'back') {
    functions(index - 1)
   } else {
    functions(index + 1)
    userData[set] = formData.values;
    localStorage.setItem('user', JSON.stringify(userData))
    
    console.log({redirect})
    if (redirect) {
     navigate('/home/hadits')
     localStorage.setItem('TOKEN', 'king farid 👑')
    }
   }
  }
  
  const handleChange = (e) => {
   const { name, value } = e.target;
   
   setFormData({
    ...formData,
    [name]: value
   })
  }
  
  return (
   <div className='box-input'>
    <form id='custom-input' onSubmit={(e) => handleSubmit(e, 'next')}>
     <textarea required rows="1" cols="30" type='text' wrap='soft' name='values' minLength='10' className='input' placeholder='....'
      onInput={autoResize}
      value={formData.values || 'farid fathoni nugroho'}
      onChange={handleChange}
     ></textarea>
    </form>
   </div>
  )
}

export default Input;