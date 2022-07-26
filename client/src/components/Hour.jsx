import React from 'react';

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

const Hour = ({ time, type, value, onChange }) => {
  return (
    <Box sx={{ display: 'flex' }} borderBottom={1}>
      <Box
        sx={{
          display: 'flex',
          minWidth: '5vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        borderRight={1}
      >
        <p className='number'>{time}</p>
        <p className='letter'> {type.toUpperCase()}</p>
      </Box>
      <InputBase
        id={time + type}
        onChange={onChange}
        value={value}
        sx={{ paddingLeft: '1.25vw' }}
        fullWidth
      />
    </Box>
  );
};

export default Hour;
