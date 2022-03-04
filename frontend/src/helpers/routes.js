import ROUTE_DATA from "../data/routes/routes.data"

export const GetRouteByID = (routeID) => {
    return(
        ROUTE_DATA.find(route => route.id == routeID)
    );
}