import React, {useEffect} from 'react';
import GymMap from '../../components/gym-map/gym-map.component';
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';
import PageTitle from '../../components/page-title/page-title.component';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRoutes } from '../../redux/actions';

const Gym = () => {
    let routes = useSelector(state => state.routes);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllRoutes())
    }, []);

    const gymSelectedArea = useSelector(state => state.gymSelectedArea);
    const areaFilteredRoutes = (gymSelectedArea !== 'all routes' ? routes.filter(route => route.area.name.toLowerCase() === gymSelectedArea.toLowerCase()) : routes); //This should be redone
    
    return(
        <div className='gym page'>
            <PageTitle title='Gym Page'/>
            <GymMap gymSelectedArea={gymSelectedArea}/>
            <RouteCardDisplay routes={areaFilteredRoutes}/>
        </div>
    );
};

export default Gym