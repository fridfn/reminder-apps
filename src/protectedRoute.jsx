import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAunthentication = localStorage.getItem('authToken');
   
   if (!isAunthentication) {
    return <Navigate to='/login' />
   }
   
  return children;
}

export default ProtectedRoute;