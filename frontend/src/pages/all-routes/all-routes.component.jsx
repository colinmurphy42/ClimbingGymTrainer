import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';
import { fetchAllRoutes } from '../../redux/actions';
import PageTitle from '../../components/page-title/page-title.component';

const AllRoutesPage = () => {
    let routes = useSelector(state => state.routes);
    const dispatch = useDispatch();
    
    useEffect(() => {   //This use effect grabs all the area data and puts it into the areaInfo state
        dispatch(fetchAllRoutes())
    }, []);

    return(
        <div className='all-routes page'>
            <PageTitle title='Routes'/>
            <RouteCardDisplay routes={routes}/>
        </div>
    );
};

export default AllRoutesPage