import { createStore } from 'redux';
import { Reducers } from '../reducers';
import storeSynchronize from 'redux-localstore'
    
export const Store = createStore(Reducers)
storeSynchronize(Store)