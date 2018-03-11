import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, Reducer} from 'redux'

import {incrementCounter, decrementCounter, updateName} from './actions/AppActions';
import {rootReducer} from './reducers/AppReducers';

import AppRoot, {AppProps} from './components/AppRoot';

export interface AppStore {
    name: string,
    counter: number
}

const initialState: AppStore = {
    name: '',
    counter: 0
};

const store = createStore<AppStore>(rootReducer as Reducer<AppStore>, initialState);

function renderAppRoot() {
    const handleIncrement = () => {
        store.dispatch(incrementCounter())
    };

    const handleDecrement = () => {
        store.dispatch(decrementCounter())
    };

    const handleUpdateName = (name: string) => {
        store.dispatch(updateName({name}))
    };

    const appProps: AppProps = {
        name: store.getState().name,
        counter: store.getState().counter,
        handleIncrement,
        handleDecrement,
        handleUpdateName
    };

    ReactDOM.render(
        <AppRoot {...appProps}/>,
        document.getElementById('root'));
}


store.subscribe(renderAppRoot);
renderAppRoot();
