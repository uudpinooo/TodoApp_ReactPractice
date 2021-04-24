import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const IncompleteTodo = ({ inCompleteTodos, setInCompleteTodos, completeTodos, setCompleteTodos }) => {
  const onClickComplete = (index) => {
    // inCompleteTodosから削除
    const newInCompleteTodos = [...inCompleteTodos]; 
    newInCompleteTodos.splice(index, 1);
    setInCompleteTodos(newInCompleteTodos);

    // 対象のtodoをcompleteTodosへ追加
    const target = inCompleteTodos[index];
    const newCompleteTodos = [...completeTodos, target];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete = (index) => {
    // inCompleteTodosから削除
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(index, 1);
    setInCompleteTodos(newInCompleteTodos);
  }

  return (
    <>
      <StyledDiv>
        <h3>Todos</h3>
        <ul>
          {inCompleteTodos.map((inCompleteTodo, index) => {
            return (
              <StyledLi key={index}>
                {`・${inCompleteTodo}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => onClickComplete(index)}>完了</PrimaryButton>
                  <PrimaryButton onClick={() => onClickDelete(index)}>削除</PrimaryButton>
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

