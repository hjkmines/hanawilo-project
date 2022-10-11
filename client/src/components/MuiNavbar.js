import React from 'react'
import { useState } from 'react';
import { 
    AppBar, 
    Avatar, 
    Badge, 
    Box, 
    Drawer, 
    InputBase, 
    Menu, 
    MenuItem, 
    styled, 
    Toolbar, 
    Typography 
} from '@mui/material'
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: " 0 10px ",
    borderRadius: theme.shape.borderRadius,
    width: "35%",
}));

const Icons = styled(Box)(({ theme }) => ({
    // for less than small viewports do not display this block. Just the User Box block 
    display: "none",
    backgroundColor: "inherit",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    // if larger than small viewport (600px) than remove this display to show the icons box above
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));



const MuiNavbar = () => {
    const [open, SetOpen] = useState(false)
    
    return (

        <AppBar position='sticky' padding={1}>
            <StyledToolbar>
                {/* <Drawer  Component */}
                <Typography variant='h6' sx={{ display:{xs:'none', sm:'block' }}}>
                    Hanawilo Team Project
                </Typography>
                <NorthEastOutlinedIcon sx={{ display: {xs:"block", sm:"none"}}} />
                <Search > <InputBase placeholder="search..." /> </Search>
                <Icons> 
                    <Badge badgeContent={4} color="error" aria-label='show 4 new messages'>
                        <MailOutlinedIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error" aria-label='show 2 new notifications'>
                        <NotificationsOutlinedIcon />
                    </Badge>
                    <Avatar sx={{ width:30, height: 30}} 
                    src='https://placekitten.com/200/300'
                    onClick={e=>SetOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e=>SetOpen(true)}>
                    <Avatar sx={{ width:30, height: 30}} 
                        src='https://placekitten.com/200/300'
                    />
                    <Typography variant='span' >User Name</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={anchorEl}
                open={open}
                onClose={e=>SetOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
    }

export default MuiNavbar