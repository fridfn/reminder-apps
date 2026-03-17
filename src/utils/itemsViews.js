export const itemsPerViews = (props) => {
   const { numberView, datas, currentPage } = props
   const totalPages = Math.ceil(datas.length / numberView);
   const indexOfLastItem = currentPage * numberView;
   const indexOfFirstItem = indexOfLastItem - numberView;
   const currentSurah = datas.slice(indexOfFirstItem, indexOfLastItem);
  return currentSurah;
 }