import React, {Component}  from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import * as actions from '../actions/actions';
import { thumbUp, thumbDown, editComment, removeComment } from '../actions/CommentActions';

import {CommentForm} from './CommentForm';


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
    constructor(props){
        super(props);
        this.state = {
            isEditted: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        switch(event.target.dataset.action) {
            case actions.THUMB_UP: this.props.thumbUp(this.props.id); break;
            case actions.THUMB_DOWN: this.props.thumbDown(this.props.id); break;
            case actions.EDIT_COMMENT: this.editCommentHandler(this.props.id); break;
            case actions.REMOVE_COMMENT: this.props.removeComment(this.props.id); break;
            default: break;
        }
    }

    editCommentHandler(id){
        this.setState(({ isEditted }) => {
            this.isEditted = !isEditted
        })
        this.props.editComment(id);
    }
    

    render() {
        const {content, votes} = this.props
      return (
        <CommentContainer>
            {this.state.isEditted ? <CommentForm/> : (<TextLabel>{content}</TextLabel>) }
            <VotesLabel>Votes: {votes}</VotesLabel>
            <div>
                <Button onClick={this.handleClick} data-action={actions.THUMB_UP}>+</Button>
                <Button onClick={this.handleClick} data-action={actions.THUMB_DOWN}>-</Button>
                <Button onClick={this.handleClick} data-action={actions.REMOVE_COMMENT}>X</Button>
                <Button onClick={this.handleClick} data-action={actions.EDIT_COMMENT}>Edit</Button>
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
