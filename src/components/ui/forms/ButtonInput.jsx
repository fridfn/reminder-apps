import React, { useState, useEffect } from 'react';

const ButtonInput = ({ form, title, disable = false, setTrigger, trigger, setRedirect }) => {
  return (
   <div className='container-button-input'>
    <button
     disabled={disable}
     className={`button-submit ${disable ? 'disabled' : ''}`}
     form={form}
     type='submit'
     onClick={() => {
      setTrigger(trigger)
      setRedirect ? setRedirect(trigger) : null;
     }}
     dangerouslySetInnerHTML={{ __html: title }}/>
   </div>
  )
}

export default ButtonInput;