import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
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
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import HElogo from "../assets/he-logo.svg";
import Image from "mui-image";
import Navbar from "../components/Navbar";
import axios from "axios";

const StyledTextField = styled(TextField)(({ theme }) => ({
  bgcolor: theme.palette.teal,
}));

const Register = () => {
  const theme = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = {
      username: data.get("User-Name"),
      password: data.get("Password"),
      firstName: data.get("First-Name"),
      lastName: data.get("Last-Name"),
      email: data.get("Email"),
      gender: data.get("row-radio-buttons-group"),
    };
    axios.post("http://localhost:5001/user/register", {
      ...user,
    });
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
        <Grid container component={"form"} spacing={3} onSubmit={handleSubmit}>
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
              required
              fullWidth
              variant="filled"
              id="outlined-required"
              label="User-Name"
              placeholder="User Name"
              name="User-Name"
              sx={{ bgcolor: theme.palette.teal }}
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
              name="Password"
              sx={{ bgcolor: theme.palette.teal }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              required
              fullWidth
              variant="filled"
              id="outlined-required"
              label="First-Name"
              placeholder="First Name"
              name="First-Name"
              sx={{ bgcolor: theme.palette.teal }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              required
              fullWidth
              variant="filled"
              id="outlined-required"
              label="Last-Name"
              placeholder="Last Name"
              name="Last-Name"
              sx={{ bgcolor: theme.palette.teal }}
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
              name="Email"
              sx={{ bgcolor: theme.palette.teal }}
            />
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
            <FormControl>
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
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio size="small" />}
                  label="Male"
                />
                <FormControlLabel
                  value="Non-Binary"
                  control={<Radio size="small" />}
                  label="Non-Binary"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio size="small" />}
                  label="Other"
                />
              </RadioGroup>
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
                    Submit
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
                  <Typography fontWeight={500} fontSize={12}>
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
