import { INCREASE_SEARCH, DECREASE_SEARCH } from './actionTypes'

export const increaseSearch = () => ({
    type: INCREASE_SEARCH
  })

export const deacreaseSearch = value => ({
    type: DECREASE_SEARCH,
    index: value
  })
  