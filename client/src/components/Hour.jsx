import React from 'react';

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

const Hour = ({ time, type }) => {
  return (
    <Box sx={{ display: 'flex' }} borderBottom={1}>
      <Box sx={{ width: '5vw', textAlign: 'center' }} borderRight={1}>
        <p className='hour'>{time}</p>
      </Box>
      <InputBase id={time + type} sx={{ marginLeft: '1vw' }} fullWidth />
    </Box>
  );
};

export default Hour;
