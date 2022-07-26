import React, { useState } from 'react';

import InputBase from '@mui/material/InputBase';

const Note = ({ notesValue, setNotesValue }) => {
  const updateNotesValue = (e) => {
    setNotesValue(e.target.value);
  };

  return (
    <InputBase
      id='note'
      value={notesValue}
      onChange={updateNotesValue}
      placeholder='Start writing here...'
      rows={10}
      multiline
      fullWidth
    />
  );
};

export default Note;
