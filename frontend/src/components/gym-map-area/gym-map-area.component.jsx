import React from 'react'
import { useDispatch } from 'react-redux';
import { changeSelectedMapArea } from '../../actions';
import './gym-map-area.styles.scss'

const GymMapArea = ({name, yLocation, xLocation, isSelected}) => {
    const dispatch = useDispatch();
    const stateClass = isSelected ? 'on' : 'off';
    return(
        <div 
            className={`gym-map-area ${stateClass}`}
            style={{
                top: `${yLocation}%`,
                left: `${xLocation}%`
            }}
            onClick={() => dispatch(changeSelectedMapArea(name.toLowerCase()))}
        >
        <p>{name}</p>
        </div>
    );
}

export default GymMapArea