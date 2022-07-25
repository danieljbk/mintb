import React from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';

const MyAlert = ({ open, setOpen, alertContent }) => {
  return (
    <Box>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          {alertContent}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default MyAlert;
