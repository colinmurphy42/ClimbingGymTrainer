import React from 'react';
import './add-or-remove-route.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {addRouteToMyList, removeRouteFromMyList} from '../../actions';

const AddOrRemoveRoute = ({routeID}) => {
    const dispatch = useDispatch();
    const myRoutes = useSelector(state => state.myRoutes);
    const inMyRoutes = myRoutes.includes(routeID);

    return(
        <div className='add-or-remove-route'>
            {inMyRoutes
                ?   <button 
                        className='add-remove-route-btn remove' 
                        onClick={ () => dispatch(removeRouteFromMyList(routeID))}>
                        <span>&#10003;</span>
                    </button> 
                :   <button
                        className='add-remove-route-btn add' 
                        onClick={ () => dispatch(addRouteToMyList(routeID))}>
                        +
                    </button> 
            }
        </div>
    );
}

export default AddOrRemoveRoute