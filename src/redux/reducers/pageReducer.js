import { INCREASE_SEARCH, DECREASE_SEARCH, SELECTED_CHAR } from '../actions/actionTypes'

const defaultState = {
    indexSearchApi: 9,
    indexOffset: 0,
    selectedChar: false
}


export const pageReducer = (state = defaultState, action) => {

  switch (action.type) {

    case INCREASE_SEARCH:
        state.indexSearchApi = state.indexSearchApi + 9
        // state.indexOffset = state.indexOffset + 9
        return {
          ...state,
          indexSearchApi: state.indexSearchApi,
          // indexOffset: state.indexOffset
        }
    case DECREASE_SEARCH:
        if(state.indexSearchApi !== 9) {
          state.indexSearchApi = state.indexSearchApi - 9
          // state.indexOffset = state.indexOffset - 9
        }
        return {
          ...state,
          indexSearchApi: state.indexSearchApi,
          // indexOffset: state.indexOffset
        }
    case SELECTED_CHAR:
      return {
        ...state,
        selectedChar: action.char
      }
  
    default:
      return state;
  }
};  