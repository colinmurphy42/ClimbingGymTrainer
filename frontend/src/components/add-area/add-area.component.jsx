import React, {useState} from "react";
import './add-area.styles.scss'
import axios from "axios";
import {getCookie} from "../../static/csrftoken";
import { Button, Grid, TextField } from "@mui/material";
import MapPreview from "../map-preview/map-preview.component";

const AddArea = () => {
    const[name, setName] = useState('');
    const[yLocation, setYLocation] = useState(0);
    const[xLocation, setXLocation] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formObj = {
            name: name,
            mapYLocation: yLocation,
            mapXLocation: xLocation
        }
        axios.post(
            '/api/areas/', //API
            formObj, //Object to send to API 
            {
                headers: {
                    'X-CSRFToken' : getCookie('csrftoken') //Details about the call
                },
            }
        )
        .then((res) => {
            setName(''); 
            setYLocation(0); 
            setXLocation(0);
        });
    };

    return(
        <div className="add-area">
            <Grid container spacing={12}>
                <Grid item xs={5}>
                    <form className="add-area-form" onSubmit={handleSubmit}>
                        <div className="form-input-container">
                            <TextField
                                name='name'
                                label='Name'
                                className='form-input name'
                                type='text'
                                variant='standard'
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                required
                                autoComplete="off"
                            />
                            <TextField
                                name='yLocation'
                                label='Y Location'
                                className='form-input'
                                type='number'
                                inputProps={{min:0}}
                                variant='standard'
                                value={yLocation} 
                                onChange={(e) => setYLocation(e.target.value)}
                                required
                            />
                            <TextField
                                name='xLocation'
                                label='X Location'
                                className='form-input'
                                type='number'
                                inputProps={{min:0}}
                                variant='standard'
                                value={xLocation} 
                                onChange={(e) => setXLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div className='submit-btn-container'>
                            <Button
                            className="submit-btn" 
                            sx={{mt:2}}
                            variant="outlined" 
                            color="success" 
                            type="submit"
                            > Add Area </Button>
                        </div>
                    </form>
                </Grid>
                <Grid item sm={6}>
                    <MapPreview 
                        name={name}
                        yLocation={yLocation}
                        xLocation={xLocation}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default AddArea