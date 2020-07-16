import { GET_MORE_PAGINATION } from '../actions/actionTypes'

const defaultState = {
    pagination: false
}

export const paginationReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_MORE_PAGINATION: 
            return {
                ...state,
                pagination: !state.pagination,
            };
        default:
            return state;
    }
}