import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
     <h1>NOT FOUND 404</h1>
     <Link to="/">Kembali</Link>
    </div>
   )
}

export default NotFound;