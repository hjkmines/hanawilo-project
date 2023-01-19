import React, { useEffect } from "react";
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
  Button,
  Stack,
  TextField,
  Typography,
  Tooltip,
  Input
} from "@mui/material";
import HElogo from "../assets/he-logo.svg";
import Image from "mui-image";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller, useController } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z, string, zodEnum } from "zod";


const StyledTextField = styled(TextField)(({ theme }) => ({
  bgcolor: theme.palette.teal,
  // component: Input,
}));

const ErrorField = styled(Typography)(({ theme }) => ({
    // bgcolor: "white",
    color: "red"
}))

const genders = [ "Male", "Female", "Non-Binary", "Other"];

const RegisterSchema = z.object({
  username: z.string()
    .min(1, "User Name is required").max(15, "Maximum is 15 characters"),
  password: z.string()
    .min(4, "minmum password length is 4"),
  firstName: z.string()
    .min(1,"first name is required")
    .max(15, "Maximum length is 15 characters"),
  lastName: z.string()
    .min(1, "last name is required")
    .max(15, "Maximum length is 15 characters"),
  email: z.string()
    .min(1,"email is required").email("please enter a valid email address"),
  gender: z.nativeEnum(genders, {
    errorMap:(issue, ctx) => {
      return {message: "please select your gender"};
    },
  })
})

const Register = () => {
  //use-hook-form register method
  const { 
    register, 
    handleSubmit,  
    control, 
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    resolver: zodResolver(RegisterSchema)
  });
  // const { field } = useController({ name: "gender", control});

  const theme = useTheme();
  const navigate = useNavigate();

  const sumbitForm = (data) => {
    console.log(data)
    console.log(errors)
    const user = {
          username: data.username,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          gender: data.gender,
        };
    axios
      .post("http://localhost:5001/user/register", { ...user })
      .then((res) => console.log(res));
      //await response from server -> if successful navigate to login page. If not successful than display errors / reason 
    navigate("/login")
  };
  // const handleFormSubmit = (e) => {
  //   // e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   const user = {
  //     username: data.get("User-Name"),
  //     password: data.get("Password"),
  //     firstName: data.get("First-Name"),
  //     lastName: data.get("Last-Name"),
  //     email: data.get("Email"),
  //     gender: data.get("row-radio-buttons-group"),
  //   };
  //   handleSubmit(user);
  //   axios
  //     .post("http://localhost:5001/user/register", { ...user })
  //     .then((user) => console.log(...user));

  //   navigate("/login");
  // };

  useEffect(() => {
    if (isSubmitSuccessful){
      reset();
    }
  }, [isSubmitSuccessful])
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
            {/* <Controller
              name="userName"
              control={control}
              placeholder="User-Name"
              render={({field: { ref, ...field } }) =>{
                <StyledTextField
                  variant="filled"
                  error={(errors.userName)}
                  helperText={errors.userName.message}
                  inputRef={ref}
                  {...register("userName")}
                />
              }}
            /> */}
            <StyledTextField
              // required
              fullWidth
              variant="filled"
              id="outlined-required"
              label="User-Name"
              placeholder="User Name"
              name="username"
              // type="text"
              // inputRef={register}
              {...register("username")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            {errors.username && (
              <ErrorField>{errors.username.message}</ErrorField>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              // required
              fullWidth
              variant="filled"
              id="outlined-password-input"
              label="password"
              placeholder="password"
              name="password"
              // inputRef={register}
              {...register("password")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            {errors.password && (
                  <ErrorField>{errors.password.message}</ErrorField>
                )}
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              // required
              fullWidth
              variant="filled"
              id="outlined-required"
              label="First-Name"
              placeholder="First Name"
              name="firstName"
              // inputRef={register}
              {...register("firstName")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            {errors.firstName && (
              <ErrorField>{errors.firstName.message}</ErrorField>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              // required
              fullWidth
              variant="filled"
              id="outlined-required"
              label="Last-Name"
              placeholder="Last Name"
              name="lastName"
              // inputRef={register}
              {...register("lastName")}
              sx={{ bgcolor: theme.palette.teal }}
            />
            <ErrorField>{errors.lastName?.message}</ErrorField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              // required
              fullWidth
              variant="filled"
              id="outlined-required"
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              // inputRef={register}
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
                  {/* <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center", justifyItems:"center", alignText:"center"}}> */}
                  <Typography fontWeight={500} fontSize={12} color="gray">
                    Already a member?
                  </Typography>
                  {/* </Box> */}
                  <Tooltip title="Already a member?">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      component={Link}
                      to="/login"
                      // fullWidth
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
