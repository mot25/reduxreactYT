const initState = {
    custom: []
}


export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const customReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return { ...state, custom: [...state.custom, action.payload] }
        case REMOVE_CUSTOMER:
            return { ...state, custom: state.custom.filter(item => item.id !== action.payload) }
        default:
            return state
    }
}


export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })

