import AOS from 'aos';

const handlePaginationSurah = (type) => {
  const [currentAyat, setCurrentAyat] = useState(1);
  
  AOS.refresh()
  switch (type) {
   case 'next':
    if (currentAyat < totalAyatList) {
      setCurrentAyat(currentAyat + 1)
     }
    break;
    case 'prev':
     if (currentAyat > 1) {
       setCurrentAyat(currentAyat - 1);
     }
    break;
    default:
    return alert('please set type');
  }
}


export { handlePaginationSurah };