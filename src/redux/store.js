import {legacy_createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
