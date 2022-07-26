import React from 'react';
import Hour from './Hour';
import clockImage from '../images/clock.png';
import portfolioImage from '../images/portfolio.png';

import Box from '@mui/material/Box';

const TimeBox = ({ timeBox, setTimeBox }) => {
  const updateTimeBox = (e, index) => {
    const updatedTimeBox = [...timeBox];
    updatedTimeBox[index] = e.target.value;
    setTimeBox(updatedTimeBox);
  };
  return (
    <div>
      <Box sx={{ display: 'flex' }} borderBottom={1}>
        <Box
          sx={{
            minWidth: '5vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '1vh',
            paddingBottom: '1vh',
          }}
          borderRight={1}
        >
          <img src={clockImage} className='div-image'></img>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={portfolioImage} className='div-image'></img>
        </Box>
      </Box>
      <Hour
        onChange={(e) => updateTimeBox(e, 0)}
        value={timeBox[0]}
        time='5'
        type='am'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 1)}
        value={timeBox[1]}
        time='6'
        type='am'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 2)}
        value={timeBox[2]}
        time='7'
        type='am'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 3)}
        value={timeBox[3]}
        time='8'
        type='am'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 4)}
        value={timeBox[4]}
        time='9'
        type='am'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 5)}
        value={timeBox[5]}
        time='10'
        type='am'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 6)}
        value={timeBox[6]}
        time='11'
        type='am'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 7)}
        value={timeBox[7]}
        time='12'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 8)}
        value={timeBox[8]}
        time='1'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 9)}
        value={timeBox[9]}
        time='2'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 10)}
        value={timeBox[10]}
        time='3'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 11)}
        value={timeBox[11]}
        time='4'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 12)}
        value={timeBox[12]}
        time='5'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 13)}
        value={timeBox[13]}
        time='6'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 14)}
        value={timeBox[14]}
        time='7'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 15)}
        value={timeBox[15]}
        time='8'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 16)}
        value={timeBox[16]}
        time='9'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 17)}
        value={timeBox[17]}
        time='10'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 18)}
        value={timeBox[18]}
        time='11'
        type='pm'
      ></Hour>
      <Hour
        onChange={(e) => updateTimeBox(e, 19)}
        value={timeBox[19]}
        time='12'
        type='am'
      ></Hour>
    </div>
  );
};

export default TimeBox;
