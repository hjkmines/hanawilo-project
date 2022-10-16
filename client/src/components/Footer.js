import React from 'react'
import {
    Grid, //Grid Version 1
    Stack,
    Container, 
    IconButton,
    Button,
    Box,
    // Link, //try using link from react-router-dom
    styled,
    TextField,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LinkTree from './LinkTree';

const Footer = () => {

    // const StyledFootBar = styled(Stack)({
    //     display: "flex",
    //     margin: 2,
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     justifyItems: "center",
    //     backgroundColor: "#f4f4f4",
    //     padding: 2,
    //     direction: "row",
    // })

  return (
    <Container sx={{ backgroundColor:"#f4f4f4"}} p={2}>
        {/* small and up viewport */}
        <Stack 
            direction="row" 
            spacing ={2} 
            alignItems= "center"
            justifyContent="space-between"
            display={{ xs:"none", sm:"flex"}}
        >
            <Box  > 
                <Typography textAlign={'center'} alignContent={"center"} mt={2} > Join Our Mailing List</Typography>
                <br/>
                <Stack direction={'row'} mb={2}> 
                    <TextField type="text" placeholder='johndoe@gmail.com'>email </TextField>
                    <Button variant="outlined" 
                    onClick={e => {

                    } }> Submit</Button>
                </Stack>
            </Box>

            <Box>
                <Grid container  sx={{ justifyContent:"center"}}>
                    <Grid item >
                        <IconButton>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FacebookIcon  />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <InstagramIcon />
                            </a>
                        </IconButton>
                        <IconButton >
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <TwitterIcon />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://github.com" target="_blank" rel="noreferrer">
                                <GitHubIcon />
                            </a>
                        </IconButton>
                        <IconButton>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <LinkedInIcon /> 
                            </a>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
                
            <Stack>
                <Link to="/">Home </Link>
                <Link to="/about">About</Link>
                <Link to="/directory">Directory </Link>
            </Stack>
        </Stack>

        {/* below small viewport */}
        <Stack 
            display={{ xs:"flex", sm:"none"}} 
            alignItems="center" 
            p={2} 
            mb={2} 
        >
            <Box  > 
                <Typography textAlign={'center'} alignContent={"center"}  > Join Our Mailing List</Typography>
                <br/>
                <Stack direction={'row'} mb={2}> 
                    <TextField type="text" placeholder='johndoe@gmail.com'>email </TextField>
                    <Button variant="outlined" 
                    onClick={e => {

                    } }> Submit</Button>
                </Stack>
            </Box>

            <Grid container  sx={{ justifyContent:"center"}} mb={2}>
                <Grid item >
                    <IconButton>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FacebookIcon  />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <InstagramIcon />
                        </a>
                    </IconButton>
                    <IconButton >
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <TwitterIcon />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <LinkedInIcon /> 
                        </a>
                    </IconButton>
                </Grid>
            </Grid>

            <Stack>
                <Link to="/">Home </Link>
                <Link to="/about">About</Link>
                <Link to="/directory">Directory </Link>
            </Stack>
        </Stack>

    </Container>
  )
}


export default Footer
