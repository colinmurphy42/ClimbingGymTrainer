const myRoutesReducer = (listOfRoutes = [], action) => {
    switch(action.type){
        case 'ADD_ROUTE':
            return [...listOfRoutes, action.payload];

        case 'REMOVE_ROUTE':
            return listOfRoutes.filter(routeID => routeID != action.payload);

        case 'CLEAR_ROUTES':
            return [];

        default:
            return listOfRoutes
    }
}

export default myRoutesReducer