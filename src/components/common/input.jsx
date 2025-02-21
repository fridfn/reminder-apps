import getUser from '@/hooks/getUser'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';

const Input = ({ set, functions, index, trigger, redirect, minLength, attribute }) => {
  const navigate = useNavigate()
  const { userData, dataLogin } = getUser()
  const [formData, setFormData] = useState({ values: dataLogin?.[set] })
  const isRequired = trigger === 'back' ? false : true; 
  
  const autoResize = (e) => {
   const textarea = e.target;
   
   textarea.style.height = 'auto';
   textarea.style.height = (textarea.scrollHeight) + 'px';
  }
  
  const handleSubmit = (e) => {
   e.preventDefault();
   userData[set] = formData.values || dataLogin?.[set];
   localStorage.setItem('user', JSON.stringify(userData))
   
   if (trigger === 'back') {
    functions(index - 1)
   } else {
    functions(index + 1)
    
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
     <textarea required={isRequired} rows="1" cols="30" type='text' wrap='soft' name='values' minLength={minLength} className='input' placeholder='....'
      onInput={autoResize}
      onChange={handleChange}
      value={formData.values || userData?.[set] || ''}
     ></textarea>
    </form>
   </div>
  )
}

export default Input;