import React from "react";
import svgFile from '../../assets/gym-shape.svg'
import CodeIcon from '@mui/icons-material/Code';
import './map-preview.styles.scss';

const MapPreview = ({name, yLocation, xLocation}) => {
    return(
        <div className="map-preview">
            <img src={svgFile} height='300px' width='500px' alt='gym map'/>
            <div className="icon-container" style={{ top: `${yLocation}%`, left: `${xLocation}%`}}>
                {
                    name.length === 0
                        ? <CodeIcon/>
                        : <p>{name}</p>
                }  
            </div>
        </div>
    );
}

export default MapPreview