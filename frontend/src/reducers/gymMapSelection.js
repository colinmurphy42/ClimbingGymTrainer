const gymMapSelectionReducer = (state='all routes', action) =>{
    switch(action.type){
        case 'CHANGE_SELECTED_AREA':
            return action.payload
        default:
            return state
    }
}
export default gymMapSelectionReducer