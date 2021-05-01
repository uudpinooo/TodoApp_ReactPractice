// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 ContextAPI 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

import styled from 'styled-components';
import { InputForm } from './components/InputForm';
import { CompleteTodo } from './components/CompleteTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { Link } from "react-router-dom";

export const TopPage = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Todo List</StyledTitle>
      <InputForm />
      <StyledDiv>
        <IncompleteTodo />
        <CompleteTodo />
      </StyledDiv>
      <StyledLink to="/delete">削除した項目へ</StyledLink>
    </StyledWrapper>
  );
}

// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 Redux 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

// import { useSelector } from "react-redux";
// import styled from 'styled-components';
// import { InputForm } from './components/InputForm';
// import { CompleteTodo } from './components/CompleteTodo';
// import { IncompleteTodo } from './components/IncompleteTodo';
// import { Link } from "react-router-dom";

// export const TopPage = () => {
//   const lists = useSelector(state => state);
//   const inCompleteTodos = lists.incompleteLists;
//   const completeTodos = lists.completeLists;

//   return (
//     <StyledWrapper>
//       <StyledTitle>Todo List</StyledTitle>
//       <InputForm />
//       <StyledDiv>
//         <IncompleteTodo inCompleteTodos={inCompleteTodos} />
//         <CompleteTodo completeTodos={completeTodos} />
//       </StyledDiv>
//       <Link to="/delete">削除した項目へ</Link>
//     </StyledWrapper>
//   );
// }

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

const StyledLink = styled(Link)`
  margin: 3rem 0;
  color: #707070;
  text-decoration: none;
  &:hover {
    color: #c97586;
  }
`;