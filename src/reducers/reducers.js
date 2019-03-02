import { combineReducers } from 'redux';
import { CommentsReducer } from './CommentsReducer'
import { UsersReducer } from './UsersReducer'


export const AppReducer = combineReducers({
    comments: CommentsReducer,
    users: UsersReducer
});