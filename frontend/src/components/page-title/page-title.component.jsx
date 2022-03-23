import React from "react";
import './page-title.styles.scss';
import { Typography } from "@mui/material";

const PageTitle = ({title}) => {
    return(
        <div className='page-title'>
            <Typography variant='h4'>{title}</Typography>
        </div>
    );
}

export default PageTitle