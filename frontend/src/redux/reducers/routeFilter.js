
const routeFilterReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_ROUTES':
            return action.payload

        case 'GET_MY_ROUTES':
            return state //state.filter(route => action.payload.includes(route.id)) //THIS IS BROKEN IT SHOULD BE AN API THATS OK WILL FIX LATER

        default:
            return state
    }
}

export default routeFilterReducer