import React from "react";
import { useState } from "react";
import { Button, Typography, TextField, Box, InputAdornment } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import HttpsIcon from '@mui/icons-material/Https';
import './sign-up.styles.scss'
import { Link } from "react-router-dom";
import TextInputWithIcon from "../text-input-with-icon/text-input-with-icon.component";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = (event) => {
        alert('Hello');
    }
    
    return(
        <div className='sign-up'>
            <Typography variant='body1'>Join us and climb at your best ability!</Typography>
            <Box width={400}>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <TextInputWithIcon
                    name='Username'
                    value={username}
                    setValue={setUsername}
                    icon={<AccountCircle/>}
                />
                <TextInputWithIcon
                    name='Email'
                    value={email}
                    setValue={setEmail}
                    icon={<EmailIcon/>}
                />
                <TextInputWithIcon
                    name='Password'
                    value={password}
                    setValue={setPassword}
                    icon={<HttpsIcon/>}
                    type='password'
                />
                <TextInputWithIcon
                    name='Confirm Password'
                    value={confirmPass}
                    setValue={setConfirmPass}
                    icon={<EnhancedEncryptionIcon/>}
                    type='password'
                />
                <div className='submit-btn-container'>
                    <Button
                        className="submit-btn" 
                        sx={{mt:2}}
                        variant="contained"  
                        type="submit"
                    > Register </Button>
                </div>
            </form>
            </Box>
            <Link to='/signin'>Already a member?</Link>
        </div>
    );
}

export default SignUp