import React from 'react'
import {
    Grid, //Grid Version 1
    Stack,
    Container, 
    Button,
    Box,
    // Link, //try using link from react-router-dom
    styled,
    TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LinkTree from './LinkTree';

const Footer = () => {

    const StyledFootBar = styled(Stack)({
        display: "flex",
        margin: 10,
        justifyContent: "space-between",
        alignItems: "center",
        justifyItems: "center",
        backgroundColor: "#f4f4f4",
        padding: 2
    })

  return (
    // <Box >
        <StyledFootBar direction="row" >
            <Container > 
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Box> Join Our Mailing List</Box>
                        <br/>
                        <Box > 
                            <TextField placeholder='johndoe@gmail.com'>email </TextField>
                        </Box>
                    </Grid>
                   
                    <Grid container  sx={{ justifyContent:"center"}}>
                        <Grid item >
                            <Button>
                                <FacebookIcon  />
                            </Button>
                            <Button>
                                <InstagramIcon />
                            </Button>
                            <Button >
                                <TwitterIcon />
                            </Button>
                            <Button>
                                <GitHubIcon />
                            </Button>
                            <Button>
                                <LinkedInIcon /> 
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <Box>
                        Link Tree
                        </Box>
                    </Grid>
                </Grid>
            </Container> 
        </StyledFootBar>
    //  </Box>
  )
}

export default Footer
