import React from 'react'
import { useDispatch } from 'react-redux';
import { changeSelectedMapArea } from '../../actions';
import './gym-map-area.styles.scss'

const GymMapArea = ({name, mapYLocation, mapXLocation, isSelected}) => {
    const dispatch = useDispatch();
    const stateClass = isSelected ? 'on' : 'off';
    return(
        <div 
            className={`gym-map-area ${stateClass}`}
            style={{
                top: `${mapYLocation}%`,
                left: `${mapXLocation}%`
            }}
            onClick={() => dispatch(changeSelectedMapArea(name.toLowerCase()))}
        >
        <p>{name}</p>
        </div>
    );
}

export default GymMapArea