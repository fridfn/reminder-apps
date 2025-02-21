import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const getUser = () => {
  const location = useLocation()
  const [userData, setUserData] = useState([])
  const { dataLogin } = location.state || {}
  
  useEffect(() => {
    const userJSON = localStorage.getItem('user')
    const isToken = localStorage.getItem('TOKEN')
    const user = JSON.parse(userJSON)
    
    if (dataLogin && !isToken) {
     localStorage.setItem('user', JSON.stringify(dataLogin))
     setUserData(dataLogin)
    } else {
     setUserData(user)
    }
  }, [dataLogin])
  return { userData, dataLogin }
}

export default getUser