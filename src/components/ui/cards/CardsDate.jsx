export const CardsDate = ({ data, dates }) => {
  const today = new Date();
  const month = today.getMonth();
  const monthData = ['Januari', 'Februari', 'Maret', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  
  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  
  const next7Days = [...Array(7)].map((_, index) => {
    let futureDate = addDays(today, index);
    return {
      day: futureDate.toLocaleString('id-ID', { weekday: 'long' }),
      date: futureDate.getDate().toString().padStart(2, '0')
    };
  });
  
  return (
    <div className='container-cards-date'>
      <span>
        <p className='name-day'>{next7Days[0].day},</p>
        <p className='name-day'>{monthData[month]}</p>
      </span>
      <div className='wrapper'>
       <div className='date-items'>
        <p className='date'>{next7Days[0].date}</p>
       </div>
      </div>
    </div>
  )
}

export default CardsDate;