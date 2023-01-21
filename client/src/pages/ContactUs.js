import React, { useRef } from 'react'
import Navbar from "../components/Navbar"
import TextField from "@mui/material/TextField";
import { Container, Grid, useTheme, Button } from '@mui/material';




const ContactUs = () => {


  //import theme form theme.js
  const theme = useTheme();

  //create useRef so not re-rendering every time input is added
  const formData = useRef(null)

  //handle the submit event when clicking the submit button
  function handleSubmit(e){
    e.preventDefault()
    const data = new FormData(formData.current)
    //just sanity checking the values being sent into FormData
    for (const val of data.values()){
      console.log(val)
    }
    console.log("You've clicked submit")
  }

  return (
    <div>
            <h1 align="center">Contact Us!</h1>
            <form ref={formData} onSubmit = {handleSubmit} align="center">
              <Container 
                  sx={{
                  bgcolor: theme.palette.lightGreen, 
                  minHeight:"400px",
                  width: "50%", 
                  padding: "30px",
                  marginY: "20px",
                  display: "flex",
                  }}
              >
                <Grid 
                    container 
                    // component={"form"} 
                    spacing={2}
                    onSubmit = {handleSubmit}
                >
                  <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        variant="filled"
                        id="outlined-required"
                        label="Name"
                        placeholder="Name"
                        name="Name"
                        sx={{ bgcolor: theme.palette.teal}}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        variant="filled"
                        id="outlined-required"
                        label="Email"
                        placeholder="Email"
                        name="Email"
                        sx={{ bgcolor: theme.palette.teal}}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-multiline-flexible" 
                      label="Leave a message!" 
                      variant="filled"
                      multiline
                      fullWidth
                      required
                      placeholder="Leave a message!"
                      rows={10}
                      name="Message"
                      sx={{
                        backgroundColor: theme.palette.teal
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor:theme.palette.medPurple,
                        color: theme.palette.white
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </form>
    </div>
  )
}

export default ContactUs