import React, {
    Component
} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux'

import { addComment } from '../actions/CommentActions'

const CommentInputContainer = styled.div `
    width: 100%;
    display: flex;
    padding: 25px;
`

const CommentInput = styled.input`
    font-size: 1.8em;
    border: none;
    padding: 0 0 10px 0;
    border-bottom: 2px solid #C55;
    width: 100%;
    :focus{
        outline: 0;
        border-bottom: 4px solid #C55;
    }
`
const SubmitButton = styled.input`
    width: 100%;
    background: #C55;
    color: #FFF;
    border: none;
    padding: 15px;
    font-size: 1.5em;
`

class CommentFormRaw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        this.props.addComment(this.state.value)
        this.setState({value: ''})
        event.preventDefault();
    }
    
    render() {
        return (
            <CommentInputContainer>
              <form onSubmit={this.handleSubmit}>
                 <CommentInput type="text" aria-label="Your comment" aria-required="true" value={this.state.value} onChange={this.handleChange} />                    
                 <SubmitButton type="submit"
                 value="Submit" aria-label="Post comment" aria-required="true" onSubmit={this.onSubmit} />                    
              </form>
            </CommentInputContainer>
        )
    }
}


export const CommentForm = connect(null, {
    addComment
})(CommentFormRaw)