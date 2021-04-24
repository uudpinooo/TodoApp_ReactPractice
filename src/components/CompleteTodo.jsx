import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";

export const CompleteTodo = ({ inCompleteTodos, setInCompleteTodos, completeTodos, setCompleteTodos }) => {
  const onClickBack = (index) => {
    // completeTodosから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    // 対象のtodoをinCompleteTodosへ追加
    const target = completeTodos[index];
    const newInCompleteTodos = [...inCompleteTodos, target];
    setInCompleteTodos(newInCompleteTodos);
  }

  return (
    <>
      <StyledDiv>
        <h3>Completed</h3>
        <ul>
          {completeTodos.map((completeTodo, index) => {
            return (
              <StyledLi key={index}>
                {`・${completeTodo}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => onClickBack(index)}>戻す</PrimaryButton>
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

