import React from 'react'
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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
        padining: 2,
        marginTop: 6,
        justifyContent: "space-around",
        alignItems: "space-around",
        justifyContent: "space-around",
        justifyItems: "space-around",
        backgroundColor: "transparent",
        color: theme.palette.white,
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
                        textAlign: 'center',
                        alignContent: "center",
                        alignItems: "center",
                        display: { xs: "block", md: "none" }

                    }}>
                    <Typography mt={2} sx={{ color: theme.palette.white }} > Join Our Mailing List</Typography>
                    <br />
                    <Divider variant="middle" sx={{ bgcolor: 'white', fontWeight: 500 }} />
                    <br />
                    <Container mb={2} p={0} >

                        <TextField sx={{ bgcolor: "white", color: theme.palette.white }} type="text" placeholder='jdoe@gmail.com'>
                            email
                        </TextField>
                        <Button
                            variant="contained"
                            sx={{
                                minHeight: '3.5rem',
                                color: theme.palette.white,
                                bgcolor: theme.palette.darkPurple
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
                        textAlign: 'center',
                        alignContent: "center",
                        alignItems: "center",
                        display: { xs: "none", md: "block" },
                        mt: 2,
                        color: theme.palette.white,
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
                        <Divider variant="middle" my={2} sx={{ bgcolor: 'white', fontWeight: 500 }} />
                        <br />
                        <TextField type="text" placeholder='JohnDoe@gmail.com' sx={{ bgcolor: "white" }}>
                            email
                        </TextField>
                        <Button
                            size='small'
                            variant="contained"
                            sx={{
                                minHeight: '3.5rem',
                                color: theme.palette.white,
                                bgcolor: theme.palette.darkPurple
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
                <Box sx={{ display: "block", alignContent: "center", mt: 2 }}>
                    <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
                        <Grid item >
                            <IconButton aria-label='facebook' >
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <FacebookIcon sx={{ color: theme.palette.white }} fontSize='large' />
                                </a>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label='instagram' >
                                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <InstagramIcon sx={{ color: theme.palette.white }} fontSize='large' />
                                </a>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label='twitter'>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <TwitterIcon sx={{ color: theme.palette.white }} fontSize='large' />
                                </a>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label='github' >
                                <a href="https://github.com" target="_blank" rel="noreferrer">
                                    <GitHubIcon sx={{ color: theme.palette.white }} fontSize='large' />
                                </a>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label='linked-in'>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                    <LinkedInIcon sx={{ color: theme.palette.white }} fontSize='large' />
                                </a>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>


            {/* Link Tree */}
            <Grid item xs={12} md={3} mb={2}>
                <Box sx={{ display: "block", alignContent: "center", mt: 2 }}>
                    <Stack >
                        <Button
                            component={Link}
                            to='/'
                            sx={{ color: theme.palette.white }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to='/about'
                            sx={{ color: theme.palette.white }}
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to='/directory'
                            sx={{ color: theme.palette.white }}
                        >
                            Directory
                        </Button>
                        <Button
                            component={Link}
                            to='/messages'
                            sx={{ color: theme.palette.white }}
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

