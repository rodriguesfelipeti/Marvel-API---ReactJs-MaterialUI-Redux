import { pageReducer } from './pageReducer'
import { paginationReducer } from './paginationReducer'
import { favoritesReducer } from './favoritesReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    pageReducer: pageReducer,
    paginationReducer: paginationReducer,
    favoritesReducer: favoritesReducer
});