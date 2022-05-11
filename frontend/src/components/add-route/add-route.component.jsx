import React, {useEffect, useState} from "react";
import { TextField, Grid, Button } from "@mui/material";
import axios from "axios";
import {getCookie} from "../../static/csrftoken";
import "./add-route.styles.scss"
import BasicSelect from "../basic-select/basic-select.component";


const AddRoute = () => {
    const setterList = ['Colin', 'Ari']; //Hard-coded
    const colorList = ["Red", "Green", "Yellow", "Pink", "Blue"]; //Hard-coded
    const [areaInfo, setAreaInfo] = useState([]); 
    const [inputs, setInputs] = useState({
        color: '',
        area: '',
        grade: '',
        description: '',
        setter: ''
    });

    useEffect(() => {   //This use effect grabs all the area data and puts it into the areaInfo state
        axios.get('/api/areas/')
            .then((res) => setAreaInfo(res.data.map(area => area)))
            .catch((err) => {
                alert(err.message);
            })
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(
            '/api/routes/', //API route
            inputs, //Object to send
            {
                headers: { //Details about the call
                    'X-CSRFToken' : getCookie('csrftoken') 
                },
            }
        )
        .then((res) => {
            setInputs({ //Reset inputs
                color: '',
                area: '',
                grade: '',
                description: '',
                setter: ''
            });
        })
        .catch((err) => {
            alert(err.message);
            console.log(err);
        })
    }

    return(
        <form className="add-route-form" onSubmit={handleSubmit}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <BasicSelect
                        name='color'
                        label='Color'
                        value={inputs.color}
                        handleChange={handleChange}
                        listOfItems={colorList}
                    />
                </Grid>
                <Grid item xs={6}>
                    <BasicSelect
                        name='area'
                        label='Area'
                        value={inputs.area}
                        handleChange={handleChange}
                        listOfItems={areaInfo}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="grade"
                        label="Grade"
                        value={inputs.grade}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="V0"
                        required
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="description"
                        label="Description"
                        value={inputs.description}
                        onChange={handleChange}
                        className="form-input"
                        required
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <BasicSelect
                        name='setter'
                        label='Setter'
                        value={inputs.setter}
                        handleChange={handleChange}
                        listOfItems={setterList}
                    />
                </Grid>
            </Grid>
            <div className="submit-button-container">
                <Button 
                    variant="outlined" 
                    color="success" 
                    className="submit-button"
                    type="submit"
                >Submit</Button>
            </div>
        </form>
    );
}


export default AddRoute