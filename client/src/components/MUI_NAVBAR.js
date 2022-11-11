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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import { Link, NavLink } from "react-router-dom";
import { CssBaseline, useTheme, styled, InputBase, Stack, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { bgcolor } from '@mui/system';
// import { color } from '@mui/system';

// constants for menu/user navigation (left and right navigation on navbar)
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

  const handleSearchOpen = () => setSearchOpen(true);

  const handleSearchClose = () => setSearchOpen(false);

  //tap into global theme written in index.js within root directory for client
  const theme = useTheme();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 50,
    backgroundColor: 'rgb(63,255,128)',
    marginLeft: 50,
    marginRight: 50,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    }
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    color: 'black',
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    width: "100%",
    borderRadius: 50,
    align: 'center',
    textAlign: 'center',
    "& .MuiInputBase-input": {
      textAlign: 'center',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`
    }
  }
  ));

  return (

    // total container sticks to top of viewport via "sticky" utilizes anchor elements 
    <>
      <CssBaseline />
      <AppBar elevation={0} position="sticky"
        sx={{
          background: theme.palette.black,
          color: theme.palette.white,
        }} >
        <Toolbar disableGutters sx={{ background: 'transparent', color: theme.palette.white, justifyContent: "space-between", paddingX: 2 }}>

          {/* medium & up viewport size left side*/}
          <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>
            <NorthEastOutlinedIcon />
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
                color: theme.palette.white,
                textDecoration: 'none',
                fontSize: '20px'
              }}
            >
              Hanawilo-Edge
            </Typography>
          </Stack>


          {/* less than medium viewport leftside*/}
          <Stack direction="row" sx={{ display: { xs: 'flex', md: 'none' }, alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="large"
              component={Link}
              to="/"
              color="inherit">
              <NorthEastOutlinedIcon
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              />
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

              PaperProps={{
                style: {
                  background: 'black'
                }
              }}
            >

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ bgcolor: "black" }}>
                  <Typography textAlign="center">
                    <Button
                      key={page}
                      component={Link}
                      to={`/${page}`}
                      sx={{ bgcolor: "black", color: 'white', fontWeight: '500', display: 'block', }}
                    >
                      {page}
                    </Button>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
          {/* <Typography
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
            </Typography> */}

          {/* SEARCH COMPONENT */}
          <Search sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for courses, instructors..."
              inputProps={{ "aria-label": "search" }}
              sx={{ border: 1, textAlign: 'center' }}
            />
          </Search >


          {/* buttons for navigation medium and up viewports */}
          <Stack direction="row" sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: theme.palette.white, display: 'block' }}
              >
                <Link to={`/${page}`} style={{ textDecoration: "none", color: theme.palette.white }}>
                  {page}
                </Link>
              </Button>
            ))}
          </Stack>

          {/* avatar box - placeholder kitten image - how cute :) */}
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
                <Typography textAlign="center">
                  <Button
                    key={setting}
                    component={Link}
                    to={`/${setting}`}
                    sx={{ my: 1, color: 'black', fontWeight: '500', display: 'block' }}
                  >
                    {setting}
                  </Button>
                </Typography>
              </MenuItem>
            ))}
          </Menu>

        </Toolbar>
      </AppBar>
    </>
  );
};
export default MUI_NAVBAR;
