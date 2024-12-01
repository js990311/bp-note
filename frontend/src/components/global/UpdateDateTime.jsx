export const dateTimeReducer = (state, action) => {
    if(action.type === 'TIME'){
        return state = {
            time: action.time,
            ...state
        };
    }else if(action.type === 'DATE'){
        return state = {
            time: action.time,
            ...state
        };
    }
    return state;
}
