import getUser from '@/hooks/getUser'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';

const Input = ({ set, functions, index, trigger, redirect, minLength, attribute }) => {
  const userData = getUser()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ values: '' })
  
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
    
    if (redirect) {
     const { routes, isRedirect } = redirect;
     navigate(routes)
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
   <div 
    data-info={attribute}
    className='box-input'>
    <form
     id='custom-input'
     onSubmit={(e) => handleSubmit(e, 'next')}>
     <textarea required rows="1" cols="30" type='text' wrap='soft' name='values' minLength={minLength} className='input' placeholder='....'
      onInput={autoResize}
      value={formData.values || userData?.[set] || ''}
      onChange={handleChange}
     ></textarea>
    </form>
   </div>
  )
}

export default Input;