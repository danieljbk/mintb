import React, { useState } from 'react';
import './App.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import EditSchedule from './components/EditSchedule';
import MyAlert from './components/MyAlert';

function App() {
  const [alertContent, setAlertContent] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className='App'>
      <Box
        sx={{
          marginLeft: '25vw',
          marginRight: '25vw',
          paddingTop: '0vh',
          paddingBottom: '5vh',
        }}
      >
        <Paper elevation={3}>
          {alert ? (
            <MyAlert
              open={open}
              setOpen={setOpen}
              alertContent={alertContent}
            />
          ) : (
            <></>
          )}
          <EditSchedule
            setOpen={setOpen}
            setAlertContent={setAlertContent}
          ></EditSchedule>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
