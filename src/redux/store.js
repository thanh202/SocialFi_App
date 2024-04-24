import {legacy_createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
