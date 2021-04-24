import { useState } from 'react';
import styled from 'styled-components';

import { InputForm } from './atoms/InputForm';
import { CompleteTodo } from './components/CompleteTodo';
import { IncompleteTodo } from './components/IncompleteTodo';

const completeTodos = ["牛乳を買う", "本を読む", "電話する", "部屋を片付ける"];
// const inCompleteTodos = ["勉強する", "洗濯する", "メールを返す", "料理する"];

function App() {
  const [inCompleteTodos, setInCompleteTodos] = useState([]);

  return (
    <StyledWrapper>
      <StyledTitle>Todo List</StyledTitle>
      <InputForm inCompleteTodos={inCompleteTodos} setInCompleteTodos={setInCompleteTodos} />
      <StyledDiv>
        <IncompleteTodo todos={inCompleteTodos}  />
        <CompleteTodo todos={completeTodos} />
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
