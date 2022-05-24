import React from "react";
import { Select, MenuItem } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const BasicSelect = ({name, value, label, listOfItems, handleChange}) => { //Coming from props object. {} tells react that these are attributes of props object
  return(
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          label={label}
          onChange={handleChange}
        >     
          {
              listOfItems.map((item, index) => (
                  item.id === undefined
                  ? <MenuItem key={index} value={item}>{item}</MenuItem>
                  : <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem> //If coming from a database, we need the database id in this component
              ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect