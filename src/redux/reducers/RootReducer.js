import {combineReducers} from 'redux';
import themeReducer from './ThemeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
