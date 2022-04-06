import React from 'react';
import { Grid, Paper } from '@mui/material';
import Image from 'material-ui-image'
import SignIn from '../../components/sign-in/sign-in.component';

const SignInPage = () => {
    return(
        <div className='sign-in-page page'>
            <Grid container spacing={4}>
                <Grid item xs={5}>
                    <Image 
                        src='https://images.squarespace-cdn.com/content/v1/54b98833e4b0567044b85c22/1565193582397-PIVHLVFWFAZBHLASDT1U/IMG_1349.jpg?format=1500w'
                        cover
                    />
                </Grid>
                <Grid item xs={7}>
                    <SignIn/>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default SignInPage;