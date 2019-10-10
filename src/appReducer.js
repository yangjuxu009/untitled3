//这是reducer
let initialState = {
    aa:'99999'
}

 const appreducer = (state = initialState, action) => {
    switch (action.type){
        case '双倍':
            return {...state,aa:Number(state.aa)-action.num};
        case '三倍':
            return {...state,aa:Number(state.aa)-action.num};
        default:
            return state;
    }
}
export default appreducer;
