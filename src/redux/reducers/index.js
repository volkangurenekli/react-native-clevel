import {combineReducers} from 'redux';
import tvShowsReducer from './tvShowsReducer';
import selectShowReducer from './selectShowReducer';

const rootReducer = combineReducers({tvShowsReducer, selectShowReducer});

export default rootReducer;
