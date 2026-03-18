

const SpiritualQuoteCards = ({ data, showFullContent, attr }) => {
  const { arab, latin, artinya, nomor_sumber, sumber, pelajaran, kategori } = data;

  const sourceInfo = nomor_sumber ? `${sumber} / ${nomor_sumber}` : sumber;
  const categoryLabel = `Kategori Hadits : ${kategori}`;
  const title = !nomor_sumber ? 'Allah Swt ﷻ Berfirman :' : 'Rasulullah ﷺ bersabda :';

  return (
    <div className='container-reminder'>
      <div className='wrapper' id='wrapper-reminder'>
        <div className='wrapper-text' id='wrapped-reminder'>
          
          {showFullContent && (
            <>
              <p className='text-title'>{title}</p>
              <p className='text-arab'>{arab}</p>
              <p className='text-latin'>{latin}</p>
            </>
          )}

          <div className='box' data-info={attr}>
            <p className='text-arti'>{showFullContent ? artinya : pelajaran}</p>
            <p className='text-arti'>
              ({showFullContent ? sourceInfo : categoryLabel})
            </p>
          </div>

          {showFullContent && (
            <div className='box-icons'>
              <ion-icon name='heart' class='icons'></ion-icon>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};


export default SpiritualQuoteCards;