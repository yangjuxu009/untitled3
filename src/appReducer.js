//这是reducer
let initialState = {
    aa:'99999'
}

 const appreducer = (state = initialState, action) => {
    switch (action.type){
        case '双倍':
            return {...state,aa:Number(state.aa)-100};
        case '三倍':
            return {...state,aa:Number(state.aa)-300};
        default:
            return state;
    }
}
export default appreducer;