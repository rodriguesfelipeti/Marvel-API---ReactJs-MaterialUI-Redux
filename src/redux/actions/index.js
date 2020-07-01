import { INCREASE_SEARCH, DECREASE_SEARCH, SELECTED_CHAR } from './actionTypes'

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