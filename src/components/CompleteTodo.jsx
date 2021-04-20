import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const CompleteTodo = (props) => {
  const { todo } = props;

  return (
    <>
    <StyledDiv>
    <h3>Completed</h3>
    <ul>
      <StyledLi>
        <StyledP>{todo}</StyledP>
        <PrimaryButton>戻す</PrimaryButton>
      </StyledLi>
      <StyledLi>
        <StyledP>{todo}</StyledP>
        <PrimaryButton>戻す</PrimaryButton>
      </StyledLi>
    </ul>
    </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
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

