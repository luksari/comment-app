import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import * as actions from '../actions/actions';
import { thumbUp, thumbDown, editComment, removeComment } from '../actions/CommentActions';

import { CommentForm } from './CommentForm';


const CommentContainer = styled.div`
    background: #f5f5f5;
    box-shadow: 1px 1px 5px #999;
    border-radius: 10px;
    color: #2b2b2b;
    padding: 25px;
    display: flex;
    margin: 10px;
    flex-direction: column;
`
const VotesLabel = styled.p`
    width: 100%;
    font-weight: bold;
    color: palevioletred;
`
const TextLabel = styled.p`
    color: #000;
    padding: 5px;
    border-bottom: 1px solid #999;
`
const Button = styled.button`
    border: none;
    background: palevioletred;
    color: #fff;
    padding: 5px;
    width: 45%;
    margin: 5px;
    font-weight: bold;
`

class CommentRaw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditted: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const { THUMB_UP, THUMB_DOWN, EDIT_COMMENT, REMOVE_COMMENT } = actions;
        const { id, thumbUp, thumbDown, editCommentHandler, removeComment } = this.props
        switch (event.target.dataset.action) {
            case THUMB_UP: thumbUp(id); break;
            case THUMB_DOWN: thumbDown(id); break;
            case EDIT_COMMENT: this.editCommentHandler(id); break;
            case REMOVE_COMMENT: removeComment(id); break;
            default: break;
        }
    }

    editCommentHandler(id) {
        const { editComment } = this.props
        this.setState(({ isEditted }) => {
            this.isEditted = !isEditted
        })
        editComment(id);
    }


    render() {
        const { content, votes } = this.props
        const { THUMB_UP, THUMB_DOWN, REMOVE_COMMENT, EDIT_COMMENT } = actions;
        return (
            <CommentContainer>
                {this.state.isEditted ? <CommentForm /> : (<TextLabel>{content}</TextLabel>)}
                <VotesLabel>Votes: {votes}</VotesLabel>
                <div className>
                    <Button onClick={this.handleClick} data-action={REMOVE_COMMENT}>X</Button>
                    <Button onClick={this.handleClick} data-action={EDIT_COMMENT}>Edit</Button>
                </div>
            </CommentContainer>
        )
    }
}


export const Comment = connect(null, {
    thumbUp,
    thumbDown,
    editComment,
    removeComment
})(CommentRaw)
