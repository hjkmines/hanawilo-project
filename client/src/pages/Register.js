import React, { useState } from "react";
import {
  Box,
  Container,
  useTheme,
  styled,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Button,
  Stack,
  TextField,
  Typography,
  Tooltip,
  InputAdornment
} from "@mui/material";
import HElogo from "../assets/he-logo.svg";
import Image from "mui-image";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller, } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string, zodEnum } from "zod";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
//styled input components
const StyledTextField = styled(TextField)(({ theme }) => ({
  bgcolor: theme.palette.teal,
}));
//styled error components
const ErrorField = styled(Typography)(({ theme }) => ({
    color: "red"
}))
//array to check against gender validation
const genders = [ "Male", "Female", "Non-Binary", "Other"];
//zod schema to handle form validation
const RegisterSchema = z.object({
  username: z.string()
    .min(1, "User Name is required")
    .max(15, "Maximum is 15 characters"),
  password: z.string()
    .min(4, "minmum password length is 4"),
  confirmPassword: z.string(),
  firstName: z.string()
    .min(1,"first name is required")
    .max(15, "Maximum length is 15 characters"),
  lastName: z.string()
    .min(1, "last name is required")
    .max(15, "Maximum length is 15 characters"),
  email: z.string()
    .min(1,"email is required")
    .email("please enter a valid email address"),
  gender: z.nativeEnum(genders, {
    errorMap:(issue, ctx) => {
      return {message: "please select your gender"};
    },
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "passwords do not match",
  path: ["confirmPassword"]
})

const Register = () => {
  //use-hook-form register method
  const { 
    register, 
    handleSubmit,   
    getValues,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(RegisterSchema)
  });

  const theme = useTheme();
  const navigate = useNavigate();
  //constant to see if form is valid and can redirect user to login page
  let canNavigate = true;

  //use effect to toggle visiblity of password text
  const[pwVisible, setPWVisible] = useState(false)
  const handleClickShowPassword = () => (
      setPWVisible(!pwVisible)
  )

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const sumbitForm = async () => {
    const user = {
      username: getValues("username"),
      password: getValues("password"),
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      email: getValues("email"),
      gender: getValues("gender"),
    };
    console.log(user)
     await axios.post("http://localhost:5001/user/register", { ...user })
    .then((res) => console.log(res))  
    .catch(err => {
      alert("User Credentials already in Use")
      canNavigate = false;
    })
    if (canNavigate)navigate("/login")
  };

  return (
    <>
      <Navbar />
      <Container padding={10} sx={{ display: { xs: "none", md: "inline" } }}>
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
          minHeight: "400px",
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
          onSubmit={handleSubmit(sumbitForm)}
        >
          <Grid item xs={12}>
            <Box border={2} borderColor={theme.palette.white} width="100%">
              <Typography
                display="flex"
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
              fullWidth
              variant="filled"
              label="User Name"
              placeholder="User Name"
              name="username"
              autoComplete="username"
              {...register("username")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            {errors.username && (
              <ErrorField>{errors.username.message}</ErrorField>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledTextField
            fullWidth
            variant="filled"
            label="Password"
            placeholder="Password"
            type={pwVisible ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            {...register("password")}
            sx={{ bgcolor: theme.palette.teal }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {pwVisible ? <VisibilityOffIcon /> : <VisibilityIcon /> }
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
         {errors.password && (
                  <ErrorField>{errors.password.message}</ErrorField>
                )}
          </Grid>

          <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            variant="filled"
            label="Confirm Password"
            placeholder="Confirm Password"
            type={pwVisible ? "text" : "password"}
            name="confirmPassword"
            autoComplete="current-password"
            sx={{ bgcolor: theme.palette.teal }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {pwVisible ? <VisibilityOffIcon /> : <VisibilityIcon /> }
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
            {errors.confirmPassword && (
                  <ErrorField>{errors.confirmPassword.message}</ErrorField>
                )}
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              variant="filled"
              label="First-Name"
              placeholder="First Name"
              name="firstName"
              {...register("firstName")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            {errors.firstName && (
              <ErrorField>{errors.firstName.message}</ErrorField>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              variant="filled"
              label="Last-Name"
              placeholder="Last Name"
              name="lastName"
              {...register("lastName")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            <ErrorField>{errors.lastName?.message}</ErrorField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              variant="filled"
              autoComplete="false"
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            {errors.email && (
              <ErrorField>{errors.email.message}</ErrorField>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              color: theme.palette.black,
            }}
          >
            <FormControl >
              <FormLabel
                sx={{ display: "flex", justifyContent: "center" }}
                id="row-radio-buttons-group-label"
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="row-radio-buttons-group-label"
                name="row-radio-buttons-group"
               
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio size="small" />}
                  label="Female"
                  {...register("gender")}
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio size="small" />}
                  label="Male"
                  {...register("gender")}
                />
                <FormControlLabel
                  value="Non-Binary"
                  control={<Radio size="small" />}
                  label="Non-Binary"
                  {...register("gender")}
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio size="small" />}
                  label="Other"
                  {...register("gender")}
                />
              </RadioGroup>
              {errors.gender && (
              <ErrorField>{errors.gender.message}</ErrorField>
            )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                <Container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      bgcolor: theme.palette.darkPurple,
                    }}
                    type="submit"
                  >
                    Register
                  </Button>
                  {errors.sumbitForm && (<ErrorField >{errors.submitForm.message} </ErrorField>)}
                </Container>
              </Grid>

              <Grid item xs={6}>
                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography fontWeight={500} fontSize={12} color="gray">
                    Already a member?
                  </Typography>
                  <Tooltip title="Already a member?">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      component={Link}
                      to="/login"
                      sx={{
                        bgcolor: theme.palette.medPurple,
                        color: theme.palette.white,
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
  );
};
export default Register;