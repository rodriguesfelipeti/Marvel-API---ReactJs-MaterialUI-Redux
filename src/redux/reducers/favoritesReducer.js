import { ADD_FAVORITE, REMOVE_FAVORTE } from '../actions/actionTypes'
import { defineState } from 'redux-localstore'

const defaultState = { favorites: [] }
const intialState = defineState(defaultState)('favoritesReducer')

const deleteElemnt = ((item, idRemove) => {
    return item !== idRemove
})

export const favoritesReducer = (state = intialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:  
            return {
                ...state,
                favorites: [...state.favorites, action.char],
            }
        case REMOVE_FAVORTE:    
            const idRemove = action.char.id
            state.favorites = state.favorites.filter( value => deleteElemnt(value.id, idRemove))      
            return state;  
        default: 
            return state;
    }
}
 