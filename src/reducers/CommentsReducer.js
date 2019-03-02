import {
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    THUMB_UP,
    THUMB_DOWN
} from '../actions/actions'

export const CommentsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                ...state,
                {
                    id: action.payload.id,
                    content: action.payload.content,
                    votes: 0
                }
            ]
        case REMOVE_COMMENT:
            return state
                .filter(comment => comment.id !== action.payload.id)
        case EDIT_COMMENT:
            return state
                .map((comment) =>
                    comment.id === action.payload.id ? {
                        ...comment,
                        content: action.payload.content
                    } :
                    comment
                )
        case THUMB_UP:
            return state
                .map(comment =>
                    comment.id === action.payload.id ? {
                        ...comment,
                        votes: comment.votes + 1
                    } :
                    comment
                )
        case THUMB_DOWN:
            return state
                .map(comment =>
                    comment.id === action.payload.id ? {
                        ...comment,
                        votes: comment.votes - 1
                    } :
                    comment
                )
        default:
            return state;
    }
};