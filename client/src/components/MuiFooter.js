import React from 'react';
import {
    // Container,
    Grid,
    Box,
    Button
 } from '@mui/material';
import  Link  from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import LinkTree from './LinkTree';

 const MuiFooter = () => {
    
    return (
    //    < footer>
            <Box>
                {/* <Container maxWidth="xl"> */}
                    {/* grid acting as container to hold the grid inside */}
                    <Grid container>
                        {/* grid item takes up whole viewport on xs screens (mobile) and 
                        will take up 1/3 of screen on small and up viewports */}
                        {/* signup for email blast */}
                        <Grid item xs={12} sm={4}>
                            <Box>
                               email blast
                            </Box>
                        </Grid>

                        {/* social  */}
                        <Grid item xs={12} sm={4}>

                            <Grid Container  sx={{ justifyContent:"space-around"}}>
                                <Grid item >
                                    <Button>
                                        <FacebookIcon  />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <InstagramIcon />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button >
                                        <TwitterIcon />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <GitHubIcon />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <Link to="">
                                            <LinkedInIcon /> 
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                       
                        {/* link tree */}
                        <Grid item xs={12} sm={4}>
                            <Box>
                               link tree
                            </Box>
                        </Grid>
                    
                    </Grid>

                {/* </Container> */}
            </Box>
    //    </footer>
    )
 }
 export default MuiFooter;