import React from 'react';
import './all-routes.styles.scss';
import { useSelector } from 'react-redux'
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';

const AllRoutesPage = () => {
    const routes = useSelector(state => state.filteredRoutes);

    return(
        <div className='all-routes page'>
            <h1>Routes</h1>
            {// <RouteSearchFilter placeholder='Search By Color' handleChange={(e) => dispatch(filterColor(e.target.value))}/> 
            }
            <RouteCardDisplay routes={routes}/>
        </div>
    );
};

export default AllRoutesPage