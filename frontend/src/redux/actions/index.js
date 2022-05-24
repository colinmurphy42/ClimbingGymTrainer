import axios from "axios"

export const addRouteToMyList = (routeID) => {
    return {
        type: 'ADD_ROUTE',
        payload: routeID
    }
}

export const removeRouteFromMyList = (routeID) => {
    return {
        type: 'REMOVE_ROUTE',
        payload: routeID
    }
}

export const fetchRoute = (routeID) => {
    return async (dispatch) => { //redux-thunk will intercept this api call and help us call it even though it's async
        const response = await axios.get(`/api/routes/${routeID}`);
        console.log('FUCK', response);
        dispatch({
            type: 'FETCH_ROUTE',
            payload: response.data
        });
    }
}

export const fetchAllRoutes = () => {

    return async (dispatch) => { //redux-thunk will intercept this api call and help us call it even though it's async
        const response = await axios.get('/api/routes/');
        dispatch({ //Once our API call is done running, THEN the action will be called like normal
            type: 'FETCH_ALL_ROUTES',
            payload: response.data
        });
    }
}

export const getMyRoutes = (routeIDList) => {
    return {
        type: 'GET_MY_ROUTES',
        payload: routeIDList
    }
}

export const clearMyRoutes = () => {
    return {
        type: 'CLEAR_ROUTES'
    }
}

export const changeSelectedMapArea = (areaName) => {
    return{
        type: 'CHANGE_SELECTED_AREA',
        payload: areaName
    }
}