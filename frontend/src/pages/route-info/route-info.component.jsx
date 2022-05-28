import React, {useState, useEffect} from 'react';
import './route-info.styles.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSelectedMapArea } from '../../redux/actions';
import { GetRouteByID } from '../../helpers/routes';
import AddOrRemoveRoute from '../../components/add-or-remove-route/add-or-remove-route.component'


const RouteInfoPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {routeID} = useParams();
    const [routeInfo, setRouteInfo] = useState({});

    useEffect(() => {
        async function getRouteInfo() {
            const route = await GetRouteByID(routeID);
            setRouteInfo(route);
        }
        getRouteInfo();       
    }, [routeID]);

    const {color, grade, area, description, setter} = routeInfo;

    return(
        <div 
        className='route-info page' 
        style={{ borderColor: color}}
        >
            <div className='top-container'>
                <div className='title'>
                    <h1>{color} {grade}</h1>
                </div>
                <div className='btn'>
                    <AddOrRemoveRoute routeID={parseInt(routeID)} />
                </div>
            </div>
            <div className='subtitle'>
            <b>Set by {setter}</b>
            {area
            ? <>
                <b> in the </b>
                <div className='area-link'>
                    <b onClick={() => {dispatch(changeSelectedMapArea(area.name)); navigate('/gym')} }>{area.name.toUpperCase()}</b>
                </div>
            </>
            : null
            }
            </div>
            <div className='description'>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default RouteInfoPage