import ROUTE_DATA from "../data/routes/routes.data"

const routeFilterReducer = (state = ROUTE_DATA, action) => {
    switch(action.type){
        case 'GET_MY_ROUTES':
            return state.filter(route => action.payload.includes(route.id))
        default:
            return ROUTE_DATA
    }
}

export default routeFilterReducer