import React from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const BasicSelect = ({item,setItem,listOfItems,name}) => { //coming from props object. {} tells react that they're attributes of props{}

  
    const handleChange = (event) => {
      setItem(event.target.value);
    };


return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{name}</InputLabel>
        <Select
        name={name}
        value={item}
        label={name}
        onChange={handleChange}
        >
        
        {
                listOfItems.map((item, index) => (
                <MenuItem key={index} value={item.toLowerCase().replace(/\s+/g, '')}>{item}</MenuItem>
            ))
        }

        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect