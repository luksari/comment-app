import React from 'react';
import { Comment } from './Comment'
import { connect } from 'react-redux';
import styled from 'styled-components';

const CommentsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: start;
`

const CommentsListRaw = ({ comments }) => (
    <CommentsContainer>
        {comments.map(comment => (
            <Comment key={comment.id} {...comment}/>
        ))}
    </CommentsContainer>
);

const mapStateToProps = state=>({
    comments: state.comments
});

export const CommentsList = connect(mapStateToProps)(CommentsListRaw)