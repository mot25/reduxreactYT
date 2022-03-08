const initState = {
    cash: 0
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CASH':
            console.log(action.payload);
            return { ...state, cash: state.cash + action.payload }
        case 'GET_CASH':
            console.log(action.payload);

            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}