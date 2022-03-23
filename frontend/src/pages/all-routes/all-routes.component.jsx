import React from 'react';
import { useSelector } from 'react-redux'
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';
import PageTitle from '../../components/page-title/page-title.component';

const AllRoutesPage = () => {
    const routes = useSelector(state => state.filteredRoutes);

    return(
        <div className='all-routes page'>
            <PageTitle title='Routes'/>
            <RouteCardDisplay routes={routes}/>
        </div>
    );
};

export default AllRoutesPage