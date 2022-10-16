import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
// import MuiNavbar from '../components/MuiNavbar';
// import Footer from '../components/Footer';

const Directory = () => {
    const { id } = useParams();

    return (
        <div>
            {/* <MuiNavbar />  */}
            <Paper>
                <h1>This is the directory page!</h1>
                <Paper elevation={8}>
                    <Typography>
                        Paper 1
                    </Typography>
                </Paper>
                <Paper elevation={8}>
                    <Typography>
                        Paper 2
                    </Typography>
                </Paper>


            </Paper>
            {/* <Footer />  */}
        </div>
    )
}
export default Directory