import { useState } from 'react';
import styled from 'styled-components';

import { InputForm } from './atoms/InputForm';
import { CompleteTodo } from './components/CompleteTodo';
import { IncompleteTodo } from './components/IncompleteTodo';

function App() {
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  return (
    <StyledWrapper>
      <StyledTitle>Todo List</StyledTitle>
      <InputForm inCompleteTodos={inCompleteTodos} setInCompleteTodos={setInCompleteTodos} />
      <StyledDiv>
        <IncompleteTodo
          inCompleteTodos={inCompleteTodos}
          setInCompleteTodos={setInCompleteTodos}
          completeTodos={completeTodos}
          setCompleteTodos={setCompleteTodos}
        />
        <CompleteTodo
          inCompleteTodos={inCompleteTodos}
          setInCompleteTodos={setInCompleteTodos}
          completeTodos={completeTodos}
          setCompleteTodos={setCompleteTodos}
        />
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
