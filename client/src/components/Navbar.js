import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/he-logo.svg';
import Image from 'mui-image';
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../features/usersSlice';

// constants for menu/user navigation (left and right navigation on navbar)
const pages = ['Directory', 'About', 'Messages',];

const settings = ['Profile', 'Register', 'Logout', 'Login'];


const Navbar = () => {
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

    const currentUser = useSelector(selectCurrentUser);
    // console.log(currentUser)

    //tap into global theme written in index.js within root directory for client
    const theme = useTheme();

    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: 50,
        backgroundColor: theme.palette.green,
        marginLeft: 5,
        marginRight: 5,
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
            <AppBar elevation={0} position="static"
                sx={{
                    background: 'transparent',
                    color: theme.palette.white,
                }} >
                <Toolbar disableGutters sx={{ background: 'transparent', color: theme.palette.white }}>

                    <Grid container spacing={0} alignItems={'center'} justifyContent={"space-between"} paddingTop={2} sx={{ paddingX: { xs: 2, md: 6 } }} >
                        <Grid item xs={1} sm={3} md={4} lg={3} sx={{ alignItems: 'inherit' }}>
                            <Box display='flex' alignItems={'inherit'} >
                                <Icon sx={{ height: '3rem', width: "3rem", borderColor: 1 }}
                                    component={Link}
                                    to="/" >
                                    <Image src={logo} />
                                </Icon>

                                <Typography
                                    variant="h6"
                                    component="a"
                                    href="/"
                                    sx={{
                                        ml: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontWeight: 900,
                                        color: theme.palette.white,
                                        textDecoration: 'none',
                                        fontSize: '1.8 rem'
                                    }}
                                >
                                    HanawiloEdge
                                </Typography>


                            </Box>

                        </Grid>

                        <Grid item xs={5} md sx={{ alignContent: 'center' }}>


                            {/* SEARCH COMPONENT */}
                            <Search >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search for courses, instructors..."
                                    inputProps={{ "aria-label": "search" }}
                                    sx={{ border: 1, textAlign: 'center', }}
                                />
                            </Search >
                        </Grid>


                        <Grid item xs={3} md={4} lg={3} >
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: theme.palette.white, display: { xs: 'none', md: "block" } }}
                                    >
                                        <Link to={`/${page}`} style={{ textDecoration: "none", color: theme.palette.white }}>
                                            {page}
                                        </Link>
                                    </Button>
                                ))}

                                {/* avatar box - placeholder kitten image - how cute :) */}

{/* tooltip => pull userName */}
                                <Tooltip title={currentUser ? currentUser.email : "not logged in"}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 0 }}>
                                        <Avatar alt="Place Kitten" src="http://placekitten.com/g/200/300" sx={{ border: 1, borderColor: 'white' }} />
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

                                    PaperProps={{
                                        style: {
                                            background: 'black'
                                        }
                                    }}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">
                                                <Button
                                                    key={setting}
                                                    component={Link}
                                                    to={`/${setting}`}
                                                    sx={{ my: 1, color: 'white', fontWeight: '500', display: 'block' }}
                                                >
                                                    {setting}
                                                </Button>
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                                <IconButton
                                    size="large"
                                    aria-label="navigaton menu"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color='inherit'
                                    sx={{ display: { xs: "block", md: 'none' }, position: "relative" }}
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
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Navbar;
