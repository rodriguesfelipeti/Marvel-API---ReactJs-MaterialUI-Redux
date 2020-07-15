import { INCREASE_SEARCH, DECREASE_SEARCH, SELECTED_CHAR, SELECTED_SINGLE_CHAR } from './actionTypes'

export const increaseSearch = () => ({
    type: INCREASE_SEARCH
})

export const deacreaseSearch = value => ({
    type: DECREASE_SEARCH,
    index: value
})
 

export const selectedChar = (char) => ({
  type: SELECTED_CHAR,
  char: char
})

export const selectedSingleChar = (char) => ({
  type: SELECTED_SINGLE_CHAR,
  char: char
})
