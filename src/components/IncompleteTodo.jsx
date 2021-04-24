import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const IncompleteTodo = ({ todos }) => {

  return (
    <>
      <StyledDiv>
        <h3>Todos</h3>
        <ul>
          {todos.map((todo) => {
            return (
              <StyledLi key={todo}>
                {`・${todo}`}
                <StyledBtns>
                  <PrimaryButton>完了</PrimaryButton>
                  <PrimaryButton>削除</PrimaryButton>
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
  border-right: 1px rgba(112, 112, 112, 0.3) solid;
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

