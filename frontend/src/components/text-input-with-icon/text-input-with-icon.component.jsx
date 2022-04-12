import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const TextInputWithIcon = ({name, value, setValue, icon}) => {
    return(
        <div className='text-input-with-icon'>
            <TextField 
                    label={name}
                    value={value}
                    className='form-input'
                    variant='standard'
                    onChange={(e) => setValue(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                              {icon}
                          </InputAdornment>
                        ),
                    }}
                />
        </div>
    );
}

export default TextInputWithIcon