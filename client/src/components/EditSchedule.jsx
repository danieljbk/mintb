import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import ContentHolder from './ContentHolder';
import Goal from './Goal';
import Note from './Note';
import ScrollToTop from './ScrollToTop';
import TimeBox from './TimeBox';
import AppBar from './AppBar';

import Box from '@mui/material/Box';

const Content = ({ setOpen, setAlertContent }) => {
  const serverUrl = 'https://mintb.herokuapp.com/plan/';
  // const serverUrl = 'http://localhost:3001/plan/';

  // EditSchedule -> AppBar -> DateSelector
  const [dateValue, setDateValue] = useState(new Date());

  const [goalsValue, setGoalsValue] = useState([]);
  const [notesValue, setNotesValue] = useState('');
  const [timeBox, setTimeBox] = useState([]);

  // fetch plan info every time dateValue changes
  useEffect(() => {
    axios
      .get(serverUrl, {
        params: {
          date:
            dateValue.getFullYear() +
            '-' +
            (dateValue.getMonth() + 1) +
            '-' +
            dateValue.getDate(),
        },
      })
      .then((response) => {
        const plan = response.data.content;
        setGoalsValue(plan.goals);
        setNotesValue(plan.notes);
        setTimeBox(plan.timeBox);
        setOpen(false);
      });
  }, [dateValue]);

  return (
    <Box id='edit-schedule'>
      <AppBar
        setOpen={setOpen}
        setAlertContent={setAlertContent}
        dateValue={dateValue}
        setDateValue={setDateValue}
      ></AppBar>
      <ContentHolder name='GOALS'>
        <Goal
          index='0'
          goalsValue={goalsValue}
          setGoalsValue={setGoalsValue}
        ></Goal>
        <p></p>
        <Goal
          index='1'
          goalsValue={goalsValue}
          setGoalsValue={setGoalsValue}
        ></Goal>
        <p></p>
        <Goal
          index='2'
          goalsValue={goalsValue}
          setGoalsValue={setGoalsValue}
        ></Goal>
      </ContentHolder>
      <ContentHolder name='NOTES'>
        <Note notesValue={notesValue} setNotesValue={setNotesValue}></Note>
      </ContentHolder>
      <ContentHolder name='TIMEBOX'>
        <TimeBox timeBox={timeBox} setTimeBox={setTimeBox}></TimeBox>
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
