import React from 'react';
import Hour from './Hour';
import clockImage from '../images/clock.png';
import portfolioImage from '../images/portfolio.png';

import Box from '@mui/material/Box';

const TimeBox = () => {
  const timeBoxes = [];

  for (let time = 5; time <= 11; time++) {
    timeBoxes.push(<Hour time={time} type='am'></Hour>);
  }
  for (let time = 0; time <= 12; time++) {
    timeBoxes.push(<Hour time={time === 0 ? 12 : time} type='pm'></Hour>);
  }

  return (
    <div>
      {/* <Box sx={{ display: 'flex' }} borderBottom={1}>
        <Box
          sx={{
            width: '5vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          borderRight={1}
        >
          <img src={clockImage} className='div-image'></img>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={portfolioImage} className='div-image'></img>
        </Box>
      </Box> */}
      {timeBoxes}
    </div>
  );
};

export default TimeBox;
