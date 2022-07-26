import React, { useRef } from 'react';
import FlagImage from '../images/flag.png';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Goal = ({ index, goalsValue, setGoalsValue }) => {
  index = parseInt(index);

  const updateGoals = (e, index) => {
    const updatedGoals = [...goalsValue];
    updatedGoals[index] = e.target.value;
    setGoalsValue(updatedGoals);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <img src={FlagImage} className='div-image'></img>
      <TextField
        id={'goal-' + index}
        value={goalsValue[index]}
        onChange={(e) => updateGoals(e, index)}
        variant='standard'
        sx={{ marginLeft: '1vw' }}
        fullWidth
      />
    </Box>
  );
};

export default Goal;
