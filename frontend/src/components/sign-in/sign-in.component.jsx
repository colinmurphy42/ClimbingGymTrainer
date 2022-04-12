import React, {useState, useEffect} from "react";
import { Typography, Button } from "@mui/material";
import TextInputWithIcon from "../text-input-with-icon/text-input-with-icon.component";
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        alert('Signed In haha sike');
    }

    return(
        <div className='sign-in'>
             <Typography variant='h3'>Sign In</Typography>
             <Box width={400}>
                <form onSubmit={handleSubmit}>
                    <TextInputWithIcon
                        name='Username'
                        value={username}
                        setValue={setUsername}
                        icon={<AccountCircle/>}
                    />
                    <TextInputWithIcon
                        name='Password'
                        value={password}
                        setValue={setPassword}
                        icon={<HttpsIcon/>}
                    />
                    <div className='submit-btn-container'>
                        <Button
                            className="submit-btn" 
                            sx={{mt:2}}
                            variant="contained"  
                            type="submit"
                        > Login </Button>
                    </div>
                </form>
             </Box>
        </div>
    );
}

export default SignIn