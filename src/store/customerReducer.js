const initState = {
    custom: []
}

export const customReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            console.log(action.payload);
            return { ...state, cash: state.cash + action.payload }
        case 'GET_CUSTOMER':
            console.log(action.payload);

            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}