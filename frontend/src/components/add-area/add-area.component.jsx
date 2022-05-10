import React, {useState} from "react";
import './add-area.styles.scss'
import axios from "axios";
import {getCookie} from "../../static/csrftoken";
import { Button, Grid, TextField } from "@mui/material";
import MapPreview from "../map-preview/map-preview.component";

const AddArea = () => {
    const[inputs, setInputs] = useState({
        name: '',
        mapYLocation: 0,
        mapXLocation: 0
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))  //Update the inputs object. ...values means use the same values, [name] means update entry with key=name to the new value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            '/api/areas/', //API
            inputs, //Object to send to API 
            {
                headers: {
                    'X-CSRFToken' : getCookie('csrftoken') //Details about the call
                }
            }
        )
        .then((res) => {
            setInputs({ //Reset inputs
                name: '',
                mapYLocation: 0,
                mapXLocation: 0
            })
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
                                value={inputs.name} 
                                onChange={handleChange}
                                required
                                autoComplete="off"
                            />
                            <TextField
                                name='mapYLocation'
                                label='Y Location'
                                className='form-input'
                                type='number'
                                inputProps={{min:0}}
                                variant='standard'
                                value={inputs.mapYLocation} 
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                name='mapXLocation'
                                label='X Location'
                                className='form-input'
                                type='number'
                                inputProps={{min:0}}
                                variant='standard'
                                value={inputs.mapXLocation} 
                                onChange={handleChange}
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
                        name={inputs.name}
                        yLocation={inputs.mapYLocation}
                        xLocation={inputs.mapXLocation}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default AddArea