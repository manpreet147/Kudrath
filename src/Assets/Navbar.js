import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ onLoginClick }) {
  const navigate = useNavigate();

  console.log(":::", onLoginClick)
  const handleLogin = () => {
    onLoginClick();
    navigate('/login')
  }
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        {/* Logo in the center */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#84c441',
          }}
        >
          Kudrath
        </Typography>

        {/* Navigation links on the right */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}
          >
            Contact
          </Button>
          <Button
            onClick={handleLogin}
            // component={Link}
            // to="/login"
            sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
