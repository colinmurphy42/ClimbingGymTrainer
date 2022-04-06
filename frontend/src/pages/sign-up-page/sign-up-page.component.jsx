import React from 'react';
import PageTitle from '../../components/page-title/page-title.component';
import { Grid, Typography } from '@mui/material';
import Image from 'material-ui-image'
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-up-page.styles.scss';


const SignUpPage = () => {
    return(
        <div className='sign-up-page page'>
            <div className='title'>
                <Typography variant='h3'>Sign Up</Typography>
            </div>
            <Grid container spacing={4}>
                <Grid item xs={7}>
                    <SignUp/>
                </Grid>
                <Grid item xs={5}>
                    <Image 
                        src='https://climbhangar18.com/wp-content/uploads/2020/09/DSC03539.jpg'
                        cover
                    />
                </Grid>
            </Grid>    
        </div>
    );
}

export default SignUpPage