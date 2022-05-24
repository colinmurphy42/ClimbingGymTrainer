import myRoutesReducer from "./myRoutes";
import routeFilterReducer from "./routeFilter";
import gymMapSelectionReducer from "./gymMapSelection";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    myRoutes: myRoutesReducer,
    routes: routeFilterReducer,
    gymSelectedArea: gymMapSelectionReducer
});

export default allReducers