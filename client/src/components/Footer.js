import React from 'react'
import {
    Grid, //Grid Version 1 -> version 2 is still unstable :(
    Stack,
    Container, 
    IconButton,
    Button,
    Box,
    styled,
    TextField,
    Typography,
    Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    const StyledFooterContainer = styled(Grid)({
        display: "flex",
        margin: 2,
        justifyContent: "space-around",
        alignItems: "space-around",
        justifyContent: "space-around",
        justifyItems: "space-around",
        backgroundColor: "transparent",
        color: theme.palette.text.main,
        padding: 3,
        minWidth: '100%',
        spacing: 2
    })

  return (
    // parent container with above styling
    <StyledFooterContainer container  >
       {/* grid to dynamically render footer components */}
        <Grid item xs={12} md={3} mb={2}>
            {/* xs -> md viewport (mobile friendly) */}
            <Box  
                sx={{
                    textAlign:'center', 
                    alignContent:"center", 
                    alignItems:"center",
                    display: { xs:"block", md:"none"}
                     
            }}> 
                <Typography mt={2} sx={{ color: theme.palette.text.main}} > Join Our Mailing List</Typography>
                <br/>
                <Divider variant="middle" sx={{bgcolor: 'white', fontWeight:500 }} />
                <br/>
                <Container mb={2} p={0} > 
                    
                        <TextField sx={{ color:theme.palette.text.main}} type="text" placeholder='jdoe@gmail.com'>
                            email 
                        </TextField>
                        <Button 
                            variant="contained"
                            sx={{
                                minHeight:'3.5rem',
                                color:theme.palette.text.main,
                                bgcolor:theme.palette.other.main
                            }} 
                        // onClick={e => {

                        // } }
                        > 
                            Submit
                        </Button>
                    
                </Container>
            </Box>

            {/* med + viewport */}
            <Box  
                sx={{
                    textAlign:'center', 
                    alignContent:"center", 
                    alignItems:"center",
                    display: { xs:"none", md:"block"},
                    mt: 2,
                    color: theme.palette.text.main,
            }}> 
               <Stack>
                    <Typography 
                        textAlign={'center'} 
                        justifyContent='center' 
                        alignItems='center'
                    > 
                        Join Our Mailing List
                    </Typography>
                    <br />
                    <Divider variant="middle" my={2} sx={{bgcolor: 'white', fontWeight:500}}/>
                    <br />
                    <TextField type="text" placeholder='JohnDoe@gmail.com'>
                        email 
                    </TextField>
                    <Button 
                        size='small'
                        variant="contained"
                        sx={{
                            minHeight:'3.5rem',
                            color:theme.palette.text.main,
                            bgcolor:theme.palette.other.main
                        }} 
                    // onClick={e => {
                    // will eventually handle email subscription
                    // } }
                    > 
                        Submit
                    </Button>
                </Stack>
            </Box>
        </Grid>
        
        {/* social links */}
        <Grid item xs={12} md={4} mt={5}>
            <Box sx={{ display: "block", alignContent:"center", mt:2 }}>
                <Grid container  sx={{ alignItems:"center", justifyContent:"center"}}>
                    <Grid item >
                        <IconButton aria-label='facebook' >
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FacebookIcon  sx={{color:theme.palette.text.main}} fontSize='large'/>
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label='instagram' >
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <InstagramIcon sx={{color:theme.palette.text.main}} fontSize='large' />
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label='twitter'>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <TwitterIcon sx={{color:theme.palette.text.main}} fontSize='large' />
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label='github' >
                            <a href="https://github.com" target="_blank" rel="noreferrer">
                                <GitHubIcon sx={{color:theme.palette.text.main}} fontSize='large' />
                            </a>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label='linked-in'>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <LinkedInIcon sx={{color:theme.palette.text.main}} fontSize='large' /> 
                            </a>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
      
        
        {/* Link Tree */}
        <Grid item xs={12} md={3} mb={2}>
            <Box sx={{display:"block", alignContent:"center", mt:2}}>
                <Stack >
                    <Button
                        component = {Link}
                        to='/'
                        sx={{color:theme.palette.text.main}}
                        >
                            Home
                    </Button>
                    <Button
                        component = {Link}
                        to='/about'
                        sx={{color:theme.palette.text.main}}
                        >
                            About
                    </Button>
                    <Button
                        component = {Link}
                        to='/directory'
                        sx={{color:theme.palette.text.main}}
                        >
                            Directory
                    </Button>
                    <Button
                        component = {Link}
                        to='/messages'
                        sx={{color:theme.palette.text.main}}
                        >
                            Messages
                    </Button>
                </Stack>
            </Box>
        </Grid>
    </StyledFooterContainer> 
  )
}


export default Footer;

