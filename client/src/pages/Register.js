import React from 'react';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, useTheme, styled, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Stack, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import HElogo from "../assets/he-logo.png";
import Image from 'mui-image';
import Navbar from "../components/Navbar"


const StyledTextField = styled(TextField)(({ theme }) => ({
    bgcolor: theme.palette.white,
}))


const Register = () => {

 const theme = useTheme();

  return (
    <>
    <Navbar />
    <Container 
        sx={{
        bgcolor: theme.palette.lightGreen, 
        minHeight:"400px",
        width: "80%", 
        padding: "30px",
        marginY: "20px",
        // display: "flex",
        border:2,
        borderColor:"magenta"
        }}
    >
        <Grid 
            container 
            component={"form"} 
            spacing={3} 
            border={2} 
            borderColor="magenta"
            // display="flex"
            // alignItems="center"
            // justifyContent="center"
        >
            <Grid item xs={12}>
                <Box 
                border={2} 
                borderColor={theme.palette.white} 
                // justifyContent="center"
                width="100%"
                >
                    <Typography  
                        display= "flex" 
                        justifyContent="center" 
                        color="white" 
                        fontWeight="600" 
                        fontSize={28}
                        bgcolor={theme.palette.darkPurple}
                    >
                        Register 
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledTextField
                    required
                    fullWidth
                    variant="filled"
                    id="outlined-required"
                    label="User-Name"
                    placeholder="User Name"
                    sx={{ bgcolor: theme.palette.teal}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledTextField
                    required
                    fullWidth
                    variant="filled"
                    id="outlined-password-input"
                    label="Password"
                    placeholder="password"
                    sx={{ bgcolor: theme.palette.teal}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledTextField
                    required
                    fullWidth
                    variant="filled"
                    id="outlined-required"
                    label="First Name"
                    placeholder="First Name"
                    sx={{ bgcolor: theme.palette.teal}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledTextField
                    required
                    fullWidth
                    variant="filled"
                    id="outlined-required"
                    label="Last Name"
                    placeholder="Last Name"
                    sx={{ bgcolor: theme.palette.teal}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledTextField
                    required
                    fullWidth
                    variant="filled"
                    id="outlined-required"
                    label="Email"
                    type="email"
                    sx={{ bgcolor: theme.palette.teal}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                {/* <Box sx={{ 
                    bgcolor: theme.palette.teal, 
                    display: "flex",
                    justifyContent:"center", 
                    alignItems:"center",
                    height: "56px",
                    border:2,
                    borderColor:"magenta"
                    
                    }}
                > */}
                    <FormControl>
                        <FormLabel  id="row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio size='small'/>} label="Female" />
                            <FormControlLabel value="male" control={<Radio size='small'/>} label="Male" />
                            <FormControlLabel value="other" control={<Radio size='small'/>} label="Other" />
                        </RadioGroup>
                    </FormControl>
                {/* </Box> */}
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={0} border={2} borderColor="magenta">
                    <Grid item xs={6}>
                        <Container>
                            <Button
                                variant='contained'
                                size='large'
                                fullWidth
                                sx={{
                                    bgcolor:theme.palette.darkPurple
                                }}
                                // onClick={handleSubmit}
                            >
                                Submit
                            </Button>    
                        </Container>
                    </Grid>
                    <Grid item xs={6} border={2} borderColor="magenta">
                        <Container>
                            <Box>
                                <Typography>
                                    Already a member?
                                </Typography>
                            </Box>
                            <Tooltip title="Already a member?">
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    size="large"
                                    component={Link}
                                    to="/login"
                                    // fullWidth
                                    sx={{
                                        bgcolor:theme.palette.lightPurple,
                                        color: theme.palette.white
                                    }}
                                >
                                    Login
                                </Button>
                            </Tooltip>
                        </Container>
                    </Grid>
                </Grid>
            </Grid> 
        </Grid>
    </Container>
    </>
  )
}

export default Register