import React from 'react';
import { Children } from 'react';
import propTypes from 'prop-types';

const EachUtils = ({ of, render }) => {
  if (!Array.isArray(of)) return <h3>{of}</h3>
  
  return Children.toArray(of.map((items, index) => render(items, index)));
}

export default EachUtils;