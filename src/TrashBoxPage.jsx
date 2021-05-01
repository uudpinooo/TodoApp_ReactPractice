// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 ContextAPI 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

import { memo } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { DeleteTodo } from "./components/DeleteTodo";

export const TrashBoxPage = memo(() => {
  return (
    <StyledWrapper>
      <StyledTitle>Todo List</StyledTitle>
      <StyledP>削除した項目</StyledP>
      <DeleteTodo />
      <StyledLink to="/">戻る</StyledLink>
    </StyledWrapper>
  );
});

// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 Redux 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

// import { memo } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import styled from 'styled-components';
// import { DeleteTodo } from "./components/DeleteTodo";

// export const TrashBoxPage = memo(() => {
//   const lists = useSelector(state => state);

//   return (
//     <StyledWrapper>
//       <StyledTitle>Todo List</StyledTitle>
//       <StyledP>削除した項目</StyledP>
//       <DeleteTodo />
//       <Link to="/">戻る</Link>
//     </StyledWrapper>
//   );
// });

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
  margin: 3rem 0;
  color: #707070;
  text-decoration: none;
  &:hover {
    color: #c97586;
  }
`;