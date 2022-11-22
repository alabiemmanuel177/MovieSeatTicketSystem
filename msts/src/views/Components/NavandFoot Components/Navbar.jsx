import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import '../styles.css'
import { Link } from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id='Navbar' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BU CINEMA
          </Typography>
          <Link to="/" ><Button className='NavBtn'>Home</Button>
          </Link>

          <Link to='/login'><Button className='NavBtn' >Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
