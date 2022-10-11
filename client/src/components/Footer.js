import React from 'react'
import {
    Grid, //Grid Version 1
    Stack,
    Container, 
    Box,
    Link, 
    styled,
    TextField,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const StyledFootBar = styled(Stack)({
        display: "flex",
        margin: 10,
        justifyContent: "space-around",
        alignItems: "center",
        justifyItems: "center",
        backgroundColor: "#f4f4f4",
    })

  return (
    <Box >
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
                   
                    <Grid item xs={12} sm={4}>
                        <FacebookIcon  />
                        <InstagramIcon />
                        <TwitterIcon />
                        <GitHubIcon />
                        <LinkedInIcon /> 
                    </Grid>

                    <Grid item xs={12} sm={4} 
                        sx={{ 
                            alignItems:'center', 
                            justifyItems:'center'
                        }}>
                        <Box>Link tree </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Home
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                               Directory
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Messages
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                               About Us 
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container> 
        </StyledFootBar>
     </Box>
  )
}

export default Footer
