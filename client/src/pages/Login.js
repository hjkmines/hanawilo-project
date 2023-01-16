import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Container, FormHelperText } from "@mui/material";
import { useTheme, styled, responsiveFontSizes } from '@mui/material/styles';
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/usersSlice";
import axios from 'axios';
import { useNavigate } from "react-router";
import { useState } from 'react';
import loginBackground from '../assets/loginBackground.svg';




function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="theme.palette.white"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



export default function Login() {
  const dispatch = useDispatch();
  let theme = useTheme();
  theme = responsiveFontSizes(theme);

  const navigate = useNavigate();
  const [error, setError] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    const user = {
      // email: data.get("email"),
      username: data.get('username'),
      password: data.get("password"),
    }
    console.log(user)
    //api call to server / db // 
    const res = await axios.post('http://localhost:5001/user/login', {
      ...user
    }).catch(setError("Incorrect username or password"))

    if (res.status == 200) {
      dispatch(setCurrentUser(user));
      navigate('/profile')
    }
  };

  const SubmitButton = styled(Button)({
    background: theme.palette.green,
    color: theme.palette.black,
    fontWeight: 900,
    textTransform: 'capitalized',
    borderRadius: 50,
    marginTop: 20,
    '&:hover': {
      backgroundColor: 'rgba(63,255,128,.8)'

    },
    '&:active': {
      backgroundColor: 'rgba(63,255,128,.8)'
    },
    '&:focus': {
      backgroundColor: 'rgba(63,255,128,.8)'
    },

  })

  return (
    <Box flex sx={{ background: `url(${loginBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', minHeight: { md: '100vh' } }}>
      <Box height="10%">
        <Navbar />
      </Box>
      <Container height="90%">
        <Box
          sx={{
            my: 20,
            mx: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 1,
            borderColor: "white",
            borderRadius: 8

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "white" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ color: theme.palette.white }} component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >

            {error && <Typography>{error}</Typography>}
            <TextField
              margin="normal"
              sx={{ input: { color: theme.palette.black }, background: theme.palette.white }}
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              helperText={error}
              error={error == true}
            />

            <TextField
              margin="normal"
              sx={{ input: { color: theme.palette.black }, background: theme.palette.white }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" sx={{
                color: theme.palette.white,
                '&.Mui-checked': {
                  color: theme.palette.white,
                }
              }} />}
              label="Remember me"
              sx={{ color: theme.palette.white }}
            />
            <SubmitButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </SubmitButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" underline="hover" variant="body2" sx ={{color: theme.palette.white}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" underline="hover" variant="body2" sx ={{color: theme.palette.white}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
