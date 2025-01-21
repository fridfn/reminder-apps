import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAunthentication = localStorage.getItem('authToken');
   
   if (!isAunthentication) {
    return <Navigate to='/login' />
   }
   
  return <Outlet />;
}

export default ProtectedRoute;