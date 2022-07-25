import React from 'react';

import ContentHolder from './ContentHolder';
import Goal from './Goal';
import Note from './Note';
import ScrollToTop from './ScrollToTop';
import TimeBox from './TimeBox';
import AppBar from './AppBar';

import Box from '@mui/material/Box';

const Content = ({ setOpen, setAlertContent }) => {
  return (
    <Box id='edit-schedule'>
      <AppBar setOpen={setOpen} setAlertContent={setAlertContent}></AppBar>
      <ContentHolder name='GOALS'>
        <Goal id='goalOne'></Goal>
        <p></p>
        <Goal id='goalTwo'></Goal>
        <p></p>
        <Goal id='goalThree'></Goal>
      </ContentHolder>
      <ContentHolder name='NOTES'>
        <Note></Note>
      </ContentHolder>
      <ContentHolder name='TIMEBOX'>
        <TimeBox></TimeBox>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ScrollToTop></ScrollToTop>
        </Box>
      </ContentHolder>
    </Box>
  );
};

export default Content;
