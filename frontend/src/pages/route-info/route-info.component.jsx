import React from 'react';
import './route-info.styles.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSelectedMapArea } from '../../actions';
import { GetRouteByID } from '../../helpers/routes';
import AddOrRemoveRoute from '../../components/add-or-remove-route/add-or-remove-route.component'


const HandleClick = (area) =>{
    console.log(area);

}

const RouteInfoPage = () => {
    const {routeID} = useParams();
    const {color, grade, area, description, setter} = GetRouteByID(routeID);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //console.log(match.params)
    return(
        <div 
        className='route-info page' 
        style={{ borderColor: `${color}`}}
        >
            <div className='top-container'>
                <div className='title'>
                    <h1>{color.toUpperCase()} {grade}</h1>
                </div>
                <div className='btn'>
                    <AddOrRemoveRoute routeID={parseInt(routeID)} />
                </div>
            </div>
            <div className='subtitle'>
                <b>Set by {setter} in the </b>
                <div className='area-link'>
                    <b onClick={() => {dispatch(changeSelectedMapArea(area)); navigate('/gym')} }>{area.toUpperCase()}</b>
                </div>
                <b> area</b>
            </div>
            <div className='description'>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default RouteInfoPage