import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styled from '@emotion/styled';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import { BrowserRouter, Link } from 'react-router-dom';

const drawerWidth = 240;

const LeftDrawer: React.FC = () => {
  const BoxLogo = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2em 0em',
    gap: '0.5em'
  }))

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#2E2E48', boxShadow: 10 },
          }}
        >
          <BoxLogo>
            <GridViewOutlinedIcon sx={{ color: '#6366F1', fontSize: '40px' }} />
            <Typography variant="h5" color='white'>SmartGrid</Typography>
          </BoxLogo>
          <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {['Overview', 'Devices', 'Schedules'].map((text, index) => (
                <Link key={index} to={`/${text.toLowerCase()}`}>
                  <ListItem key={text} disablePadding >
                    <ListItemButton>
                      <ListItemIcon sx={{ color: 'white' }}>
                        {index === 0 ? <LineAxisOutlinedIcon /> : null}
                        {index === 1 ? <DevicesOutlinedIcon /> : null}
                        {index === 2 ? <RestoreOutlinedIcon /> : null}
                        {/* {index === 3 ? <EventNoteOutlinedIcon /> : null} */}
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ color: 'white' }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer >
      </Box >
  );
}

export default LeftDrawer;