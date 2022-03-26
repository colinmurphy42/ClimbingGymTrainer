import React, {useEffect, useState} from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import axios from "axios";
import "./add-route.styles.scss"

const AddRoute = () => {
    const[areaInfo, setAreaInfo] = useState([]);    //[stateVariable, functionThatUpdatesOurVariable]

    useEffect(() => {   //This use effect grabs all the area data and puts it into the areaInfo state
        axios.get('/api/areas/')
        .then((res) => setAreaInfo(res.data))
        .catch((err) => {
            alert(err.message);
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(event.target.value)
    }

    return(
    <form className="add-route-form" onSubmit={handleSubmit}>
        <TextField 
            name="grade"
            className="form-input" 
            label="Grade" 
            type="text" 
            placeholder="V0" 
            required 
            variant="standard"
        >
        </TextField>
        <Select
            name="color"
            className="form-input"
            label="Color"
            value=""
        >
            <MenuItem value="">
            <em>Pick A Color</em>
            </MenuItem>
            <MenuItem value={"Red"}>Red</MenuItem>
            <MenuItem value={"Green"}>Green</MenuItem>
            <MenuItem value={"Yellow"}>Yellow</MenuItem>
            <MenuItem value={"Pink"}>Pink</MenuItem>
            <MenuItem value={"Blue"}>Blue</MenuItem>
        </Select>
        <Select
            name="area"
            className="form-input"
            label="Area"
            value=""
        >
            <MenuItem value="">
            <em>Choose An Area</em>
            </MenuItem>
            {
                 areaInfo.map(({name}, index) => (
                    <MenuItem key={index} value={name}>{name}</MenuItem>
                ))
            }
        </Select>
        <TextField 
            name="description"
            className="form-input"
            label="Description" 
            type="text" 
            required 
            variant="standard"
        >
        </TextField>
        <Select
            name="setter"
            className="form-input"
            label="Setter"
            value=""
        >
            <MenuItem value="">
            <em>Choose A Setter</em>
            </MenuItem>
            <MenuItem value={"Ari"}>Ari</MenuItem>
            <MenuItem value={"Colin"}>Colin</MenuItem>
        </Select>
        <button>Submit me</button>
    </form>
    );
}

export default AddRoute