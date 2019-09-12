let initialState = {
    app2:'88888'
}
//这是reducer
 const app2reducer = (state = initialState, action) => {
    switch (action.type){
        case '双倍2':
            return {...state,app2:Number(state.app2)+200};
        case '三倍2':
            return {...state,app2:Number(state.app2)+300};
        default:
            return state;
    }
}
export default app2reducer;