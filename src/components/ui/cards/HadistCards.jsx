import React, { useState } from 'react';
import Image from '@/components/shared';


export const HadithCard = ({ hadits, riwayat }) => {
  const { name, number, id } = riwayat;
  const [isActive, setIsActive] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
    setIsActive(!isActive);
  };

  const isLongText = hadits.length < 350;

  return (
    <div className='reminder'>
      <div className='ribbon ribbon-hadits'>Id : {id}</div>
      <p className='hadits-surah'>{name} {number}</p>
      
      <div 
        className='wrapper-reminder' 
        style={{ 
          justifyContent: isLongText ? 'center' : 'flex-start',
          textAlign: isLongText ? 'center' : 'start' 
        }}
      >
        <p className='tny-txt'>{hadits}</p>
      </div>

      <button className='box-icons' onClick={toggleFullscreen}>
        <p className='text'>Detail</p>
        <ion-icon name='search' class='icons'></ion-icon>
      </button>

      <div className={`full-hadits ${isActive ? 'active' : ''}`}>
        <p className='text'>{hadits}</p>
      </div>
    </div>
  );
};

export const HighlightCard = ({ inti, image, animate }) => {
  const getFontSize = (text) => {
    if (!text) return '14px';
    const length = text.length;
    if (length >= 45) return '14px';
    if (length >= 30) return '18px';
    if (length > 20) return '25px';
    return '28px';
  };

  return (
    <div className='container-reminder'>
      <div className='wrapper'>
        <div className='content-first'>
          <div className='wrapper-text' id='parent-inti-reminder'>
            <p className='text box-text' style={{ fontSize: getFontSize(inti) }}>
              {inti}
            </p>
          </div>
          <div className='box-image'>
            <Image image={image} animate={animate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SpiritualQuoteCard = ({ data, showFullContent, attr }) => {
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