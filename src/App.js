import React from 'react'
import styled from 'styled-components';

import {CommentsList} from './components/CommentsList'
import {CommentForm} from './components/CommentForm'

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 15px;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
`


export const App = () => (
    <AppContainer>
        <CommentForm/>
        <CommentsList/>
    </AppContainer>
)