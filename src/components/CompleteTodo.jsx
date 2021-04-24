import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const CompleteTodo = ({ todos }) => {

  return (
    <>
      <StyledDiv>
        <h3>Completed</h3>
        <ul>
          {todos.map((todo) => {
            return (
              <StyledLi key={todo}>
                {`・${todo}`}
                <StyledBtns>
                  <PrimaryButton>戻す</PrimaryButton>
                </StyledBtns>
              </StyledLi>

            );
          })}
        </ul>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  padding: 0 2rem;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledBtns = styled.div`
  display: flex;
  margin-left: auto;
`;

