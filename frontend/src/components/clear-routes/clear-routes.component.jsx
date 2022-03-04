import React from 'react';
import './clear-routes.styles.scss';
import { useDispatch } from 'react-redux';
import { clearMyRoutes } from '../../actions';

const ClearRoutes = () => {
    const dispatch = useDispatch();
    return(
        <button className='clear-routes' onClick={() => dispatch(clearMyRoutes())}>Clear Routes</button>
    );
}

export default ClearRoutes