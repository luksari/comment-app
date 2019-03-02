import React, { Component } from 'react'
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import * as actions from '../actions/actions';
import { thumbUp, thumbDown, editComment, removeComment } from '../actions/CommentActions';

import { CommentForm } from './CommentForm';

function setContent(action) {
    const { THUMB_UP, THUMB_DOWN, EDIT_COMMENT, REMOVE_COMMENT } = actions;
    switch (action) {
        case THUMB_UP: return '+';
        case THUMB_DOWN: return '-';
        case EDIT_COMMENT: return 'Edit';
        case REMOVE_COMMENT: return 'X';
        default: break;
    }
}

const CommentContainer = styled.div`
    background: #f5f5f5;
    box-shadow: 1px 1px 5px #999;
    border-radius: 10px;
    color: #2b2b2b;
    display: flex;
    margin: 10px;
    max-width: 650px;
`
const VotesLabel = styled.p`
    width: 100%;
    font-weight: bold;
    font-size: ${({ votes }) => {
        const max = 2;
        return Math.log(votes + max) < max ? Math.log(votes + max) : max;
    }}em;
    color: palevioletred;
    text-align: center;
`
const TextLabel = styled.p`
    color: #000;
    width: 100%;
    padding: 10px;
`
const Button = styled.button`
    position: relative;
    width: 100%;
    display: block;
    background: none;
    border: none;
    color: #2b2b2b;
    font-size: 1.3em;
    padding: 5px;
    font-weight: bold;
    :hover{
        ::after{
            opacity: 1;
        }
    }
    ::after {
        content: '${(props) => setContent(props['data-action'])}';
        color: #fff;
        position: absolute;
        border-radius: 10px;
        top: 0;
        left: 0;
        z-index: 0;
            padding: 5px;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: palevioletred;
        will-change: opacity;
        transition: opacity .1s linear;
        transform: translateZ(0)
    }
`
const FunctionalitiesContainer = styled.div`
    position: relative;
    height: 100%;
    min-width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid #999;
    padding: 10px;
    ${props =>
        props.horizontal &&
        css`
            flex-direction: row;
            border-right: none;
            align-items: flex-start;
        `};
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
        const { id, thumbUp, thumbDown, removeComment } = this.props
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
                <FunctionalitiesContainer>
                    <Button onClick={this.handleClick} data-action={THUMB_UP}>+</Button>
                    <VotesLabel votes={votes}>{votes}</VotesLabel>
                    <Button onClick={this.handleClick} data-action={THUMB_DOWN}>-</Button>
                </FunctionalitiesContainer >
                {this.state.isEditted ? <CommentForm /> : (<TextLabel>{content}</TextLabel>)}
                <FunctionalitiesContainer horizontal>
                    <Button onClick={this.handleClick} data-action={EDIT_COMMENT}>Edit</Button>
                    <Button onClick={this.handleClick} data-action={REMOVE_COMMENT}>X</Button>
                </FunctionalitiesContainer>

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
