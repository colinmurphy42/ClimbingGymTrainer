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
                />
                <TextInputWithIcon
                    name='Confirm Password'
                    value={confirmPassword}
                    setValue={setConfirmPass}
                    icon={<EnhancedEncryptionIcon/>}
                />
                <TextField 
                    label='Username'
                    value={username}
                    className='form-input'
                    variant='standard'
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                    }}
                />
                <TextField 
                    label='Email'
                    value={email}
                    className='form-input'
                    variant='standard'
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                    }}
                />
                <TextField 
                    label='Password'
                    value={password}
                    className='form-input'
                    variant='standard'
                    type={'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HttpsIcon />
                          </InputAdornment>
                        ),
                    }}
                />
                <TextField 
                    label='Confirm Password'
                    value={confirmPass}
                    className='form-input'
                    variant='standard'
                    type={'password'}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                              <EnhancedEncryptionIcon />
                          </InputAdornment>
                        ),
                    }}
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