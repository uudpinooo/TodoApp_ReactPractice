import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { InputForm } from './atoms/InputForm';
import { CompleteTodo } from './components/CompleteTodo';
import { IncompleteTodo } from './components/IncompleteTodo';

function App() {
  const lists = useSelector(state => state.lists);
  const inCompleteTodos = lists.filter(list => list.isCompleted === false);
  const completeTodos = lists.filter(list => list.isCompleted === true);

  return (
    <StyledWrapper>
      <StyledTitle>Todo List</StyledTitle>
      <InputForm />
      <StyledDiv>
        <IncompleteTodo inCompleteTodos={inCompleteTodos} />
        <CompleteTodo completeTodos={completeTodos} />
      </StyledDiv>
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;
