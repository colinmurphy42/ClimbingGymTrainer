import React from 'react';
import './homepage.styles.scss';
import GymMap from '../../components/gym-map/gym-map.component';
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';
import ROUTE_DATA from '../../data/routes/routes.data';
import { useSelector } from 'react-redux';

const Gym = () => {
    const gymSelectedArea = useSelector(state => state.gymSelectedArea);
    const areaFilteredRoutes = (gymSelectedArea !== 'none' ? ROUTE_DATA.filter(route => route.area === gymSelectedArea.toLowerCase()) : ROUTE_DATA);
    
    return(
        <div className='homepage page'>
            <h1>Gym Page</h1>
            <GymMap gymSelectedArea={gymSelectedArea}/>
            <RouteCardDisplay routes={areaFilteredRoutes}/>
        </div>
    );
};

export default Gym