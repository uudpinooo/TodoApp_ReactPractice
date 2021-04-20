import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const IncompleteTodo = (props) => {
  const { todo } = props;

  return (
    <>
    <StyledDiv>
    <h3>Todos</h3>
    <ul>
      <StyledLi>
        <StyledP>{todo}</StyledP>
        <PrimaryButton>完了</PrimaryButton>
        <PrimaryButton>削除</PrimaryButton>
      </StyledLi>
      <StyledLi>
        <StyledP>{todo}</StyledP>
        <PrimaryButton>完了</PrimaryButton>
        <PrimaryButton>削除</PrimaryButton>
      </StyledLi>
    </ul>
    </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px rgba(112, 112, 112, 0.3) solid;
  width: 50vw;
  padding-left: 5rem;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledP = styled.li`
  margin: 0 1rem 0 0;
`;

