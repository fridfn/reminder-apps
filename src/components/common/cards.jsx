import React from 'react';
import Image from '@/components/common/image';
import muslimWoman5 from '@/assets/muslim_woman_1.webp';

const BubbleMessage = ({ message }) => {
  return (
   <div className='container-bubble'>
    <div className='box-image'>
     <Image image={muslimWoman5} />
    </div>
    <div className='box-text'>
     <p className='text'>Me :<span>jangan menuerah ya karna aku selalu ada buat kamu</span></p>
    </div>
   </div>
  )
}

export default BubbleMessage;