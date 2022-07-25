import React from 'react';

import InputBase from '@mui/material/InputBase';

const Note = () => {
  return (
    <InputBase
      placeholder='Start writing here...'
      rows={10}
      multiline
      fullWidth
    />
  );
};

export default Note;