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
                <label>
                        Comment:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit"  value="Submit"/>
              </form>
            </CommentInputContainer>
        )
    }
}


export const CommentForm = connect(null, {
    addComment
})(CommentFormRaw)