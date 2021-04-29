import { useSelector } from "react-redux";
import styled from 'styled-components';
import { DeleteTodo } from "./components/DeleteTodo";

export const TrashBoxPage = () => {
  const lists = useSelector(state => state);

  return (
    <StyledWrapper>
      <StyledTitle>Todo List</StyledTitle>
      <StyledP>削除した項目</StyledP>
      <DeleteTodo />
      <a href="">戻る</a>
    </StyledWrapper>
  );
}

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
