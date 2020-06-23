import { pageReducer } from './pageReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    pageReducer: pageReducer
});