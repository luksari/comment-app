import * as actions from './actions';

const {
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    THUMB_UP,
    THUMB_DOWN
} = actions;

export const addComment = content => ({
    type: ADD_COMMENT,
    payload: {
        id: new Date().getTime(),
        content
    }
});

export const removeComment = id => ({
    type: REMOVE_COMMENT,
    payload: {
        id
    }
});
export const editComment = (id, content) => ({
    type: EDIT_COMMENT,
    payload: {
        id,
        content
    }
});
export const thumbUp = id => ({
    type: THUMB_UP,
    payload: {
        id,
    }
});
export const thumbDown = id => ({
    type: THUMB_DOWN,
    payload: {
        id,
    }
});
