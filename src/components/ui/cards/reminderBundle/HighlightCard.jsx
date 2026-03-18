import { Image } from '@/components/shared';

const HighlightCards = ({ inti, image, animate }) => {
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


export default HighlightCards;