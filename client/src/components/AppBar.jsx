import React from 'react';
import DateSelector from './DateSelector';
import ExitImage from '../images/exit.png';
import UploadImage from '../images/upload.png';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const Header = ({ setOpen, setAlertContent }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '25%',
          justifyContent: 'start',
        }}
      >
        <IconButton
          onClick={() => {
            document.getElementById('edit-schedule').hidden = true;
          }}
        >
          <img className='header-image' src={ExitImage}></img>
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '50%',
          justifyContent: 'center',
        }}
      >
        <DateSelector></DateSelector>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '25%',
          justifyContent: 'end',
        }}
      >
        <IconButton
          onClick={() => {
            setAlertContent('Saved!');
            setOpen(true);
          }}
        >
          <img className='header-image' src={UploadImage}></img>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
