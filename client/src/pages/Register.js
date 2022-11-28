import React from 'react';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, useTheme, styled, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Stack, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import HElogo from "../assets/he-logo.svg";
import Image from 'mui-image';
import Navbar from "../components/Navbar"


const StyledTextField = styled(TextField)(({ theme }) => ({
    bgcolor: theme.palette.teal,
}))


const Register = () => {

 const theme = useTheme();

  return (
    <>
    <Navbar />
    <Container padding={10} marginY={2}  sx={{ display: { xs: 'none', md:"inline" }}}>
        <Image 
            src={HElogo} 
            height={250} 
            width="auto" 
            overflow="hidden" 
            fit="fill" 
            easing="ease-in-out"
            duration={5000}
           
        />
    </Container>
    <Container 
        sx={{
        bgcolor: theme.palette.lightGreen, 
        minHeight:"400px",
        width: "80%", 
        padding: "30px",
        marginY: "20px",
        display: "flex",
        }}
    >
        <Grid 
            container 
            component={"form"} 
            spacing={3} 
        >
            <Grid item xs={12}>
                <Box 
                border={2} 
                borderColor={theme.palette.white} 
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
                    sx={{ bgcolor: theme.palette.teal }}
                />
            </Grid>
            <Grid item xs={12} md={6} sx={{display:"flex", alignItems:"center", justifyContent:"center", color: theme.palette.black }}>
                    <FormControl>
                        <FormLabel sx={{display:"flex", justifyContent:"center"}} id="row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio size='small'/>} label="Female" />
                            <FormControlLabel value="male" control={<Radio size='small'/>} label="Male" />
                            <FormControlLabel value="non-binary" control={<Radio size='small'/>} label="Non-Binary" />
                            <FormControlLabel value="other" control={<Radio size='small'/>} label="Other" />
                        </RadioGroup>
                    </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={0} >
                    <Grid item xs={6} sx={{ display:"flex", alignItems:"center", justifyItems:"center"}}>
                        <Container sx={{ display:"flex", alignItems:"center", justifyItems:"center"}}>
                            <Button
                                variant="contained"
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

                    <Grid item xs={6}>
                        <Stack direction="row" spacing={0.5} sx={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
                            {/* <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center", justifyItems:"center", alignText:"center"}}> */}
                            <Typography fontWeight={500} fontSize={12}>
                                Already a member?
                            </Typography>
                            {/* </Box> */}
                            <Tooltip title="Already a member?">
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    size="large"
                                    component={Link}
                                    to="/login"
                                    // fullWidth
                                    sx={{
                                        bgcolor:theme.palette.medPurple,
                                        color: theme.palette.white
                                    }}
                                >
                                    Login
                                </Button>
                            </Tooltip>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid> 
        </Grid>
    </Container>
    </>
  )
}

export default Register