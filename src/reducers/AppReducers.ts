import {combineReducers} from 'redux';

const name = (state: string = '', action: any) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            return action.name;
        default:
            return state;
    }
};

const counter = (state: number = 0, action: any) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    name,
    counter
});
