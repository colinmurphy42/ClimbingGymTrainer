import React from 'react';
import './route-card.styles.scss';
import {useNavigate} from 'react-router-dom';
import AddOrRemoveRoute from '../add-or-remove-route/add-or-remove-route.component';

const RouteCard = ({routeID, grade, color, area}) => {
    const navigate = useNavigate();
    return(
        <div className={`route-card ${color}`}>
            <AddOrRemoveRoute routeID={routeID}/>     
            <div className='content' onClick={() => navigate(`/route/${routeID}`)}>
                <h2 className='title'>{color.toUpperCase()} {grade}</h2>
                <p className='subtitle'>{area.toUpperCase()}</p>
            </div>
        </div>
    );
}

export default RouteCard