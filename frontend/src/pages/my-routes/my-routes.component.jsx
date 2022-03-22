import React from 'react';
import './my-routes.styles.scss';
import {useSelector} from 'react-redux';
import ClearRoutes from '../../components/clear-routes/clear-routes.component';
import RouteCardDisplay from '../../components/route-card-display/route-card-display.component';
import PageTitle from '../../components/page-title/page-title.component';
import ROUTE_DATA from '../../data/routes/routes.data';

const MyRoutesPage = () => {
    const myRoutes = useSelector(state => state.myRoutes);
    const myRoutesInfo = ROUTE_DATA.filter(route => myRoutes.includes(route.id))

    return(
        <div className='my-routes page'>
            <PageTitle title='My Routes'/>
            {myRoutesInfo.length > 0
                ? <><RouteCardDisplay routes={myRoutesInfo}/> <ClearRoutes/></>
                : <p>You Have Not Added Any Routes</p>
            }     
        </div>
    );
}

export default MyRoutesPage