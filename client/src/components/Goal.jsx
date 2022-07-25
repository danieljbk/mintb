import React, { useState } from 'react';
import FlagImage from '../images/flag.png';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Goal = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <img src={FlagImage} className='div-image'></img>
      <TextField
        id='input-with-sx'
        variant='standard'
        sx={{ marginLeft: '1vw' }}
        fullWidth
      />
    </Box>
  );
};

export default Goal;
