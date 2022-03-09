import React from 'react';
import { useSelector } from 'react-redux'
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';

const AllRoutesPage = () => {
    const routes = useSelector(state => state.filteredRoutes);

    return(
        <div className='all-routes page'>
            <h1>Routes</h1>
            <RouteCardDisplay routes={routes}/>
        </div>
    );
};

export default AllRoutesPage