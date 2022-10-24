import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import { Link, NavLink } from "react-router-dom";

// constants for menu/tooltip navigation 
const pages = ['Directory', 'About', 'Messages',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MUI_NAVBAR = () => {
  // constants for state -> navigation tooltips on left and right side of navbar
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    // total container sticks to top of viewport via "sticky" utilizes anchor elements 
    <AppBar position="sticky" >
      <Box sx={{
        padding:0,
        margin:0,
        width: '100%',
        maxWidth: 'xl',
      }} >
        <Toolbar disableGutters sx={{ maxWidth:'xl'}}>

          {/* medium & up viewport size */}
          <NorthEastOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mx: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'30px'
            }}
          >
            Hanawilo-Edge
          </Typography>

            {/* less than medium viewport */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mr:'auto' }}>
             
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                     <Button 
                      key={page}
                      component={Link}
                      to={`/${page}`}
                      sx={{ my: 1, color: 'black', fontWeight:'500', display: 'block'}}
                      >
                        {page}
                     </Button>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NorthEastOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              fontSize: '17px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hanawilo-Edge
          </Typography>
        
        {/* buttons for navigation medium and up viewports */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`/${page}`} style={{textDecoration: "none", color: "white"}}> 
                    {page} 
                </Link>
              </Button>
            ))}
          </Box>

              {/* avatar box - placeholder kitten image - how cute :) */}
          <Box sx={{ flexGrow: 0, mr: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Place Kitten" src="http://placekitten.com/g/200/300" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default MUI_NAVBAR;
