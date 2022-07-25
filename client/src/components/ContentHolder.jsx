import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ContentHolder = ({ name, children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List disablePadding>
      <Box borderTop={1} borderBottom={open ? 1 : 0}>
        <ListItemButton
          onClick={handleClick}
          sx={{ paddingLeft: '1.5vw', paddingRight: '1.5vw' }}
        >
          <ListItemText
            primary={name}
            sx={{
              textAlign: 'center',
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Box>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List
          component='div'
          sx={
            name === 'TIMEBOX'
              ? { padding: 0 }
              : {
                  paddingLeft: '1.5vw',
                  paddingRight: '1.5vw',
                  paddingTop: '2vh',
                  paddingBottom: '2vh',
                }
          }
        >
          {React.Children.map(children, (child) => {
            return child;
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default ContentHolder;
