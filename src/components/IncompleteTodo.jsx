import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const IncompleteTodo = ({ inCompleteTodos }) => {
  const dispatch = useDispatch();
  const onClickDone = (name) => dispatch({ type: "COMPLETE_TODO", payload: name });
  const onClickDelete = (name) => dispatch({ type: "DELETE_TODO", payload: name });

  return (
    <>
      <StyledDiv>
        <h3>Todos</h3>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <StyledLi key={index}>
                {`・${todo.name}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => onClickDone(todo.name)}>完了</PrimaryButton>
                  <PrimaryButton onClick={() => onClickDelete(todo.name)}>削除</PrimaryButton>
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

