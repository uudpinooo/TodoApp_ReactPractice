import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const CompleteTodo = ({ completeTodos }) => {
  const dispatch = useDispatch();
  const onClickBack = (name) => dispatch({ type: "BACK_TODO", payload: name });

  return (
    <>
      <StyledDiv>
        <h3>Completed</h3>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <StyledLi key={index}>
                {`・${todo.name}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => onClickBack(todo.name)}>戻す</PrimaryButton>
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

