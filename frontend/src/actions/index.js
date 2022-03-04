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