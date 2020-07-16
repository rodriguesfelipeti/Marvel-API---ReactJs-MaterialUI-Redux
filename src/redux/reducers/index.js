import { pageReducer } from './pageReducer'
import { paginationReducer } from './paginationReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    pageReducer: pageReducer,
    paginationReducer: paginationReducer
});