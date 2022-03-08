import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./cashReducer";
import { customReducer } from "./customerReducer";

const rootReducer = combineReducers({
    cashReducer: reducer,
    custom: customReducer
})

export const store = createStore(rootReducer, composeWithDevTools());