import React, { useState } from 'react';
import FlagImage from '../images/flag.png';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Goal = ({ id }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <img src={FlagImage} className='div-image'></img>
      <TextField
        id={id}
        variant='standard'
        sx={{ marginLeft: '1vw' }}
        fullWidth
      />
    </Box>
  );
};

export default Goal;
