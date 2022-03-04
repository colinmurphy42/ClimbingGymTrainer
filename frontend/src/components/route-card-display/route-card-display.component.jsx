import React from 'react';
import RouteCard from '../route-card/route-card.component';
import './route-card-display.styles.scss';

const RouteCardDisplay = ({routes}) => {
    
    return(
        <div className='route-card-display'>
            {
            routes.map(({id, ...otherRouteProps}) => (
                <RouteCard key={id} routeID={id} {...otherRouteProps}/>
            ))
            }
        </div>
    );
}

export default RouteCardDisplay