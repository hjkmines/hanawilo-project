
import { Container, Paper, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import DirectoryCard from '../components/DirectoryCard';
import Navbar from "../components/Navbar"




const Directory = () => {


    return (
        <>
        <Navbar />
            <Container 
                sx={{
                    alignItems:'center',
                    justifyContent:  'center',
                    textAlign: 'center',
                    padding:0,
            }}>
                <Typography 
                    sx={{
                        fontWeight: 600,
                        fontSize: '20px',
                        

                }}>
                    Directory page
                </Typography>
            </Container>
            <Grid container spacing={2}>
                <DirectoryCard />
                <DirectoryCard />
                <DirectoryCard />
                <DirectoryCard />
                <DirectoryCard />
                <DirectoryCard />
                <DirectoryCard />
                <DirectoryCard />
            </Grid>
        </>
    )
}
export default Directory