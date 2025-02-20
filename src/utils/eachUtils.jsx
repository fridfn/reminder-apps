import React from 'react';
import { Children } from 'react';
import propTypes from 'prop-types';

const EachUtils = ({ of, render }) => {
  if (!Array.isArray(of)) return <h3>{of}</h3>
  
  return Children.toArray(of.map((items, index) => render(items, index)));
}

export const itemsPerViews = (props) => {
 const { numberView, datas, currentPage } = props
  const totalPages = Math.ceil(datas.length / numberView);
  const indexOfLastItem = currentPage * numberView;
  const indexOfFirstItem = indexOfLastItem - numberView;
  const currentSurah = datas.slice(indexOfFirstItem, indexOfLastItem);
  return currentSurah;
 }

export default EachUtils;