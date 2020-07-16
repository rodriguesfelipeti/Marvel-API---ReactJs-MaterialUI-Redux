import { INCREASE_SEARCH, DECREASE_SEARCH, SELECTED_CHAR, PAGE_LOADING, GET_MORE_PAGINATION } from './actionTypes'

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

export const pageLoading = (value) => ({
  type: PAGE_LOADING,
  state: value
})

export const getMorePagination = (boolean) => ({
  type: GET_MORE_PAGINATION,
  state: boolean
})

