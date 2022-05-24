import axios from "axios";

export const GetRouteByID = async (routeID) => {
    try{
        const res = await axios.get(`/api/routes/${routeID}`);
        return res.data;

    } catch (err) {
        alert(err.message);

    }
}