import React from 'react';
import scrollImage from '../images/scroll.png';

import IconButton from '@mui/material/IconButton';

const ScrollToTop = () => {
  return (
    <IconButton
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      aria-label='delete'
    >
      <img id='scrollToTop' src={scrollImage} className='div-image'></img>
    </IconButton>
  );
};

export default ScrollToTop;
