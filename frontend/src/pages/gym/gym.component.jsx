import React from 'react';
import GymMap from '../../components/gym-map/gym-map.component';
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';
import PageTitle from '../../components/page-title/page-title.component';
import ROUTE_DATA from '../../data/routes/routes.data';
import { useSelector } from 'react-redux';

const Gym = () => {
    const gymSelectedArea = useSelector(state => state.gymSelectedArea);
    const areaFilteredRoutes = (gymSelectedArea !== 'all routes' ? ROUTE_DATA.filter(route => route.area === gymSelectedArea.toLowerCase()) : ROUTE_DATA);
    
    return(
        <div className='gym page'>
            <PageTitle title='Gym Page'/>
            <GymMap gymSelectedArea={gymSelectedArea}/>
            <RouteCardDisplay routes={areaFilteredRoutes}/>
        </div>
    );
};

export default Gym