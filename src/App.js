import styled from 'styled-components';

import { InputForm } from './atoms/InputForm';
import { CompleteTodo } from './components/CompleteTodo';
import { IncompleteTodo } from './components/IncompleteTodo';

function App() {
  return (
    <StyledWrapper>
      <StyledTitle>Todo List</StyledTitle>
      <InputForm />
      <StyledDiv>
        <IncompleteTodo todo="牛乳を買う" />
        <CompleteTodo todo="勉強をする" />
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
