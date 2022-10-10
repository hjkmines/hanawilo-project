import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box>
        <Stack direction="row" spacing={2}>
            <Container > 
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box> Help</Box>
                        <Box > 
                            <Link href='/' color='inherit'>
                            Contact
                            </Link>
                        </Box>
                        <Box > 
                            <Link href='/' color='inherit'>
                                Support
                            </Link>
                        </Box> 
                        <Box > 
                            <Link href='/' color='inherit'>
                                Privacy
                            </Link>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}> Account</Box>
                        <Box > 
                            <Link href='/' color='inherit'>
                                Login
                            </Link>
                        </Box>
                        <Box > 
                            <Link href='/' color='inherit'>
                                Register
                            </Link>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}> Messages </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container> 
        </Stack>
    </Box>
  )
}

export default Footer
