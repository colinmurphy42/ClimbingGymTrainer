import React, {useEffect, useState} from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import axios from "axios";
import "./add-route.styles.scss"
import BasicSelect from "../basic-select/basic-select.component";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";


const AddRoute = () => {
    const [color, setColor] = useState(''); 
    const [area, setArea] = useState('');
    const [areaInfo, setAreaInfo] = useState([]); 
    const [setter, setSetter] = useState('');
    const handleChangeColor = (event) => {
      setColor(event.target.value);
    }

      const handleChangeArea = (event) => {
        setArea(event.target.value);
      };
  
           //[stateVariable, functionThatUpdatesOurVariable]


        useEffect(() => {   //This use effect grabs all the area data and puts it into the areaInfo state
            axios.get('/api/areas/')
                .then((res) => setAreaInfo(res.data.map(area => area.name)))
                .then(console.log(areaInfo))
                .catch((err) => {
                    alert(err.message);
                })
        }, []);

        const handleSubmit = (event) => {
                    event.preventDefault();
                    alert(event.target.value)
                 }
    


return (

    <form className="add-route-form" onSubmit={handleSubmit}>
        <Grid container spacing={5}>

            <Grid item xs={6}>
                <BasicSelect
                    item={color}
                    setItem={setColor}
                    name='Color'
                    listOfItems={
                        ["Red", "Green", "Yellow", "Pink", "Blue"]
                    }
                />
            </Grid>
            <Grid item xs={6}>
                <BasicSelect
                    item={area}
                    setItem={setArea}
                    name='Area'
                    listOfItems={areaInfo}
                />
            </Grid>


            <Grid item xs={6}>
                <TextField
                    name="Grade"
                    className="form-input"
                    label="Grade"
                    type="text"
                    placeholder="V0"
                    required
                    variant="standard"
                    fullWidth
                />

            </Grid>

            <Grid item xs={6}>
                <TextField
                    name="description"
                    className="form-input"
                    label="Description"
                    type="text"
                    required
                    variant="standard"
                    fullWidth
                />

            </Grid>

            <Grid item xs={6}>
                <BasicSelect
                    item={setter}
                    setItem={setSetter}
                    name='Setter'
                    listOfItems={
                        ["Colin", "Ari"]
                    }/>
    
            </Grid>

        </Grid>
        <div className="submit-button-container">
        <Button variant="outlined" color="success" className="submit-button">Submit</Button>
        </div>
    </form>
  );
}


export default AddRoute