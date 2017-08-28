import { createStore, applyMiddleware } from "redux";
import rootReducer from "reducers/root";
import { Map } from "immutable";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

function createInitialState(amount) {
    const state = {};

    for(let i = 0; i < amount; i++) {
        state[i] = Map();
    }

    return Map(state);
}

export default function configureStore(widgetsAmount) {
    return createStore(
        rootReducer,
        createInitialState(widgetsAmount),
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
} 
