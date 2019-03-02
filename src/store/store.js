import { createStore } from 'redux';
import { AppReducer } from '../reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(AppReducer, composeWithDevTools());
export default store;